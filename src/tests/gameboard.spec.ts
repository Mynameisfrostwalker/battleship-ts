import type { ShipNames } from "../scripts/ship";
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
      const top = gameboard.board.find(
        (cell) =>
          gameboard.board[i].coords[0] === cell.coords[0] &&
          gameboard.board[i].coords[1] - 1 === cell.coords[1]
      );
      if (gameboard.board[i].coords[1] !== 0) {
        expect(gameboard.board[i].top?.coords).toBe(top?.coords);
      } else {
        expect(gameboard.board[i].top).toBeNull();
      }
    }
  });

  test("Expect cell in gameboard to have right property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("right");

      const right = gameboard.board.find(
        (cell) =>
          gameboard.board[i].coords[0] + 1 === cell.coords[0] &&
          gameboard.board[i].coords[1] === cell.coords[1]
      );
      if (gameboard.board[i].coords[0] !== 9) {
        expect(gameboard.board[i].right?.coords).toBe(right?.coords);
      } else {
        expect(gameboard.board[i].right).toBeNull();
      }
    }
  });

  test("Expect cell in gameboard to have bottom property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("bottom");
      const bottom = gameboard.board.find(
        (cell) =>
          gameboard.board[i].coords[0] === cell.coords[0] &&
          gameboard.board[i].coords[1] + 1 === cell.coords[1]
      );
      if (gameboard.board[i].coords[1] !== 9) {
        expect(gameboard.board[i].bottom?.coords).toBe(bottom?.coords);
      } else {
        expect(gameboard.board[i].bottom).toBeNull();
      }
    }
  });

  test("Expect cell in gameboard to have left property", () => {
    for (let i = 0; i < gameboard.board.length; i += 1) {
      expect(gameboard.board[i]).toHaveProperty("left");
      const left = gameboard.board.find(
        (cell) =>
          gameboard.board[i].coords[0] - 1 === cell.coords[0] &&
          gameboard.board[i].coords[1] === cell.coords[1]
      );
      if (gameboard.board[i].coords[0] !== 0) {
        expect(gameboard.board[i].left?.coords).toBe(left?.coords);
      } else {
        expect(gameboard.board[i].left).toBeNull();
      }
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
        expect(mockCreateShip).toHaveBeenCalledWith("carrier", "horizontal");
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
        expect(mockCreateShip).toHaveBeenCalledWith("battleship", "horizontal");
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
        expect(mockCreateShip).toHaveBeenCalledWith("cruiser", "horizontal");
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
        expect(mockCreateShip).toHaveBeenCalledWith("submarine", "horizontal");
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
        expect(mockCreateShip).toHaveBeenCalledWith("destroyer", "horizontal");
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

  test("PlaceShip method works on carrier", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "carrier");
        expect(mockCreateShip).toHaveBeenCalledWith("carrier", "vertical");
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

  test("PlaceShip method works on battleship", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "battleship");
        expect(mockCreateShip).toHaveBeenCalledWith("battleship", "vertical");
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

  test("PlaceShip method works on cruiser", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "cruiser");
        expect(mockCreateShip).toHaveBeenCalledWith("cruiser", "vertical");
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

  test("PlaceShip method works on submarine", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "submarine");
        expect(mockCreateShip).toHaveBeenCalledWith("submarine", "vertical");
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

  test("PlaceShip method works on destroyer", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const mockCreateShip = jest.fn(createShip);
        const gameboard = createGameboard();
        gameboard.placeShip(mockCreateShip, [i, j], "vertical", "destroyer");
        expect(mockCreateShip).toHaveBeenCalledWith("destroyer", "vertical");
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

describe("ReceiveAttack method works changes value returned by horizontal ship get method to hit", () => {
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

describe("ReceiveAttack method works changes value returned by vertical ship get method to hit", () => {
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

  test("ReceiveAttack method works on carrier", () => {
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

  test("ReceiveAttack method works on battleship", () => {
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

  test("ReceiveAttack method works cruiser", () => {
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

  test("ReceiveAttack method works submarine", () => {
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

  test("ReceiveAttack method works on destroyer", () => {
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

// Dont need to test every possible situation!!!! Not practical. Tests will be simpler from now on!
// T0DO: Refactor previous tests to be simpler.

describe("Two ships can't share same cell", () => {
  test("Ships do not overlap", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "carrier");
    gameboard.placeShip(mockCreateShip, [1, 3], "horizontal", "battleship");
    const cell = gameboard.board.find(
      (obj) => obj.coords[0] === 1 && obj.coords[1] === 3
    );
    const cell2 = gameboard.board.find(
      (obj) => obj.coords[0] === 2 && obj.coords[1] === 3
    );
    const cell3 = gameboard.board.find(
      (obj) => obj.coords[0] === 3 && obj.coords[1] === 3
    );
    expect(cell?.value).toBe("empty");
    expect(cell2?.value).toEqual(mockCreateShip.mock.results[0].value);
    expect(cell3?.value).toBe("empty");
  });

  test("Cannot place ship on occupied cell", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "submarine");
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "destroyer");
    const cell = gameboard.board.find(
      (obj) => obj.coords[0] === 2 && obj.coords[1] === 2
    );
    expect(cell?.value).toBe(mockCreateShip.mock.results[0].value);
  });
});

describe("areAllSunk function returns true when all ships are sunk", () => {
  test("works with one ship", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "destroyer");
    gameboard.board.forEach((cell) => {
      gameboard.receiveAttack(cell.coords);
    });
    expect(gameboard.areAllSunk()).toBe(true);
  });

  test("works with two ships", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "destroyer");
    gameboard.placeShip(mockCreateShip, [4, 2], "horizontal", "submarine");
    gameboard.board.forEach((cell) => {
      gameboard.receiveAttack(cell.coords);
    });
    expect(gameboard.areAllSunk()).toBe(true);
  });

  test("works with five ships", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "destroyer");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "submarine");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.placeShip(mockCreateShip, [1, 8], "horizontal", "battleship");
    gameboard.placeShip(mockCreateShip, [7, 3], "vertical", "carrier");
    gameboard.board.forEach((cell) => {
      gameboard.receiveAttack(cell.coords);
    });
    expect(gameboard.areAllSunk()).toBe(true);
  });
});

describe("areAllSunk function returns false when not all ships are sunk", () => {
  test("no ship is sunk", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "destroyer");
    expect(gameboard.areAllSunk()).toBe(false);
  });

  test("when one ship is sunk", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 2], "vertical", "destroyer");
    gameboard.placeShip(mockCreateShip, [4, 2], "horizontal", "submarine");
    gameboard.receiveAttack([2, 2]);
    gameboard.receiveAttack([2, 3]);
    expect(gameboard.areAllSunk()).toBe(false);
  });

  test("works with five ships", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "destroyer");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "submarine");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.placeShip(mockCreateShip, [1, 8], "horizontal", "battleship");
    gameboard.placeShip(mockCreateShip, [7, 3], "vertical", "carrier");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        if (cell.value.name === "carrier") {
          return;
        }
      }
      gameboard.receiveAttack(cell.coords);
    });
    expect(gameboard.areAllSunk()).toBe(false);
  });
});

