import { composeElements, createElement } from "../domManipulator";
import createPlayerDiv from "./playerDiv";
import createAIDiv from "./AIDiv";

const createPart = (num: number) =>
  composeElements([
    [
      ...createPlayerDiv(num),
      ...createAIDiv(num),
      createElement(
        "span",
        ["error-div"],
        null,
        null,
        null,
        null,
        "error-span"
      ),
    ],
    createElement("p", ["player-part", `player${num}-part`]),
  ]);

export default createPart;
