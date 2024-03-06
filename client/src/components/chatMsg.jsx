import React from "react";

const ChatMsg = () => {
  return (
    <div className=" w-fit min-w-40 max-w-80 mx-3 my-2 p-2 flex flex-col ">
      <div className="w-full bg-stone-400 rounded-t-lg text-xs text- flex flex-row items-center justify-between box-border">
        <p className="text-gray-200 pl-2">Username</p>
        <p className="text-gray-200 pr-2">Time</p>
      </div>
      <div className="w-full bg-stone-400 rounded-b-lg flex flex-col">
        <p className="text-white px-2 pt-0.5 pb-1">Lorem ipsum dolor</p>
      </div>
    </div>
  );
};

export default ChatMsg;
