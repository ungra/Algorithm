import CompressString from "../61-compress-string";

describe("Compress String", () => {
  it("should return a string with repeating characters", () => {
    const input = "aaabbbbcdddd";
    const expected = "a3b4c1d4";
    expect(CompressString(input)).toEqual(expected);
  });

  it("should handle a string with no repeating characters", () => {
    const input = "abcd";
    const expected = "a1b1c1d1";
    expect(CompressString(input)).toBe(expected);
  });

  it("should handle a string with one character", () => {
    const input = "a";
    const expected = "a1";
    expect(CompressString(input)).toBe(expected);
  });

  it("should handle an empty string", () => {
    const input = "";
    const expected = "";
    expect(CompressString(input)).toBe(expected);
  });

  it("should handle a string with all characters the same", () => {
    const input = "aaaaa";
    const expected = "a5";
    expect(CompressString(input)).toBe(expected);
  });

  it("should handle numeric characters", () => {
    const input = "1112233";
    const expected = "132232";
    expect(CompressString(input)).toBe(expected);
  });

  it("should handle a mix of uppercase and lowercase characters", () => {
    const input = "aaAA";
    const expected = "a2A2";
    expect(CompressString(input)).toBe(expected);
  });
});
