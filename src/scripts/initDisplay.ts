import shipSailing from "../assets/audio/sailing.mp3";
import shipSailing2 from "../assets/audio/sailing.ogg";
import pirateImg from "../assets/images/pirate.svg";
import { fixElement, composeElements, createElement } from "./domManipulator";
import {
  onCheckboxChange,
  onVolumeChange,
  onNameInput,
  onFormSubmit,
} from "./eventListeners";

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

const createHeader = () =>
  composeElements([
    createElement("h1", ["battleship-header"], "Battleship"),
    createElement("header", ["header-div"]),
  ]);

const createGithubIcon = () =>
  composeElements([
    createElement("i", ["fa-brands", "fa-github"]),
    createElement("div", ["github-icon"]),
  ]);

const createVolumeDiv = () =>
  composeElements([
    createElement("i", ["fa-solid", "fa-volume-xmark"]),
    createElement("div", ["not-play"], null, null, null, [
      ["click", onVolumeChange],
    ]),
    createElement("div", ["volume-div"]),
  ]);

const createPlayerDiv = (num: number) =>
  composeElements([
    [
      createElement(
        "input",
        null,
        null,
        `player${num}-input`,
        [
          ["type", "text"],
          ["name", `player${num}`],
          ["placeholder", " "],
          ["required", "true"],
        ],
        [["input", onNameInput]]
      ),
      createElement(
        "label",
        ["player-label"],
        `Enter Player ${num} Name:`,
        null,
        [["for", `player${num}-input`]]
      ),
    ],
    createElement("div", ["player-elements"]),
  ]);

const createAIDiv = (num: number) =>
  composeElements([
    [
      createElement("label", null, "AI mode:", null, [
        ["for", `AI${num}-input`],
      ]),
      createElement(
        "input",
        null,
        null,
        `AI${num}-input`,
        [
          ["type", "checkbox"],
          ["name", `AI${num}`],
        ],
        [["change", onCheckboxChange]]
      ),
    ],
    createElement("div", ["AI-elements"]),
  ]);

const createPart = (num: number) =>
  composeElements([
    [
      ...createPlayerDiv(num),
      ...createAIDiv(num),
      createElement("span", ["error-div"]),
    ],
    createElement("p", ["player-part", `player${num}-part`]),
  ]);

const createPlayerSection = () =>
  composeElements([
    [...createPart(1), ...createPart(2)],
    createElement("section", ["player-section"]),
  ]);

const createButtonSection = () =>
  composeElements([
    createElement("button", ["button", "game-start-button"], "Start Game!"),
    createElement("section", ["button-section"]),
  ]);

const createBlob = () =>
  composeElements([
    createElement("path", null, null, null, [
      [
        "d",
        "M51.1 -80C66.9 -69.4 80.7 -56.3 89.9 -40C99 -23.6 103.5 -4.1 98.9 12.9C94.3 29.8 80.8 44 68.2 59.7C55.5 75.3 43.8 92.3 26 105.2C8.2 118 -15.8 126.7 -40 124.8C-64.3 122.9 -88.8 110.6 -94.7 89.8C-100.7 69.1 -87.9 40 -80.4 18.4C-72.9 -3.2 -70.6 -17.2 -69.6 -37.1C-68.7 -56.9 -69.2 -82.7 -57.9 -95.4C-46.5 -108 -23.2 -107.5 -2.8 -103.2C17.7 -98.8 35.3 -90.6 51.1 -80",
      ],
      ["fill", "#000000b3"],
    ]),
    createElement("g", null, null, null, [
      ["transform", "translate(447.7643887362343 290.4428547844383)"],
    ]),
    createElement("svg", null, null, "visual", [
      ["viewBox", "0 0 900 600"],
      ["width", "100vw"],
      ["height", "500"],
      ["xmlns", "http://www.w3.org/2000/svg"],
      ["xmlns:xlink", "http://www.w3.org/1999/xlink"],
      ["version", "1.1"],
    ]),
    createElement("div", ["blob"]),
  ]);

const createPirateBoard = () =>
  composeElements([
    [
      createElement(
        "h2",
        ["form-header"],
        "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?"
      ),
      createElement("img", ["pirate-image"], null, null, [
        ["src", pirateImg],
        ["width", "8%"],
      ]),
    ],
    createElement("div", ["pirate-inner-border"]),
    createElement("div", ["pirate-outer-border"]),
  ]);

const createForm = () =>
  composeElements([
    [
      ...createPirateBoard(),
      ...createPlayerSection(),
      ...createButtonSection(),
      ...createBlob(),
    ],
    createElement(
      "form",
      ["player-form"],
      null,
      null,
      [["novalidate", "true"]],
      [["submit", onFormSubmit]]
    ),
  ]);

const createMain = () =>
  composeElements([
    [...createVolumeDiv(), ...createForm()],
    createElement("main", ["main", "main-home"]),
  ]);

const createWave = () =>
  composeElements([
    [
      createElement("path", null, null, null, [
        [
          "d",
          "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
        ],
        ["opacity", ".25"],
        ["class", "shape-fill"],
      ]),
      createElement("path", null, null, null, [
        [
          "d",
          "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
        ],
        ["opacity", ".5"],
        ["class", "shape-fill"],
      ]),
      createElement("path", null, null, null, [
        [
          "d",
          "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
        ],
        ["class", "shape-fill"],
      ]),
    ],
    createElement("svg", null, null, null, [
      ["data-name", "Layer 1"],
      ["xmlns", "http://www.w3.org/2000/svg"],
      ["viewBox", "0 0 1200 120"],
      ["preserveAspectRatio", "none"],
    ]),
    createElement("div", ["wave"]),
  ]);

const createGithubDiv = () =>
  composeElements([
    [
      createElement("div", ["github-name"], "Mynameisfrostwalker"),
      ...createGithubIcon(),
    ],
    createElement("a", null, null, null, [
      ["href", "https://github.com/Mynameisfrostwalker"],
    ]),
    createElement("div", ["github-div"]),
  ]);

const createFooter = () =>
  composeElements([
    [...createGithubDiv(), ...createWave()],
    createElement("footer", ["footer"]),
  ]);

const createContainer = () =>
  composeElements([
    [...createHeader(), ...createMain(), ...createFooter(), ...sailingAudio()],
    createElement("div", ["container", "container-home"]),
  ]);

const initDisplay = () => {
  const body = document.querySelector("body");
  if (body) {
    fixElement(body, [createContainer()]);
  }
};

export default initDisplay;
