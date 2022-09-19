import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import createHeader from "./gameHeader";
import createMain from "./gameMain";
import createFooter from "./footer";
import sailingAudio from "./sailingAudio";
import splooshAudio from "./splooshAudio";
import explosionAudio from "./explosionAudio";
import shipHitAudio from "./shipHitAudio";

const createContainer = (
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) =>
  composeElements([
    [
      ...createHeader(),
      ...createMain(player1, player2),
      ...createFooter(),
      ...sailingAudio(),
      ...splooshAudio(),
      ...explosionAudio(),
      ...shipHitAudio(),
    ],
    createElement("div", ["container", "game-container"]),
  ]);

export default createContainer;
