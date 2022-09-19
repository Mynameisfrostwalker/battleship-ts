import type { Player } from "./player";
import type { AIPlayer } from "./aiPlayer";
import { fixElement, composeElements, createElement } from "./domManipulator";
import createContainer from "./components/gameContainer";
import { publish } from "./pubsub";

const displayGame = (
  player1: Player | AIPlayer,
  player2: Player | AIPlayer
) => {
  const body = document.querySelector("body");
  const volumeDiv2 = document.querySelector(".volume-div-2");
  if (body) {
    fixElement(body, [createContainer(player1, player2)]);
    if (volumeDiv2 && volumeDiv2.classList.contains("play")) {
      const div = document.querySelector(".volume-div-2");
      if (div instanceof HTMLElement) {
        const createVolume = () =>
          composeElements([createElement("i", ["fa-solid", "fa-volume-high"])]);
        div.replaceChildren();
        fixElement(div, [createVolume()]);
        div.classList.add("play");
        div.classList.remove("not-play");
        publish("sailing-play");
      }
    }
  }
};

export default displayGame;
