import type { Cell } from "./cell";
import type { ShipNames, Ship } from "./ship";
import createCell from "./cell";
import createShip from "./ship";

type Axis = "horizontal" | "vertical";

interface Gameboard {
  board: Cell[];
  placeShip: (ship: Ship, coords: [number, number], axis: Axis) => void;
}

const createGameboard = (): Gameboard => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const directions = {
    top: [0, 1],
    right: [1, 0],
    bottom: [0, -1],
    left: [-1, 0],
  };

  const gameBoardArr: Cell[] = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      gameBoardArr.push(createCell([i, j], "empty"));
    }
  }

  const checkIfKey = (
    key: string,
    obj: typeof directions
  ): key is keyof typeof directions => key in obj;

  for (let i = 0; i < gameBoardArr.length; i += 1) {
    const keys = Object.keys(directions);
    for (let j = 0; j < keys.length; j += 1) {
      const key = keys[j];
      if (checkIfKey(key, directions)) {
        const move = gameBoardArr.find((value) => {
          const coords = [...gameBoardArr[i].coords];
          coords[0] += directions[key][0];
          coords[1] += directions[key][1];
          if (value.coords[0] === coords[0] && value.coords[1] === coords[1]) {
            return true;
          }
          return false;
        });

        gameBoardArr[i][key] = move || null;
      }
    }
  }

  const placeShip = (ship: Ship, coords: [number, number], axis: Axis) => {
    if (axis === "horizontal") {
      gameBoardArr.forEach((cell) => {
        if (cell.coords[1] === coords[1]) {
          if (
            cell.coords[0] >= coords[0] &&
            cell.coords[0] < coords[0] + shipLengths[ship.name] &&
            coords[0] + shipLengths[ship.name] < 10
          ) {
            cell.value = ship;
            cell.position = coords[0] - cell.coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach((cell) => {
        if (cell.coords[0] === coords[0]) {
          if (
            cell.coords[1] >= coords[1] &&
            cell.coords[1] < coords[1] + shipLengths[ship.name] &&
            coords[1] + shipLengths[ship.name] < 10
          ) {
            cell.value = ship;
            cell.position = coords[1] - cell.coords[1];
          }
        }
      });
    }
  };

  return { board: gameBoardArr, placeShip };
};

export default createGameboard;
