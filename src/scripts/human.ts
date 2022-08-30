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

  const initialPlace = (shipFunc: (name: ShipNames) => Ship) => {
    const ships: ShipNames[] = [
      "cruiser",
      "battleship",
      "carrier",
      "submarine",
      "destroyer",
    ];

    ships.forEach((shipName) => {
      const axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      const availableCoords = board.getAvailableCoords(
        axis,
        shipName,
        shipFunc
      );
      const randomCoord =
        availableCoords[Math.floor(Math.random() * availableCoords.length)];
      board.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  return { board, attackEnemy, placeShip, initialPlace };
};

export default createHuman;
