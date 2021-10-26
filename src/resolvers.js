//* node-graphql/src/resolvers.js

const { prisma } = require("./database.js");

const User = {
  id: (parent, args, context, info) => parent.id,
  email: (parent) => parent.email,
  fullName: (parent) => parent.fullName,
};

const Task = { 
  id: (parent, args, context, info) => parent.id,
  title: (parent) => parent.title,
  status: (parent) => parent.status,
  asigned: (parent) => parent.asigned,
}

const Query = {
  users: (parent, args) => {
    return prisma.user.findMany({});
  },
  user: (parent, args) => {
    return prisma.user.findFirst({
      where: { id: Number(args.id) },
    });
  },
  tasks: (parent, args) => {
    return prisma.task.findMany({});
  },
};

const Mutation = {
  createUser: (parent, args) => {
    return prisma.user.create({
      data: {
        email: args.email,
        fullName: args.fullName,
      },
    });
  },
  asignTask: (parent, args) => {
    return prisma.task.update({
      where: { id: Number(args.id) },
      data: {
        userId: args.userId,
      },
    });
  },
  createTask: (parent, args) => {
    return prisma.task.create({
      data: {
        title: args.title,
        status: args.status,
      }
    })
  }
};

const resolvers = { Task, User, Query, Mutation };

module.exports = {
  resolvers,
};
