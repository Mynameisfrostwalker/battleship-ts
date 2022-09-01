import { composeElements, createElement } from "../domManipulator";
import createHeader from "./header";
import createMain from "./main";
import createFooter from "./footer";
import sailingAudio from "./sailingAudio";

const createContainer = () =>
  composeElements([
    [...createHeader(), ...createMain(), ...createFooter(), ...sailingAudio()],
    createElement("div", ["container", "container-home"]),
  ]);

export default createContainer;
