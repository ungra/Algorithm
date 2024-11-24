export default function CompressString(init: string): string {
  if (init === "") return "";
  let count = 0;
  let answer = "";
  let target_char = init[0];
  for (let i of init) {
    if (i === target_char) {
      count += 1;
    } else {
      answer += target_char + String(count);
      target_char = i;
      count = 1;
    }
  }
  answer += target_char + String(count);

  return answer;
}
