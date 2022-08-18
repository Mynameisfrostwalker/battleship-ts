import createGameboard from "../scripts/gameboard";

test.only("createGameboard function creates gameboard", () => {
  const gameboard = createGameboard();
  expect(gameboard.board.length).toEqual(10);
  for (let i = 0; i < gameboard.board.length; i += 1) {
    expect(gameboard.board[i].length).toEqual(10);
    expect(gameboard.board[i].every(({ value }) => value === "empty"));
  }
});

test("placeShip method places horizontal ships on correct coordinates", () => {
  const gameboard = createGameboard();
  const shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2,
  };
  // gameboard.placeShip("carrier", [0, 0], "horizontal");
  // gameboard.placeShip("battleship", [0, 1], "horizontal");
});
