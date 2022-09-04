import type { BoardFunc } from "./player";
import type { Gameboard, Axis } from "./gameboard";
import type { Ship, ShipNames } from "./ship";
import createPlayer from "./player";

interface AIPlayer {
  name: string;
  type: "AI";
  boardObj: Gameboard;
  attackEnemy: (enemy: Gameboard) => void;
  initialPlace: (shipFunc: (name: ShipNames, axis: Axis) => Ship) => void;
}

const createAI = (boardFunc: BoardFunc): AIPlayer => {
  const coordsArr: [number, number][] = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }
  const {
    name,
    boardObj,
    attackEnemy: attack,
    initialPlace,
  } = createPlayer(boardFunc, "AI");

  const attackEnemy = (enemy: Gameboard) => {
    const random = Math.floor(Math.random() * coordsArr.length);
    const coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
  };

  return { name, type: "AI", boardObj, attackEnemy, initialPlace };
};

export type { AIPlayer };
export default createAI;
