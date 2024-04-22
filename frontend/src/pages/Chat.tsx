import { useState } from "react";

function Chat() {
  const [text, setText] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleClick = () => {
    // Implement your logic for handling click here
    // For now, let's just add the input text to messages array
    setMessages([...messages, text]);
    setText("");
  };

  const handleKeyPress = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div className="bg-[#20202B] min-h-screen flex flex-col justify-between items-center">
      <div className="flex flex-col justify-end items-start h-full w-full overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className="text-white mb-2">
            {message}
          </div>
        ))}
      </div>
      <div className="mb-4 flex justify-center items-center w-screen">
        <input
          type="text"   
          value={text}
          placeholder="enter the prompt"
          className="px-4 py-2 rounded-md w-80 bg-[#2D2D3A] text-white"
          onChange={(e) => setText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md ml-2 hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Chat;
