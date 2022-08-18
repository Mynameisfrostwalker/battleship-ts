import type { ShipValues } from "./ship";

type BoardValues = ShipValues | "empty";

interface Gameboard {
  board: BoardValues[][];
}

const createGameboard = (): Gameboard => {
  const gameBoardArr: BoardValues[][] = [];
  for (let i = 0; i < 10; i += 1) {
    const arr: "empty"[] = [];
    for (let j = 0; j < 10; j += 1) {
      arr.push("empty");
    }
    gameBoardArr.push(arr);
  }

  return { board: gameBoardArr };
};

export type { BoardValues };
export default createGameboard;
