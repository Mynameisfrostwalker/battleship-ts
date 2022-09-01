import { composeElements, createElement } from "../domManipulator";
import createVolumeDiv from "./volumeDiv";
import createForm from "./form";

const createMain = () =>
  composeElements([
    [...createVolumeDiv(), ...createForm()],
    createElement("main", ["main", "main-home"]),
  ]);

export default createMain;
