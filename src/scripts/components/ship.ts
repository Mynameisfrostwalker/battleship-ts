import type { ChildFunc } from "../domManipulator";
import { composeElements, createElement } from "../domManipulator";

const createShip = (
  shipName: string,
  shipLength: number,
  axis: "horizontal" | "vertical"
) => {
  const elements: ChildFunc[] = [];
  for (let i = 0; i < shipLength; i += 1) {
    elements.push(createElement("div"));
  }
  return composeElements([
    [...elements],
    createElement("div", ["ship", `${shipName}`, axis], null, null, [
      ["draggable", "true"],
    ]),
  ]);
};

export default createShip;
