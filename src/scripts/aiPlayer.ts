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
  let lastHit: [Cell | null, "vertical" | "horizontal" | "both"] = [
    null,
    "both",
  ];
  let direction: "vertical" | "horizontal" | "both" = "both";
  let closeCells: [Cell, "vertical" | "horizontal" | "both"][] = [];

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
      lastHit[0] &&
      lastHit[0]?.value !== "hit" &&
      lastHit[0]?.value !== "empty" &&
      lastHit[0]?.value.get(lastHit[0].position) === "hit"
    ) {
      if (
        lastHit[0].left &&
        coordsArr.some(
          (coords) =>
            lastHit[0]?.left?.coords[0] === coords[0] &&
            lastHit[0]?.left?.coords[1] === coords[1]
        ) &&
        (lastHit[1] === "both" || lastHit[1] === "horizontal")
      ) {
        closeCells.push([lastHit[0].left, "horizontal"]);
      }
      if (
        lastHit[0].right &&
        coordsArr.some(
          (coords) =>
            lastHit[0]?.right?.coords[0] === coords[0] &&
            lastHit[0]?.right?.coords[1] === coords[1]
        ) &&
        (lastHit[1] === "both" || lastHit[1] === "horizontal")
      ) {
        closeCells.push([lastHit[0].right, "horizontal"]);
      }
      if (
        lastHit[0].top &&
        coordsArr.some(
          (coords) =>
            lastHit[0]?.top?.coords[0] === coords[0] &&
            lastHit[0]?.top?.coords[1] === coords[1]
        ) &&
        (lastHit[1] === "both" || lastHit[1] === "vertical")
      ) {
        closeCells.push([lastHit[0].top, "vertical"]);
      }
      if (
        lastHit[0].bottom &&
        coordsArr.some(
          (coords) =>
            lastHit[0]?.bottom?.coords[0] === coords[0] &&
            lastHit[0]?.bottom?.coords[1] === coords[1]
        ) &&
        (lastHit[1] === "both" || lastHit[1] === "vertical")
      ) {
        closeCells.push([lastHit[0].bottom, "vertical"]);
      }
    }
    if (closeCells.length > 0) {
      if (lastHit[1] === "vertical") {
        closeCells = closeCells.filter((val) => val[1] !== "horizontal");
      }
      if (lastHit[1] === "horizontal") {
        closeCells = closeCells.filter((val) => val[1] !== "vertical");
      }
      attack(enemy, closeCells[0][0].coords);
      let cellToHit: Cell;
      const [arr] = closeCells;
      [cellToHit, direction] = arr;
      const hitCell =
        enemy.board.find(
          (cell) =>
            cell.coords[0] === closeCells[0][0].coords[0] &&
            cell.coords[1] === closeCells[0][0].coords[1]
        ) || null;
      if (
        hitCell &&
        hitCell?.value !== "hit" &&
        hitCell?.value !== "empty" &&
        hitCell?.value.get(hitCell.position) === "hit"
      ) {
        lastHit = [hitCell, direction];
      } else {
        lastHit = [hitCell, "both"];
      }
      coordsArr = coordsArr.filter(
        (coords) =>
          !(
            closeCells[0][0].coords[0] === coords[0] &&
            closeCells[0][0].coords[1] === coords[1]
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
    lastHit = [hitCell, "both"];
  };

  return { name, playerNum, type: "AI", boardObj, attackEnemy, initialPlace };
};

export type { AIPlayer };
export default createAI;
