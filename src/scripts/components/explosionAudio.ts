import explosion from "../../assets/audio/explosion-new.mp3";
import explosion2 from "../../assets/audio/explosion-new.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const explosionAudio = () => {
  const playSound = (callback: () => void) => {
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".explosion");
    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      if (div.classList.contains("play")) {
        console.log(div.classList, div);
        const playAud = () => {
          callback();
          audio.removeEventListener("ended", playAud);
        };
        audio.addEventListener("ended", playAud);
        audio
          .play()
          .then()
          .catch(() => {
            throw new Error("Audio failed to play");
          });
      }
    }
  };

  subscribe("explosion", (arg: unknown) => {
    const fn = arg as () => void;
    playSound(fn);
  });

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", explosion],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", explosion2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["explosion"], null, null),
  ]);
};

export default explosionAudio;
