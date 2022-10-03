import type { Player } from "../player";
import type { AIPlayer } from "../aiPlayer";
import { composeElements, createElement } from "../domManipulator";
import { receiveAttackCoords1AI1Player, AIstart } from "../gameLoop";
import { subscribe, publish } from "../pubsub";

const createPassScreenButton = () => {
  const onPassScreen = () => {
    publish("pass-screen");
  };
  return composeElements([
    createElement(
      "button",
      ["button", "pass-screen-button"],
      "Pass Screen!",
      null,
      null,
      [["click", onPassScreen]]
    ),
    createElement("div", ["button-section"]),
  ]);
};

export default createPassScreenButton;
