import { composeElements, createElement } from "../domManipulator";
import { publish } from "../pubsub";

const onNameInput = (input: HTMLElement) => {
  if (input instanceof HTMLInputElement) {
    if (input.validity.valueMissing) {
      publish("error-span-setText", "Input must not be left blank!");
    }
    if (input.value.trim() === "") {
      const error = "Input is blank.";
      publish("error-span-setText", "Input must not be left blank!");
      input.setCustomValidity(error);
    } else {
      publish("error-span-setText", "");
      input.setCustomValidity("");
    }
  }
};

const createPlayerDiv = (num: number) =>
  composeElements([
    [
      createElement(
        "input",
        null,
        null,
        `player${num}-input`,
        [
          ["type", "text"],
          ["name", `player${num}`],
          ["placeholder", " "],
          ["required", "true"],
        ],
        [["input", onNameInput]],
        "player-input-bar"
      ),
      createElement(
        "label",
        ["player-label"],
        `Enter Player ${num} Name:`,
        null,
        [["for", `player${num}-input`]]
      ),
    ],
    createElement(
      "div",
      ["player-elements"],
      null,
      null,
      null,
      null,
      "player-elements-div"
    ),
  ]);

export default createPlayerDiv;
