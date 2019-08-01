"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_database_1 = require("./../database/user/user.database");
const router = express.Router();
const database = new user_database_1.UserDatabase();
router.get('/list', (req, res) => {
    const users = database.getUsers();
    res.send(JSON.stringify(users));
});
module.exports = router;
//# sourceMappingURL=users.route.js.map