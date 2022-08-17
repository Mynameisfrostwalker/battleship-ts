import createShip from "../scripts/ship";

test("Ship object has correct name", () => {
  expect(createShip("carrier").name).toBe("carrier");
  expect(createShip("battleship").name).toBe("battleship");
  expect(createShip("cruiser").name).toBe("cruiser");
  expect(createShip("submarine").name).toBe("submarine");
  expect(createShip("destroyer").name).toBe("destroyer");
});

test("Ship object has correct length", () => {
  expect(createShip("carrier").length).toBe(5);
  expect(createShip("battleship").length).toBe(4);
  expect(createShip("cruiser").length).toBe(3);
  expect(createShip("submarine").length).toBe(3);
  expect(createShip("destroyer").length).toBe(2);
});

test("Ship get method returns ship array", () => {
  const carrier = createShip("carrier").get();
  expect(carrier).toEqual([
    "carrier",
    "carrier",
    "carrier",
    "carrier",
    "carrier",
  ]);

  const battleship = createShip("battleship").get();
  expect(battleship).toEqual([
    "battleship",
    "battleship",
    "battleship",
    "battleship",
  ]);

  const cruiser = createShip("cruiser").get();
  expect(cruiser).toEqual(["cruiser", "cruiser", "cruiser"]);

  const submarine = createShip("submarine").get();
  expect(submarine).toEqual(["submarine", "submarine", "submarine"]);

  const destroyer = createShip("destroyer").get();
  expect(destroyer).toEqual(["destroyer", "destroyer"]);
});

test("Ship get method returns ship single position if within ship length", () => {
  const carrier = createShip("carrier");
  for (let i = 0; i < carrier.length; i += 1) {
    expect(carrier.get(i)).toBe("carrier");
  }

  const battleship = createShip("battleship");
  for (let i = 0; i < battleship.length; i += 1) {
    expect(battleship.get(i)).toBe("battleship");
  }

  const cruiser = createShip("cruiser");
  for (let i = 0; i < cruiser.length; i += 1) {
    expect(cruiser.get(i)).toBe("cruiser");
  }

  const submarine = createShip("submarine");
  for (let i = 0; i < submarine.length; i += 1) {
    expect(submarine.get(i)).toBe("submarine");
  }

  const destroyer = createShip("destroyer");
  for (let i = 0; i < destroyer.length; i += 1) {
    expect(destroyer.get(i)).toBe("destroyer");
  }
});

test("Ship get method returns ship if not within ship length", () => {
  expect(createShip("carrier").get(-3)).toEqual([
    "carrier",
    "carrier",
    "carrier",
    "carrier",
    "carrier",
  ]);

  expect(createShip("battleship").get(-2)).toEqual([
    "battleship",
    "battleship",
    "battleship",
    "battleship",
  ]);

  expect(createShip("cruiser").get(100)).toEqual([
    "cruiser",
    "cruiser",
    "cruiser",
  ]);

  expect(createShip("submarine").get(-2)).toEqual([
    "submarine",
    "submarine",
    "submarine",
  ]);

  expect(createShip("destroyer").get(224)).toEqual(["destroyer", "destroyer"]);
});

test("Ship hit method updates position hit status", () => {
  const carrier = createShip("carrier");
  for (let i = 0; i < carrier.length; i += 1) {
    carrier.hit(i);
    expect(carrier.get(i)).toBe("hit");
  }

  const battleship = createShip("battleship");
  for (let i = 0; i < battleship.length; i += 1) {
    battleship.hit(i);
    expect(battleship.get(i)).toBe("hit");
  }

  const cruiser = createShip("cruiser");
  for (let i = 0; i < cruiser.length; i += 1) {
    cruiser.hit(i);
    expect(cruiser.get(i)).toBe("hit");
  }

  const submarine = createShip("submarine");
  for (let i = 0; i < submarine.length; i += 1) {
    submarine.hit(i);
    expect(submarine.get(i)).toBe("hit");
  }

  const destroyer = createShip("destroyer");
  for (let i = 0; i < destroyer.length; i += 1) {
    destroyer.hit(i);
    expect(destroyer.get(i)).toBe("hit");
  }
});

test("isSunk function returns sunk status", () => {
  const carrier = createShip("carrier");
  for (let i = 0; i < carrier.length; i += 1) {
    carrier.hit(i);
    if (i === carrier.length - 1) {
      expect(carrier.isSunk()).toBe(true);
    } else {
      expect(carrier.isSunk()).toBe(false);
    }
  }

  const battleship = createShip("battleship");
  for (let i = 0; i < battleship.length; i += 1) {
    battleship.hit(i);
    if (i === battleship.length - 1) {
      expect(battleship.isSunk()).toBe(true);
    } else {
      expect(battleship.isSunk()).toBe(false);
    }
  }

  const cruiser = createShip("cruiser");
  for (let i = 0; i < cruiser.length; i += 1) {
    cruiser.hit(i);
    if (i === cruiser.length - 1) {
      expect(cruiser.isSunk()).toBe(true);
    } else {
      expect(cruiser.isSunk()).toBe(false);
    }
  }

  const submarine = createShip("submarine");
  for (let i = 0; i < submarine.length; i += 1) {
    submarine.hit(i);
    if (i === submarine.length - 1) {
      expect(submarine.isSunk()).toBe(true);
    } else {
      expect(submarine.isSunk()).toBe(false);
    }
  }

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
