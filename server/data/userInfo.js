users = new Set();
users.add("user1");
users.add("user2");
users.add("user3");

// console.log(users);

functions = {
  checkUser: (user) => {
    return users.has(user);
    // return users.includes(user);
  },
  addUser: (user) => {
    users.add(user);
  },
  showAllUsers: () => {
    return users;
  },
};

module.exports = functions;
