export class User {
    constructor(data?: any) {
        const def = {
            _id: "",
            username: "",
            password: "",
            email: "",
            ...data
        };

        this._id = def._id;
        this.username = def.username;
        this.password = def.password;
        this.email = def.email;
    }

    _id: String;
    username: String;
    password: String;
    email: String;
}