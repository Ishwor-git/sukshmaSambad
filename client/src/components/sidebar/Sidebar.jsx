import "./sidebar.css";
// import "https://unpkg.com/boxicons@2.1.4/dist/boxicons.js";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="links home-link">
          <box-icon name="home" />
          <span className="link-text">Home</span>
        </div>
        <div className="links rooms-link">
          <box-icon name="chat" />
          <span className="link-text">Chat rooms</span>
          <box-icon
            type="solid"
            className="dropdown-icon"
            name="chevrons-right"
          />
        </div>
        <div className="chatroom-list">
          <div className="chats chatroom-item">
            <box-icon name="globe" />
            <span className="link-text">Global</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
