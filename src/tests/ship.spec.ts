import createShip from "../scripts/ship";

describe("Ship object has correct name", () => {
  test("Carrier has proper name", () => {
    expect(createShip("carrier").name).toBe("carrier");
  });

  test("Battleship has proper name", () => {
    expect(createShip("battleship").name).toBe("battleship");
  });

  test("Cruiser has proper name", () => {
    expect(createShip("cruiser").name).toBe("cruiser");
  });

  test("Submarine has proper name", () => {
    expect(createShip("submarine").name).toBe("submarine");
  });

  test("Destroyer has proper name", () => {
    expect(createShip("destroyer").name).toBe("destroyer");
  });
});

describe("Ship object has correct length", () => {
  test("Carrier has proper length", () => {
    expect(createShip("carrier").length).toBe(5);
  });

  test("Battleship has proper length", () => {
    expect(createShip("battleship").length).toBe(4);
  });

  test("Cruiser has proper length", () => {
    expect(createShip("cruiser").length).toBe(3);
  });

  test("Submarine has proper length", () => {
    expect(createShip("submarine").length).toBe(3);
  });

  test("Destroyer has proper length", () => {
    expect(createShip("destroyer").length).toBe(2);
  });
});

describe("Ship get method returns ship array if called with parameters", () => {
  test("Carrier get method returns ship array", () => {
    const carrier = createShip("carrier").get();
    expect(carrier).toEqual([
      "carrier",
      "carrier",
      "carrier",
      "carrier",
      "carrier",
    ]);
  });

  test("Battleship get method returns ship array", () => {
    const battleship = createShip("battleship").get();
    expect(battleship).toEqual([
      "battleship",
      "battleship",
      "battleship",
      "battleship",
    ]);
  });

  test("Cruiser get method returns ship array", () => {
    const cruiser = createShip("cruiser").get();
    expect(cruiser).toEqual(["cruiser", "cruiser", "cruiser"]);
  });

  test("Submarine get method returns ship array", () => {
    const submarine = createShip("submarine").get();
    expect(submarine).toEqual(["submarine", "submarine", "submarine"]);
  });

  test("Destroyer get method returns ship array", () => {
    const destroyer = createShip("destroyer").get();
    expect(destroyer).toEqual(["destroyer", "destroyer"]);
  });
});

describe("Ship get method returns name at parameter position if within ship length", () => {
  test("Carrier get method returns name", () => {
    const carrier = createShip("carrier");
    for (let i = 0; i < carrier.length; i += 1) {
      expect(carrier.get(i)).toBe("carrier");
    }
  });

  test("Battleship get method returns name", () => {
    const battleship = createShip("battleship");
    for (let i = 0; i < battleship.length; i += 1) {
      expect(battleship.get(i)).toBe("battleship");
    }
  });

  test("Cruiser get method returns name", () => {
    const cruiser = createShip("cruiser");
    for (let i = 0; i < cruiser.length; i += 1) {
      expect(cruiser.get(i)).toBe("cruiser");
    }
  });

  test("Submarine get method returns name", () => {
    const submarine = createShip("submarine");
    for (let i = 0; i < submarine.length; i += 1) {
      expect(submarine.get(i)).toBe("submarine");
    }
  });

  test("Destroyer get method returns name", () => {
    const destroyer = createShip("destroyer");
    for (let i = 0; i < destroyer.length; i += 1) {
      expect(destroyer.get(i)).toBe("destroyer");
    }
  });
});

describe("Ship get method returns ship if not within ship length", () => {
  test("Carrier get method returns ship if not within ship length", () => {
    expect(createShip("carrier").get(-3)).toEqual([
      "carrier",
      "carrier",
      "carrier",
      "carrier",
      "carrier",
    ]);
  });

  test("Battleship get method returns ship if not within ship length", () => {
    expect(createShip("battleship").get(-2)).toEqual([
      "battleship",
      "battleship",
      "battleship",
      "battleship",
    ]);
  });

  test("Cruiser get method returns ship if not within ship length", () => {
    expect(createShip("cruiser").get(100)).toEqual([
      "cruiser",
      "cruiser",
      "cruiser",
    ]);
  });

  test("Submarine get method returns ship if not within ship length", () => {
    expect(createShip("submarine").get(-2)).toEqual([
      "submarine",
      "submarine",
      "submarine",
    ]);
  });

  test("Destroyer get method returns ship if not within ship length", () => {
    expect(createShip("destroyer").get(224)).toEqual([
      "destroyer",
      "destroyer",
    ]);
  });
});

describe("Ship hit method updates position hit status", () => {
  test("Carrier hit method works", () => {
    const carrier = createShip("carrier");
    for (let i = 0; i < carrier.length; i += 1) {
      carrier.hit(i);
      expect(carrier.get(i)).toBe("hit");
    }
  });

  test("Battleship hit method works", () => {
    const battleship = createShip("battleship");
    for (let i = 0; i < battleship.length; i += 1) {
      battleship.hit(i);
      expect(battleship.get(i)).toBe("hit");
    }
  });

  test("Cruiser hit method works", () => {
    const cruiser = createShip("cruiser");
    for (let i = 0; i < cruiser.length; i += 1) {
      cruiser.hit(i);
      expect(cruiser.get(i)).toBe("hit");
    }
  });

  test("Submarine hit method works", () => {
    const submarine = createShip("submarine");
    for (let i = 0; i < submarine.length; i += 1) {
      submarine.hit(i);
      expect(submarine.get(i)).toBe("hit");
    }
  });

  test("Destroyer hit method works", () => {
    const destroyer = createShip("destroyer");
    for (let i = 0; i < destroyer.length; i += 1) {
      destroyer.hit(i);
      expect(destroyer.get(i)).toBe("hit");
    }
  });
});

describe("isSunk function returns sunk status", () => {
  test("Carrier isSunk function works", () => {
    const carrier = createShip("carrier");
    for (let i = 0; i < carrier.length; i += 1) {
      carrier.hit(i);
      if (i === carrier.length - 1) {
        expect(carrier.isSunk()).toBe(true);
      } else {
        expect(carrier.isSunk()).toBe(false);
      }
    }
  });

  test("Battleship isSunk function works", () => {
    const battleship = createShip("battleship");
    for (let i = 0; i < battleship.length; i += 1) {
      battleship.hit(i);
      if (i === battleship.length - 1) {
        expect(battleship.isSunk()).toBe(true);
      } else {
        expect(battleship.isSunk()).toBe(false);
      }
    }
  });

  test("Cruiser isSunk function works", () => {
    const cruiser = createShip("cruiser");
    for (let i = 0; i < cruiser.length; i += 1) {
      cruiser.hit(i);
      if (i === cruiser.length - 1) {
        expect(cruiser.isSunk()).toBe(true);
      } else {
        expect(cruiser.isSunk()).toBe(false);
      }
    }
  });

  test("Submarine isSunk function works", () => {
    const submarine = createShip("submarine");
    for (let i = 0; i < submarine.length; i += 1) {
      submarine.hit(i);
      if (i === submarine.length - 1) {
        expect(submarine.isSunk()).toBe(true);
      } else {
        expect(submarine.isSunk()).toBe(false);
      }
    }
  });

  test("Destroyer isSunk function works", () => {
    const destroyer = createShip("destroyer");
    for (let i = 0; i < destroyer.length; i += 1) {
      destroyer.hit(i);
      if (i === destroyer.length - 1) {
        expect(destroyer.isSunk()).toBe(true);
      } else {
        expect(destroyer.isSunk()).toBe(false);
      }
    }
  });
});
