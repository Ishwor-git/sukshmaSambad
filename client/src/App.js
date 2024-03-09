// import ChatBox from "./components/chatBox/ChatBox";
// import Sidebar from "./components/sidebar/Sidebar";

import ChatBox from "./components/chatBox";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

function App() {
  return (
    <>
      <div className=" w-screen h-screen flex flex-col">
        <Header />
        <div className=" flex flex-row h-full w-full">
          <Sidebar />
          <ChatBox />
        </div>
      </div>
    </>
  );
}

export default App;
