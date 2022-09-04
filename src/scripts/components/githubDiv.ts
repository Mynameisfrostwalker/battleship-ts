import { composeElements, createElement } from "../domManipulator";
import createGithubIcon from "./githubIcon";

const createGithubDiv = () =>
  composeElements([
    [
      createElement("div", ["github-name"], "Mynameisfrostwalker"),
      ...createGithubIcon(),
    ],
    createElement("a", null, null, null, [
      ["href", "https://github.com/Mynameisfrostwalker"],
      ["target", "_blank"],
    ]),
    createElement("div", ["github-div"]),
  ]);

export default createGithubDiv;
