type ShipNames =
  | "carrier"
  | "battleship"
  | "cruiser"
  | "submarine"
  | "destroyer";

type ShipValues = ShipNames | "hit";

interface Ship {
  name: ShipNames;
  axis: "horizontal" | "vertical";
  length: number;
  get(num?: number): ShipValues[] | ShipValues;
  hit(num: number): void;
  isSunk(): boolean;
}

const createShip = (name: ShipNames, axis: "horizontal" | "vertical"): Ship => {
  const shipArray: ShipValues[] = [];
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  for (let i = 1; i <= shipLengths[name]; i += 1) {
    shipArray.push(name);
  }

  const get = (num?: number) =>
    num !== undefined && num >= 0 && num < shipLengths[name]
      ? shipArray[num]
      : shipArray;

  const hit = (num: number) => {
    if (num >= 0 && num < shipLengths[name]) {
      shipArray[num] = "hit";
    }
  };

  const isSunk = () => shipArray.every((value) => value === "hit");

  return { name, axis, length: shipLengths[name], get, hit, isSunk };
};

export type { ShipValues, ShipNames, Ship };
export default createShip;
