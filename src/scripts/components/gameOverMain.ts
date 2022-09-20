import { composeElements, createElement } from "../domManipulator";
import createVolumeDiv from "./volumeDiv";
import createPirateBoard from "./pirateBoard";
import createReplayButton from "./replayButton";

const createMain = (endMessage: string) =>
  composeElements([
    [
      ...createVolumeDiv(),
      ...createPirateBoard(endMessage),
      ...createReplayButton(),
    ],
    createElement("main", ["gameOver-main"]),
  ]);

export default createMain;
