import React, { useState } from "react";
import "./InputMsg.css";

function InputMsg({ onSubmitMsg, user }) {
  const [msg, setMsg] = useState("");
  const handleSubmitButton = (e) => {
    e.preventDefault();
    setMsg("");
    const date = new Date();
    console.log(user);
    const msgObj = {
      username: user,
      time: `${date.getHours()}:${date.getMinutes()}`,
      content: msg,
      userType: "sender",
    };
    onSubmitMsg(msgObj);
  };

  return (
    <>
      <form className="container-msg-imput" onSubmit={handleSubmitButton}>
        <input
          className="msg-input"
          type="text"
          placeholder="Type your message here"
          value={msg || ""}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="msg-send-btn" type="submit">
          Send
        </button>
      </form>
    </>
  );
}

export default InputMsg;
