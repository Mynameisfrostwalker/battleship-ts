import { composeElements, createElement } from "../domManipulator";
import createVolumeDiv from "./volumeDiv";
import createPirateBoard from "./pirateBoard";

const createHeader = () =>
  composeElements([
    [
      createElement("h1", ["battleship-header"], "Battleship"),
      ...createPirateBoard(),
      ...createVolumeDiv(),
    ],
    createElement("header", ["game-header"]),
  ]);

export default createHeader;
