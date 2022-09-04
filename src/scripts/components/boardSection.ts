import type { Cell } from "../cell";
import { composeElements, createElement } from "../domManipulator";
import createBoardDisplay from "./boardDisplay";
import createBoardHeader from "./boardHeader";

const createMain = (name: string, board: Cell[], player: string) =>
  composeElements([
    [...createBoardHeader(name), ...createBoardDisplay(player, board)],
    createElement("div", ["boardSection"]),
  ]);

export default createMain;
