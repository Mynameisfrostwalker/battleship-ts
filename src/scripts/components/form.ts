import { composeElements, createElement } from "../domManipulator";
import { publish } from "../pubsub";
import createPirateBoard from "./pirateBoard";
import createPlayerSection from "./formSection";
import createButtonSection from "./buttonSection";
import createBlob from "./blob";

const onFormSubmit = (form: HTMLElement) => {
  if (form instanceof HTMLFormElement) {
    for (let i = 0; i < form.length; i += 1) {
      const input = form[i];
      if (input instanceof HTMLInputElement) {
        if (!input.disabled) {
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
      }
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
