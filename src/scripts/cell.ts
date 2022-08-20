import type { ShipNames, ShipValues } from "./ship";

type BoardValues = ShipValues | "empty";

interface Cell {
  readonly coords: [number, number];
  value: BoardValues;
  top: Cell | null;
  right: Cell | null;
  bottom: Cell | null;
  left: Cell | null;
}

const createCell = (
  coords: [number, number],
  value: ShipNames | "empty"
): Cell => ({
  coords,
  value,
  top: null,
  right: null,
  bottom: null,
  left: null,
});

export type { Cell };
export default createCell;
