import type { ShipNames } from "../scripts/ship";
import type { Cell } from "../scripts/cell";
import createGameboard from "../scripts/gameboard";

describe("CreateGameboard function creates gameboard", () => {
  const gameboard = createGameboard();
  test("Gameboard length is 100", () => {
    expect(gameboard.board.length).toEqual(100);
  });

  test("Every value in newly created gameboard is empty", () => {
    expect(gameboard.board.every(({ value }) => value === "empty")).toBe(true);
  });

  test("Expect cell in gameboard to have top property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("top");
    }
  });

  test("Expect cell in gameboard to have right property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("right");
    }
  });

  test("Expect cell in gameboard to have bottom property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("bottom");
    }
  });

  test("Expect cell in gameboard to have left property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("left");
    }
  });

  test("Expect coords property in cell with coordinates between [0, 0] and [9, 9]", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        expect(
          gameboard.board.find(
            ({ coords }) => coords[0] === i && coords[1] === j
          )
        ).toBeDefined();
      }
    }
  });

  test("Gameboard array objects are connected to other cells", () => {
    const checkIfConnectedToCell = (cell: Cell) => {
      const left =
        gameboard.board.find(
          (cell2) =>
            cell.coords[0] - 1 === cell2.coords[0] &&
            cell.coords[1] === cell2.coords[1]
        ) || null;
      expect(cell.left).toBe(left);

      const right =
        gameboard.board.find(
          (cell2) =>
            cell.coords[0] + 1 === cell2.coords[0] &&
            cell.coords[1] === cell2.coords[1]
        ) || null;
      expect(cell.right).toBe(right);

      const top =
        gameboard.board.find(
          (cell2) =>
            cell.coords[0] === cell2.coords[0] &&
            cell.coords[1] + 1 === cell2.coords[1]
        ) || null;
      expect(cell.top).toBe(top);

      const bottom =
        gameboard.board.find(
          (cell2) =>
            cell.coords[0] === cell2.coords[0] &&
            cell.coords[1] - 1 === cell2.coords[1]
        ) || null;
      expect(cell.bottom).toBe(bottom);
    };

    gameboard.board.forEach(checkIfConnectedToCell);
  });
});

describe("PlaceShip method places horizontal ships on correct coordinates only", () => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const checkIfPlaced = (cell: Cell, x: number, y: number, ship: ShipNames) => {
    if (cell.coords[1] === y) {
      if (cell.coords[0] >= x && cell.coords[0] < x + shipLengths[ship]) {
        expect(cell.value).toBe(ship);
      } else {
        expect(cell.value).toBe("empty");
      }
    } else {
      expect(cell.value).toBe("empty");
    }
  };

  test("Carrier placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.carrier; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("carrier", [i, j], "horizontal");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "carrier");
        });
      }
    }
  });

  test("Battleship placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.battleship; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("battleship", [i, j], "horizontal");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "battleship");
        });
      }
    }
  });

  test("Cruiser placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.cruiser; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("cruiser", [i, j], "horizontal");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "cruiser");
        });
      }
    }
  });

  test("Submarine placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.submarine; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("submarine", [i, j], "horizontal");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "submarine");
        });
      }
    }
  });

  test("Destroyer placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.destroyer; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("destroyer", [i, j], "horizontal");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "destroyer");
        });
      }
    }
  });
});

describe("PlaceShip method places vertical ships on correct coordinates only", () => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const checkIfPlaced = (cell: Cell, x: number, y: number, ship: ShipNames) => {
    if (cell.coords[0] === x) {
      if (cell.coords[1] >= y && cell.coords[1] < y + shipLengths[ship]) {
        expect(cell.value).toBe(ship);
      } else {
        expect(cell.value).toBe("empty");
      }
    } else {
      expect(cell.value).toBe("empty");
    }
  };

  test("Carrier placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.carrier; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("carrier", [i, j], "vertical");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "carrier");
        });
      }
    }
  });

  test("Battleship placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.battleship; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("battleship", [i, j], "vertical");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "battleship");
        });
      }
    }
  });

  test("Cruiser placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.cruiser; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("cruiser", [i, j], "vertical");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "cruiser");
        });
      }
    }
  });

  test("Submarine placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.submarine; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("submarine", [i, j], "vertical");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "submarine");
        });
      }
    }
  });

  test("Destroyer placeShip method works", () => {
    for (let i = 0; i < 10 - shipLengths.destroyer; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const gameboard = createGameboard();
        gameboard.placeShip("destroyer", [i, j], "vertical");
        gameboard.board.forEach((cell) => {
          checkIfPlaced(cell, i, j, "destroyer");
        });
      }
    }
  });
});
