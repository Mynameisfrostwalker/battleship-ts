import type { Gameboard, Axis } from "./gameboard";
import type { Cell } from "./cell";
import type { Ship, ShipNames } from "./ship";

interface Player {
  name: string;
  type: "Human";
  playerNum: "player1" | "player2";
  boardObj: Gameboard;
  attackEnemy: (enemy: Gameboard, coords: [number, number]) => void;
  placeShip: (
    shipFunc: (name: ShipNames, axis: Axis) => Ship,
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => void;
  initialPlace: (shipFunc: (name: ShipNames, axis: Axis) => Ship) => void;
  removeShip: (name: ShipNames) => void;
}

type BoardFunc = (board?: Cell[]) => Gameboard;

const createPlayer = (
  boardFunc: BoardFunc,
  playerName: string,
  playerNum: "player1" | "player2"
): Player => {
  const board = boardFunc();

  const attackEnemy = (enemy: Gameboard, coords: [number, number]) => {
    enemy.receiveAttack(coords);
  };

  const placeShip = (
    shipFunc: (name: ShipNames, axis: Axis) => Ship,
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => {
    board.placeShip(shipFunc, coords, axis, shipName);
  };

  const removeShip = (name: ShipNames) => {
    board.removeShip(name);
  };

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

  return {
    name: playerName,
    type: "Human",
    playerNum,
    boardObj: board,
    attackEnemy,
    placeShip,
    initialPlace,
    removeShip,
  };
};

export type { Player, BoardFunc };
export default createPlayer;
