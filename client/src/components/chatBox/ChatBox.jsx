import React, { useState } from "react";
import ChatMsg from "../message/ChatMsg";
import "./ChatBox.css";
import InputMsg from "../inputMsg/InputMsg";
import io from "socket.io-client";

function ChatBox() {
  const socket = io("http://localhost:5000");
  socket.on("connect", () => {
    console.log(`Connected to server with id: ${socket.id}`);
  });
  const [messages, setMessages] = useState([]); // [ {username: "user1", time: "12:00", content: "Hello", userType: "receiver"}]
  const handleSubmitMsg = (msgObj) => {
    socket.emit("send-message", (msgObj) => {
      console.log(msgObj);
    });
    setMessages([...messages, msgObj]);
  };

  return (
    <>
      <div className="container-chatbox">
        <ChatMsg
          username="user"
          time="12:00"
          content="Hello"
          userType="receiver"
        />
        <ChatMsg username="Esor" time="12:05" content="Hi" userType="sender" />
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
      <InputMsg onSubmitMsg={handleSubmitMsg} />
    </>
  );
}

export default ChatBox;
