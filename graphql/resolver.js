const Todo = require("../models/todoModel");

const users = [
  {
    name: "Igor",
    email: "igor@test.com",
    age: 30,
  },
  {
    name: "John",
    email: "john@test.com",
    age: 35,
  },
];

module.exports = {
  hello: () => ({
    count: Math.trunc(Math.random() * 10),
    users,
  }),
  random: ({ min, max, count }) => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      const random = Math.random() * (max - min) + min;
      arr.push(random);
    }
    return arr;
  },
  addTestUser: ({ user: { name, email } }) => {
    const user = { name, email, age: Math.ceil(Math.random() * 100) };
    users.push(user);
    return user;
  },
  getTodos: async () => {
    try {
      return await Todo.findAll();
    } catch (error) {
      throw new Error("Fetch todos is not available");
    }
  },
};
