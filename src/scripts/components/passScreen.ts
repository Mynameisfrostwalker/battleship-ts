import { composeElements, createElement } from "../domManipulator";

const createPassScreen = () =>
  composeElements([
    createElement("div", null, "Pass Screen"),
    createElement("div", ["pass-screen"]),
  ]);

export default createPassScreen;
