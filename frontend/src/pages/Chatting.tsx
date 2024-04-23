import React, { useState } from "react";
import axios from "axios"; // Import axios

// Define the response data type
interface ResponseData {
  model: string;
  created_at: string;
  response: string;
  done: boolean;
}

const Chatting: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState<ResponseData[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.post<any>(
        "http://localhost:11434/api/generate",
        {
          model: "medllama2",
          prompt: prompt,
          stream: false,
        }
      );

      const responseData = response.data;
      const apiResponse = responseData.response;
      console.log(responseData);
      console.log(apiResponse);
      setResponses(apiResponse);
    } catch (error) {
      console.error("Error fetching API response:", error);
    }
  };

  return (
    <div>
      <input
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt"
      />
      <button onClick={fetchData}>Fetch Data</button>
      {responses.map((response, index) => (
        <div key={index}>
          <h2>Response {index + 1}:</h2>
          <p>{response.response}</p>
        </div>
      ))}
    </div>
  );
};

export default Chatting;
