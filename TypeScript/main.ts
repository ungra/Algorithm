import CompressString from "./Problems/61-compress-string";

export default function Main() {
  let init_data = "aaabbbbcdddd";
  let answer = CompressString(init_data);
  console.log("answer:", answer);
  return;
}

Main();
