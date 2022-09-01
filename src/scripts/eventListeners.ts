import { fixElement, composeElements, createElement } from "./domManipulator";

const showError = (input: HTMLInputElement) => {
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
};

const onVolumeChange = (event: Event) => {
  const audio = document.querySelector(".ship-sailing");
  const div = event.target;
  if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
    if (div.classList.contains("not-play")) {
      audio
        .play()
        .then(() => {
          const createVolume = () =>
            composeElements([
              createElement("i", ["fa-solid", "fa-volume-high"]),
            ]);
          div.replaceChildren();
          fixElement(div, [createVolume()]);
          div.classList.remove("not-play");
        })
        .catch(() => {
          throw new Error("Audio failed to play");
        });
    } else {
      audio.pause();
      const createVolume = () =>
        composeElements([createElement("i", ["fa-solid", "fa-volume-xmark"])]);
      div.replaceChildren();
      fixElement(div, [createVolume()]);
      div.classList.add("not-play");
    }
  }
};

const onCheckboxChange = (event: Event) => {
  const check = event.target;
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

const onNameInput = (event: Event) => {
  const input = event.target;
  if (input instanceof HTMLInputElement) {
    showError(input);
  }
};

const onFormSubmit = (event: Event) => {
  event.preventDefault();
  const form = event.target;
  if (form instanceof HTMLFormElement) {
    for (let i = 0; i < form.length; i += 1) {
      const input = form[i];
      if (input instanceof HTMLInputElement) {
        if (!input.disabled) {
          showError(input);
        }
      }
    }
  }
};

export { onCheckboxChange, onVolumeChange, onNameInput, onFormSubmit };
