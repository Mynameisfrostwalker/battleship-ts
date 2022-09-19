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

const attackEvents = (
  player: "AI" | "Human",
  lasthit: [string, string] | null
) => {
  if (player === "Human") {
    if (lasthit && lasthit[1] === "miss") {
      publish("pirate-text", "Damn to the depths, we missed by a mile");
      publish("explosion", () => {
        publish("sploosh");
      });
    } else if (lasthit && lasthit[0] === "unsunk") {
      publish("pirate-text", `Jolly 'eavens, we've 'it their ship!`);
      publish("explosion", () => {
        publish("shipHit");
      });
    } else if (lasthit && lasthit[0] === "sunk") {
      publish(
        "pirate-text",
        `Amazin' Cap'n, their ${lasthit[1]} been down to Davy Jones' Locker!`
      );
      publish("explosion", () => {
        publish("shipHit");
      });
    }
  } else if (lasthit && lasthit[1] === "miss") {
    publish(
      "pirate-text",
      "Fortune be smilin' upon us, they've missed our ships."
    );
    publish("explosion", () => {
      publish("sploosh");
    });
  } else if (lasthit && lasthit[0] === "unsunk") {
    publish("pirate-text", `Damn to the depths, they've 'it our ${lasthit[1]}`);
    publish("explosion", () => {
      publish("shipHit");
    });
  } else if (lasthit && lasthit[0] === "sunk") {
    publish(
      "pirate-text",
      `Shiver me timbers, our ${lasthit[1]} gone down under`
    );
    publish("explosion", () => {
      publish("shipHit");
    });
  }
};

const receiveAttackCoords1AI1Player = (
  coords: [number, number],
  player1: Player | AIPlayer,
  player2: Player | AIPlayer,
  playerPos: "player1" | "player2"
) => {
  const main = document.querySelector("main");
  if (player1.boardObj.areAllSunk()) {
    console.log("Player2 won!");
    return;
  }
  if (player2.boardObj.areAllSunk()) {
    console.log("Player1 won!");
    return;
  }
  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    publish("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());

    setTimeout(() => {
      if (player2.boardObj.areAllSunk()) {
        console.log("Player1 won!");
        return;
      }
      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        publish("redisplayAfterBegin");
        attackEvents(player1.type, player2.boardObj.checkLastHit());
        setTimeout(() => {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
  }

  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    publish("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());

    setTimeout(() => {
      if (player1.boardObj.areAllSunk()) {
        console.log("Player2 won!");
        return;
      }
      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        publish("redisplayAfterBegin");
        attackEvents(player2.type, player1.boardObj.checkLastHit());
        setTimeout(() => {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
  }
};

export { startGame, receiveAttackCoords1AI1Player };
