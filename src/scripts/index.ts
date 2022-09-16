import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import type { Player } from "./player";
import type { AIPlayer } from "./aiPlayer";
import { subscribe } from "./pubsub";
import initDisplay from "./initDisplay";
import { startGame } from "./gameLoop";
import displayGame from "./gameDisplay";

initDisplay();
subscribe("start-game", (...args: unknown[]) => {
  if (typeof args[0] === "string" && typeof args[1] === "string") {
    startGame(args[0], args[1]);
  }
});

subscribe("display-boards", (...args: unknown[]) => {
  const arrays = args as (Player | AIPlayer)[];
  displayGame(arrays[0], arrays[1]);
});
