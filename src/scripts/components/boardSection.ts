import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { fixElement, composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";
import createBoardDisplay from "./boardDisplay";
import createBoardHeader from "./boardHeader";

const createMain = (
  player: Player | AIPlayer,
  type: "ship" | "shipless",
  playerPos: "player1" | "player2"
) => {
  const reDisplayBoard = () => {
    const component = composeElements([
      [
        ...createBoardHeader(player.name),
        ...createBoardDisplay(player, type, playerPos),
      ],
      createElement("div", ["boardSection", `${playerPos}-boardSection`]),
    ]);

    const section = document.querySelector(`.${playerPos}-boardSection`);
    if (section instanceof HTMLElement) {
      fixElement(section, [component]);
    }
  };

  subscribe(`${playerPos}-redisplay`, reDisplayBoard);

  return composeElements([
    [
      ...createBoardHeader(player.name),
      ...createBoardDisplay(player, type, playerPos),
    ],
    createElement("div", ["board-section", `${playerPos}-boardSection`]),
  ]);
};

export default createMain;
