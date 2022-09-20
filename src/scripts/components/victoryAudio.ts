import victory from "../../assets/audio/victory.mp3";
import victory2 from "../../assets/audio/victory.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const victoryAudio = () => {
  const playSound = () => {
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".victory");
    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      if (div.classList.contains("play")) {
        audio
          .play()
          .then()
          .catch(() => {
            throw new Error("Audio failed to play");
          });
      }
    }
  };

  subscribe("victory", playSound);

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", victory],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", victory2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["victory", "current-audio"], null, null, [
      ["loop", "true"],
    ]),
  ]);
};

export default victoryAudio;
