## Description

Starter kit project made with [Nest](https://github.com/nestjs/nest) and [nestjs-sequelize-typescript](https://github.com/kentloog/nestjs-sequelize-typescript) that demonstrate CRUD use and e2e tests.

### Technologies implemented:

-   [sequelize-typescript](https://github.com/RobinBuschmann/sequelize-typescript) (ORM) + [MySQL](https://www.mysql.com/)
-   [Jest](https://jestjs.io/)
-   [Swagger](https://swagger.io/)

## Prerequisites

-   [Node.js](https://nodejs.org/) (>= 10.8.0)
-   [npm](https://www.npmjs.com/) (>= 6.5.0)

## Installation

```bash
$ npm install
```

## Setting up the database for development and test

MySQL database connection options are shown in the following table:

| Option   | Local(Test) |
| -------- | ----------- |
| Host     | localhost   |
| Port     | 3306        |
| Username | user    |
| Password | password    |
| Database | database    |

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# e2e tests
$ npm run test:e2e
```

## Run production configuration

```
NODE_ENV=production \
URL=host.com \
PORT=3000 \
DB_HOST=db.host.com \
DB_PORT=3306 \
DB_USER=user \
DB_PASSWORD=pass \
DB_DATABASE=database \
ts-node -r tsconfig-paths/register src/main.ts
```

## Swagger API docs

This project uses the Nest swagger module for API documentation. [NestJS Swagger](https://github.com/nestjs/swagger) - [www.swagger.io](https://swagger.io/)  
Swagger docs will be available at localhost:3000/docs