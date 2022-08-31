import type { Player, BoardFunc } from "./player";
import type { Gameboard, Axis } from "./gameboard";
import createPlayer from "./player";

const createAI = (boardFunc: BoardFunc) => {
  const coordsArr: [number, number][] = [];
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }
  const { board, attackEnemy: attack, initialPlace } = createPlayer(boardFunc);

  const attackEnemy = (enemy: Gameboard) => {
    const random = Math.floor(Math.random() * coordsArr.length);
    const coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
  };

  return { board, attackEnemy, initialPlace };
};

export default createAI;
