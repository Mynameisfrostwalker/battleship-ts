import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import createBoardDisplay from "./boardDisplay";
import createBoardHeader from "./boardHeader";

const createMain = (player: Player | AIPlayer, type: "ship" | "shipless") =>
  composeElements([
    [
      ...createBoardHeader(
        player.type === "AI" && player.playerNum === "player2"
          ? "AI2"
          : player.name
      ),
      ...createBoardDisplay(player, type),
    ],
    createElement("div", ["board-section", `${player.playerNum}-boardSection`]),
  ]);

export default createMain;
