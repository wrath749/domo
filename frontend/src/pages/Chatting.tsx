import React, { useState, useEffect } from "react";
import axios from "axios";

interface Message {
  text: string;
  sender: "user" | "bot";
}

function Chatting() {
  const [prompt, setPrompt] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const sendMessage = async () => {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "medllama2",
      prompt: prompt,
      stream: false,
    });

    const responseData = response.data.response;
    setMessages([
      ...messages,
      { text: prompt, sender: "user" },
      { text: responseData, sender: "bot" },
    ]);
    setPrompt("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && prompt.trim() !== "") {
      sendMessage();
    }
  };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="bg-slate-900 py-4 px-6 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        <h1 className="text-lg font-bold text-white">VaidAI</h1>
      </div>

      <div
        id="chat-container"
        className="flex-1 p-4 overflow-y-auto mt-16"
        style={{ flex: "1 1 auto" }}
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex justify-${
              message.sender === "user" ? "end" : "start"
            } mb-4 transition-opacity ease-in-out duration-300`}
          >
            {message.sender === "user" ? (
              <div className="max-w-xl px-4 py-2 rounded-lg bg-blue-500 text-white opacity-100">
                {message.text}
              </div>
            ) : (
              <div className="max-w-xl px-4 py-2 rounded-lg bg-gray-700 text-white opacity-100">
                {message.text}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-slate-900 py-4 px-6 flex items-center justify-between fixed bottom-0 left-0 w-full">
        <input
          type="text"
          value={prompt}
          placeholder="Type a message..."
          className="px-4 py-2 rounded-md w-2/3 bg-gray-800 text-white focus:outline-none"
          onChange={(e) => setPrompt(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatting;
