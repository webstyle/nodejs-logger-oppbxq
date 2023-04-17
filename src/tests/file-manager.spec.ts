import fs from "node:fs";
import readline from "node:readline";
import {FileManager} from "../file-manager";

describe("FileManager", () => {
  const fileManager = new FileManager();
  const input = "app.log";
  const output = "errors.json"

  describe("createReadStream", () => {
    it("should create readable stream", () => {
      const spy = jest.spyOn(fs, "createReadStream");
      const actual = fileManager.createReadStream(input);

      expect(actual).toBeInstanceOf(fs.ReadStream)
      expect(spy).toHaveBeenCalledWith(input, { encoding: "utf8"})
    });
  });

  describe("createWriteStream", () => {
    it("should create writable stream", () => {
      const spy = jest.spyOn(fs, "createWriteStream");
      const actual = fileManager.createWriteStream(output);

      expect(actual).toBeInstanceOf(fs.WriteStream)
      expect(spy).toHaveBeenCalledWith(output, { encoding: "utf8"})
    });
  });

  describe("createReadlineInterface", () => {
    it("should create readline interface", () => {
      const spy = jest.spyOn(readline, "createInterface");
      const readStreamSpy = jest.spyOn(fs, 'createReadStream')
      const readStream = fileManager.createReadStream(input);
      fileManager.createReadlineInterface(readStream);

      expect(spy).toHaveBeenCalledWith({ input: readStream })
      expect(readStreamSpy).toHaveBeenCalledWith(input, { encoding: 'utf8' })
    })
  })
})
