const express = require("express");
const path = require("path");
const { graphql } = require("graphql");
require("dotenv").config();
const sequelize = require("./utils/database");
const schema = require("./graphql/schema");
const rootValue = require("./graphql/resolver");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

const source = `{ 
    createTodo(todo: {title: "Learn Node.js"}) {
      title id createdAt
    }
   }`;

graphql({ schema, source, rootValue }).then((response) => {
  console.log(response);
});

app.use((req, res, next) => {
  res.sendFile("/index.html");
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (error) {
    console.log(error);
  }
}

start();
