import { composeElements, createElement } from "../domManipulator";

const onBeginGame = () => {
  console.log("begin!");
};

const createBeginGameButton = () =>
  composeElements([
    createElement(
      "button",
      ["button", "begin-game-button"],
      "Begin!",
      null,
      null,
      [["click", onBeginGame]]
    ),
    createElement("div", ["button-section"]),
  ]);

export default createBeginGameButton;
