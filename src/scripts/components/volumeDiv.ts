import { composeElements, createElement, fixElement } from "../domManipulator";

const onVolumeChange = (event: Event) => {
  const div = event.currentTarget;
  const audio = document.querySelector(".current-audio");
  if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
    if (div.classList.contains("not-play")) {
      audio.volume = 0.2;
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
          div.classList.add("play");
        })
        .catch(() => {
          throw new Error("Audio failed to play");
        });
    } else {
      const audios = document.querySelectorAll("audio");
      if (audios) {
        audios.forEach((aud) => {
          aud.pause();
        });
      }
      const createVolume = () =>
        composeElements([createElement("i", ["fa-solid", "fa-volume-xmark"])]);
      div.replaceChildren();
      fixElement(div, [createVolume()]);
      div.classList.add("not-play");
      div.classList.remove("play");
    }
  }
};

const createVolumeDiv = () =>
  composeElements([
    createElement("i", ["fa-solid", "fa-volume-xmark"]),
    createElement("div", ["not-play", "volume-div-2"], null, null, null, [
      ["click", onVolumeChange],
    ]),
    createElement("div", ["volume-div"]),
  ]);

export default createVolumeDiv;
