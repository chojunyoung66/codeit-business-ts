export class Memo {
  // 속성
  private _email: string;
  private _title: string;
  private _content: string;

  // 메소드
  constructor(email: string, title: string, content: string) {
    this._email = email;
    this._title = title;
    this._content = content;
  }

  get Title() {
    return this._title;
  }
  get title() {
    return this._title;
  }

  get Content() {
    return this._content;
  }
  get content() {
    return this._content;
  }

  get Email() {
    return this._email;
  }
  get email() {
    return this._email;
  }

  isContentValidate(Content: string): boolean {
    return this._content.includes("바보");
  }
}