describe("getAvailableCoords method returns available coordinates", () => {
  test("Works with zero ships already placed", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    const availableCoords = gameboard.getAvailableCoords(
      "horizontal",
      "cruiser",
      mockCreateShip
    );
    expect(availableCoords).toContainEqual([0, 0]);
    expect(availableCoords).toContainEqual([3, 4]);
    expect(availableCoords).not.toContainEqual([9, 5]);
    expect(availableCoords).not.toContainEqual([8, 8]);
  });

  test("Works with one ships already placed", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [3, 4], "horizontal", "carrier");
    const availableCoords = gameboard.getAvailableCoords(
      "vertical",
      "battleship",
      mockCreateShip
    );
    expect(availableCoords).toContainEqual([0, 0]);
    expect(availableCoords).toContainEqual([2, 4]);
    expect(availableCoords).toContainEqual([1, 2]);
    expect(availableCoords).toContainEqual([9, 5]);
    expect(availableCoords).toContainEqual([5, 5]);
    expect(availableCoords).not.toContainEqual([3, 3]);
    expect(availableCoords).not.toContainEqual([4, 4]);
    expect(availableCoords).not.toContainEqual([3, 4]);
    expect(availableCoords).not.toContainEqual([8, 8]);
  });

  test("Works with four ships already placed", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "destroyer");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "carrier");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.placeShip(mockCreateShip, [5, 8], "horizontal", "battleship");
    const availableCoords = gameboard.getAvailableCoords(
      "vertical",
      "submarine",
      mockCreateShip
    );

    expect(availableCoords).toContainEqual([0, 0]);
    expect(availableCoords).toContainEqual([2, 4]);
    expect(availableCoords).toContainEqual([3, 4]);
    expect(availableCoords).toContainEqual([9, 5]);
    expect(availableCoords).not.toContainEqual([8, 8]);
    expect(availableCoords).not.toContainEqual([4, 4]);
    expect(availableCoords).not.toContainEqual([3, 0]);
  });
});

describe("RemoveShips function works", () => {
  test("Can remove carrier", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "carrier");
    gameboard.removeShip("carrier");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        expect(cell.value.name).not.toBe("carrier");
        expect(cell.position).toBeNull();
      }
    });
  });

  test("Can remove battleship", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [5, 7], "horizontal", "battleship");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "carrier");
    gameboard.removeShip("battleship");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        expect(cell.value.name).not.toBe("battleship");
        return;
      }
      expect(cell.position).toBeNull();
    });
  });

  test("Can remove cruiser", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "cruiser");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.placeShip(mockCreateShip, [5, 8], "horizontal", "battleship");
    gameboard.removeShip("cruiser");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        expect(cell.value.name).not.toBe("cruiser");
        return;
      }
      expect(cell.position).toBeNull();
    });
  });

  test("Can remove submarine", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "submarine");
    gameboard.placeShip(mockCreateShip, [4, 2], "horizontal", "destroyer");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "carrier");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.removeShip("submarine");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        expect(cell.value.name).not.toBe("submarine");
        return;
      }
      expect(cell.position).toBeNull();
    });
  });

  test("Can remove destroyer", () => {
    const mockCreateShip = jest.fn(createShip);
    const gameboard = createGameboard();
    gameboard.placeShip(mockCreateShip, [2, 1], "horizontal", "carrier");
    gameboard.placeShip(mockCreateShip, [4, 2], "horizontal", "destroyer");
    gameboard.placeShip(mockCreateShip, [1, 3], "vertical", "carrier");
    gameboard.placeShip(mockCreateShip, [4, 3], "vertical", "cruiser");
    gameboard.placeShip(mockCreateShip, [5, 8], "horizontal", "battleship");
    gameboard.removeShip("destroyer");
    gameboard.board.forEach((cell) => {
      if (cell.value !== "empty" && cell.value !== "hit") {
        expect(cell.value.name).not.toBe("destroyer");
        return;
      }
      expect(cell.position).toBeNull();
    });
  });
});
