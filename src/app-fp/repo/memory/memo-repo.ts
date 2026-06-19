import { database } from "../../database/database.js";
import { Memo, memoDomain } from "../../domain/memo";
import { IMemoRepo } from "../../service/ports/memo-repo.interface.js";

// 비순수함수 + 불변성
export const memoRepo = (): IMemoRepo => {
  const { createMemo } = memoDomain;

  const loadMemos = (): Memo[] => {
    return database.memos.map((memo) =>
      createMemo(memo.email, memo.title, memo.content),
    );
  };
  const saveMemo = (email: string, title: string, content: string) => {
    database.memos.push({ email: email, title: title, content: content });
  };

  return { loadMemos, saveMemo, createMemo };
};

export type MemoRepoType = ReturnType<typeof memoRepo>;