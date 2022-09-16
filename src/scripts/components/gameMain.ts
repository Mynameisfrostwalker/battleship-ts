import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { fixElement, composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";
import createBoardSection from "./boardSection";
import beginGameButton from "./beginGameButton";

const createMain = (player1: Player | AIPlayer, player2: Player | AIPlayer) => {
  const reDisplayBoard = () => {
    const component = composeElements([
      [
        ...createBoardSection(
          player1,
          player1.type === "AI" ? "shipless" : "ship"
        ),
        ...createBoardSection(
          player2,
          player2.type === "AI" ? "shipless" : "ship"
        ),
      ],
    ]);

    const section = document.querySelector(`.board-container`);
    if (section instanceof HTMLElement) {
      fixElement(section, [component]);
    }
  };

  subscribe("redisplay", reDisplayBoard);

  return composeElements([
    [
      ...composeElements([
        [
          ...createBoardSection(
            player1,
            player1.type === "AI" ? "shipless" : "ship"
          ),
          ...createBoardSection(
            player2,
            player2.type === "AI" ? "shipless" : "ship"
          ),
        ],
        createElement("div", ["board-container"]),
      ]),
      ...beginGameButton(
        player1.type === "AI" ? "player1" : "player2",
        player1,
        player2
      ),
    ],
    createElement("main", ["game-main"]),
  ]);
};

export default createMain;
