//* node-graphql/src/schema.js

const { gql } = require("apollo-server");

const typeDefs = gql`
  type Task {
    id: ID!
    title: String
    status: String!
    asigned: User!
  }

  type User {
    id: ID!
    email: String
    fullName: String!
    tasks: [Task]
  }

  type Query {
    users: [User!]
    user(id: ID!): User
    tasks: [Task!]!
  }

  type Mutation {
    createUser(email: String!, fullName: String!): User!
    asignTask(id: ID!, userId: ID!): Task
    createTask(title: String!, status: String!): Task!
  }
`;
module.exports = {
  typeDefs,
};
