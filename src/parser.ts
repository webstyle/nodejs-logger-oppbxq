import { FileManager } from "./file-manager";
import { Formatter, ParsedErrorLog } from "./formatter/formatter";
import { LogLevels } from "./levels";

export class Parser {
  constructor(
    private readonly fileManager: FileManager,
    private readonly formatter: Formatter<ParsedErrorLog>
  ) {}

  async parse(
    input: string,
    output: string,
    level: LogLevels = LogLevels.ERROR
  ) {
    const readStream = this.fileManager.createReadStream(input);
    const writeStream = this.fileManager.createWriteStream(output);
    const readlineInterface =
      this.fileManager.createReadlineInterface(readStream);

    writeStream.write("[");

    for await (const line of readlineInterface) {
      const formatted = this.formatter.format(line);
      if (formatted.loglevel === level) {
        writeStream.write(`${JSON.stringify(formatted)},\n`);
      }
    }

    writeStream.write("]");
    writeStream.end();
  }
}
