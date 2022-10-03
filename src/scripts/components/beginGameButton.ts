import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import {
  receiveAttackCoords1AI1Player,
  receiveAttackCoords2Player,
  AIstart,
} from "../gameLoop";
import { subscribe, publish } from "../pubsub";

const createBeginGameButton = (
  playerPos: "player1" | "player2",
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const cellEvent = (e: Event) => {
    const main = document.querySelector("main");
    const gameboard = document.querySelector(".turn-gameboard");
    const obj = e.target;
    if (
      obj instanceof HTMLElement &&
      main &&
      gameboard instanceof HTMLElement
    ) {
      const x = obj.getAttribute("data-x");
      const y = obj.getAttribute("data-y");
      const position = gameboard.getAttribute("data-position");
      if (x && y && position) {
        if (player1.type === "Human" && player2.type === "Human") {
          receiveAttackCoords2Player(
            [parseInt(x, 10), parseInt(y, 10)],
            player1,
            player2,
            position === "player1" ? "player1" : "player2"
          );
        } else {
          receiveAttackCoords1AI1Player(
            [parseInt(x, 10), parseInt(y, 10)],
            player1,
            player2,
            playerPos
          );
        }
        obj.removeEventListener("click", cellEvent);
        main.classList.add("unclickable");
      }
    }
  };

  const attachEvents = () => {
    const ships = document.querySelectorAll(".ship");
    ships.forEach((ship) => {
      ship.classList.add("unclickable");
    });
    const playerBoard = document.querySelector(`.turn-gameboard`);
    if (playerBoard) {
      const cells = playerBoard.querySelectorAll(".game-cell");
      cells.forEach((cell) => {
        if (
          cell.classList.contains("hit") ||
          cell.classList.contains("hit-ship")
        ) {
          return;
        }
        cell.addEventListener("click", cellEvent);
      });
    }
  };

  const onBeginGame = (event: Event) => {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      attachEvents();
      subscribe("redisplayAfterBegin", () => {
        publish("redisplay");
        attachEvents();
      });
      button.remove();
      publish("pirate-text", "Fire when ready Cap'n!");
      if (player1.type === "Human" && player2.type === "Human") {
        publish("pass-screenBegin");
        setTimeout(() => {
          publish("redisplayAfterBegin");
        }, 6000);
      }
      if (player1.type === "AI") {
        AIstart(player1, player2);
      }
    }
  };

  return composeElements([
    createElement(
      "button",
      ["button", "begin-game-button"],
      "Begin!",
      null,
      null,
      [["click", onBeginGame]]
    ),
    createElement("div", ["button-section"]),
  ]);
};

export default createBeginGameButton;
