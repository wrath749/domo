import { useState } from "react";
import axios from "axios";

function Chat() {
  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleClick = async () => {
    // Define the predefined response based on the input message
    const response = await axios.post("http://localhost:11434/api/chat", {
      model: "medllama2",
      prompt: prompt,
      stream: false,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const responseData = response.data.message.content;
    console.log(responseData);
    setResponse(responseData);
    setPrompt("");

    // Clear the input text
  };

  // const handleKeyPress = (e: { key: string }) => {
  //   if (e.key === "Enter") {
  //     handleClick();
  //   }
  //   setPrompt("");
  // };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col">
      {/* Chat header */}
      <div className="bg-gray-900 py-4 px-6 flex items-center justify-between">
        <h1 className="text-lg font-bold text-white">VaidAI</h1>
      </div>

      {/* Chat area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {/* Display input message */}
        {prompt && (
          <div className="flex justify-end mb-4">
            <div className="max-w-xs px-4 py-2 rounded-lg bg-blue-500 text-white">
              {prompt}
            </div>
          </div>
        )}
        {/* Display response message */}
        <div className="flex justify-start mb-4">
          <div className="max-w-xs px-4 py-2 rounded-lg bg-gray-700 text-white">
            {response}
          </div>
        </div>
      </div>

      {/* Input area */}
      <div className="bg-gray-900 py-4 px-6 flex items-center justify-between">
        <input
          type="text"
          value={prompt}
          placeholder="Type a message..."
          className="px-4 py-2 rounded-md w-2/3 bg-gray-800 text-white focus:outline-none"
          onChange={(e) => setPrompt(e.target.value)}
          // onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;
