import { ErrorFormatter } from "../formatter/error.formatter";

describe("error.formatter.ts", () => {
  const errorFormatter = new ErrorFormatter();

  describe("format", () => {
    it("should convert log text to object", () => {
      const logChunk = `2044-08-09T02:12:51.253Z - error - {"transactionId":"9abc55b2-807b-4361-9dbe-aa88b1b2e978","details":"Not found"}`;
      const actual = errorFormatter.format(logChunk);

      expect(actual).toEqual({
        timestamp: 2354321571253, // epoch time of 2044-08-09T02:12:51.253Z
        loglevel: "error",
        transactionId: "9abc55b2-807b-4361-9dbe-aa88b1b2e978",
        err: "Not found",
      });
    });
  });
});
