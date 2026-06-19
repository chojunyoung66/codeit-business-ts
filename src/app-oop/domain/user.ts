export class User {
  // 속성
  private _email;
  private _password;
  private _username;

  // 메소드
  constructor(email: string, password: string, username: string) {
    this._email = email;
    this._password = password;
    this._username = username;
  }

  get Email() {
    return this._email;
  }
  get email() {
    return this._email;
  }
  get Password() {
    return this._password;
  }
  get password() {
    return this._password;
  }
  get Username() {
    return this._username;
  }
  get username() {
    return this._username;
  }

  isCredentialValidate(credential: string) {
    const [email, password] = credential.split("-");
    return this._email === email && this._password === password;
  }
}
