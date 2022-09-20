import type { BoardFunc } from "./player";
import type { Gameboard, Axis } from "./gameboard";
import type { Ship, ShipNames } from "./ship";
import type { Cell } from "./cell";
import createPlayer from "./player";

interface AIPlayer {
  name: string;
  type: "AI";
  playerNum: "player1" | "player2";
  boardObj: Gameboard;
  attackEnemy: (enemy: Gameboard) => void;
  initialPlace: (shipFunc: (name: ShipNames, axis: Axis) => Ship) => void;
}

const createAI = (
  boardFunc: BoardFunc,
  playerNum: "player1" | "player2"
): AIPlayer => {
  let lastHit: Cell | null = null;
  const closeCells: Cell[] = [];

  let coordsArr: [number, number][] = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }
  const {
    name,
    boardObj,
    attackEnemy: attack,
  } = createPlayer(boardFunc, "AI", playerNum);

  const initialPlace = (shipFunc: (name: ShipNames, axis: Axis) => Ship) => {
    const ships: ShipNames[] = [
      "cruiser",
      "battleship",
      "carrier",
      "submarine",
      "destroyer",
    ];

    ships.forEach((shipName) => {
      const axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      const availableCoords = boardObj.getAIAvailableCoords(
        axis,
        shipName,
        shipFunc
      );
      const randomCoord =
        availableCoords[Math.floor(Math.random() * availableCoords.length)];
      boardObj.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  const attackEnemy = (enemy: Gameboard) => {
    if (
      lastHit &&
      lastHit?.value !== "hit" &&
      lastHit?.value !== "empty" &&
      lastHit?.value.get(lastHit.position) === "hit"
    ) {
      if (
        lastHit.left &&
        coordsArr.some(
          (coords) =>
            lastHit?.left?.coords[0] === coords[0] &&
            lastHit?.left?.coords[1] === coords[1]
        )
      ) {
        closeCells.push(lastHit.left);
      }
      if (
        lastHit.right &&
        coordsArr.some(
          (coords) =>
            lastHit?.right?.coords[0] === coords[0] &&
            lastHit?.right?.coords[1] === coords[1]
        )
      ) {
        closeCells.push(lastHit.right);
      }
      if (
        lastHit.top &&
        coordsArr.some(
          (coords) =>
            lastHit?.top?.coords[0] === coords[0] &&
            lastHit?.top?.coords[1] === coords[1]
        )
      ) {
        closeCells.push(lastHit.top);
      }
      if (
        lastHit.bottom &&
        coordsArr.some(
          (coords) =>
            lastHit?.bottom?.coords[0] === coords[0] &&
            lastHit?.bottom?.coords[1] === coords[1]
        )
      ) {
        closeCells.push(lastHit.bottom);
      }

      lastHit = null;
    }
    if (closeCells.length > 0) {
      attack(enemy, closeCells[0].coords);
      const hitCell =
        enemy.board.find(
          (cell) =>
            cell.coords[0] === closeCells[0].coords[0] &&
            cell.coords[1] === closeCells[0].coords[1]
        ) || null;
      lastHit = hitCell;
      coordsArr = coordsArr.filter(
        (coords) =>
          !(
            closeCells[0].coords[0] === coords[0] &&
            closeCells[0].coords[1] === coords[1]
          )
      );
      closeCells.shift();
      return;
    }
    const random = Math.floor(Math.random() * coordsArr.length);
    const coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
    const hitCell =
      enemy.board.find(
        (cell) =>
          cell.coords[0] === coords[0][0] && cell.coords[1] === coords[0][1]
      ) || null;
    lastHit = hitCell;
  };

  return { name, playerNum, type: "AI", boardObj, attackEnemy, initialPlace };
};

export type { AIPlayer };
export default createAI;
