import { User } from "./user.model";
const data = require("./user.data.json");

export class UserDatabase {
    public getUsers(): User[] {
        return data.users;
    }
}