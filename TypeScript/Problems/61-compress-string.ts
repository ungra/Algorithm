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
/* 
문자열을 입력받고 연속되는 문자열을 압축해서 표현하고 싶습니다.

입력
aaabbbbcdddd

출력
a3b4c1d4
 */
