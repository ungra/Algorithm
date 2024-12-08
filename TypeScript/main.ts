import CompressString from "./Problems/61-compress-string";
import Chosung from "./Problems/63-chosung";
import Elevator from "./Problems/64-elevator";
import TwistList from "./Problems/65-twistList";

export default function Main() {
  const a = [1, 2, 3, 4];
  const b = ["a", "b", "c", "d"];
  let answer = TwistList(a, b);
  console.log("answer:", answer);
  return;
}

Main();
