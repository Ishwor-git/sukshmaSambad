import React from "react";

const ChatMsg = ({ key, username, time, content, userType = "sender" }) => {
  const theme = {
    sender: {
      bg: "bg-emerald-400",
      align: "self-end",
    },
    receiver: {
      bg: "bg-stone-400",
      align: "self-start",
    },
  };
  return (
    <div
      className={`w-fit min-w-40 ${theme[userType].bg} max-w-80 ${theme[userType].align} mx-3 my-2 rounded-lg flex flex-col `}
    >
      <div className="w-full text-xs text- flex flex-row items-center justify-between box-border">
        <p className="text-gray-200 pl-2">{username}</p>
        <p className="text-gray-200 pr-2">{time}</p>
      </div>
      <div className="w-full">
        <p className="text-white px-2 pt-0.5 pb-1">{content}</p>
      </div>
    </div>
  );
};

export default ChatMsg;
