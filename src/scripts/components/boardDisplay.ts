import type { Cell } from "../cell";
import type { ChildFunc } from "../domManipulator";
import { composeElements, createElement } from "../domManipulator";
import createShip from "./ship";

const ndxToLetter = (ndx: number) => {
  const num = ndx / 10;
  return String.fromCharCode(num + 65);
};

const createBoardDisplay = (name: string, board: Cell[]) => {
  const elements: ChildFunc[] = [];
  elements.push(createElement("div", ["cell", "number-cell"], null, null));
  for (let i = 0; i < 10; i += 1) {
    elements.push(
      createElement("div", ["cell", "number-cell"], i.toString(), null, [
        ["data-y", `${i}`],
      ])
    );
  }
  board.forEach((cell, ndx) => {
    if (ndx % 10 === 0) {
      elements.push(
        createElement("div", ["cell", "number-cell"], ndxToLetter(ndx), null, [
          ["data-y", `${(ndx / 10).toString()}`],
        ])
      );
    }
    if (cell.value === "empty") {
      elements.push(
        createElement("div", ["cell", "game-cell"], null, null, [
          ["data-x", `${cell.coords[0]}`],
          ["data-y", `${cell.coords[1]}`],
        ])
      );
    } else if (cell.position !== 0) {
      elements.push(
        createElement("div", ["cell", "game-cell"], null, null, [
          ["data-x", `${cell.coords[0]}`],
          ["data-y", `${cell.coords[1]}`],
        ])
      );
    } else if (cell.value !== "hit") {
      const shipName = cell.value.name;
      const shipLength = cell.value.length;
      const shipAxis = cell.value.axis;
      const func = () =>
        composeElements([
          ...createShip(shipName, shipLength, shipAxis),
          createElement("div", ["game-cell", "cell"], null, null, [
            ["data-x", `${cell.coords[0]}`],
            ["data-y", `${cell.coords[1]}`],
          ]),
        ]);
      elements.push(...func());
    }
  });
  return composeElements([
    [...elements],
    createElement("div", ["gameboard", `${name}-gameboard`]),
  ]);
};

export default createBoardDisplay;
