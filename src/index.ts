import { FileManager } from "./file-manager";
import { Parser } from "./parser";
import { ErrorFormatter } from "./formatter/error.formatter";

export class CommandLineApp {
  constructor(private readonly parser: Parser) {}

  extractParams() {
    const argvSequence = process.argv.slice(2, process.argv.length);
    const inputParamKey = "--input";
    const outputParamKey = "--output";
    let input = "";
    let output = "";

    if (argvSequence.indexOf(inputParamKey) !== -1) {
      input = argvSequence[argvSequence.indexOf(inputParamKey) + 1];
    }

    if (argvSequence.indexOf(outputParamKey) !== -1) {
      output = argvSequence[argvSequence.indexOf(outputParamKey) + 1];
    }
    return { input, output };
  }

  async run() {
    const { input, output } = this.extractParams();

    if (!input || !output) {
      console.warn(
        "Please specify input and output.\nFor example: --input ./app.log --output ./errors.json"
      );
      return;
    }

    await this.parser.parse(input, output);
  }
}

const fileManager = new FileManager();
const formatter = new ErrorFormatter();
const errorParser = new Parser(fileManager, formatter);
const app = new CommandLineApp(errorParser);

app.run();
