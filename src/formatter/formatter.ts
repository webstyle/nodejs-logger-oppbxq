import { LogLevels } from "../levels";

export interface LogObject {
  transactionId: string;
  details: string;
}

export interface ParsedErrorLog {
  timestamp: number;
  loglevel: string;
  transactionId: string;
  err: string;
}

export interface Formatter<T> {
  format(string: string): T;
}
