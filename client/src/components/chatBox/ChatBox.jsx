import React, { useState } from "react";
import ChatMsg from "../message/ChatMsg";
import "./ChatBox.css";
import InputMsg from "../inputMsg/InputMsg";

function ChatBox() {
  const [messages, setMessages] = useState([]); // [ {username: "user1", time: "12:00", content: "Hello", userType: "receiver"}, {username: "user2", time: "12:05", content: "Hi", userType: "sender"}
  const handleSubmitMsg = (msgObj) => {
    setMessages([...messages, msgObj]);
  };
  return (
    <>
      <div className="container-chatbox">
        <ChatMsg
          username="Sana"
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
