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

const createShiplessCell = (cell: Cell) =>
  createElement("div", ["cell", "game-cell"], null, null, [
    ["data-x", `${cell.coords[0]}`],
    ["data-y", `${cell.coords[1]}`],
  ]);

const createBoardDisplay = (
  player: Player | AIPlayer,
  type: "ship" | "shipless",
  playerPos: "player1" | "player2"
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
      if (type === "ship") {
        elements.push(createCell(cell, player, playerPos));
      } else {
        elements.push(createShiplessCell(cell));
      }
    } else if (cell.position !== 0) {
      if (type === "ship") {
        elements.push(createCell(cell, player, playerPos));
      } else {
        elements.push(createShiplessCell(cell));
      }
    } else if (cell.value !== "hit") {
      if (type === "ship") {
        const shipName = cell.value.name;
        const shipLength = cell.value.length;
        const shipAxis = cell.value.axis;
        const func = () =>
          composeElements([
            ...createShip(
              shipName,
              shipLength,
              shipAxis,
              player,
              playerPos,
              cell.coords
            ),
            createCell(cell, player, playerPos),
          ]);
        elements.push(...func());
      } else {
        elements.push(createShiplessCell(cell));
      }
    }
  });
  return composeElements([
    elements,
    createElement("div", ["gameboard", `${playerPos}-gameboard`]),
  ]);
};

export default createBoardDisplay;
