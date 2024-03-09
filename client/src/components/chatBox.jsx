import React, { useState, useEffect } from "react";
import ChatMsg from "./chatMsg";
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");
const username = prompt("Enter your username: ");
const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    socket.on("receiveMessage", (msgObj) => {
      setMessages([...messages, msgObj]);
    });
  }, [messages]);

  const handleSubmitMsg = (msgObj) => {
    socket.emit("sendMessage", msgObj);
    setMessages([...messages, msgObj]);
  };
  const handleSubmitButton = (e) => {
    e.preventDefault();
    setMsg("");
    const date = new Date();
    console.log(username);
    const msgObj = {
      username: username,
      time: `${date.getHours()}:${date.getMinutes()}`,
      content: msg,
      userType: "sender",
    };
    handleSubmitMsg(msgObj);
  };
  return (
    <div className=" w-full h-5/6 bg-black flex flex-col items-center">
      <div className="w-11/12 h-4/6 bg-slate-300 rounded-t-lg mt-4 flex flex-col-reverse">
        <div className=" flex flex-col overflow-y-auto mb-2">
          {messages.map((msgObj, index) => (
            <ChatMsg
              key={index}
              username={msgObj.username}
              time={msgObj.time}
              content={msgObj.content}
              userType={msgObj.userType}
            />
          ))}
        </div>
      </div>
      <div className="w-11/12 h-10 bg-slate-500 rounded-b-lg mb-8 flex flex-row items-center justify-between box-border">
        <input
          className="w-full pl-3 pr-6 py-1 text-white bg-slate-500 focus:outline-none bg-opacity-0"
          type="text"
          placeholder="Type your message here"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button
          className=" px-8 py-1 h-full bg-emerald-600 rounded-br-lg text-white box-border"
          onClick={handleSubmitButton}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
