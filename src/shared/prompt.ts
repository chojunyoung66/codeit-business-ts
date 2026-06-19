import fs from "node:fs";

const STDIN_FD = 0;
const CHUNK_SIZE = 1024;

let stdinBuffer = "";

export const prompt = (message: string) => {
  process.stdout.write(message);

  while (true) {
    const newlineIndex = stdinBuffer.indexOf("\n");
    if (newlineIndex !== -1) {
      const line = stdinBuffer.slice(0, newlineIndex).replace(/\r$/, "");
      stdinBuffer = stdinBuffer.slice(newlineIndex + 1);
      return line;
    }

    const chunk = Buffer.alloc(CHUNK_SIZE);
    const bytesRead = fs.readSync(STDIN_FD, chunk, 0, CHUNK_SIZE, null);

    if (bytesRead === 0) {
      const line = stdinBuffer.replace(/\r$/, "");
      stdinBuffer = "";
      return line;
    }

    stdinBuffer += chunk.toString("utf8", 0, bytesRead);
  }
};
