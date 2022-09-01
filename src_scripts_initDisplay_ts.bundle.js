"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_initDisplay_ts"],{

/***/ "./src/scripts/domManipulator.ts":
/*!***************************************!*\
  !*** ./src/scripts/domManipulator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeElements": () => (/* binding */ composeElements),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "fixElement": () => (/* binding */ fixElement)
/* harmony export */ });
var checkIfFuncContainsFake = function checkIfFuncContainsFake(func) {
  return "fake" in func;
};

var createElement = function createElement(elementName, classNames, textContent, id, attributes, eventListeners) {
  var container = document.createElement(elementName);

  if (elementName === "svg") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  }

  if (elementName === "path") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "path");
  }

  if (elementName === "g") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  }

  if (classNames) {
    classNames.forEach(function (className) {
      container.classList.add(className);
    });
  }

  if (textContent) {
    container.textContent = textContent;
  }

  if (id) {
    container.id = id;
  }

  if (attributes) {
    attributes.forEach(function (attribute) {
      container.setAttribute(attribute[0], attribute[1]);
    });
  }

  if (eventListeners) {
    eventListeners.forEach(function (eventListener) {
      container.addEventListener(eventListener[0], eventListener[1]);
    });
  }

  return function (child) {
    if (child) {
      if (!Array.isArray(child)) {
        if (checkIfFuncContainsFake(child)) {
          return function () {
            return container;
          };
        }

        container.appendChild(child());
      } else {
        child.forEach(function (element) {
          container.appendChild(element());
        });
      }
    }

    return function () {
      return container;
    };
  };
};

var checkIfTypeChildFuncArr = function checkIfTypeChildFuncArr(arr) {
  return Array.isArray(arr);
};

var composeElements = function composeElements(arr) {
  var fakeDiv = function fakeDiv() {
    return document.createElement("div");
  };

  fakeDiv.fake = true;
  var returnContainer = arr.reduce(function (acc, curr) {
    if (checkIfTypeChildFuncArr(curr)) {
      return curr.map(function (func) {
        return func(undefined);
      });
    }

    return curr(acc);
  }, fakeDiv);

  if (Array.isArray(returnContainer)) {
    return returnContainer.map(function (htmlFunc) {
      var container = htmlFunc();
      return function () {
        return function () {
          return container;
        };
      };
    });
  }

  var container = returnContainer();
  return [function () {
    return function () {
      return container;
    };
  }];
};

var fixElement = function fixElement(body, child) {
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
};



/***/ }),

/***/ "./src/scripts/eventListeners.ts":
/*!***************************************!*\
  !*** ./src/scripts/eventListeners.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onCheckboxChange": () => (/* binding */ onCheckboxChange),
/* harmony export */   "onFormSubmit": () => (/* binding */ onFormSubmit),
/* harmony export */   "onNameInput": () => (/* binding */ onNameInput),
/* harmony export */   "onVolumeChange": () => (/* binding */ onVolumeChange)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");


var showError = function showError(input) {
  var _input$parentElement, _input$parentElement$;

  var span = (_input$parentElement = input.parentElement) === null || _input$parentElement === void 0 ? void 0 : (_input$parentElement$ = _input$parentElement.nextElementSibling) === null || _input$parentElement$ === void 0 ? void 0 : _input$parentElement$.nextElementSibling;

  if (span) {
    if (input.validity.valueMissing) {
      span.textContent = "Input must not be left blank!";
    }

    if (input.value.trim() === "") {
      var error = "Input is blank.";
      span.textContent = "Input must not be left blank!";
      input.setCustomValidity(error);
    } else {
      span.textContent = "";
      input.setCustomValidity("");
    }
  }
};

