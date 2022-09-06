import { composeElements, createElement } from "../domManipulator";
import createPirateBoard from "./pirateBoard";
import createPlayerSection from "./formSection";
import createButtonSection from "./buttonSection";
import createBlob from "./blob";
import { publish } from "../pubsub";

const onFormSubmit = (event: Event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const inputs: HTMLInputElement[] = [];
  if (form instanceof HTMLFormElement) {
    for (let i = 0; i < form.length; i += 1) {
      const input = form[i];
      const span = input.parentElement?.nextElementSibling?.nextElementSibling;
      if (input instanceof HTMLInputElement) {
        if (input.type === "text") {
          inputs.push(input);
        }
        if (!input.disabled && span) {
          if (input.validity.valueMissing) {
            span.textContent = "Input must not be left blank!";
          } else if (input.value.trim() === "") {
            const error = "Input is blank.";
            span.textContent = "Input must not be left blank!";
            input.setCustomValidity(error);
          } else {
            span.textContent = "";
            input.setCustomValidity("");
          }
        }
      }
    }
    if (form.checkValidity()) {
      if (inputs[0].disabled) {
        inputs[0].value = "";
      }
      if (inputs[1].disabled) {
        inputs[1].value = "";
      }
      publish("start-game", inputs[0].value, inputs[1].value);
      inputs[0].value = "";
      inputs[1].value = "";
    }
  }
};

const createForm = () =>
  composeElements([
    [
      ...createPirateBoard(),
      ...createPlayerSection(),
      ...createButtonSection(),
      ...createBlob(),
    ],
    createElement(
      "form",
      ["player-form"],
      null,
      null,
      [["novalidate", "true"]],
      [["submit", onFormSubmit]]
    ),
  ]);

export default createForm;
