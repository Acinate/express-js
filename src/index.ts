import bodyParser = require("body-parser");
import express, { NextFunction, Request, Response } from "express";
const users = require("./routes/users.route");

// Initialize Server
const server: express.Application = express();
const port: number = 3000;

// Configure Middleware
server.use(bodyParser.json({ limit: "1mb" }));

// Configure Headers
server.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Configure Server Routes
server.use("/users", users);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
