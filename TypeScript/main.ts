import CompressString from "./Problems/61-compress-string";
import Chosung from "./Problems/63-chosung";

export default function Main() {
  let init_data = "복잡한 세상 편하게 살자";
  let answer = Chosung(init_data);
  console.log("answer:", answer);
  return;
}

Main();
