import createShip from "../scripts/ship";

describe("Ship object has correct name", () => {
  test("Carrier has proper name", () => {
    expect(createShip("carrier", "horizontal").name).toBe("carrier");
  });

  test("Battleship has proper name", () => {
    expect(createShip("battleship", "vertical").name).toBe("battleship");
  });

  test("Cruiser has proper name", () => {
    expect(createShip("cruiser", "horizontal").name).toBe("cruiser");
  });

  test("Submarine has proper name", () => {
    expect(createShip("submarine", "vertical").name).toBe("submarine");
  });

  test("Destroyer has proper name", () => {
    expect(createShip("destroyer", "horizontal").name).toBe("destroyer");
  });
});

describe("Ship object has correct axis (1)", () => {
  test("Carrier has proper axis", () => {
    expect(createShip("carrier", "horizontal").axis).toBe("horizontal");
  });

  test("Battleship has proper axis", () => {
    expect(createShip("battleship", "horizontal").axis).toBe("horizontal");
  });

  test("Cruiser has proper axis", () => {
    expect(createShip("cruiser", "horizontal").axis).toBe("horizontal");
  });

  test("Submarine has proper axis", () => {
    expect(createShip("submarine", "horizontal").axis).toBe("horizontal");
  });

  test("Destroyer has proper axis", () => {
    expect(createShip("destroyer", "horizontal").axis).toBe("horizontal");
  });
});

describe("Ship object has correct axis (1)", () => {
  test("Carrier has proper axis", () => {
    expect(createShip("carrier", "vertical").axis).toBe("vertical");
  });

  test("Battleship has proper axis", () => {
    expect(createShip("battleship", "vertical").axis).toBe("vertical");
  });

  test("Cruiser has proper axis", () => {
    expect(createShip("cruiser", "vertical").axis).toBe("vertical");
  });

  test("Submarine has proper axis", () => {
    expect(createShip("submarine", "vertical").axis).toBe("vertical");
  });

  test("Destroyer has proper axis", () => {
    expect(createShip("destroyer", "vertical").axis).toBe("vertical");
  });
});

describe("Ship object has correct length", () => {
  test("Carrier has proper length", () => {
    expect(createShip("carrier", "horizontal").length).toBe(5);
  });

  test("Battleship has proper length", () => {
    expect(createShip("battleship", "vertical").length).toBe(4);
  });

  test("Cruiser has proper length", () => {
    expect(createShip("cruiser", "horizontal").length).toBe(3);
  });

  test("Submarine has proper length", () => {
    expect(createShip("submarine", "vertical").length).toBe(3);
  });

  test("Destroyer has proper length", () => {
    expect(createShip("destroyer", "horizontal").length).toBe(2);
  });
});

describe("Ship get method returns ship array if called with parameters", () => {
  test("Carrier get method returns ship array", () => {
    const carrier = createShip("carrier", "vertical").get();
    expect(carrier).toEqual([
      "carrier",
      "carrier",
      "carrier",
      "carrier",
      "carrier",
    ]);
  });

  test("Battleship get method returns ship array", () => {
    const battleship = createShip("battleship", "horizontal").get();
    expect(battleship).toEqual([
      "battleship",
      "battleship",
      "battleship",
      "battleship",
    ]);
  });

  test("Cruiser get method returns ship array", () => {
    const cruiser = createShip("cruiser", "horizontal").get();
    expect(cruiser).toEqual(["cruiser", "cruiser", "cruiser"]);
  });

  test("Submarine get method returns ship array", () => {
    const submarine = createShip("submarine", "vertical").get();
    expect(submarine).toEqual(["submarine", "submarine", "submarine"]);
  });

  test("Destroyer get method returns ship array", () => {
    const destroyer = createShip("destroyer", "horizontal").get();
    expect(destroyer).toEqual(["destroyer", "destroyer"]);
  });
});

