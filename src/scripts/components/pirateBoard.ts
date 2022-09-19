import pirateImg from "../../assets/images/pirate.svg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const createPirateBoard = (
  name = "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?"
) => {
  const changeName = (str: unknown) => {
    if (typeof str === "string") {
      const text = document.querySelector(".pirate-text");
      if (text) {
        text.textContent = str;
      }
    }
  };
  subscribe("pirate-text", changeName);

  return composeElements([
    [
      createElement("h2", ["pirate-text"], name),
      createElement("img", ["pirate-image"], null, null, [
        ["src", pirateImg],
        ["width", "8%"],
      ]),
    ],
    createElement("div", ["pirate-inner-border"]),
    createElement("div", ["pirate-outer-border"]),
  ]);
};

export default createPirateBoard;
