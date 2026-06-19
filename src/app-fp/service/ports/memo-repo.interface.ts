import { Memo } from "../../domain/memo";

export interface IMemoRepo {
  createMemo(email: string, title: string, content: string): unknown;
  loadMemos(): Memo[];
  saveMemo(email: string, title: string, content: string): void;
}