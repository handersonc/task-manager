
## Introduction
Graphql with NodeJs, PostgreSQL and Prisma ORM

[Prisma](https://www.prisma.io/) is an open-source ORM for Nodejs and TypeScript.

## Running the app
    $ npm i

    $ npm start
 

**Operation**

```gql
query ExampleQuery {
  enrollment {
    id
    email
    fullName
    dept
  }
}
```


**Response**

```json
{
  "data": {
    "enrollment": [
      {
        "id": "1",
        "email": "ada@telixia.com",
        "fullName": "Ada Eze",
        "dept": "Software Engineering"
      },
      {
        "id": "2",
        "email": "musa@telixia.com",
        "fullName": "Musa Bashir",
        "dept": "Data Engineering"
      }
    ]
  }
}
```

![GraphQL Playground - Query and Result](graphql-playground-03.png?raw=true)


To test the registerStudent mutation, enter the following mutation:

**Operation**

```gql
mutation {
  registerStudent(
    email: "contact@telixia.com",
    fullName: "Sammy",
    ) {
    id
    email
    fullName
    dept
    enrolled
  }
}
```
 
 **Response**

 ```json
 {
  "data": {
    "registerStudent": {
      "id": "4",
      "email": "contact@telixia.com",
      "fullName": "Sammy",
      "dept": null,
      "enrolled": false
    }
  }
}
```


Note: You can choose which fields to return from the mutation by adding or removing fields within the curly braces following **registerStudent**. For example, if you wanted to only return the id and email you could simple omit the fullName, dept and enrolled field.


You have successfully created and tested the GraphQL server. In the next step, you will create a GitHub repository for the project.


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

## Testing

### Create Student 

```gql
mutation {
  registerStudent(email: "Olivia@veritext.com", fullName: "Olivia Catherine", dept: "Backend Engineer") {
    id
    fullName
    dept
    email
    enrolled

  }
}
```

```
### Enroll Student

```gql
mutation {
  enroll(id: 2) {
    id
    fullName
    email
    dept
    enrolled
  }
}
```

### Query

```gql
query Query {
  enrollment {
    id
    email
    fullName
    dept
    enrolled
  }
}
```
