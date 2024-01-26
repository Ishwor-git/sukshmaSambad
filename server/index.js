// hosting server on port 5000
const io = require("socket.io")(5000, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log(` ${socket.id} connected`);
  socket.on("sendMessage", (data) => {
    const temp = { ...data, userType: "receiver" };
    console.log(temp);
    socket.broadcast.emit("receiveMessage", temp);
  });
});
