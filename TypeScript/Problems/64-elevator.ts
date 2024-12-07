export default function Elevator(init_data: number): number {
  let answer = 0;
  while (true) {
    if (init_data % 7 === 0) {
      answer += Math.floor(init_data / 7);
      break;
    }
    init_data -= 3;
    answer += 1;
    if (init_data < 0) {
      return -1;
    }
  }
  return answer;
}
