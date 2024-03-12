import React from "react";
import axios from "axios";
import { useState } from "react";

const Innitial = ({ uploadUsername }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [labelPass, setLabelPass] = useState({ value: "", theme: "" });
  const [labelUser, setLabelUser] = useState({ value: "", theme: "" });
  // const [validUser, setValidUser] = useState(null);
  const [hidePopup, setHidePopup] = useState("");

  const getUsername = async (newUsername) => {
    const responce = await axios
      .get(
        `http://localhost:5000/api/userInfo/checkUser?userName=${newUsername}`
      )
      .catch((error) => {
        console.log(error);
      });
    // setValidUser(!responce.data.result);
    console.log(responce.data, !responce.data.result, newUsername);
    return !responce.data.result;
  };

  const postUsername = async (newUsername) => {
    const responce = await axios
      .get(`http://localhost:5000/api/userInfo/addUser?userName=${newUsername}`)
      .catch((error) => {
        console.log(error);
      });
    console.log(responce);
  };

  const handleCheckPass = (password1, password2) => {
    if ((password1 === "") | (password2 === "")) {
      setLabelPass({ value: "", theme: "" });
    } else if (password1 === password2) {
      setLabelPass({ value: "Password match", theme: "text-emerald-600" });
    } else {
      setLabelPass({ value: "Password do not match", theme: "text-rose-600" });
    }
  };

  const handleSubmit = async () => {
    const validUser = await getUsername(username);
    console.log(validUser);
    if (validUser) {
      await postUsername(username);
      setHidePopup("hidden");
    } else {
      setLabelUser({ value: "Username already taken", theme: "text-rose-600" });
    }
  };

  return (
    <div
      className={`${hidePopup} w-screen h-screen fixed z-20 bg-white backdrop-blur bg-opacity-10 flex items-center justify-center`}
    >
      <div className=" w-1/3 h-96 bg-white bg-opacity-30 rounded-xl sshadow p-6 flex flex-col justify-center items-center">
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Innitial;
