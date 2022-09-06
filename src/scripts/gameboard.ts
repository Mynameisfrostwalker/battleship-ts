import { cloneDeep } from "lodash";
import type { Cell } from "./cell";
import type { ShipNames, Ship } from "./ship";
import createCell from "./cell";

type Axis = "horizontal" | "vertical";

interface Gameboard {
  board: Cell[];
  placeShip: (
    shipFactory: (name: ShipNames, axis: Axis) => Ship,
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => void;
  receiveAttack: (coords: [number, number]) => void;
  areAllSunk: () => void;
  getAvailableCoords: (
    axis: Axis,
    shipName: ShipNames,
    shipFunc: (name: ShipNames, axis: Axis) => Ship
  ) => [number, number][];
  getAIAvailableCoords: (
    axis: Axis,
    shipName: ShipNames,
    shipFunc: (name: ShipNames, axis: Axis) => Ship
  ) => [number, number][];
  removeShip: (shipName: ShipNames) => void;
}

const createGameboard = (board?: Cell[]): Gameboard => {
  const shipStore: Ship[] = [];
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const directions = {
    top: [0, -1],
    right: [1, 0],
    bottom: [0, 1],
    left: [-1, 0],
  };

  let gameBoardArr: Cell[] = [];

  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      gameBoardArr.push(createCell([i, j], "empty"));
    }
  }

  if (board === undefined) {
    const doesMoveExist = (
      value: Cell,
      num: number,
      directionsObj: typeof directions,
      key: keyof typeof directions
    ) => {
      const coords = [...gameBoardArr[num].coords];
      coords[0] += directionsObj[key][0];
      coords[1] += directionsObj[key][1];
      if (value.coords[0] === coords[0] && value.coords[1] === coords[1]) {
        return true;
      }
      return false;
    };

    const checkIfKey = (
      key: string,
      obj: typeof directions
    ): key is keyof typeof directions => key in obj;

    for (let i = 0; i < gameBoardArr.length; i += 1) {
      const keys = Object.keys(directions);
      for (let j = 0; j < keys.length; j += 1) {
        const key = keys[j];
        if (checkIfKey(key, directions)) {
          const move = gameBoardArr.find((value) =>
            doesMoveExist(value, i, directions, key)
          );

          gameBoardArr[i][key] = move || null;
        }
      }
    }
  } else {
    gameBoardArr = cloneDeep(board);
  }

  const checkIfShipNotInCells = (
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => {
    const length = shipLengths[shipName];
    let cell = gameBoardArr.find(
      (obj) => obj.coords[0] === coords[0] && obj.coords[1] === coords[1]
    );
    const arr: Cell[] = [];

    if (axis === "horizontal") {
      for (let i = 0; i < length; i += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.right || undefined;
        }
      }
    } else if (axis === "vertical") {
      for (let i = 0; i < length; i += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.bottom || undefined;
        }
      }
    }

    return arr.every((obj) => obj.value === "empty");
  };

  const placeShip = (
    shipFactory: (name: ShipNames, axis: Axis) => Ship,
    coords: [number, number],
    axis: Axis,
    shipName: ShipNames
  ) => {
    if (shipStore.find((ship) => ship.name === shipName)) {
      return;
    }
    const ship = shipFactory(shipName, axis);
    if (!checkIfShipNotInCells(coords, axis, shipName)) {
      return;
    }
    if (axis === "horizontal") {
      gameBoardArr.forEach((cell) => {
        if (cell.coords[1] === coords[1]) {
          if (
            cell.coords[0] >= coords[0] &&
            cell.coords[0] < coords[0] + shipLengths[shipName] &&
            coords[0] + shipLengths[shipName] <= 10
          ) {
            cell.value = ship;
            if (!shipStore.find((ship2) => ship2.name === shipName)) {
              shipStore.push(ship);
            }
            cell.position = cell.coords[0] - coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach((cell) => {
        if (cell.coords[0] === coords[0]) {
          if (
            cell.coords[1] >= coords[1] &&
            cell.coords[1] < coords[1] + shipLengths[shipName] &&
            coords[1] + shipLengths[shipName] <= 10
          ) {
            cell.value = ship;
            if (!shipStore.find((ship2) => ship2.name === shipName)) {
              shipStore.push(ship);
            }
            cell.position = cell.coords[1] - coords[1];
          }
        }
      });
    }
  };

  const receiveAttack = (coords: [number, number]) => {
    const cell = gameBoardArr.find((obj) => {
      if (obj.coords[0] === coords[0] && obj.coords[1] === coords[1]) {
        return true;
      }
      return false;
    });

    if (cell?.value === "empty") {
      cell.value = "hit";
    }

    if (cell?.value !== "hit" && cell?.position !== null) {
      cell?.value.hit(cell?.position);
    }
  };

  const areAllSunk = () => shipStore.every((ship) => ship.isSunk());

  const getAvailableCoords = function getAvailableCoords(
    this: Gameboard,
    axis: Axis,
    shipName: ShipNames,
    shipFunc: (name: ShipNames, axis: Axis) => Ship
  ): [number, number][] {
    const arr: [number, number][] = [];
    this.board.forEach((cell) => {
      const gameboard = createGameboard(this.board);
      gameboard.placeShip(shipFunc, cell.coords, axis, shipName);
      const placed = gameboard.board.find(
        (obj) =>
          obj.coords[0] === cell.coords[0] && obj.coords[1] === cell.coords[1]
      );

      if (
        placed?.value !== "hit" &&
        placed?.value !== "empty" &&
        placed?.value !== undefined
      ) {
        if (placed?.value.name === shipName) {
          arr.push(cell.coords);
        }
      }
    });
    return arr;
  };

  const getAIAvailableCoords = function getAIAvailableCoords(
    this: Gameboard,
    axis: Axis,
    shipName: ShipNames,
    shipFunc: (name: ShipNames, axis: Axis) => Ship
  ): [number, number][] {
    const arr: [number, number][] = [];
    this.board.forEach((cell) => {
      if (
        typeof cell.left?.position === "number" ||
        typeof cell.right?.position === "number" ||
        typeof cell.top?.position === "number" ||
        typeof cell.top?.right?.position === "number" ||
        typeof cell.top?.left?.position === "number" ||
        typeof cell.bottom?.right?.position === "number" ||
        typeof cell.bottom?.left?.position === "number" ||
        typeof cell.bottom?.position === "number"
      ) {
        return;
      }
      const gameboard = createGameboard(this.board);
      gameboard.placeShip(shipFunc, cell.coords, axis, shipName);
      const placed = gameboard.board.find(
        (obj) =>
          obj.coords[0] === cell.coords[0] && obj.coords[1] === cell.coords[1]
      );

      if (
        placed?.value !== "hit" &&
        placed?.value !== "empty" &&
        placed?.value !== undefined
      ) {
        if (placed?.value.name === shipName) {
          arr.push(cell.coords);
        }
      }
    });
    return arr;
  };

  const removeShip = (shipName: ShipNames) => {
    shipStore.forEach((ship, ndx) => {
      if (ship.name === shipName) {
        shipStore.splice(ndx, 1);
      }
    });
    gameBoardArr.forEach((cell) => {
      if (cell.value !== "hit" && cell.value !== "empty") {
        if (cell.value.name === shipName) {
          cell.value = "empty";
          cell.position = null;
        }
      }
    });
  };

  return {
    board: gameBoardArr,
    placeShip,
    receiveAttack,
    areAllSunk,
    getAvailableCoords,
    getAIAvailableCoords,
    removeShip,
  };
};

export type { Gameboard, Axis };
export default createGameboard;