var onVolumeChange = function onVolumeChange(event) {
  var audio = document.querySelector(".ship-sailing");
  var div = event.target;

  if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
    if (div.classList.contains("not-play")) {
      audio.play().then(function () {
        var createVolume = function createVolume() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-high"])]);
        };

        div.replaceChildren();
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
        div.classList.remove("not-play");
      })["catch"](function () {
        throw new Error("Audio failed to play");
      });
    } else {
      audio.pause();

      var createVolume = function createVolume() {
        return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-xmark"])]);
      };

      div.replaceChildren();
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
      div.classList.add("not-play");
    }
  }
};

var onCheckboxChange = function onCheckboxChange(event) {
  var check = event.target;

  if (check instanceof HTMLInputElement) {
    var _check$parentElement, _check$parentElement2;

    var div = (_check$parentElement = check.parentElement) === null || _check$parentElement === void 0 ? void 0 : _check$parentElement.previousElementSibling;
    var span = (_check$parentElement2 = check.parentElement) === null || _check$parentElement2 === void 0 ? void 0 : _check$parentElement2.nextElementSibling;
    var input = div === null || div === void 0 ? void 0 : div.querySelector("input");

    if (input && div && span) {
      if (check.checked) {
        div.classList.add("invisible");
        span.classList.add("invisible");
        span.textContent = "";
        input.disabled = true;
      } else {
        div.classList.remove("invisible");
        span.classList.remove("invisible");
        input.disabled = false;
      }
    }
  }
};

var onNameInput = function onNameInput(event) {
  var input = event.target;

  if (input instanceof HTMLInputElement) {
    showError(input);
  }
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var form = event.target;

  if (form instanceof HTMLFormElement) {
    for (var i = 0; i < form.length; i += 1) {
      var input = form[i];

      if (input instanceof HTMLInputElement) {
        if (!input.disabled) {
          showError(input);
        }
      }
    }
  }
};



/***/ }),

/***/ "./src/scripts/initDisplay.ts":
/*!************************************!*\
  !*** ./src/scripts/initDisplay.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_sailing_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/audio/sailing.mp3 */ "./src/assets/audio/sailing.mp3");
/* harmony import */ var _assets_audio_sailing_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/audio/sailing.ogg */ "./src/assets/audio/sailing.ogg");
/* harmony import */ var _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/pirate.svg */ "./src/assets/images/pirate.svg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./eventListeners */ "./src/scripts/eventListeners.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var sailingAudio = function sailingAudio() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("audio", ["ship-sailing"], null, null, [["loop", "true"]])]);
};

var createHeader = function createHeader() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("h1", ["battleship-header"], "Battleship"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("header", ["header-div"])]);
};

var createGithubIcon = function createGithubIcon() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("i", ["fa-brands", "fa-github"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["github-icon"])]);
};

var createVolumeDiv = function createVolumeDiv() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("i", ["fa-solid", "fa-volume-xmark"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["not-play"], null, null, null, [["click", _eventListeners__WEBPACK_IMPORTED_MODULE_4__.onVolumeChange]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["volume-div"])]);
};

var createPlayerDiv = function createPlayerDiv(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", null, null, "player".concat(num, "-input"), [["type", "text"], ["name", "player".concat(num)], ["placeholder", " "], ["required", "true"]], [["input", _eventListeners__WEBPACK_IMPORTED_MODULE_4__.onNameInput]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("label", ["player-label"], "Enter Player ".concat(num, " Name:"), null, [["for", "player".concat(num, "-input")]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["player-elements"])]);
};

var createAIDiv = function createAIDiv(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("label", null, "AI mode:", null, [["for", "AI".concat(num, "-input")]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("input", null, null, "AI".concat(num, "-input"), [["type", "checkbox"], ["name", "AI".concat(num)]], [["change", _eventListeners__WEBPACK_IMPORTED_MODULE_4__.onCheckboxChange]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["AI-elements"])]);
};

var createPart = function createPart(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createPlayerDiv(num)), _toConsumableArray(createAIDiv(num)), [(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("span", ["error-div"])]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("p", ["player-part", "player".concat(num, "-part")])]);
};

var createPlayerSection = function createPlayerSection() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createPart(1)), _toConsumableArray(createPart(2))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("section", ["player-section"])]);
};

