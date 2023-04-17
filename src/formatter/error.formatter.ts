import { Formatter, LogObject, ParsedErrorLog } from "./formatter";

export class ErrorFormatter implements Formatter<ParsedErrorLog> {
  format(text: string): ParsedErrorLog {
    const strSequence = text.split(" - ");
    const timestamp = new Date(strSequence[0]).getTime();
    const loglevel = strSequence[1];
    const logObject = JSON.parse(strSequence[2]) as LogObject;
    const { transactionId, details: err } = logObject;

    return {
      timestamp,
      loglevel,
      transactionId,
      err,
    };
  }
}
