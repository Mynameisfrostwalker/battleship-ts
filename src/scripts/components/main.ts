import { composeElements, createElement } from "../domManipulator";
import createVolumeDiv from "./volumeDiv";
import createForm from "./form";

const createMain = () =>
  composeElements([
    [...createVolumeDiv(), ...createForm()],
    createElement("main", ["main", "initial-main"]),
  ]);

export default createMain;
