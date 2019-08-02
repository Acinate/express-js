import data = require("./user.data.json");
import { User } from "./user.model";

export class UserDatabase {
  public getUsers = (): Array<User> => {
    return data.users;
  };
}
