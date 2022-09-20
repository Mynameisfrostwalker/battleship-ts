import defeat from "../../assets/audio/defeat.mp3";
import defeat2 from "../../assets/audio/defeat.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const defeatAudio = () => {
  const playSound = () => {
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".defeat");
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

  subscribe("defeat", playSound);

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", defeat],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", defeat2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["defeat", "current-audio"], null, null, [
      ["loop", "true"],
    ]),
  ]);
};

export default defeatAudio;
