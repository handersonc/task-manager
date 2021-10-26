
## Introduction
Graphql with NodeJs, PostgreSQL and Prisma ORM

[Prisma](https://www.prisma.io/) is an open-source ORM for Nodejs and TypeScript.

## Running the app
    $ npm i

    $ npm start
 


## Setting Up Prisma with PostgreSQL

    $ docker-compose up -d
 
You can verify that the database server is running with the following command:

    $ docker ps
 

With the PostgreSQL container running, you can now create your Prisma setup. Run the following command from the Prisma CLI:

    $ npx prisma init

## Prisma Migrate
 
    $ npx prisma migrate dev --name "init" 
 
    $ npm start 

    $ npx prisma migrate dev
