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
  createTodo: async ({ todo }) => {
    try {
      return await Todo.create({
        title: todo.title,
        done: false,
      });
    } catch (error) {
      throw new Error("Title is required");
    }
  },
  completeTodo: async ({ id }) => {
    try {
      const todo = await Todo.findByPk(id);
      todo.done = true;
      await todo.save();
      return todo;
    } catch (error) {
      throw new Error("Id is required");
    }
  },
  deleteTodo: async ({ id }) => {
    try {
      const todos = await Todo.findAll({
        where: { id },
      });
      await todos[0].destroy();
      return true;
    } catch (error) {
      throw new Error("Id is required");
      return false;
    }
  },
};
