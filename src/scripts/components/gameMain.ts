import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import createBoardSection from "./boardSection";
import beginGameButton from "./beginGameButton";

const createMain = (player1: Player | AIPlayer, player2: Player | AIPlayer) =>
  composeElements([
    [
      ...composeElements([
        [
          ...createBoardSection(player1, "ship", "player1"),
          ...createBoardSection(player2, "shipless", "player2"),
        ],
        createElement("div", ["board-container"]),
      ]),
      ...beginGameButton(),
    ],
    createElement("main", ["game-main"]),
  ]);

export default createMain;
