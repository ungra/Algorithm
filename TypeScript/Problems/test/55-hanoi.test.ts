import Hanoi from "../55-hanoi";

describe("Tower of Hanoi", () => {
  it("should return an empty array for - disks", () => {
    const result = Hanoi(0, 1, 2, 3, []);
    expect(result).toEqual([]); // num = 0이면 이동 없음.
  });

  it("should return correct moves for 1 disk", () => {
    const result = Hanoi(1, 1, 2, 3, []);
    expect(result).toEqual([[1, 3]]); // 디스크 1개 이동.
  });

  it("should return correct moves for 2 disks", () => {
    const result = Hanoi(2, 1, 2, 3, []);
    expect(result).toEqual([
      [1, 2], // 디스크 1번을 임시 기동(2)으로 이동
      [1, 3], // 디스크 2번을 목표 기둥(3)으로 이동
      [2, 3], // 디스크 1번을 목표 기둥(3)으로 이동
    ]);
  });

  it("should return correct moves for 3 disks", () => {
    const result = Hanoi(3, 1, 2, 3, []);
    expect(result).toEqual([
      [1, 3],
      [1, 2],
      [3, 2],
      [1, 3],
      [2, 1],
      [2, 3],
      [1, 3],
    ]);
  });
});
