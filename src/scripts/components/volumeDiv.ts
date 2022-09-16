import { composeElements, createElement, fixElement } from "../domManipulator";

const onVolumeChange = (event: Event) => {
  const div = event.currentTarget;
  const audio = document.querySelector(".ship-sailing");
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

const createVolumeDiv = () =>
  composeElements([
    createElement("i", ["fa-solid", "fa-volume-xmark"]),
    createElement("div", ["not-play"], null, null, null, [
      ["click", onVolumeChange],
    ]),
    createElement("div", ["volume-div"]),
  ]);

export default createVolumeDiv;