describe("Ship get method returns name at parameter position if within ship length", () => {
  test("Carrier get method returns name", () => {
    const carrier = createShip("carrier", "vertical");
    for (let i = 0; i < carrier.length; i += 1) {
      expect(carrier.get(i)).toBe("carrier");
    }
  });

  test("Battleship get method returns name", () => {
    const battleship = createShip("battleship", "horizontal");
    for (let i = 0; i < battleship.length; i += 1) {
      expect(battleship.get(i)).toBe("battleship");
    }
  });

  test("Cruiser get method returns name", () => {
    const cruiser = createShip("cruiser", "vertical");
    for (let i = 0; i < cruiser.length; i += 1) {
      expect(cruiser.get(i)).toBe("cruiser");
    }
  });

  test("Submarine get method returns name", () => {
    const submarine = createShip("submarine", "horizontal");
    for (let i = 0; i < submarine.length; i += 1) {
      expect(submarine.get(i)).toBe("submarine");
    }
  });

  test("Destroyer get method returns name", () => {
    const destroyer = createShip("destroyer", "vertical");
    for (let i = 0; i < destroyer.length; i += 1) {
      expect(destroyer.get(i)).toBe("destroyer");
    }
  });
});

describe("Ship get method returns ship if not within ship length", () => {
  test("Carrier get method returns ship if not within ship length", () => {
    expect(createShip("carrier", "horizontal").get(-3)).toEqual([
      "carrier",
      "carrier",
      "carrier",
      "carrier",
      "carrier",
    ]);
  });

  test("Battleship get method returns ship if not within ship length", () => {
    expect(createShip("battleship", "vertical").get(-2)).toEqual([
      "battleship",
      "battleship",
      "battleship",
      "battleship",
    ]);
  });

  test("Cruiser get method returns ship if not within ship length", () => {
    expect(createShip("cruiser", "horizontal").get(100)).toEqual([
      "cruiser",
      "cruiser",
      "cruiser",
    ]);
  });

  test("Submarine get method returns ship if not within ship length", () => {
    expect(createShip("submarine", "vertical").get(-2)).toEqual([
      "submarine",
      "submarine",
      "submarine",
    ]);
  });

  test("Destroyer get method returns ship if not within ship length", () => {
    expect(createShip("destroyer", "horizontal").get(224)).toEqual([
      "destroyer",
      "destroyer",
    ]);
  });
});

describe("Ship hit method updates position hit status", () => {
  test("Carrier hit method works", () => {
    const carrier = createShip("carrier", "vertical");
    for (let i = 0; i < carrier.length; i += 1) {
      carrier.hit(i);
      expect(carrier.get(i)).toBe("hit");
    }
  });

  test("Battleship hit method works", () => {
    const battleship = createShip("battleship", "horizontal");
    for (let i = 0; i < battleship.length; i += 1) {
      battleship.hit(i);
      expect(battleship.get(i)).toBe("hit");
    }
  });

  test("Cruiser hit method works", () => {
    const cruiser = createShip("cruiser", "vertical");
    for (let i = 0; i < cruiser.length; i += 1) {
      cruiser.hit(i);
      expect(cruiser.get(i)).toBe("hit");
    }
  });

  test("Submarine hit method works", () => {
    const submarine = createShip("submarine", "horizontal");
    for (let i = 0; i < submarine.length; i += 1) {
      submarine.hit(i);
      expect(submarine.get(i)).toBe("hit");
    }
  });

  test("Destroyer hit method works", () => {
    const destroyer = createShip("destroyer", "vertical");
    for (let i = 0; i < destroyer.length; i += 1) {
      destroyer.hit(i);
      expect(destroyer.get(i)).toBe("hit");
    }
  });
});

describe("isSunk function returns sunk status", () => {
  test("Carrier isSunk function works", () => {
    const carrier = createShip("carrier", "horizontal");
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
    const battleship = createShip("battleship", "vertical");
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
    const cruiser = createShip("cruiser", "horizontal");
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
    const submarine = createShip("submarine", "vertical");
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
    const destroyer = createShip("destroyer", "horizontal");
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
