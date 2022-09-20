import { fixElement, composeElements, createElement } from "./domManipulator";
import createContainer from "./components/gameOverContainer";
import { publish } from "./pubsub";

const displayGameOver = (status: string) => {
  const body = document.querySelector("body");
  if (body) {
    const volumeDiv2 = document.querySelector(".volume-div-2");
    fixElement(body, [
      createContainer(
        status === "victory"
          ? "Cap'n, the treasures o' the Caribbean sea are ours!"
          : "The English navy 'as surrounded us. Cap'n, we 'ad a jolly run. At least we die as gentlemen o' fortune.",
        status
      ),
    ]);
    if (volumeDiv2 && volumeDiv2.classList.contains("play")) {
      const div = document.querySelector(".volume-div-2");
      if (div instanceof HTMLElement) {
        const createVolume = () =>
          composeElements([createElement("i", ["fa-solid", "fa-volume-high"])]);
        div.replaceChildren();
        fixElement(div, [createVolume()]);
        div.classList.add("play");
        div.classList.remove("not-play");
        publish(status);
      }
    }
  }
};

export default displayGameOver;
