import { composeElements, createElement } from "../domManipulator";
import createHeader from "./header";
import createMain from "./gameOverMain";
import createFooter from "./footer";
import defeatAudio from "./defeatAudio";
import victoryAudio from "./victoryAudio";

const createContainer = (endMessage: string, status: string) =>
  composeElements([
    [
      ...createHeader(),
      ...createMain(endMessage),
      ...createFooter(),
      ...(status === "defeat" ? defeatAudio() : victoryAudio()),
    ],
    createElement("div", ["container", "container-home"]),
  ]);

export default createContainer;
