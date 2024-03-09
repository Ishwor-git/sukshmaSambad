import React from "react";
import HomeSvg from "../assets/icons/home.svg";
import ChatRoom from "../assets/icons/rooms.svg";

const Sidebar = () => {
  const card = (icon, name) => {
    return (
      <div className="flex flex-row cursor-pointer ml-4 justify-start items-center w-5/6 h-12 my-1 p-2  rounded-lg hover:bg-gray-300">
        <img src={icon} alt="home" className="w-8 h-8" />
        <span className=" font-semibold text-lg ml-2">{name}</span>
      </div>
    );
  };
  return (
    <div className=" bg-zinc-200 w-1/4">
      <div className="flex flex-col mt-10 w-full">
        {card(HomeSvg, "Dashboard")}
        {card(ChatRoom, "Chat Room")}
      </div>
    </div>
  );
};

export default Sidebar;
