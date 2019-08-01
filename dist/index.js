"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const port = 3000;
server.use(bodyParser.json({ limit: "1mb" }));
const users = require("./routes/users.route");
server.use("/users", users);
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
//# sourceMappingURL=index.js.map