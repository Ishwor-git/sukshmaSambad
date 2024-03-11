import React from "react";
import { useState, useEffect } from "react";

const Innitial = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [labelPass, setLabelPass] = useState({ value: "", theme: "" });
  const [labelUser, setLabelUser] = useState({ value: "", theme: "" });

  const handleCheckPass = (password1, password2) => {
    if ((password1 === "") | (password2 === 0)) {
      setLabelPass({ value: "", theme: "" });
    } else if (password1 === password2) {
      setLabelPass({ value: "password match", theme: "text-emerald-500" });
    } else {
      setLabelPass({ value: "password do not match", theme: "text-rose-600" });
    }
  };

  return (
    <div className=" w-screen h-screen fixed z-20 bg-white backdrop-blur bg-opacity-10 flex items-center justify-center">
      <div className=" w-1/3 h-96 bg-white bg-opacity-30 rounded-xl shadow p-6 flex flex-col justify-center items-center">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          type="text"
          className=" w-full mx-2 mt-2 mb-0 p-2 rounded-lg text-lg focus:outline-none"
        />
        <label
          htmlFor="username"
          className={` text-center w-full h-4 text-sm font-thin mx-2 px-2 ${labelUser.theme}`}
        >
          {labelUser.value}
        </label>
        <input
          placeholder="Password"
          value={password}
          onChange={(e) => {
            let updatedPass = e.target.value;
            setPassword(updatedPass);
            handleCheckPass(updatedPass, rePassword);
          }}
          type="password"
          className=" w-full m-2 p-2 rounded-lg text-lg focus:outline-none"
        />
        <input
          placeholder="Re-enter your password"
          value={rePassword}
          onChange={(e) => {
            let updatedPass = e.target.value;
            setRePassword(updatedPass);
            handleCheckPass(updatedPass, password);
          }}
          type="password"
          className=" w-full m-2 p-2 rounded-lg text-lg focus:outline-none"
        />
        <label
          htmlFor="username"
          className={` text-center w-full h-4 text-sm font-thin mx-2 px-2 ${labelPass.theme}`}
        >
          {labelPass.value}
        </label>
        <button
          type="submit"
          className=" py-3 px-4 rounded-lg m-4 w-32 border-2 font-semibold border-emerald-500 text-emerald-500   hover:bg-emerald-500 hover:text-white transition-all duration-300"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Innitial;
