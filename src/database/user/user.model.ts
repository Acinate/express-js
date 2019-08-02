export class User {
  public _id: string;
  public username: string;
  public password: string;
  public email: string;

  constructor(data?: any) {
    const def = {
      _id: "",
      email: "",
      password: "",
      username: "",
      ...data
    };

    this._id = def._id;
    this.username = def.username;
    this.password = def.password;
    this.email = def.email;
  }
}
