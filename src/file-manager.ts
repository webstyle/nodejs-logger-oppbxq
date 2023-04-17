import fs from "node:fs";
import readline from "node:readline";

export class FileManager {
  createReadStream(path: string): fs.ReadStream {
    return fs.createReadStream(path, { encoding: "utf8" });
  }

  createWriteStream(path: string): fs.WriteStream {
    return fs.createWriteStream(path, { encoding: "utf8" });
  }

  createReadlineInterface(readableStream: fs.ReadStream): readline.ReadLine {
    return readline.createInterface({
      input: readableStream,
    });
  }
}
