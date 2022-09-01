import { composeElements, createElement, createSVG } from "../domManipulator";

const createBlob = () =>
  composeElements([
    createSVG("path", null, null, null, [
      [
        "d",
        "M51.1 -80C66.9 -69.4 80.7 -56.3 89.9 -40C99 -23.6 103.5 -4.1 98.9 12.9C94.3 29.8 80.8 44 68.2 59.7C55.5 75.3 43.8 92.3 26 105.2C8.2 118 -15.8 126.7 -40 124.8C-64.3 122.9 -88.8 110.6 -94.7 89.8C-100.7 69.1 -87.9 40 -80.4 18.4C-72.9 -3.2 -70.6 -17.2 -69.6 -37.1C-68.7 -56.9 -69.2 -82.7 -57.9 -95.4C-46.5 -108 -23.2 -107.5 -2.8 -103.2C17.7 -98.8 35.3 -90.6 51.1 -80",
      ],
      ["fill", "#000000b3"],
    ]),
    createSVG("g", null, null, null, [
      ["transform", "translate(447.7643887362343 290.4428547844383)"],
    ]),
    createSVG("svg", null, null, "visual", [
      ["viewBox", "0 0 900 600"],
      ["width", "100vw"],
      ["height", "500"],
      ["xmlns", "http://www.w3.org/2000/svg"],
      ["xmlns:xlink", "http://www.w3.org/1999/xlink"],
      ["version", "1.1"],
    ]),
    createElement("div", ["blob"]),
  ]);

export default createBlob;
