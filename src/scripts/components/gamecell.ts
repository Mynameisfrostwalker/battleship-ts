import type { Cell } from "../cell";
import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import type { Axis } from "../gameboard";
import type { ShipNames } from "../ship";
import { createElement } from "../domManipulator";
import { publish } from "../pubsub";
import createShip from "../ship";

const isAxis = (axis: string | null | undefined): axis is Axis =>
  axis === "vertical" || axis === "horizontal";

const isShipName = (name: string | null | undefined): name is ShipNames => {
  const names = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  return names.includes(name || "");
};

const createCell = (cell: Cell, player: Player | AIPlayer, type = "empty") => {
  const dragEnter = (event: Event) => {
    event.preventDefault();
    const targetCell = event.currentTarget;
    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      const id = event.dataTransfer?.getData("text/plain") || "";
      const ship = document.querySelector(`#${id}`);
      const x = targetCell.getAttribute("data-x");
      const y = targetCell.getAttribute("data-y");
      const name = ship?.getAttribute("data-name");
      const axis = ship?.getAttribute("data-axis");
      if (x && y && isAxis(axis) && isShipName(name)) {
        const coords: [number, number] = [parseInt(x, 10), parseInt(y, 10)];
        if (
          player.boardObj
            .getAvailableCoords(axis, name, createShip)
            .some((value) => value[0] === coords[0] && value[1] === coords[1])
        ) {
          targetCell.classList.add("drag-over-available");
        } else {
          targetCell.classList.add("drag-over");
        }
      }
    }
  };

  const dragOver = (event: Event) => {
    event.preventDefault();
    const targetCell = event.currentTarget;
    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      const id = event.dataTransfer?.getData("text/plain") || "";
      const ship = document.querySelector(`#${id}`);
      const x = targetCell.getAttribute("data-x");
      const y = targetCell.getAttribute("data-y");
      const name = ship?.getAttribute("data-name");
      const axis = ship?.getAttribute("data-axis");
      if (x && y && isAxis(axis) && isShipName(name)) {
        const coords: [number, number] = [parseInt(x, 10), parseInt(y, 10)];
        if (
          player.boardObj
            .getAvailableCoords(axis, name, createShip)
            .some((value) => value[0] === coords[0] && value[1] === coords[1])
        ) {
          targetCell.classList.add("drag-over-available");
        } else {
          targetCell.classList.add("drag-over");
        }
      }
    }
  };

  const dragLeave = (event: Event) => {
    const targetCell = event.currentTarget;
    if (targetCell instanceof HTMLElement) {
      targetCell.classList.remove("drag-over-available");
      targetCell.classList.remove("drag-over");
    }
  };

  const drop = (event: Event) => {
    const targetCell = event.currentTarget;
    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      const id = event.dataTransfer?.getData("text/plain") || "";
      event.preventDefault();
      const ship = document.querySelector(`#${id}`);
      const x = targetCell.getAttribute("data-x");
      const y = targetCell.getAttribute("data-y");
      const name = ship?.getAttribute("data-name");
      const axis = ship?.getAttribute("data-axis");
      if (isAxis(axis) && isShipName(name) && id && ship && x && y) {
        const coords: [number, number] = [parseInt(x, 10), parseInt(y, 10)];
        if (
          player.boardObj
            .getAvailableCoords(axis, name, createShip)
            .some((value) => value[0] === coords[0] && value[1] === coords[1])
        ) {
          player.boardObj.placeShip(createShip, coords, axis, name);
          publish("redisplay");
        } else {
          targetCell.classList.remove("drag-over");
          targetCell.classList.remove("drag-over-available");
        }
      }
    }
  };

  return createElement(
    "div",
    ["cell", "game-cell", type],
    null,
    null,
    [
      ["data-x", `${cell.coords[0]}`],
      ["data-y", `${cell.coords[1]}`],
    ],
    [
      ["dragenter", dragEnter],
      ["dragover", dragOver],
      ["dragleave", dragLeave],
      ["drop", drop],
    ]
  );
};

export default createCell;
