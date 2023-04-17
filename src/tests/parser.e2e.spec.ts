import { FileManager } from "./../file-manager";
import { Parser } from "../parser";
import { ErrorFormatter } from "../formatter/error.formatter";

const inputPath = "app.log";
const outputPath = "errors.json";

describe("Parser", () => {
  describe("parse e2e", () => {
    const fileManager = new FileManager();
    const formatter = new ErrorFormatter();
    const parser = new Parser(fileManager, formatter);
    it("should parse logs and create outputFile", async () => {
      await parser.parse(inputPath, outputPath);
    });
  });
});
