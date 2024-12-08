import TwistList from "../65-twistList";

describe("Twist List Test", () => {
  it("should return a tuple with twist list", () => {
    const first = [1, 2, 3, 4];
    const second = ["a", "b", "c", "d"];
    const result = [
      [1, "a"],
      ["b", 2],
      [3, "c"],
      ["d", 4],
    ];
    expect(TwistList(first, second)).toEqual(result);
  });
});
