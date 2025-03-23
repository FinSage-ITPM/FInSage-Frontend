"use client";
import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import { IoArrowBackOutline, IoSend } from "react-icons/io5";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;
    const newMessage = { text: input, sender: "user" };
    setMessages([...messages, newMessage, { text: "Generating response...", sender: "bot" }]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev.slice(0, -1),
        {
          text: `• Lorem Ipsum is simply dummy text of the printing and typesetting industry.
• Lorem Ipsum has been the industry's standard dummy text since the 1500s.
• It has survived not only five centuries, but also the leap into electronic typesetting.
• Popularized in the 1960s with the release of Letraset sheets.`,
          sender: "bot",
        },
      ]);
    }, 1500);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-black">
      {/* Sidebar */}
      <div className="w-1/4 bg-zinc-900 text-white p-5 flex flex-col">
        <div className="flex items-center space-x-2 text-2xl font-bold text-orange-500">
          <IoArrowBackOutline className="text-lg" />
          <span>FinSage</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col justify-between bg-black p-5">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-white font-semibold">
            <span className="text-orange-500">Personalized</span> Financial{" "}
            <span className="text-orange-500">Guidance</span>, Just a Chat Away!
          </h1>
          <FiSettings className="text-white text-2xl cursor-pointer" />
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto my-5 space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`${
                  msg.sender === "user"
                    ? "bg-orange-500 text-white"
                    : "bg-blue-500 text-white"
                } rounded-lg p-3 max-w-lg`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Field */}
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-zinc-800 text-white focus:outline-none"
            placeholder="Ask FinSage"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-orange-500 rounded-lg text-white"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}
