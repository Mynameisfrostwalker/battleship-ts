import createAI from "../scripts/aiPlayer";
import createShip from "../scripts/ship";
import createGameboard from "../scripts/gameboard";

test("Creates AI player object", () => {
  const mockGameboard = jest.fn(createGameboard);
  const AI = createAI(mockGameboard, "player2");
  expect(AI).toHaveProperty("boardObj");
  expect(AI.name).toBe("AI");
  expect(AI.type).toBe("AI");
  expect(AI.playerNum).toBe("player2");
  expect(AI.boardObj).toEqual(mockGameboard.mock.results[0].value);
});

describe("Testing attackEnemy method", () => {
  beforeEach(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.7);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("AttackEnemy method works (1)", () => {
    const mockGameboard = jest.fn(createGameboard);
    const enemyBoard = mockGameboard();
    const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
    const AI = createAI(mockGameboard, "player2");
    AI.attackEnemy(enemyBoard);
    const firstCoord = enemySpy.mock.calls[0][0][0];
    const secondCoord = enemySpy.mock.calls[0][0][1];
    expect(firstCoord).toBeGreaterThanOrEqual(0);
    expect(firstCoord).toBeLessThanOrEqual(9);
    expect(secondCoord).toBeGreaterThanOrEqual(0);
    expect(secondCoord).toBeLessThanOrEqual(9);
  });

  test("AttackEnemy method does not hit same coords twice (1)", () => {
    const mockGameboard = jest.fn(createGameboard);
    const enemyBoard = createGameboard();
    const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
    const AI = createAI(mockGameboard, "player1");
    AI.attackEnemy(enemyBoard);
    AI.attackEnemy(enemyBoard);
    const firstCall = enemySpy.mock.calls[0][0];
    const secondCall = enemySpy.mock.calls[1][0];
    expect(firstCall).not.toEqual(secondCall);
  });

  test("AttackEnemy method does not hit same coords twice (2)", () => {
    const mockGameboard = jest.fn(createGameboard);
    const enemyBoard = createGameboard();
    const AI = createAI(mockGameboard, "player1");
    for (let i = 0; i < enemyBoard.board.length; i += 1) {
      AI.attackEnemy(enemyBoard);
    }
    for (let i = 0; i < enemyBoard.board.length; i += 1) {
      expect(enemyBoard.board[i].value).toBe("hit");
    }
  });
});

describe("Initial place method works", () => {
  beforeEach(() => {
    jest
      .spyOn(global.Math, "random")
      .mockReturnValue(0.7)
      .mockReturnValueOnce(0.4)
      .mockReturnValueOnce(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("Initial place method places five ships (1)", () => {
    const mockGameboard = jest.fn(createGameboard);
    const AI = createAI(mockGameboard, "player2");
    AI.initialPlace(createShip);
    const ships = AI.boardObj.board.reduce<string[]>((acc, cell) => {
      if (cell.value !== "hit" && cell.value !== "empty") {
        if (!acc.includes(cell.value.name)) {
          acc.push(cell.value.name);
          return acc;
        }
      }
      return acc;
    }, []);
    expect(ships.length).toBe(5);
  });

  test("Initial place method places five ships (2)", () => {
    const mockGameboard = jest.fn(createGameboard);
    const AI = createAI(mockGameboard, "player1");
    AI.initialPlace(createShip);
    const ships = AI.boardObj.board.reduce<string[]>((acc, cell) => {
      if (cell.value !== "hit" && cell.value !== "empty") {
        if (!acc.includes(cell.value.name)) {
          acc.push(cell.value.name);
          return acc;
        }
      }
      return acc;
    }, []);
    expect(ships.length).toBe(5);
  });
});
