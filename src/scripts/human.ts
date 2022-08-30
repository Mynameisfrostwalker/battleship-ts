import type { Gameboard, Axis } from "./gameboard";
import type { Cell } from "./cell";
import type { Ship, ShipNames } from "./ship";

const createHuman = (boardFunc: (board?: Cell[]) => Gameboard) => {
  const board = boardFunc();

  const attackEnemy = (enemy: Gameboard, coords: [number, number]) => {
    enemy.receiveAttack(coords);
  };

  const placeShip = (
    shipFunc: (name: ShipNames) => Ship,
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => {
    board.placeShip(shipFunc, coords, axis, shipName);
  };

  return { board, attackEnemy, placeShip };
};

export default createHuman;
