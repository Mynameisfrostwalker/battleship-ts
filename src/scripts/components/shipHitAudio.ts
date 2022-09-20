import shipHit from "../../assets/audio/shipHit-new.mp3";
import shipHit2 from "../../assets/audio/shipHit-new.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const shipHitAudio = () => {
  const playSound = () => {
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".shipHit");
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

  subscribe("shipHit", playSound);

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", shipHit],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", shipHit2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["shipHit"], null, null),
  ]);
};

export default shipHitAudio;
