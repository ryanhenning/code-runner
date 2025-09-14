import { pokeFetcher } from "./index";

describe("functionToTest", () => {
  it("returns 150 pokemon if no input provided", async () => {
    const result = await pokeFetcher();

    expect(result.length).toBe(150);
  });
  it("returns collection based on input number", async () => {
    const limit = 151;

    const result = await pokeFetcher(limit);
    expect(result.length).toBe(limit);
  });
});
