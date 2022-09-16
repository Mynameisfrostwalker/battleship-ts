import { mainModule } from "process";
import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import { receiveAttackCoords1AI1Player } from "../gameLoop";
import { subscribe, publish } from "../pubsub";

const createBeginGameButton = (
  playerPos: "player1" | "player2",
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const cellEvent = (e: Event) => {
    const main = document.querySelector("main");
    const obj = e.target;
    if (obj instanceof HTMLElement && main) {
      const x = obj.getAttribute("data-x");
      const y = obj.getAttribute("data-y");
      if (x && y) {
        receiveAttackCoords1AI1Player(
          [parseInt(x, 10), parseInt(y, 10)],
          player1,
          player2,
          playerPos
        );
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
    const playerBoard = document.querySelector(`.${playerPos}-gameboard`);
    if (playerBoard) {
      const cells = playerBoard.querySelectorAll(".game-cell");
      cells.forEach((cell) => {
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
