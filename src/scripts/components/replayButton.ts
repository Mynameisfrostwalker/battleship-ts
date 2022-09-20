import { composeElements, createElement } from "../domManipulator";
import { publish } from "../pubsub";
import initDisplay from "../initDisplay";

const createReplayButton = () => {
  const onReplay = (event: Event) => {
    const button = event.currentTarget;
    if (button instanceof HTMLElement) {
      initDisplay();
      publish("reset");
    }
  };

  return composeElements([
    createElement("button", ["button", "replay-button"], "Begin!", null, null, [
      ["click", onReplay],
    ]),
    createElement("div", ["button-section"]),
  ]);
};

export default createReplayButton;
