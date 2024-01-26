import React, { useState, useEffect } from "react";
import ChatMsg from "../message/ChatMsg";
import "./ChatBox.css";
import InputMsg from "../inputMsg/InputMsg";
import io from "socket.io-client";

const socket = io.connect("http://localhost:5000");
const username = prompt("Enter your username: ");

function ChatBox() {
  const [messages, setMessages] = useState([]); // [ {username: "user1", time: "12:00", content: "Hello", userType: "receiver"}]
  useEffect(() => {
    socket.on("receiveMessage", (msgObj) => {
      setMessages([...messages, msgObj]);
    });
  }, [messages]);
  const handleSubmitMsg = (msgObj) => {
    socket.emit("sendMessage", msgObj);
    setMessages([...messages, msgObj]);
  };

  return (
    <>
      <div className="container-chatbox">
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
      <InputMsg onSubmitMsg={handleSubmitMsg} user={username} />
    </>
  );
}

export default ChatBox;
