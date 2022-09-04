import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import createBoardSection from "./boardSection";

const createMain = (player1: Player | AIPlayer, player2: Player | AIPlayer) =>
  composeElements([
    [
      ...createBoardSection(player1.name, player1.boardObj.board, player1.type),
      ...createBoardSection(player2.name, player2.boardObj.board, player2.type),
    ],
    createElement("main", ["game-main"]),
  ]);

export default createMain;
