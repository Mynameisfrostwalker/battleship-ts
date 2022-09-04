import { composeElements, createElement } from "../domManipulator";

const createboardHeader = (name: string) =>
  composeElements([
    createElement("h3", null, name),
    createElement("div", ["board-header"]),
  ]);

export default createboardHeader;
