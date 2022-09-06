import pirateImg from "../../assets/images/pirate.svg";
import { composeElements, createElement } from "../domManipulator";

const createPirateBoard = (
  name = "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?"
) =>
  composeElements([
    [
      createElement("h2", ["form-header"], name),
      createElement("img", ["pirate-image"], null, null, [
        ["src", pirateImg],
        ["width", "8%"],
      ]),
    ],
    createElement("div", ["pirate-inner-border"]),
    createElement("div", ["pirate-outer-border"]),
  ]);

export default createPirateBoard;
