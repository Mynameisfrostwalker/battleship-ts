import { composeElements, createElement } from "../domManipulator";

const createGithubIcon = () =>
  composeElements([
    createElement("i", ["fa-brands", "fa-github"]),
    createElement("div", ["github-icon"]),
  ]);

export default createGithubIcon;
