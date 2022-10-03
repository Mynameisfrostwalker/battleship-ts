import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { fixElement, composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";
import createBoardSection from "./boardSection";
import beginGameButton from "./beginGameButton";
import createPassScreenButton from "./passScreenButton";
import createPassScreen from "./passScreen";

const createMain = (player1: Player | AIPlayer, player2: Player | AIPlayer) => {
  let screenTurn: "player1" | "player2" = "player1";
  let count = 0;
  const boardSections = () => {
    if (player1.type === "AI" && player2.type === "AI") {
      return composeElements([
        [
          ...createBoardSection(player1, "ship", "no-turn"),
          ...createBoardSection(player2, "ship", "no-turn"),
        ],
      ]);
    }
    if (player1.type === "Human" && player2.type === "Human") {
      return composeElements([
        [
          ...createBoardSection(
            player1,
            screenTurn === "player1" ? "ship" : "shipless",
            screenTurn === "player1" ? "noturn" : "turn"
          ),
          ...createBoardSection(
            player2,
            screenTurn === "player2" ? "ship" : "shipless",
            screenTurn === "player2" ? "noturn" : "turn"
          ),
        ],
      ]);
    }
    return composeElements([
      [
        ...createBoardSection(
          player1,
          player1.type === "AI" ? "shipless" : "ship",
          player1.type === "AI" ? "turn" : "noturn"
        ),
        ...createBoardSection(
          player2,
          player2.type === "AI" ? "shipless" : "ship",
          player2.type === "AI" ? "turn" : "noturn"
        ),
      ],
    ]);
  };

  const button = () => {
    if (
      (player1.type === "Human" && player2.type === "AI") ||
      (player1.type === "AI" && player2.type === "Human")
    ) {
      return beginGameButton(
        player1.type === "AI" ? "player1" : "player2",
        player1,
        player2
      );
    }
    if (player1.type === "Human" && player2.type === "Human" && count === 0) {
      return createPassScreenButton();
    }
    if (player1.type === "Human" && player2.type === "Human" && count !== 0) {
      return beginGameButton("player1", player1, player2);
    }
    return [];
  };

  const reDisplayBoard = () => {
    const component = boardSections();

    const section = document.querySelector(`.board-container`);
    if (section instanceof HTMLElement) {
      fixElement(section, [component]);
    }
  };

  const reDisplayAfterFirstPass = () => {
    const component = composeElements([
      [
        ...composeElements([
          boardSections(),
          createElement("div", ["board-container"]),
        ]),
        ...button(),
      ],
    ]);

    const section = document.querySelector(`main`);
    if (section instanceof HTMLElement) {
      fixElement(section, [component]);
    }
  };

  subscribe("redisplay", reDisplayBoard);

  const passScreen = () => {
    screenTurn = screenTurn === "player1" ? "player2" : "player1";
    count += 1;
    if (count === 1) {
      reDisplayAfterFirstPass();
    }
  };

  const passScreenAfterBegin = () => {
    screenTurn = screenTurn === "player1" ? "player2" : "player1";
    count += 1;
    const component = createPassScreen();

    const section = document.querySelector(`.board-container`);
    if (section instanceof HTMLElement) {
      fixElement(section, [component]);
    }
  };

  subscribe("pass-screen", passScreen);
  subscribe("pass-screenBegin", passScreenAfterBegin);

  return composeElements([
    [
      ...composeElements([
        boardSections(),
        createElement("div", ["board-container"]),
      ]),
      ...button(),
    ],
    createElement("main", ["game-main"]),
  ]);
};

export default createMain;
