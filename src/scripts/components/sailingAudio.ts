import shipSailing from "../../assets/audio/sailing.mp3";
import shipSailing2 from "../../assets/audio/sailing.ogg";
import { composeElements, createElement } from "../domManipulator";
import { subscribe } from "../pubsub";

const sailingAudio = () => {
  const playSound = () => {
    console.log("beep");
    const div = document.querySelector(".volume-div-2");
    const audio = document.querySelector(".ship-sailing");
    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      console.log("beep");
      if (div.classList.contains("play")) {
        audio.volume = 0.2;
        audio
          .play()
          .then()
          .catch(() => {
            throw new Error("Audio failed to play");
          });
      }
    }
  };

  const pauseSound = () => {
    const audio = document.querySelector(".ship-sailing");
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
    }
  };

  subscribe("sailing-play", playSound);
  subscribe("sailing-pause", pauseSound);

  return composeElements([
    [
      createElement("source", null, null, null, [
        ["src", shipSailing],
        ["type", "audio/mpeg"],
      ]),
      createElement("source", null, null, null, [
        ["src", shipSailing2],
        ["type", "audio/ogg"],
      ]),
    ],
    createElement("audio", ["ship-sailing", "current-audio"], null, null, [
      ["loop", "true"],
    ]),
  ]);
};

export default sailingAudio;
