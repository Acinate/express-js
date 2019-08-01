"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(data) {
        const def = Object.assign({ _id: "", username: "", password: "", email: "" }, data);
        this._id = def._id;
        this.username = def.username;
        this.password = def.password;
        this.email = def.email;
    }
}
exports.User = User;
//# sourceMappingURL=user.model.js.map