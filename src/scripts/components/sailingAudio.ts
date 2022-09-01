import shipSailing from "../../assets/audio/sailing.mp3";
import shipSailing2 from "../../assets/audio/sailing.ogg";
import { composeElements, createElement } from "../domManipulator";

const sailingAudio = () =>
  composeElements([
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
    createElement("audio", ["ship-sailing"], null, null, [["loop", "true"]]),
  ]);

export default sailingAudio;
