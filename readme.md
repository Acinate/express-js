# Node Express.js Webserver using TypeScript

Express.js is a wonderful framework for the backend these days. You can get up and running in minutes while also having a blazing fast asynchronous backend system. However, using JavaScript on the backend can be a little tricky and can often introduce unwanted bugs in your code that can be hard to spot, find and may cause failures in production systems.

In order to solve this problem, we will be introducing typing to our project to prevent bugs that we may write by accident. This project will also demo a current "Best Practice" for structuring your Node.js applications.

### Things to implement into our project
- TypeScript
- Express.js
- MongoDB
- Environments

# Setting up the project

In this section I will guide you through setting up this environment from scratch.

## Create the Project

Create project folder

`mkdir express-typescript && cd express-typescript`

Initialize the project as a npm project

`npm init -y`

## Setup Typescript

During development, we can run our TypeScript directly code from the .ts files we create. But for production, we need a way to transpile these .ts files into .js files. We will use a `tsconfig.json` to set options for compiling our TypeScript files.

Add `tsconfig.json` to the root of your project

`touch tsconfig.json`

Add the following code to your `tsconfig.json`

```json
{
    "compilerOptions": {
        "baseUrl": "./",
        "module": "commonjs",
        "noImplicitAny": true,
        "removeComments": true,
        "strictNullChecks": true,
        "preserveConstEnums": true,
        "sourceMap": true,
        "watch": true,
        "target": "es2015",
        "lib": ["dom", "es2015", "es2017"],
        "outDir": "dist"
    },
    "include": [
        "./server/**/*"
    ],
    "exclude": [
        "node_modules",
        "**/*.spec.ts"
    ]
}
```

## Create Server File

`mkdir server && touch server/index.ts`

Add the following code to `index.ts`

```typescript
import express = require("express");

const server: express.Application = express();
const port: number = 3000;

server.get("/", (req, res) => {
    res.send("Hello World!");
});

server.listen(port, () => {
    console.log("Server listening on port " + port);
});
```

(You will have some typing errors, to fix, move on to the next step)

## Install Express.js Dependency

`npm install --save-dev @types/express`

## Setup Package.json File

Add the following code to `package.json`

```json
{
  "name": "express-typescript",
  "version": "1.0.0",
  "description": "Express.ts",
  "main": "./server/index.ts",
  "scripts": {
    "server": "ts-node ./server/index.ts",
    "start": "npm run server"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/express": "^4.17.0",
    "ts-node": "^8.3.0",
    "typescript": "^3.5.3"
  },
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

## Start the server

To start the server type in the following command

`npm start`