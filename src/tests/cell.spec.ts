import createCell from "../scripts/cell";

describe("Create cell object", () => {
  test("Creates carrier cell", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const carrierCell = createCell([i, j], "carrier");
        expect(carrierCell).toEqual({
          coords: [i, j],
          value: "carrier",
          top: null,
          left: null,
          right: null,
          bottom: null,
        });
      }
    }
  });

  test("Creates battleship cell", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const battleshipCell = createCell([i, j], "battleship");
        expect(battleshipCell).toEqual({
          coords: [i, j],
          value: "battleship",
          top: null,
          left: null,
          right: null,
          bottom: null,
        });
      }
    }
  });

  test("Creates cruiser cell", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const cruiserCell = createCell([i, j], "cruiser");
        expect(cruiserCell).toEqual({
          coords: [i, j],
          value: "cruiser",
          top: null,
          left: null,
          right: null,
          bottom: null,
        });
      }
    }
  });

  test("Creates submarine cell", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const submarineCell = createCell([i, j], "submarine");
        expect(submarineCell).toEqual({
          coords: [i, j],
          value: "submarine",
          top: null,
          left: null,
          right: null,
          bottom: null,
        });
      }
    }
  });

  test("Creates destroyer cell", () => {
    for (let i = 0; i < 10; i += 1) {
      for (let j = 0; j < 10; j += 1) {
        const destroyerCell = createCell([i, j], "destroyer");
        expect(destroyerCell).toEqual({
          coords: [i, j],
          value: "destroyer",
          top: null,
          left: null,
          right: null,
          bottom: null,
        });
      }
    }
  });
});