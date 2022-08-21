import createCell from "../scripts/cell";

test("Creates empty cell", () => {
  for (let i = 0; i < 10; i += 1) {
    for (let j = 0; j < 10; j += 1) {
      const carrierCell = createCell([i, j], "empty");
      expect(carrierCell).toEqual({
        coords: [i, j],
        value: "empty",
        position: null,
        top: null,
        left: null,
        right: null,
        bottom: null,
      });
    }
  }
});
