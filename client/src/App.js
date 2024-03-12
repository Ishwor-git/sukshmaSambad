import ChatBox from "./components/chatBox";
import Header from "./components/header";
import Innitial from "./components/innitial";
import Landing from "./components/landing";
import Sidebar from "./components/sidebar";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [username, setUsername] = useState("");
  return (
    <>
      <Innitial uploadUsername={setUsername} />
      <div className=" w-screen h-screen flex flex-col z-0">
        <Header />
        <div className=" flex flex-row h-full w-full">
          <Sidebar />
          <Router>
            <Routes>
              <Route path="/home" element={<Landing />} />
              <Route path="/" element={<ChatBox username={username} />} />
            </Routes>
          </Router>
          {/* <ChatBox /> */}
        </div>
      </div>
    </>
  );
}

export default App;