var createButtonSection = function createButtonSection() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("button", ["button", "game-start-button"], "Start Game!"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("section", ["button-section"])]);
};

var createBlob = function createBlob() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("path", null, null, null, [["d", "M51.1 -80C66.9 -69.4 80.7 -56.3 89.9 -40C99 -23.6 103.5 -4.1 98.9 12.9C94.3 29.8 80.8 44 68.2 59.7C55.5 75.3 43.8 92.3 26 105.2C8.2 118 -15.8 126.7 -40 124.8C-64.3 122.9 -88.8 110.6 -94.7 89.8C-100.7 69.1 -87.9 40 -80.4 18.4C-72.9 -3.2 -70.6 -17.2 -69.6 -37.1C-68.7 -56.9 -69.2 -82.7 -57.9 -95.4C-46.5 -108 -23.2 -107.5 -2.8 -103.2C17.7 -98.8 35.3 -90.6 51.1 -80"], ["fill", "#000000b3"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("g", null, null, null, [["transform", "translate(447.7643887362343 290.4428547844383)"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("svg", null, null, "visual", [["viewBox", "0 0 900 600"], ["width", "100vw"], ["height", "500"], ["xmlns", "http://www.w3.org/2000/svg"], ["xmlns:xlink", "http://www.w3.org/1999/xlink"], ["version", "1.1"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["blob"])]);
};

var createPirateBoard = function createPirateBoard() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("h2", ["form-header"], "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("img", ["pirate-image"], null, null, [["src", _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_2__], ["width", "8%"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["pirate-inner-border"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["pirate-outer-border"])]);
};

var createForm = function createForm() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createPirateBoard()), _toConsumableArray(createPlayerSection()), _toConsumableArray(createButtonSection()), _toConsumableArray(createBlob())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("form", ["player-form"], null, null, [["novalidate", "true"]], [["submit", _eventListeners__WEBPACK_IMPORTED_MODULE_4__.onFormSubmit]])]);
};

var createMain = function createMain() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createVolumeDiv()), _toConsumableArray(createForm())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("main", ["main", "main-home"])]);
};

var createWave = function createWave() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("path", null, null, null, [["d", "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"], ["opacity", ".25"], ["class", "shape-fill"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("path", null, null, null, [["d", "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"], ["opacity", ".5"], ["class", "shape-fill"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("path", null, null, null, [["d", "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"], ["class", "shape-fill"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("svg", null, null, null, [["data-name", "Layer 1"], ["xmlns", "http://www.w3.org/2000/svg"], ["viewBox", "0 0 1200 120"], ["preserveAspectRatio", "none"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["wave"])]);
};

var createGithubDiv = function createGithubDiv() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["github-name"], "Mynameisfrostwalker")].concat(_toConsumableArray(createGithubIcon())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("a", null, null, null, [["href", "https://github.com/Mynameisfrostwalker"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["github-div"])]);
};

var createFooter = function createFooter() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createGithubDiv()), _toConsumableArray(createWave())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("footer", ["footer"])]);
};

var createContainer = function createContainer() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.composeElements)([[].concat(_toConsumableArray(createHeader()), _toConsumableArray(createMain()), _toConsumableArray(createFooter()), _toConsumableArray(sailingAudio())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.createElement)("div", ["container", "container-home"])]);
};

var initDisplay = function initDisplay() {
  var body = document.querySelector("body");

  if (body) {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_3__.fixElement)(body, [createContainer()]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDisplay);

/***/ }),

/***/ "./src/assets/audio/sailing.mp3":
/*!**************************************!*\
  !*** ./src/assets/audio/sailing.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "922dc7abfbf8e1cd66c3.mp3";

/***/ }),

/***/ "./src/assets/audio/sailing.ogg":
/*!**************************************!*\
  !*** ./src/assets/audio/sailing.ogg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3200d8d6318c4e4b2eb.ogg";

/***/ }),

