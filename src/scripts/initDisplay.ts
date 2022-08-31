import { fixElement, composeElements, createElement } from "./domManipulator";

const createHeader = () =>
  composeElements([
    createElement("h1", ["battleshipHeader"], "Battleship"),
    createElement("header", ["headerDiv"]),
  ]);

const githubIcon = () =>
  composeElements([
    createElement("i", ["fa-brands", "fa-github"]),
    createElement("div", ["githubIcon"]),
  ]);

const createFooter = () =>
  composeElements([
    [
      createElement("div", ["githubName"], "Mynameisfrostwalker"),
      ...githubIcon(),
    ],
    createElement("a", null, null, null, [
      ["href", "https://github.com/Mynameisfrostwalker"],
    ]),
    createElement("div", ["githubDiv"]),
    createElement("footer", ["footer"]),
  ]);

const initDisplay = () => {
  const body = document.querySelector("body");
  if (body) {
    fixElement(body, [createHeader(), createFooter()]);
  }
};

export default initDisplay;
