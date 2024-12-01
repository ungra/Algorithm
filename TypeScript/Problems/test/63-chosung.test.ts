import Chosung from "../63-chosung";

describe("Chosung String", () => {
  it("should return a string with Chosung", () => {
    const input = "복잡한 세상 즐겁게 살자";
    const result = "복세즐살";
    expect(Chosung(input)).toEqual(result);
  });

  it("should return a string with Chosung", () => {
    const input = "안녕하세요 저는 책을 읽습니다.";
    const result = "안저책읽";
    expect(Chosung(input)).toEqual(result);
  });
  it("should return a string with Chosung", () => {
    const input = "Nice to meet you.";
    const result = "Ntmy";
    expect(Chosung(input)).toEqual(result);
  });
});
