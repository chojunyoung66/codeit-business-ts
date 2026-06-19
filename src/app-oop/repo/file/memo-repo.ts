import fs from "node:fs";
import path from "node:path";
import { Memo } from "../../domain/memo.js";
import { IMemoRepo } from "../../service/ports/memo-repo.interface.js";

export class MemoRepo implements IMemoRepo {
  private _filePath: string;

  constructor() {
    this._filePath =
      path.resolve(process.cwd(), "src", "app-oop", "database", "memos.txt");
  }

  readFile(): string[] {
    const result = fs.readFileSync(this._filePath);
    return String(result).trim().split("\n");
  }

  loadMemos() {
    const result = this.readFile();
    const memos = [];
    for (let i = 0; i < result.length; i = i + 1) {
      const memo = new Memo(
        result[i].split(", ")[0],
        result[i].split(", ")[1],
        result[i].split(", ")[2],
      );
      memos.push(memo);
    }
    return memos;
  }
  createMemo(email: string, title: string, content: string) {
    fs.appendFileSync(this._filePath, `${email}, ${title}, ${content}\n`);
  }
}
