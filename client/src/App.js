import ChatBox from "./components/chatBox/ChatBox";
import Sidebar from "./components/sidebar/Sidebar";

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
        {/* <Sidebar /> */}

        <ChatBox />
      </div>
    </>
  );
}

export default App;
