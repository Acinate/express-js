import { UserDatabase } from "./../database/user/user.database";
import express, { Request, Response } from "express";
const router = express.Router();
const database = new UserDatabase();

router.get("/list", (req: Request, res: Response) => {
  const users = database.getUsers();
  res.send(JSON.stringify(users));
});

module.exports = router;
