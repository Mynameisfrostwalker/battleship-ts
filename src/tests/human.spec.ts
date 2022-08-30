import createHuman from "../scripts/human";
import createShip from "../scripts/ship";
import createGameboard from "../scripts/gameboard";

test("Creates human player object", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  expect(human).toHaveProperty("board");
  expect(human.board).toEqual(mockGameboard.mock.results[0].value);
});

test("attackEnemy method works (1)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = createGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const human = createHuman(mockGameboard);
  human.attackEnemy(enemyBoard, [2, 3]);
  expect(enemySpy).lastCalledWith([2, 3]);
});

test("attackEnemy method works (2)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = createGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const human = createHuman(mockGameboard);
  human.attackEnemy(enemyBoard, [5, 4]);
  expect(enemySpy).lastCalledWith([5, 4]);
});

test("attackEnemy method works (3)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = createGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const human = createHuman(mockGameboard);
  human.attackEnemy(enemyBoard, [6, 8]);
  expect(enemySpy).lastCalledWith([6, 8]);
});

test("placeShips method works (1)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  human.placeShip(createShip, [2, 3], "horizontal", "carrier");
  expect(enemySpy).lastCalledWith(createShip, [2, 3], "horizontal", "carrier");
});

test("placeShips method works (2)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  human.placeShip(createShip, [4, 5], "vertical", "battleship");
  expect(enemySpy).lastCalledWith(createShip, [4, 5], "vertical", "battleship");
});

test("placeShips method works (3)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  human.placeShip(createShip, [4, 8], "horizontal", "cruiser");
  expect(enemySpy).lastCalledWith(createShip, [4, 8], "horizontal", "cruiser");
});

test("placeShips method works (4)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  human.placeShip(createShip, [9, 0], "vertical", "submarine");
  expect(enemySpy).lastCalledWith(createShip, [9, 0], "vertical", "submarine");
});

test("placeShips method works (5)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const human = createHuman(mockGameboard);
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  human.placeShip(createShip, [0, 9], "horizontal", "destroyer");
  expect(enemySpy).lastCalledWith(
    createShip,
    [0, 9],
    "horizontal",
    "destroyer"
  );
});
