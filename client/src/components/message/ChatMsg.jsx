import React from "react";
import "./ChatMsg.css";

function ChatMsg(props) {
  return (
    <>
      <div className={`chat-msg ${props.userType}-chat-msg`}>
        <div className={"chat-msg-header "}>
          <div className="chat-msg-user">{props.username}</div>
          <div className="chat-msg-time">{props.time}</div>
        </div>
        <div className="chat-msg-content">{props.content}</div>
      </div>
    </>
  );
}

export default ChatMsg;
