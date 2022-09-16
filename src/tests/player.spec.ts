import createPlayer from "../scripts/player";
import createShip from "../scripts/ship";
import createGameboard from "../scripts/gameboard";

test("Creates player object", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "John", "player1");
  expect(player).toHaveProperty("boardObj");
  expect(player.name).toBe("John");
  expect(player.type).toBe("Human");
  expect(player.playerNum).toBe("player1");
  expect(player.boardObj).toEqual(mockGameboard.mock.results[0].value);
});

test("AttackEnemy method works (1)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = mockGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const player = createPlayer(mockGameboard, "Eliott", "player2");
  player.attackEnemy(enemyBoard, [2, 3]);
  expect(enemySpy).lastCalledWith([2, 3]);
});

test("AttackEnemy method works (2)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = mockGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const player = createPlayer(mockGameboard, "Beep", "player1");
  player.attackEnemy(enemyBoard, [5, 4]);
  expect(enemySpy).lastCalledWith([5, 4]);
});

test("AttackEnemy method works (3)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const enemyBoard = mockGameboard();
  const enemySpy = jest.spyOn(enemyBoard, "receiveAttack");
  const player = createPlayer(mockGameboard, "John", "player2");
  player.attackEnemy(enemyBoard, [6, 8]);
  expect(enemySpy).lastCalledWith([6, 8]);
});

test("PlaceShip method works (1)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Reynald", "player1");
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  player.placeShip(createShip, [2, 3], "horizontal", "carrier");
  expect(enemySpy).lastCalledWith(createShip, [2, 3], "horizontal", "carrier");
});

test("PlaceShip method works (2)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Ayo", "player2");
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  player.placeShip(createShip, [4, 5], "vertical", "battleship");
  expect(enemySpy).lastCalledWith(createShip, [4, 5], "vertical", "battleship");
});

test("PlaceShip method works (3)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Emeka", "player2");
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  player.placeShip(createShip, [4, 8], "horizontal", "cruiser");
  expect(enemySpy).lastCalledWith(createShip, [4, 8], "horizontal", "cruiser");
});

test("PlaceShip method works (4)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Joseph", "player1");
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  player.placeShip(createShip, [9, 0], "vertical", "submarine");
  expect(enemySpy).lastCalledWith(createShip, [9, 0], "vertical", "submarine");
});

test("PlaceShip method works (5)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Elliot", "player2");
  const enemySpy = jest.spyOn(mockGameboard.mock.results[0].value, "placeShip");
  player.placeShip(createShip, [0, 9], "horizontal", "destroyer");
  expect(enemySpy).lastCalledWith(
    createShip,
    [0, 9],
    "horizontal",
    "destroyer"
  );
});

test("RemoveShip method works (1)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Rashford", "player1");
  const enemySpy = jest.spyOn(
    mockGameboard.mock.results[0].value,
    "removeShip"
  );
  player.removeShip("carrier");
  expect(enemySpy).lastCalledWith("carrier");
});

test("RemoveShip method works (2)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Goodluck", "player1");
  const enemySpy = jest.spyOn(
    mockGameboard.mock.results[0].value,
    "removeShip"
  );
  player.removeShip("battleship");
  expect(enemySpy).lastCalledWith("battleship");
});

test("RemoveShip method works (3)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Bubu", "player2");
  const enemySpy = jest.spyOn(
    mockGameboard.mock.results[0].value,
    "removeShip"
  );
  player.removeShip("cruiser");
  expect(enemySpy).lastCalledWith("cruiser");
});

test("RemoveShip method works (4)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Ben", "player1");
  const enemySpy = jest.spyOn(
    mockGameboard.mock.results[0].value,
    "removeShip"
  );
  player.removeShip("submarine");
  expect(enemySpy).lastCalledWith("submarine");
});

test("RemoveShip method works (5)", () => {
  const mockGameboard = jest.fn(createGameboard);
  const player = createPlayer(mockGameboard, "Sunday", "player2");
  const enemySpy = jest.spyOn(
    mockGameboard.mock.results[0].value,
    "removeShip"
  );
  player.removeShip("destroyer");
  expect(enemySpy).lastCalledWith("destroyer");
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
    const player = createPlayer(mockGameboard, "Donny", "player1");
    player.initialPlace(createShip);
    const ships = player.boardObj.board.reduce<string[]>((acc, cell) => {
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
    const player = createPlayer(mockGameboard, "Anu", "player2");
    player.initialPlace(createShip);
    const ships = player.boardObj.board.reduce<string[]>((acc, cell) => {
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
