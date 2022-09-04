import type { AIPlayer } from "./aiPlayer";
import type { Player } from "./player";
import createAI from "./aiPlayer";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import createShip from "./ship";
import { publish } from "./pubsub";

const startGame = (player1Name: string, player2Name: string) => {
  let player1: Player | AIPlayer = createPlayer(createGameboard, player1Name);
  let player2: Player | AIPlayer = createPlayer(createGameboard, player2Name);
  if (player1Name === "") {
    player1 = createAI(createGameboard);
  }
  if (player2Name === "") {
    player2 = createAI(createGameboard);
  }
  player1.initialPlace(createShip);
  player2.initialPlace(createShip);
  if (
    (player1.type === "AI" && player2.type === "Human") ||
    (player1.type === "Human" && player2.type === "AI")
  ) {
    publish("display-boards", player1, player2);
  }
};

export default startGame;
