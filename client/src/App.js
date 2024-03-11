// import ChatBox from "./components/chatBox/ChatBox";
// import Sidebar from "./components/sidebar/Sidebar";

import ChatBox from "./components/chatBox";
import Header from "./components/header";
import Innitial from "./components/innitial";
import Landing from "./components/landing";
import Sidebar from "./components/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Innitial />
      <div className=" w-screen h-screen flex flex-col z-0">
        <Header />
        <div className=" flex flex-row h-full w-full">
          <Sidebar />
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/chatroom" element={<ChatBox />} />
            </Routes>
          </Router>
          {/* <ChatBox /> */}
        </div>
      </div>
    </>
  );
}

export default App;
