import type { AIPlayer } from "./aiPlayer";
import type { Player } from "./player";
import createAI from "./aiPlayer";
import createPlayer from "./player";
import createGameboard from "./gameboard";
import createShip from "./ship";
import { publish } from "./pubsub";

const attackEvents = (
  player: "AI" | "Human",
  lasthit: [string, string] | null,
  mode = "1AI"
) => {
  if (player === "Human") {
    if (lasthit && lasthit[1] === "miss") {
      publish(
        "pirate-text",
        mode === "1AI"
          ? "Damn to the depths, we missed by a mile"
          : "They've missed by a mile"
      );
      publish("explosion", () => {
        publish("sploosh");
      });
    } else if (lasthit && lasthit[0] === "unsunk") {
      publish(
        "pirate-text",
        mode === "1AI"
          ? `Jolly 'eavens, we've 'it their ship!`
          : "Jolly, their ships been hit."
      );
      publish("explosion", () => {
        publish("shipHit");
      });
    } else if (lasthit && lasthit[0] === "sunk") {
      publish(
        "pirate-text",
        mode === "1AI"
          ? `Amazin' Cap'n, their ${lasthit[1]} been down to Davy Jones' Locker!`
          : `Amazin', their ${lasthit[1]} been down to Davy Jones' Locker!`
      );
      publish("explosion", () => {
        publish("shipHit");
      });
    }
  } else if (lasthit && lasthit[1] === "miss") {
    publish(
      "pirate-text",
      mode === "1AI"
        ? "Fortune be smilin' upon us, they've missed our ships."
        : "Unlucky, they missed!"
    );
    publish("explosion", () => {
      publish("sploosh");
    });
  } else if (lasthit && lasthit[0] === "unsunk") {
    publish(
      "pirate-text",
      mode === "1AI"
        ? `Damn to the depths, they've 'it our ${lasthit[1]}`
        : `Their ${lasthit[1]}'s been hit`
    );
    publish("explosion", () => {
      publish("shipHit");
    });
  } else if (lasthit && lasthit[0] === "sunk") {
    publish(
      "pirate-text",
      mode === "1AI"
        ? `Shiver me timbers, our ${lasthit[1]} gone down under`
        : `Shiver me timbers, their ${lasthit[1]} gone down under`
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

  if (playerPos === "player1") {
    if (player1.boardObj.areAllSunk()) {
      publish("game-over", "victory");
      return;
    }
    if (player2.boardObj.areAllSunk()) {
      publish("game-over", "defeat");
      return;
    }

    player2.attackEnemy(player1.boardObj, coords);
    publish("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());

    setTimeout(() => {
      if (player1.boardObj.areAllSunk()) {
        publish("game-over", "victory");
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
    if (player1.boardObj.areAllSunk()) {
      publish("game-over", "defeat");
      return;
    }
    if (player2.boardObj.areAllSunk()) {
      publish("game-over", "victory");
      return;
    }

    player1.attackEnemy(player2.boardObj, coords);
    publish("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());

    setTimeout(() => {
      if (player2.boardObj.areAllSunk()) {
        publish("game-over", "victory");
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

const receiveAttackCoords2AI = (
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const main = document.querySelector("main");
  if (player1.type === "Human" || player2.type === "Human") {
    return;
  }

  if (player1.boardObj.areAllSunk()) {
    publish("game-over", "AI2 beat AI!");
    return;
  }
  if (player2.boardObj.areAllSunk()) {
    publish("game-over", "AI beat AI2!");
    return;
  }

  player2.attackEnemy(player1.boardObj);
  publish("redisplay");
  attackEvents(player2.type, player1.boardObj.checkLastHit(), "2AI");

  setTimeout(() => {
    if (player1.boardObj.areAllSunk()) {
      publish("game-over", "AI2 beat AI!");
      return;
    }
    if (player1.type === "AI" && main) {
      player1.attackEnemy(player2.boardObj);
      publish("redisplay");
      attackEvents(player1.type, player2.boardObj.checkLastHit(), "2AI");
      setTimeout(() => {
        receiveAttackCoords2AI(player1, player2);
      }, 2000);
    }
  }, 3000);
};

const AIstart = (player1: Player | AIPlayer, player2: Player | AIPlayer) => {
  const main = document.querySelector("main");
  if (player1.type === "AI" && main) {
    player1.attackEnemy(player2.boardObj);
    publish("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(() => {
      main.classList.remove("unclickable");
    }, 2000);
  }
  publish("pirate-text", "Fire when ready Cap'n!");
};

const startAIonly = (
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const ships = document.querySelectorAll(".ship");
  ships.forEach((ship) => {
    ship.classList.add("unclickable");
  });
  receiveAttackCoords2AI(player1, player2);
};

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

  publish("display-boards", player1, player2);

  if (player1.type === "AI" && player2.type === "AI") {
    startAIonly(player1, player2);
  }
};

export { startGame, receiveAttackCoords1AI1Player, AIstart };
