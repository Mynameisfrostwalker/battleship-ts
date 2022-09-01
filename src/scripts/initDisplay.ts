import { fixElement } from "./domManipulator";
import createContainer from "./components/container";

const initDisplay = () => {
  const body = document.querySelector("body");
  if (body) {
    fixElement(body, [createContainer()]);
  }
};

export default initDisplay;
