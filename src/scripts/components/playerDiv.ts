import { composeElements, createElement } from "../domManipulator";

const onNameInput = (event: Event) => {
  const input = event.currentTarget;
  if (input instanceof HTMLInputElement) {
    const span = input.parentElement?.nextElementSibling?.nextElementSibling;
    if (span) {
      if (input.validity.valueMissing) {
        span.textContent = "Input must not be left blank!";
      }
      if (input.value.trim() === "") {
        const error = "Input is blank.";
        span.textContent = "Input must not be left blank!";
        input.setCustomValidity(error);
      } else {
        span.textContent = "";
        input.setCustomValidity("");
      }
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
        [["input", onNameInput]]
      ),
      createElement(
        "label",
        ["player-label"],
        `Enter Player ${num} Name:`,
        null,
        [["for", `player${num}-input`]]
      ),
    ],
    createElement("div", ["player-elements"]),
  ]);

export default createPlayerDiv;