/***/ "./src/assets/images/pirate.svg":
/*!**************************************!*\
  !*** ./src/assets/images/pirate.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e4b8b0d6a2a581b30170.svg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZG9tTWFuaXB1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9pbml0RGlzcGxheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEhUTUxGdW5jID0gKCkgPT5cbiAgfCBIVE1MRWxlbWVudFxuICB8IFNWR1NWR0VsZW1lbnRcbiAgfCBTVkdQYXRoRWxlbWVudFxuICB8IFNWR0dFbGVtZW50O1xudHlwZSBDaGlsZCA9IEhUTUxGdW5jIHwgSFRNTEZ1bmNbXTtcbnR5cGUgQ2hpbGRGdW5jID0gKGNoaWxkPzogQ2hpbGQpID0+IEhUTUxGdW5jO1xudHlwZSBDaGlsZEZ1bmNBcnIgPSBDaGlsZEZ1bmNbXTtcblxuY29uc3QgY2hlY2tJZkZ1bmNDb250YWluc0Zha2UgPSAoXG4gIGZ1bmM6IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfVxuKTogZnVuYyBpcyB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9ID0+IFwiZmFrZVwiIGluIGZ1bmM7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoXG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IG51bGwsXG4gIHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCxcbiAgaWQ/OiBzdHJpbmcgfCBudWxsLFxuICBhdHRyaWJ1dGVzPzogW3N0cmluZywgc3RyaW5nXVtdIHwgbnVsbCxcbiAgZXZlbnRMaXN0ZW5lcnM/OiBbc3RyaW5nLCAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGxldCBjb250YWluZXI6IEhUTUxFbGVtZW50IHwgU1ZHU1ZHRWxlbWVudCB8IFNWR1BhdGhFbGVtZW50IHwgU1ZHR0VsZW1lbnQgPVxuICAgIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuICBpZiAoZWxlbWVudE5hbWUgPT09IFwic3ZnXCIpIHtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcbiAgfVxuICBpZiAoZWxlbWVudE5hbWUgPT09IFwicGF0aFwiKSB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICB9XG4gIGlmIChlbGVtZW50TmFtZSA9PT0gXCJnXCIpIHtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gIH1cblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJbMF0sIGV2ZW50TGlzdGVuZXJbMV0pO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyID0gKFxuICBhcnI6IENoaWxkRnVuYyB8IENoaWxkRnVuY0FyclxuKTogYXJyIGlzIENoaWxkRnVuY0FyciA9PiBBcnJheS5pc0FycmF5KGFycik7XG5cbmNvbnN0IGNvbXBvc2VFbGVtZW50cyA9IChhcnI6IChDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnIpW10pOiBDaGlsZEZ1bmNBcnIgPT4ge1xuICBjb25zdCBmYWtlRGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmFrZURpdi5mYWtlID0gdHJ1ZTtcblxuICBjb25zdCByZXR1cm5Db250YWluZXIgPSBhcnIucmVkdWNlPENoaWxkPigoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyKGN1cnIpKSB7XG4gICAgICByZXR1cm4gY3Vyci5tYXAoKGZ1bmMpID0+IGZ1bmModW5kZWZpbmVkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnIoYWNjKTtcbiAgfSwgZmFrZURpdik7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmV0dXJuQ29udGFpbmVyKSkge1xuICAgIHJldHVybiByZXR1cm5Db250YWluZXIubWFwKChodG1sRnVuYykgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaHRtbEZ1bmMoKTtcblxuICAgICAgcmV0dXJuICgpID0+ICgpID0+IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJldHVybkNvbnRhaW5lcigpO1xuICByZXR1cm4gWygpID0+ICgpID0+IGNvbnRhaW5lcl07XG59O1xuXG5jb25zdCBmaXhFbGVtZW50ID0gKGJvZHk6IEhUTUxFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBzaG93RXJyb3IgPSAoaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZz8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoc3Bhbikge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBcIklucHV0IGlzIGJsYW5rLlwiO1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIjtcbiAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KGVycm9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IG9uVm9sdW1lQ2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zYWlsaW5nXCIpO1xuICBjb25zdCBkaXYgPSBldmVudC50YXJnZXQ7XG4gIGlmIChhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQgJiYgZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1wbGF5XCIpKSB7XG4gICAgICBhdWRpb1xuICAgICAgICAucGxheSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjcmVhdGVWb2x1bWUgPSAoKSA9PlxuICAgICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUtaGlnaFwiXSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXBsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS14bWFya1wiXSldKTtcbiAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibm90LXBsYXlcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBvbkNoZWNrYm94Q2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBjaGVjayA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKGNoZWNrIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGRpdiA9IGNoZWNrLnBhcmVudEVsZW1lbnQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3Qgc3BhbiA9IGNoZWNrLnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBpbnB1dCA9IGRpdj8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGlmIChpbnB1dCAmJiBkaXYgJiYgc3Bhbikge1xuICAgICAgaWYgKGNoZWNrLmNoZWNrZWQpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBvbk5hbWVJbnB1dCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBzaG93RXJyb3IoaW5wdXQpO1xuICB9XG59O1xuXG5jb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGZvcm0gPSBldmVudC50YXJnZXQ7XG4gIGlmIChmb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGZvcm1baV07XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmICghaW5wdXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICBzaG93RXJyb3IoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgeyBvbkNoZWNrYm94Q2hhbmdlLCBvblZvbHVtZUNoYW5nZSwgb25OYW1lSW5wdXQsIG9uRm9ybVN1Ym1pdCB9O1xuIiwiaW1wb3J0IHNoaXBTYWlsaW5nIGZyb20gXCIuLi9hc3NldHMvYXVkaW8vc2FpbGluZy5tcDNcIjtcbmltcG9ydCBzaGlwU2FpbGluZzIgZnJvbSBcIi4uL2Fzc2V0cy9hdWRpby9zYWlsaW5nLm9nZ1wiO1xuaW1wb3J0IHBpcmF0ZUltZyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlcy9waXJhdGUuc3ZnXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHtcbiAgb25DaGVja2JveENoYW5nZSxcbiAgb25Wb2x1bWVDaGFuZ2UsXG4gIG9uTmFtZUlucHV0LFxuICBvbkZvcm1TdWJtaXQsXG59IGZyb20gXCIuL2V2ZW50TGlzdGVuZXJzXCI7XG5cbmNvbnN0IHNhaWxpbmdBdWRpbyA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZ10sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9tcGVnXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBTYWlsaW5nMl0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzaGlwLXNhaWxpbmdcIl0sIG51bGwsIG51bGwsIFtbXCJsb29wXCIsIFwidHJ1ZVwiXV0pLFxuICBdKTtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW1wiYmF0dGxlc2hpcC1oZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtcImhlYWRlci1kaXZcIl0pLFxuICBdKTtcblxuY29uc3QgY3JlYXRlR2l0aHViSWNvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1pY29uXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZVZvbHVtZURpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUteG1hcmtcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibm90LXBsYXlcIl0sIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcImNsaWNrXCIsIG9uVm9sdW1lQ2hhbmdlXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInZvbHVtZS1kaXZcIl0pLFxuICBdKTtcblxuY29uc3QgY3JlYXRlUGxheWVyRGl2ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYHBsYXllciR7bnVtfS1pbnB1dGAsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICAgICAgICBbXCJuYW1lXCIsIGBwbGF5ZXIke251bX1gXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIiBcIl0sXG4gICAgICAgICAgW1wicmVxdWlyZWRcIiwgXCJ0cnVlXCJdLFxuICAgICAgICBdLFxuICAgICAgICBbW1wiaW5wdXRcIiwgb25OYW1lSW5wdXRdXVxuICAgICAgKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgW1wicGxheWVyLWxhYmVsXCJdLFxuICAgICAgICBgRW50ZXIgUGxheWVyICR7bnVtfSBOYW1lOmAsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtbXCJmb3JcIiwgYHBsYXllciR7bnVtfS1pbnB1dGBdXVxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGxheWVyLWVsZW1lbnRzXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZUFJRGl2ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBcIkFJIG1vZGU6XCIsIG51bGwsIFtcbiAgICAgICAgW1wiZm9yXCIsIGBBSSR7bnVtfS1pbnB1dGBdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGBBSSR7bnVtfS1pbnB1dGAsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiY2hlY2tib3hcIl0sXG4gICAgICAgICAgW1wibmFtZVwiLCBgQUkke251bX1gXSxcbiAgICAgICAgXSxcbiAgICAgICAgW1tcImNoYW5nZVwiLCBvbkNoZWNrYm94Q2hhbmdlXV1cbiAgICAgICksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIkFJLWVsZW1lbnRzXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZVBhcnQgPSAobnVtOiBudW1iZXIpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgLi4uY3JlYXRlUGxheWVyRGl2KG51bSksXG4gICAgICAuLi5jcmVhdGVBSURpdihudW0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1wiZXJyb3ItZGl2XCJdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInBsYXllci1wYXJ0XCIsIGBwbGF5ZXIke251bX0tcGFydGBdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZVBsYXllclNlY3Rpb24gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVQYXJ0KDEpLCAuLi5jcmVhdGVQYXJ0KDIpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJwbGF5ZXItc2VjdGlvblwiXSksXG4gIF0pO1xuXG5jb25zdCBjcmVhdGVCdXR0b25TZWN0aW9uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImJ1dHRvblwiLCBcImdhbWUtc3RhcnQtYnV0dG9uXCJdLCBcIlN0YXJ0IEdhbWUhXCIpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImJ1dHRvbi1zZWN0aW9uXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZUJsb2IgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTTUxLjEgLTgwQzY2LjkgLTY5LjQgODAuNyAtNTYuMyA4OS45IC00MEM5OSAtMjMuNiAxMDMuNSAtNC4xIDk4LjkgMTIuOUM5NC4zIDI5LjggODAuOCA0NCA2OC4yIDU5LjdDNTUuNSA3NS4zIDQzLjggOTIuMyAyNiAxMDUuMkM4LjIgMTE4IC0xNS44IDEyNi43IC00MCAxMjQuOEMtNjQuMyAxMjIuOSAtODguOCAxMTAuNiAtOTQuNyA4OS44Qy0xMDAuNyA2OS4xIC04Ny45IDQwIC04MC40IDE4LjRDLTcyLjkgLTMuMiAtNzAuNiAtMTcuMiAtNjkuNiAtMzcuMUMtNjguNyAtNTYuOSAtNjkuMiAtODIuNyAtNTcuOSAtOTUuNEMtNDYuNSAtMTA4IC0yMy4yIC0xMDcuNSAtMi44IC0xMDMuMkMxNy43IC05OC44IDM1LjMgLTkwLjYgNTEuMSAtODBcIixcbiAgICAgIF0sXG4gICAgICBbXCJmaWxsXCIsIFwiIzAwMDAwMGIzXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJnXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg0NDcuNzY0Mzg4NzM2MjM0MyAyOTAuNDQyODU0Nzg0NDM4MylcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcInN2Z1wiLCBudWxsLCBudWxsLCBcInZpc3VhbFwiLCBbXG4gICAgICBbXCJ2aWV3Qm94XCIsIFwiMCAwIDkwMCA2MDBcIl0sXG4gICAgICBbXCJ3aWR0aFwiLCBcIjEwMHZ3XCJdLFxuICAgICAgW1wiaGVpZ2h0XCIsIFwiNTAwXCJdLFxuICAgICAgW1wieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXSxcbiAgICAgIFtcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXSxcbiAgICAgIFtcInZlcnNpb25cIiwgXCIxLjFcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJibG9iXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZVBpcmF0ZUJvYXJkID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgyXCIsXG4gICAgICAgIFtcImZvcm0taGVhZGVyXCJdLFxuICAgICAgICBcIkFob3kgQ2FwJ24sIGJlIHllIHJlYWR5IHRvIHNhaWwgdGhlIHNldmVuIHNlYXMgd2l0aCB5ZXIgbG95YWwgY3Jldz9cIlxuICAgICAgKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wicGlyYXRlLWltYWdlXCJdLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBwaXJhdGVJbWddLFxuICAgICAgICBbXCJ3aWR0aFwiLCBcIjglXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInBpcmF0ZS1pbm5lci1ib3JkZXJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLW91dGVyLWJvcmRlclwiXSksXG4gIF0pO1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZCgpLFxuICAgICAgLi4uY3JlYXRlUGxheWVyU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQnV0dG9uU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQmxvYigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZm9ybVwiLFxuICAgICAgW1wicGxheWVyLWZvcm1cIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIFtbXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiXV0sXG4gICAgICBbW1wic3VibWl0XCIsIG9uRm9ybVN1Ym1pdF1dXG4gICAgKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVWb2x1bWVEaXYoKSwgLi4uY3JlYXRlRm9ybSgpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBbXCJtYWluXCIsIFwibWFpbi1ob21lXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZVdhdmUgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFY0Ni4yOWM0Ny43OSwyMi4yLDEwMy41OSwzMi4xNywxNTgsMjgsNzAuMzYtNS4zNywxMzYuMzMtMzMuMzEsMjA2LjgtMzcuNUM0MzguNjQsMzIuNDMsNTEyLjM0LDUzLjY3LDU4Myw3Mi4wNWM2OS4yNywxOCwxMzguMywyNC44OCwyMDkuNCwxMy4wOCwzNi4xNS02LDY5Ljg1LTE3Ljg0LDEwNC40NS0yOS4zNEM5ODkuNDksMjUsMTExMy0xNC4yOSwxMjAwLDUyLjQ3VjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm9wYWNpdHlcIiwgXCIuMjVcIl0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjE1LjgxQzEzLDM2LjkyLDI3LjY0LDU2Ljg2LDQ3LjY5LDcyLjA1LDk5LjQxLDExMS4yNywxNjUsMTExLDIyNC41OCw5MS41OGMzMS4xNS0xMC4xNSw2MC4wOS0yNi4wNyw4OS42Ny0zOS44LDQwLjkyLTE5LDg0LjczLTQ2LDEzMC44My00OS42NywzNi4yNi0yLjg1LDcwLjksOS40Miw5OC42LDMxLjU2LDMxLjc3LDI1LjM5LDYyLjMyLDYyLDEwMy42Myw3Myw0MC40NCwxMC43OSw4MS4zNS02LjY5LDExOS4xMy0yNC4yOHM3NS4xNi0zOSwxMTYuOTItNDMuMDVjNTkuNzMtNS44NSwxMTMuMjgsMjIuODgsMTY4LjksMzguODQsMzAuMiw4LjY2LDU5LDYuMTcsODcuMDktNy41LDIyLjQzLTEwLjg5LDQ4LTI2LjkzLDYwLjY1LTQ5LjI0VjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm9wYWNpdHlcIiwgXCIuNVwiXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWNS42M0MxNDkuOTMsNTksMzE0LjA5LDcxLjMyLDQ3NS44Myw0Mi41N2M0My03LjY0LDg0LjIzLTIwLjEyLDEyNy42MS0yNi40Niw1OS04LjYzLDExMi40OCwxMi4yNCwxNjUuNTYsMzUuNEM4MjcuOTMsNzcuMjIsODg2LDk1LjI0LDk1MS4yLDkwYzg2LjUzLTcsMTcyLjQ2LTQ1LjcxLDI0OC44LTg0LjgxVjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcInN2Z1wiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJkYXRhLW5hbWVcIiwgXCJMYXllciAxXCJdLFxuICAgICAgW1wieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXSxcbiAgICAgIFtcInZpZXdCb3hcIiwgXCIwIDAgMTIwMCAxMjBcIl0sXG4gICAgICBbXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwibm9uZVwiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndhdmVcIl0pLFxuICBdKTtcblxuY29uc3QgY3JlYXRlR2l0aHViRGl2ID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1uYW1lXCJdLCBcIk15bmFtZWlzZnJvc3R3YWxrZXJcIiksXG4gICAgICAuLi5jcmVhdGVHaXRodWJJY29uKCksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL015bmFtZWlzZnJvc3R3YWxrZXJcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItZGl2XCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZUdpdGh1YkRpdigpLCAuLi5jcmVhdGVXYXZlKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgW1wiZm9vdGVyXCJdKSxcbiAgXSk7XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZUhlYWRlcigpLCAuLi5jcmVhdGVNYWluKCksIC4uLmNyZWF0ZUZvb3RlcigpLCAuLi5zYWlsaW5nQXVkaW8oKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIiwgXCJjb250YWluZXItaG9tZVwiXSksXG4gIF0pO1xuXG5jb25zdCBpbml0RGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcigpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXREaXNwbGF5O1xuIl0sIm5hbWVzIjpbImNoZWNrSWZGdW5jQ29udGFpbnNGYWtlIiwiZnVuYyIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZXMiLCJ0ZXh0Q29udGVudCIsImlkIiwiYXR0cmlidXRlcyIsImV2ZW50TGlzdGVuZXJzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyIiwiYXJyIiwiY29tcG9zZUVsZW1lbnRzIiwiZmFrZURpdiIsImZha2UiLCJyZXR1cm5Db250YWluZXIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwibWFwIiwidW5kZWZpbmVkIiwiaHRtbEZ1bmMiLCJmaXhFbGVtZW50IiwiYm9keSIsInNob3dFcnJvciIsImlucHV0Iiwic3BhbiIsInBhcmVudEVsZW1lbnQiLCJuZXh0RWxlbWVudFNpYmxpbmciLCJ2YWxpZGl0eSIsInZhbHVlTWlzc2luZyIsInZhbHVlIiwidHJpbSIsImVycm9yIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJvblZvbHVtZUNoYW5nZSIsImV2ZW50IiwiYXVkaW8iLCJxdWVyeVNlbGVjdG9yIiwiZGl2IiwidGFyZ2V0IiwiSFRNTEF1ZGlvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY29udGFpbnMiLCJwbGF5IiwidGhlbiIsImNyZWF0ZVZvbHVtZSIsInJlcGxhY2VDaGlsZHJlbiIsInJlbW92ZSIsIkVycm9yIiwicGF1c2UiLCJvbkNoZWNrYm94Q2hhbmdlIiwiY2hlY2siLCJIVE1MSW5wdXRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImNoZWNrZWQiLCJkaXNhYmxlZCIsIm9uTmFtZUlucHV0Iiwib25Gb3JtU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiSFRNTEZvcm1FbGVtZW50IiwiaSIsImxlbmd0aCIsInNoaXBTYWlsaW5nIiwic2hpcFNhaWxpbmcyIiwicGlyYXRlSW1nIiwic2FpbGluZ0F1ZGlvIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlR2l0aHViSWNvbiIsImNyZWF0ZVZvbHVtZURpdiIsImNyZWF0ZVBsYXllckRpdiIsIm51bSIsImNyZWF0ZUFJRGl2IiwiY3JlYXRlUGFydCIsImNyZWF0ZVBsYXllclNlY3Rpb24iLCJjcmVhdGVCdXR0b25TZWN0aW9uIiwiY3JlYXRlQmxvYiIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwiY3JlYXRlRm9ybSIsImNyZWF0ZU1haW4iLCJjcmVhdGVXYXZlIiwiY3JlYXRlR2l0aHViRGl2IiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlQ29udGFpbmVyIiwiaW5pdERpc3BsYXkiXSwic291cmNlUm9vdCI6IiJ9