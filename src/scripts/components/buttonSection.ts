import { composeElements, createElement } from "../domManipulator";

const createButtonSection = () =>
  composeElements([
    createElement("button", ["button", "game-start-button"], "Start Game!"),
    createElement("section", ["button-section"]),
  ]);

export default createButtonSection;
