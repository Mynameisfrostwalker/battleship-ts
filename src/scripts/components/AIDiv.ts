import { composeElements, createElement } from "../domManipulator";

const onCheckboxChange = (check: HTMLElement) => {
  if (check instanceof HTMLInputElement) {
    const div = check.parentElement?.previousElementSibling;
    const span = check.parentElement?.nextElementSibling;
    const input = div?.querySelector("input");
    if (input && div && span) {
      if (check.checked) {
        div.classList.add("invisible");
        span.classList.add("invisible");
        span.textContent = "";
        input.disabled = true;
      } else {
        div.classList.remove("invisible");
        span.classList.remove("invisible");
        input.disabled = false;
      }
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
