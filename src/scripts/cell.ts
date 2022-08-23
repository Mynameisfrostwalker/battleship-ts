import type { Ship } from "./ship";

type BoardValues = Ship | "empty" | "hit";

interface Cell {
  readonly coords: [number, number];
  value: BoardValues;
  /*
  Position denotes what area of ship is located on cell. 
  Null means no ship;
  0 means front of ship;
  */
  position: null | number;
  top: Cell | null;
  right: Cell | null;
  bottom: Cell | null;
  left: Cell | null;
}

const createCell = (coords: [number, number], value: "empty"): Cell => ({
  coords,
  value,
  position: null,
  top: null,
  right: null,
  bottom: null,
  left: null,
});

export type { Cell };
export default createCell;
