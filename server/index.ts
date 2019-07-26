import express = require("express");
import bodyParser = require("body-parser");

// Initialize Server
const server: express.Application = express();
const port: number = 3000;

// Configure Middleware
server.use(bodyParser.json({ limit: "1mb" }));

// Import Server Routes
const users = require("./routes/users.route");

// Configure Server Routes
server.use("/users", users);

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});