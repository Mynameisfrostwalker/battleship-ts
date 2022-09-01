import { composeElements, createElement } from "../domManipulator";
import { publish } from "../pubsub";

const onCheckboxChange = (check: HTMLElement) => {
  if (check instanceof HTMLInputElement) {
    if (check.checked) {
      publish("player-elements-div-addClass", "invisible");
      publish("error-span-addClass", "invisible");
      publish("error-span-setText", "");
      publish("player-input-bar-setAttribute", "disabled", "true");
    } else {
      publish("player-elements-div-removeClass", "invisible");
      publish("error-span-removeClass", "invisible");
      publish("player-input-bar-setAttribute", "disabled", "false");
    }
  }
};

const createAIDiv = (num: number) =>
  composeElements([
    [
      createElement("label", null, "AI mode:", null, [
        ["for", `AI${num}-input`],
      ]),
      createElement(
        "input",
        null,
        null,
        `AI${num}-input`,
        [
          ["type", "checkbox"],
          ["name", `AI${num}`],
        ],
        [["change", onCheckboxChange]]
      ),
    ],
    createElement("div", ["AI-elements"]),
  ]);

export default createAIDiv;
