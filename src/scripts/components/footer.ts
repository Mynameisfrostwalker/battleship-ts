import { composeElements, createElement } from "../domManipulator";
import createGithubDiv from "./githubDiv";
import createWave from "./wave";

const createFooter = () =>
  composeElements([
    [...createGithubDiv(), ...createWave()],
    createElement("footer", ["footer"]),
  ]);

export default createFooter;
