import type { Cell } from "../cell";
import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import type { ChildFunc } from "../domManipulator";
import { composeElements, createElement } from "../domManipulator";
import createShip from "./ship";
import createCell from "./gamecell";

const ndxToLetter = (ndx: number) => {
  const num = ndx / 10;
  return String.fromCharCode(num + 65);
};

const createShiplessCell = (cell: Cell, type = "empty") =>
  createElement("div", ["cell", "game-cell", type], null, null, [
    ["data-x", `${cell.coords[0]}`],
    ["data-y", `${cell.coords[1]}`],
  ]);

const createBoardDisplay = (
  player: Player | AIPlayer,
  type: "ship" | "shipless"
) => {
  const elements: ChildFunc[] = [];

  elements.push(createElement("div", ["cell", "number-cell"], null, null));

  for (let i = 0; i < 10; i += 1) {
    elements.push(
      createElement("div", ["cell", "number-cell"], i.toString(), null, [
        ["data-y", `${i}`],
      ])
    );
  }

  player.boardObj.board.forEach((cell, ndx) => {
    if (ndx % 10 === 0) {
      elements.push(
        createElement("div", ["cell", "number-cell"], ndxToLetter(ndx), null, [
          ["data-x", `${(ndx / 10).toString()}`],
        ])
      );
    }
    if (cell.value === "empty") {
      const cellFunc =
        type === "ship" ? createCell(cell, player) : createShiplessCell(cell);
      elements.push(cellFunc);
    } else if (cell.value === "hit") {
      const cellFunc =
        type === "ship"
          ? createCell(cell, player, "hit")
          : createShiplessCell(cell, "hit");
      elements.push(cellFunc);
    } else if (cell.position !== 0) {
      if (cell.value.get(cell.position) === "hit") {
        const cellFunc =
          type === "ship"
            ? createCell(cell, player, "hit-ship")
            : createShiplessCell(cell, "hit-ship");
        elements.push(cellFunc);
      } else {
        const cellFunc =
          type === "ship" ? createCell(cell, player) : createShiplessCell(cell);
        elements.push(cellFunc);
      }
    } else {
      const shipName = cell.value.name;
      const shipLength = cell.value.length;
      const shipAxis = cell.value.axis;
      if (cell.value.isSunk()) {
        const func = () =>
          composeElements([
            ...createShip(shipName, shipLength, shipAxis, player, cell.coords),
            createCell(cell, player, "hit-ship"),
          ]);
        elements.push(...func());
      } else if (cell.value.get(cell.position) === "hit") {
        const func = () =>
          composeElements([
            ...createShip(shipName, shipLength, shipAxis, player, cell.coords),
            createCell(cell, player, "hit-ship"),
          ]);
        const cellFunc =
          type === "ship" ? func() : [createShiplessCell(cell, "hit-ship")];
        elements.push(...cellFunc);
      } else {
        const func = () =>
          composeElements([
            ...createShip(shipName, shipLength, shipAxis, player, cell.coords),
            createCell(cell, player),
          ]);
        const cellFunc = type === "ship" ? func() : [createShiplessCell(cell)];
        elements.push(...cellFunc);
      }
    }
  });
  return composeElements([
    elements,
    createElement("div", ["gameboard", `${player.playerNum}-gameboard`]),
  ]);
};

export default createBoardDisplay;
