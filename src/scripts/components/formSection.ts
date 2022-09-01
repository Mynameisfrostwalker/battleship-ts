import { composeElements, createElement } from "../domManipulator";
import createPart from "./formPart";

const createPlayerSection = () =>
  composeElements([
    [...createPart(1), ...createPart(2)],
    createElement("section", ["player-section"]),
  ]);

export default createPlayerSection;
