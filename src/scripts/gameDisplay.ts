import type { Player } from "./player";
import type { AIPlayer } from "./aiPlayer";
import { fixElement } from "./domManipulator";
import createContainer from "./components/gameContainer";

const displayGame = (
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const body = document.querySelector("body");
  if (body) {
    fixElement(body, [createContainer(player1, player2)]);
  }
};

export default displayGame;
