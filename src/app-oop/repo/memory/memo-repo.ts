import { database } from "../../database/database.js";
import { Memo } from "../../domain/memo.js";
import { IMemoRepo } from "../../service/ports/memo-repo.interface.js";

export class MemoRepo implements IMemoRepo {
  loadMemos(): Memo[] {
    return database.memos.map(
      (memo) => new Memo(memo.email, memo.title, memo.content),
    );
  }
  createMemo(email: string, title: string, content: string) {
    database.memos.push({ email: email, title: title, content: content });
  }
}