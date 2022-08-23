import type { Ship, ShipNames } from "../scripts/ship";
import type { Cell } from "../scripts/cell";
import createGameboard from "../scripts/gameboard";
import createShip from "../scripts/ship";

describe("CreateGameboard function creates gameboard", () => {
  const gameboard = createGameboard();
  test("Gameboard length is 100", () => {
    expect(gameboard.board.length).toEqual(100);
  });

  test("Every value in newly created gameboard is empty", () => {
    expect(gameboard.board.every(({ value }) => value === "empty")).toBe(true);
  });

  test("Expect cell in gameboard to have position property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("position");
    }
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

  const checkIfPlaced = (
    cell: Cell,
    x: number,
    y: number,
    ship: unknown,
    shipName: ShipNames
  ) => {
    if (cell.coords[1] === y) {
      if (cell.coords[0] >= x && cell.coords[0] < x + shipLengths[shipName]) {
        expect(cell.value).toBe(ship);
        expect(cell.position).toBe(cell.coords[0] - x);
      } else {
        expect(cell.value).toBe("empty");
        expect(cell.position).toBeNull();
      }
    } else {
      expect(cell.value).toBe("empty");
      expect(cell.position).toBeNull();
    }
  };

  const checkWhenNoSpace = (cell: Cell) => {
    expect(cell.value).toBe("empty");
  };

  test("Carrier placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "carrier");
        expect(mockCreateShip).toHaveBeenCalledWith("carrier");
        gameboard.board.forEach((cell) => {
          if (i + shipLengths.carrier > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "carrier"
          );
        });
      }
    }
  });

  test("Battleship placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "battleship");
        expect(mockCreateShip).toHaveBeenCalledWith("battleship");
        gameboard.board.forEach((cell) => {
          if (i + shipLengths.battleship > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "battleship"
          );
        });
      }
    }
  });

  test("Cruiser placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "cruiser");
        expect(mockCreateShip).toHaveBeenCalledWith("cruiser");
        gameboard.board.forEach((cell) => {
          if (i + shipLengths.cruiser > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "cruiser"
          );
        });
      }
    }
  });

  test("Submarine placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "submarine");
        expect(mockCreateShip).toHaveBeenCalledWith("submarine");
        gameboard.board.forEach((cell) => {
          if (i + shipLengths.submarine > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "submarine"
          );
        });
      }
    }
  });

  test("Destroyer placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "destroyer");
        expect(mockCreateShip).toHaveBeenCalledWith("destroyer");
        gameboard.board.forEach((cell) => {
          if (i + shipLengths.destroyer > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "destroyer"
          );
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

  const checkIfPlaced = (
    cell: Cell,
    x: number,
    y: number,
    ship: unknown,
    shipName: ShipNames
  ) => {
    if (cell.coords[0] === x) {
      if (cell.coords[1] >= y && cell.coords[1] < y + shipLengths[shipName]) {
        expect(cell.value).toBe(ship);
        expect(cell.position).toBe(cell.coords[1] - y);
      } else {
        expect(cell.value).toBe("empty");
        expect(cell.position).toBeNull();
      }
    } else {
      expect(cell.value).toBe("empty");
      expect(cell.position).toBeNull();
    }
  };

  const checkWhenNoSpace = (cell: Cell) => {
    expect(cell.value).toBe("empty");
  };

  test("Carrier placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "carrier");
        expect(mockCreateShip).toHaveBeenCalledWith("carrier");
        gameboard.board.forEach((cell) => {
          if (j + shipLengths.carrier > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "carrier"
          );
        });
      }
    }
  });

  test("Battleship placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "battleship");
        expect(mockCreateShip).toHaveBeenCalledWith("battleship");
        gameboard.board.forEach((cell) => {
          if (j + shipLengths.battleship > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "battleship"
          );
        });
      }
    }
  });

  test("Cruiser placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "cruiser");
        expect(mockCreateShip).toHaveBeenCalledWith("cruiser");
        gameboard.board.forEach((cell) => {
          if (j + shipLengths.cruiser > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "cruiser"
          );
        });
      }
    }
  });

  test("Submarine placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "submarine");
        expect(mockCreateShip).toHaveBeenCalledWith("submarine");
        gameboard.board.forEach((cell) => {
          if (j + shipLengths.submarine > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "submarine"
          );
        });
      }
    }
  });

  test("Destroyer placeShip method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "destroyer");
        expect(mockCreateShip).toHaveBeenCalledWith("destroyer");
        gameboard.board.forEach((cell) => {
          if (j + shipLengths.destroyer > 10) {
            checkWhenNoSpace(cell);
            return;
          }
          checkIfPlaced(
            cell,
            i,
            j,
            mockCreateShip.mock.results[0].value,
            "destroyer"
          );
        });
      }
    }
  });
});

describe("Hit method works changes value returned by horizontal ship get method to hit", () => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const checkIfHit = (
    cell: Cell,
    x: number,
    y: number,
    shipName: ShipNames
  ) => {
    if (cell.coords[1] === y) {
      if (
        cell.coords[0] >= x &&
        cell.coords[0] < x + shipLengths[shipName] &&
        x + shipLengths[shipName] <= 10
      ) {
        expect(cell.value).not.toBe("empty");
        expect(cell.value).not.toBe("hit");
        if (
          cell.value !== "empty" &&
          cell.value !== "hit" &&
          cell.position !== null
        ) {
          expect(cell.value.get(cell.position)).toBe("hit");
        }
      } else {
        expect(cell.value).toBe("hit");
      }
    } else {
      expect(cell.value).toBe("hit");
    }
  };

  test("Carrier hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "carrier");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "carrier");
        });
      }
    }
  });

  test("Battleship hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "battleship");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "battleship");
        });
      }
    }
  });

  test("Cruiser hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "cruiser");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "cruiser");
        });
      }
    }
  });

  test("Submarine hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "submarine");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "submarine");
        });
      }
    }
  });

  test("Destroyer hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "horizontal", "destroyer");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "destroyer");
        });
      }
    }
  });
});

describe("Hit method works changes value returned by vertical ship get method to hit", () => {
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };

  const checkIfHit = (
    cell: Cell,
    x: number,
    y: number,
    shipName: ShipNames
  ) => {
    if (cell.coords[0] === x) {
      if (
        cell.coords[1] >= y &&
        cell.coords[1] < y + shipLengths[shipName] &&
        y + shipLengths[shipName] <= 10
      ) {
        expect(cell.value).not.toBe("empty");
        expect(cell.value).not.toBe("hit");
        if (
          cell.value !== "empty" &&
          cell.value !== "hit" &&
          cell.position !== null
        ) {
          expect(cell.value.get(cell.position)).toBe("hit");
        }
      } else {
        expect(cell.value).toBe("hit");
      }
    } else {
      expect(cell.value).toBe("hit");
    }
  };

  test("Carrier hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "carrier");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "carrier");
        });
      }
    }
  });

  test("Battleship hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "battleship");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "battleship");
        });
      }
    }
  });

  test("Cruiser hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "cruiser");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "cruiser");
        });
      }
    }
  });

  test("Submarine hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "submarine");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "submarine");
        });
      }
    }
  });

  test("Destroyer hit method works", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "destroyer");
        gameboard.board.forEach((cell) => {
          gameboard.receiveAttack(cell.coords);
          checkIfHit(cell, i, j, "destroyer");
        });
      }
    }
  });
});
