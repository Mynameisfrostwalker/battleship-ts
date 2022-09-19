import sploosh from "../../assets/audio/sploosh.mp3";
import sploosh2 from "../../assets/audio/sploosh.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const splooshAudio = () => {
  const playSound = () => {
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".sploosh");
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

  subscribe("sploosh", playSound);

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", sploosh],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", sploosh2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["sploosh"], null, null),
  ]);
};

export default splooshAudio;
