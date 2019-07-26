import express = require("express");
import { UserDatabase } from "./../database/user/user.database";
const router = express.Router();
const database = new UserDatabase();

router.get('/list', (req, res) => {
    const users = database.getUsers();
    res.send(JSON.stringify(users));
});

module.exports = router;