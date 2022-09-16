import type { AIPlayer } from "./aiPlayer";
import type { Player } from "./player";
import createAI from "./aiPlayer";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import createShip from "./ship";
import { publish, subscribe } from "./pubsub";

const startGame = (player1Name: string, player2Name: string) => {
  let player1: Player | AIPlayer = createPlayer(
    createGameboard,
    player1Name,
    "player1"
  );
  let player2: Player | AIPlayer = createPlayer(
    createGameboard,
    player2Name,
    "player2"
  );
  if (player1Name === "") {
    player1 = createAI(createGameboard, "player1");
  }
  if (player2Name === "") {
    player2 = createAI(createGameboard, "player2");
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

const receiveAttackCoords1AI1Player = (
  coords: [number, number],
  player1: Player | AIPlayer,
  player2: Player | AIPlayer,
  playerPos: "player1" | "player2"
) => {
  const main = document.querySelector("main");
  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    publish("redisplayAfterBegin");
    setTimeout(() => {
      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        publish("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }
  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    publish("redisplayAfterBegin");
    setTimeout(() => {
      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        publish("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }
};

export { startGame, receiveAttackCoords1AI1Player };
