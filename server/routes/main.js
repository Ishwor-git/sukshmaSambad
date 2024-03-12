const express = require("express");
const router = express.Router();
const path = require("path");
const userInfoFunc = require(path.join(__dirname, "../data/userInfo.js"));

router.get("/api/userInfo/checkUser", (req, res) => {
  const user = req.query.userName;
  const result = userInfoFunc.checkUser(user);
  res.send({ result });
});

router.get("/api/userInfo/addUser", (req, res) => {
  const user = req.query.userName;
  userInfoFunc.addUser(user);
  res.sendStatus(200);
});

router.get("/api/userInfo/showAllUsers", (req, res) => {
  const users = userInfoFunc.showAllUsers();
  res.send({ users: Array.from(users) });
});

module.exports = router;
