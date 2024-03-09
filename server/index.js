// hosting server on port 5000
const socketIO = require("socket.io");
const app = require("express")();
const http = require("http");
const path = require("path");

const server = http.createServer(app);
server.listen(5000, () => {
  console.log("Server running on port 5000");
});

const io = socketIO(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = process.env.PORT || 5000;

app.use("/", require(path.join(__dirname, "routes/main.js")));

io.on("connection", (socket) => {
  console.log(` ${socket.id} connected`);
  socket.on("sendMessage", (data) => {
    const temp = { ...data, userType: "receiver" };
    // console.log(temp);
    socket.broadcast.emit("receiveMessage", temp);
  });
});
