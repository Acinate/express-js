"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = require("./user.data.json");
class UserDatabase {
    getUsers() {
        return data.users;
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=user.database.js.map