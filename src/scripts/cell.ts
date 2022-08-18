import type { ShipNames } from "./ship";
import type { BoardValues } from "./gameboard";

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

export default createCell;
