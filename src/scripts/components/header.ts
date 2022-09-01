import { composeElements, createElement } from "../domManipulator";

const createHeader = () =>
  composeElements([
    createElement("h1", ["battleship-header"], "Battleship"),
    createElement("header", ["header-div"]),
  ]);

export default createHeader;
