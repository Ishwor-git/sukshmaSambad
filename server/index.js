// hosting server on port 5000
const io = require("socket.io")(5000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("send-message", (msgObj) => {
    console.log(msgObj.content);
  });
});
