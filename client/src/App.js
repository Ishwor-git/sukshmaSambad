// import ChatBox from "./components/chatBox/ChatBox";
// import Sidebar from "./components/sidebar/Sidebar";

import ChatBox from "./components/chatBox";

function App() {
  return (
    <>
      <div
        className="app"
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ChatBox />
        {/* <Sidebar /> */}

        {/* <ChatBox /> */}
      </div>
    </>
  );
}

export default App;
