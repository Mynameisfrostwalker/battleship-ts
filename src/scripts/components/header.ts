import { composeElements, createElement } from "../domManipulator";

const createHeader = () =>
  composeElements([
    createElement("h1", ["battleship-header"], "Battleship"),
    createElement("header", ["initial-header"]),
  ]);

export default createHeader;
