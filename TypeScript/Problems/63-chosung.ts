export default function Chosung(init: string): string {
  let initArray = init.split(" ");
  let answer = "";
  initArray.map((init) => (answer += init.slice(0, 1)));
  return answer;
}
