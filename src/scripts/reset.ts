import type { Player } from "./player";
import type { AIPlayer } from "./aiPlayer";
import { subscribe, clear } from "./pubsub";
import { startGame } from "./gameLoop";
import displayGame from "./gameDisplay";
import displayGameOver from "./gameOverDisplay";

const reset = () => {
  clear();

  subscribe("start-game", (...args: unknown[]) => {
    if (typeof args[0] === "string" && typeof args[1] === "string") {
      startGame(args[0], args[1]);
    }
  });

  subscribe("display-boards", (...args: unknown[]) => {
    const arrays = args as (Player | AIPlayer)[];
    displayGame(arrays[0], arrays[1]);
  });

  subscribe("game-over", (...args: unknown[]) => {
    if (typeof args[0] === "string") {
      displayGameOver(args[0]);
    }
  });

  subscribe("reset", reset);
};

export default reset;
