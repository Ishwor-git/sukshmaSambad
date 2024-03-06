import React from "react";
import ChatMsg from "./chatMsg";
// import ChatMsg from "./message/ChatMsg";

const ChatBox = () => {
  return (
    <div className=" w-full h-5/6 bg-black flex flex-col items-center">
      <div className="w-11/12 h-4/6 bg-slate-300 rounded-t-lg mt-4 flex flex-col">
        <ChatMsg />
      </div>
      <div className="w-11/12 h-10 bg-slate-500 rounded-b-lg mb-8 flex flex-row items-center justify-between box-border">
        <input
          className="w-full pl-3 pr-6 py-1 text-white bg-slate-500 focus:outline-none bg-opacity-0"
          type="text"
          placeholder="Type your message here"
        />
        <button className=" px-8 py-1 h-full bg-emerald-600 rounded-br-lg text-white box-border">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
