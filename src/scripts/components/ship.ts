import uniqid from "uniqid";
import type { ChildFunc } from "../domManipulator";
import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import type { ShipNames } from "../ship";
import { composeElements, createElement } from "../domManipulator";
import { publish } from "../pubsub";
import shipFunc from "../ship";

const isShipName = (name: string | null | undefined): name is ShipNames => {
  const names = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  return names.includes(name || "");
};

const createShip = (
  shipName: string,
  shipLength: number,
  axis: "horizontal" | "vertical",
  player: Player | AIPlayer,
  coords: [number, number]
) => {
  const changeAxis = (event: Event) => {
    const ship = event.currentTarget;
    if (ship instanceof HTMLElement && isShipName(shipName)) {
      if (ship.classList.contains("vertical")) {
        player.boardObj.removeShip(shipName);
        const coordinates = player.boardObj.getAvailableCoords(
          "horizontal",
          shipName,
          shipFunc
        );
        if (
          coordinates.some(
            (value) => value[0] === coords[0] && value[1] === coords[1]
          )
        ) {
          player.boardObj.placeShip(shipFunc, coords, "horizontal", shipName);
        } else {
          player.boardObj.placeShip(shipFunc, coords, "vertical", shipName);
          ship.classList.add("ship-error");
          setTimeout(() => {
            publish("redisplay");
          }, 1000);
          return;
        }
      } else {
        player.boardObj.removeShip(shipName);
        const coordinates = player.boardObj.getAvailableCoords(
          "vertical",
          shipName,
          shipFunc
        );
        if (
          coordinates.some(
            (value) => value[0] === coords[0] && value[1] === coords[1]
          )
        ) {
          player.boardObj.placeShip(shipFunc, coords, "vertical", shipName);
        } else {
          player.boardObj.placeShip(shipFunc, coords, "horizontal", shipName);
          ship.classList.add("ship-error");
          setTimeout(() => {
            publish("redisplay");
          }, 1000);
          return;
        }
      }
    }
    publish("redisplay");
  };

  const dragStart = (event: Event) => {
    const ship = event.currentTarget;
    if (
      event instanceof DragEvent &&
      ship instanceof HTMLElement &&
      isShipName(shipName)
    ) {
      event.dataTransfer?.setData("text/plain", ship.id);
      player.boardObj.removeShip(shipName);
      setTimeout(() => {
        ship.classList.add("invisible");
      }, 0);
    }
  };

  const dragEnd = (event: Event) => {
    const ship = event.currentTarget;
    if (ship instanceof HTMLElement && isShipName(shipName)) {
      player.boardObj.placeShip(shipFunc, coords, axis, shipName);
      ship.classList.remove("invisible");
    }
  };

  const elements: ChildFunc[] = [];
  for (let i = 0; i < shipLength; i += 1) {
    elements.push(createElement("div"));
  }
  return composeElements([
    elements,
    createElement(
      "div",
      ["ship", shipName, axis],
      null,
      uniqid(),
      [
        ["draggable", "true"],
        ["data-name", shipName],
        ["data-axis", axis],
        ["data-x", coords[0].toString()],
        ["data-y", coords[1].toString()],
      ],
      [
        ["dragstart", dragStart],
        ["dragend", dragEnd],
        ["click", changeAxis],
      ]
    ),
  ]);
};

export default createShip;
