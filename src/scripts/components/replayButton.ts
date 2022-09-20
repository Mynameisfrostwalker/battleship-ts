import { composeElements, createElement, fixElement } from "../domManipulator";
import { publish } from "../pubsub";
import initDisplay from "../initDisplay";

const createReplayButton = () => {
  const onReplay = (event: Event) => {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      const volumeDiv2 = document.querySelector(".volume-div-2");
      publish("reset");
      initDisplay();
      if (volumeDiv2 && volumeDiv2.classList.contains("play")) {
        const div = document.querySelector(".volume-div-2");
        if (div instanceof HTMLElement) {
          const createVolume = () =>
            composeElements([
              createElement("i", ["fa-solid", "fa-volume-high"]),
            ]);
          div.replaceChildren();
          fixElement(div, [createVolume()]);
          div.classList.add("play");
          div.classList.remove("not-play");
          publish("sailing-play");
        }
      }
    }
  };

  return composeElements([
    createElement(
      "button",
      ["button", "replay-button"],
      "Replay!",
      null,
      null,
      [["click", onReplay]]
    ),
    createElement("div", ["button-section"]),
  ]);
};

export default createReplayButton;
