const { buildSchema } = require("graphql");

module.exports = buildSchema(`
type User {
    name: String!
    email: String!
    age: Int!
}

type TestType {
    count: Int!
    users: [User!]!
}

input UserInput {
    name: String!
    email: String!
}

input TodoInput {
    title: String!
}

type Todo {
    id: ID!
    title: String!
    done: Boolean!
    createdAt: String
    updatedAt: String
}

type Query {
    hello: TestType!
    random(min: Int!, max: Int!, count: Int!): [Float!]!
    addTestUser(user: UserInput!): User!
    getTodos: [Todo!]!
    createTodo(todo: TodoInput!): Todo!
    completeTodo(id: ID!): Todo!
}
`);
