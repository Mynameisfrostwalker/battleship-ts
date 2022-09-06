"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_components_footer_ts-src_scripts_components_pirateBoard_ts-src_scripts_components-f54e00"],{

/***/ "./src/scripts/components/footer.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/footer.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _githubDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./githubDiv */ "./src/scripts/components/githubDiv.ts");
/* harmony import */ var _wave__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wave */ "./src/scripts/components/wave.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createFooter = function createFooter() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_githubDiv__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_wave__WEBPACK_IMPORTED_MODULE_2__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", ["footer"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);

/***/ }),

/***/ "./src/scripts/components/githubDiv.ts":
/*!*********************************************!*\
  !*** ./src/scripts/components/githubDiv.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _githubIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./githubIcon */ "./src/scripts/components/githubIcon.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createGithubDiv = function createGithubDiv() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["github-name"], "Mynameisfrostwalker")].concat(_toConsumableArray((0,_githubIcon__WEBPACK_IMPORTED_MODULE_1__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, null, null, [["href", "https://github.com/Mynameisfrostwalker"], ["target", "_blank"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["github-div"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGithubDiv);

/***/ }),

/***/ "./src/scripts/components/githubIcon.ts":
/*!**********************************************!*\
  !*** ./src/scripts/components/githubIcon.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createGithubIcon = function createGithubIcon() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-brands", "fa-github"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["github-icon"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGithubIcon);

/***/ }),

/***/ "./src/scripts/components/pirateBoard.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/pirateBoard.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/pirate.svg */ "./src/assets/images/pirate.svg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");



var createPirateBoard = function createPirateBoard() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?";
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", ["form-header"], name), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", ["pirate-image"], null, null, [["src", _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_0__], ["width", "8%"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-inner-border"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-outer-border"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPirateBoard);

/***/ }),

/***/ "./src/scripts/components/sailingAudio.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/sailingAudio.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_sailing_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/sailing.mp3 */ "./src/assets/audio/sailing.mp3");
/* harmony import */ var _assets_audio_sailing_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/sailing.ogg */ "./src/assets/audio/sailing.ogg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");




var sailingAudio = function sailingAudio() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("audio", ["ship-sailing"], null, null, [["loop", "true"]])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sailingAudio);

/***/ }),

/***/ "./src/scripts/components/volumeDiv.ts":
/*!*********************************************!*\
  !*** ./src/scripts/components/volumeDiv.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var onVolumeChange = function onVolumeChange(div) {
  var audio = document.querySelector(".ship-sailing");

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

var createVolumeDiv = function createVolumeDiv() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-xmark"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["not-play"], null, null, null, [["click", onVolumeChange]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["volume-div"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createVolumeDiv);

/***/ }),

/***/ "./src/scripts/components/wave.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/wave.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createWave = function createWave() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("path", null, null, null, [["d", "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"], ["opacity", ".25"], ["class", "shape-fill"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("path", null, null, null, [["d", "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"], ["opacity", ".5"], ["class", "shape-fill"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("path", null, null, null, [["d", "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"], ["class", "shape-fill"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("svg", null, null, null, [["data-name", "Layer 1"], ["xmlns", "http://www.w3.org/2000/svg"], ["viewBox", "0 0 1200 120"], ["preserveAspectRatio", "none"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["wave"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWave);

/***/ }),

/***/ "./src/scripts/domManipulator.ts":
/*!***************************************!*\
  !*** ./src/scripts/domManipulator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeElements": () => (/* binding */ composeElements),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createSVG": () => (/* binding */ createSVG),
/* harmony export */   "fixElement": () => (/* binding */ fixElement)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");


var checkIfFuncContainsFake = function checkIfFuncContainsFake(func) {
  return "fake" in func;
};

var createElement = function createElement(elementName, classNames, textContent, id, attributes, eventListeners) {
  var container = document.createElement(elementName);

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

var createSVG = function createSVG(elementName, classNames, textContent, id, attributes, eventListeners, uniqueScriptName, scripts) {
  var container = document.createElementNS("http://www.w3.org/2000/svg", elementName);

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
      var eventWrapper = function eventWrapper() {
        eventListener[1](container);
      };

      container.addEventListener(eventListener[0], eventWrapper);
    });
  }

  if (uniqueScriptName) {
    var addClass = function addClass(className) {
      if (typeof className === "string") {
        container.classList.add(className);
      }
    };

    var removeClass = function removeClass(className) {
      if (typeof className === "string") {
        container.classList.remove(className);
      }
    };

    var setAttribute = function setAttribute(attribute, value) {
      if (typeof attribute === "string" && typeof value === "string") {
        if (value === "") {
          container.removeAttribute(attribute);
        } else {
          container.setAttribute(attribute, value);
        }
      }
    };

    var setText = function setText(text) {
      if (typeof text === "string") {
        container.textContent = text;
      }
    };

    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-addClass"), addClass);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-removeClass"), removeClass);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-setAttribute"), setAttribute);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-setText"), setText);

    if (scripts) {
      scripts.forEach(function (script) {
        var scriptWrapper = function scriptWrapper() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          script[1].apply(script, [container].concat(args));
        };

        (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-").concat(script[0]), scriptWrapper);
      });
    }
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
  body.replaceChildren();
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
};



/***/ }),

/***/ "./src/scripts/pubsub.ts":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "unsubscribe": () => (/* binding */ unsubscribe)
/* harmony export */ });
var events = {// key: eventname, value: [funcs]
};

var subscribe = function subscribe(eventName, func) {
  events[eventName] = events[eventName] || [];
  events[eventName].push(func);
};

var unsubscribe = function unsubscribe(eventName, func) {
  if (events[eventName]) {
    for (var i = 0; i < events[eventName].length; i += 1) {
      if (events[eventName][i].toString() === func.toString()) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

var publish = function publish(eventName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var funcs = events[eventName];

  if (Array.isArray(funcs)) {
    funcs.forEach(function (func) {
      func.apply(void 0, args);
    });
  }
};



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY29tcG9uZW50c19mb290ZXJfdHMtc3JjX3NjcmlwdHNfY29tcG9uZW50c19waXJhdGVCb2FyZF90cy1zcmNfc2NyaXB0c19jb21wb25lbnRzLWY1NGUwMC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQ25CSixnRUFBZSxDQUFDLDhCQUNWRSxzREFBZSxFQURMLHNCQUNZQyxpREFBVSxFQUR0QixJQUVkRiw4REFBYSxDQUFDLFFBQUQsRUFBVyxDQUFDLFFBQUQsQ0FBWCxDQUZDLENBQUQsQ0FESTtBQUFBLENBQXJCOztBQU1BLGlFQUFlRyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQSxJQUFNRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0VBQUEsT0FDdEJGLGdFQUFlLENBQUMsRUFFWkMsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxhQUFELENBQVIsRUFBeUIscUJBQXpCLENBRkQsNEJBR1RJLHVEQUFnQixFQUhQLElBS2RKLDhEQUFhLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLENBQ25DLENBQUMsTUFBRCxFQUFTLHdDQUFULENBRG1DLEVBRW5DLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FGbUMsQ0FBeEIsQ0FMQyxFQVNkQSw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLFlBQUQsQ0FBUixDQVRDLENBQUQsQ0FETztBQUFBLENBQXhCOztBQWFBLGlFQUFlQyxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLE9BQ3ZCTCxnRUFBZSxDQUFDLENBQ2RDLDhEQUFhLENBQUMsR0FBRCxFQUFNLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FBTixDQURD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LENBQWNxQyxLQUFkLENBQUosRUFBMEI7SUFDeEJBLEtBQUssQ0FBQzdDLE9BQU4sQ0FBYyxVQUFDUixJQUFELEVBQVU7TUFDdEJBLElBQUksTUFBSixTQUFRK0IsSUFBUjtJQUNELENBRkQ7RUFHRDtBQUNGLENBUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2l0aHViRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dpdGh1Ykljb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGlyYXRlQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2FpbGluZ0F1ZGlvLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3ZvbHVtZURpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy93YXZlLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9kb21NYW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUdpdGh1YkRpdiBmcm9tIFwiLi9naXRodWJEaXZcIjtcbmltcG9ydCBjcmVhdGVXYXZlIGZyb20gXCIuL3dhdmVcIjtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlR2l0aHViRGl2KCksIC4uLmNyZWF0ZVdhdmUoKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBbXCJmb290ZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlR2l0aHViSWNvbiBmcm9tIFwiLi9naXRodWJJY29uXCI7XG5cbmNvbnN0IGNyZWF0ZUdpdGh1YkRpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItbmFtZVwiXSwgXCJNeW5hbWVpc2Zyb3N0d2Fsa2VyXCIpLFxuICAgICAgLi4uY3JlYXRlR2l0aHViSWNvbigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9NeW5hbWVpc2Zyb3N0d2Fsa2VyXCJdLFxuICAgICAgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViLWRpdlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHaXRodWJEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlR2l0aHViSWNvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1pY29uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdpdGh1Ykljb247XG4iLCJpbXBvcnQgcGlyYXRlSW1nIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BpcmF0ZS5zdmdcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVQaXJhdGVCb2FyZCA9IChcbiAgbmFtZSA9IFwiQWhveSBDYXAnbiwgYmUgeWUgcmVhZHkgdG8gc2FpbCB0aGUgc2V2ZW4gc2VhcyB3aXRoIHllciBsb3lhbCBjcmV3P1wiXG4pID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgyXCIsIFtcImZvcm0taGVhZGVyXCJdLCBuYW1lKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wicGlyYXRlLWltYWdlXCJdLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBwaXJhdGVJbWddLFxuICAgICAgICBbXCJ3aWR0aFwiLCBcIjglXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInBpcmF0ZS1pbm5lci1ib3JkZXJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLW91dGVyLWJvcmRlclwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQaXJhdGVCb2FyZDtcbiIsImltcG9ydCBzaGlwU2FpbGluZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NhaWxpbmcubXAzXCI7XG5pbXBvcnQgc2hpcFNhaWxpbmcyIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2FpbGluZy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBzYWlsaW5nQXVkaW8gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc2hpcFNhaWxpbmddLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZzJdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vb2dnXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgW1wic2hpcC1zYWlsaW5nXCJdLCBudWxsLCBudWxsLCBbW1wibG9vcFwiLCBcInRydWVcIl1dKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNhaWxpbmdBdWRpbztcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgZml4RWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBvblZvbHVtZUNoYW5nZSA9IChkaXY6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNhaWxpbmdcIik7XG4gIGlmIChhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQgJiYgZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1wbGF5XCIpKSB7XG4gICAgICBhdWRpb1xuICAgICAgICAucGxheSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjcmVhdGVWb2x1bWUgPSAoKSA9PlxuICAgICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUtaGlnaFwiXSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXBsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS14bWFya1wiXSldKTtcbiAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibm90LXBsYXlcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVWb2x1bWVEaXYgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLXhtYXJrXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm5vdC1wbGF5XCJdLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJjbGlja1wiLCBvblZvbHVtZUNoYW5nZV0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ2b2x1bWUtZGl2XCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZvbHVtZURpdjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZVdhdmUgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjQ2LjI5YzQ3Ljc5LDIyLjIsMTAzLjU5LDMyLjE3LDE1OCwyOCw3MC4zNi01LjM3LDEzNi4zMy0zMy4zMSwyMDYuOC0zNy41QzQzOC42NCwzMi40Myw1MTIuMzQsNTMuNjcsNTgzLDcyLjA1YzY5LjI3LDE4LDEzOC4zLDI0Ljg4LDIwOS40LDEzLjA4LDM2LjE1LTYsNjkuODUtMTcuODQsMTA0LjQ1LTI5LjM0Qzk4OS40OSwyNSwxMTEzLTE0LjI5LDEyMDAsNTIuNDdWMFpcIixcbiAgICAgICAgXSxcbiAgICAgICAgW1wib3BhY2l0eVwiLCBcIi4yNVwiXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFYxNS44MUMxMywzNi45MiwyNy42NCw1Ni44Niw0Ny42OSw3Mi4wNSw5OS40MSwxMTEuMjcsMTY1LDExMSwyMjQuNTgsOTEuNThjMzEuMTUtMTAuMTUsNjAuMDktMjYuMDcsODkuNjctMzkuOCw0MC45Mi0xOSw4NC43My00NiwxMzAuODMtNDkuNjcsMzYuMjYtMi44NSw3MC45LDkuNDIsOTguNiwzMS41NiwzMS43NywyNS4zOSw2Mi4zMiw2MiwxMDMuNjMsNzMsNDAuNDQsMTAuNzksODEuMzUtNi42OSwxMTkuMTMtMjQuMjhzNzUuMTYtMzksMTE2LjkyLTQzLjA1YzU5LjczLTUuODUsMTEzLjI4LDIyLjg4LDE2OC45LDM4Ljg0LDMwLjIsOC42Niw1OSw2LjE3LDg3LjA5LTcuNSwyMi40My0xMC44OSw0OC0yNi45Myw2MC42NS00OS4yNFYwWlwiLFxuICAgICAgICBdLFxuICAgICAgICBbXCJvcGFjaXR5XCIsIFwiLjVcIl0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWNS42M0MxNDkuOTMsNTksMzE0LjA5LDcxLjMyLDQ3NS44Myw0Mi41N2M0My03LjY0LDg0LjIzLTIwLjEyLDEyNy42MS0yNi40Niw1OS04LjYzLDExMi40OCwxMi4yNCwxNjUuNTYsMzUuNEM4MjcuOTMsNzcuMjIsODg2LDk1LjI0LDk1MS4yLDkwYzg2LjUzLTcsMTcyLjQ2LTQ1LjcxLDI0OC44LTg0LjgxVjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlU1ZHKFwic3ZnXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcImRhdGEtbmFtZVwiLCBcIkxheWVyIDFcIl0sXG4gICAgICBbXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJdLFxuICAgICAgW1widmlld0JveFwiLCBcIjAgMCAxMjAwIDEyMFwiXSxcbiAgICAgIFtcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid2F2ZVwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXYXZlO1xuIiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbnR5cGUgSFRNTEZ1bmMgPSAoKSA9PiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKGNoaWxkPzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGVja0lmRnVuY0NvbnRhaW5zRmFrZShjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVTVkcgPSAoXG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IG51bGwsXG4gIHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCxcbiAgaWQ/OiBzdHJpbmcgfCBudWxsLFxuICBhdHRyaWJ1dGVzPzogW3N0cmluZywgc3RyaW5nXVtdIHwgbnVsbCxcbiAgZXZlbnRMaXN0ZW5lcnM/OiBbc3RyaW5nLCAoY29udGFpbmVyOiBTVkdFbGVtZW50KSA9PiB2b2lkXVtdIHwgbnVsbCxcbiAgdW5pcXVlU2NyaXB0TmFtZT86IHN0cmluZyB8IG51bGwsXG4gIHNjcmlwdHM/OiBbc3RyaW5nLCAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogU1ZHRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZWxlbWVudE5hbWVcbiAgKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lclsxXShjb250YWluZXIpO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRXcmFwcGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1bmlxdWVTY3JpcHROYW1lKSB7XG4gICAgY29uc3QgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHVua25vd24sIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGV4dCA9ICh0ZXh0OiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LWFkZENsYXNzYCwgYWRkQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1yZW1vdmVDbGFzc2AsIHJlbW92ZUNsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0QXR0cmlidXRlYCwgc2V0QXR0cmlidXRlKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0VGV4dGAsIHNldFRleHQpO1xuXG4gICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdFdyYXBwZXIgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgc2NyaXB0WzFdKGNvbnRhaW5lciwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS0ke3NjcmlwdFswXX1gLCBzY3JpcHRXcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyID0gKFxuICBhcnI6IENoaWxkRnVuYyB8IENoaWxkRnVuY0FyclxuKTogYXJyIGlzIENoaWxkRnVuY0FyciA9PiBBcnJheS5pc0FycmF5KGFycik7XG5cbmNvbnN0IGNvbXBvc2VFbGVtZW50cyA9IChhcnI6IChDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnIpW10pOiBDaGlsZEZ1bmNBcnIgPT4ge1xuICBjb25zdCBmYWtlRGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmFrZURpdi5mYWtlID0gdHJ1ZTtcblxuICBjb25zdCByZXR1cm5Db250YWluZXIgPSBhcnIucmVkdWNlPENoaWxkPigoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyKGN1cnIpKSB7XG4gICAgICByZXR1cm4gY3Vyci5tYXAoKGZ1bmMpID0+IGZ1bmModW5kZWZpbmVkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnIoYWNjKTtcbiAgfSwgZmFrZURpdik7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmV0dXJuQ29udGFpbmVyKSkge1xuICAgIHJldHVybiByZXR1cm5Db250YWluZXIubWFwKChodG1sRnVuYykgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaHRtbEZ1bmMoKTtcblxuICAgICAgcmV0dXJuICgpID0+ICgpID0+IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJldHVybkNvbnRhaW5lcigpO1xuICByZXR1cm4gWygpID0+ICgpID0+IGNvbnRhaW5lcl07XG59O1xuXG5jb25zdCBmaXhFbGVtZW50ID0gKGJvZHk6IEhUTUxFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfTtcbmV4cG9ydCB7IGZpeEVsZW1lbnQsIGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH07XG4iLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBFdmVudHMge1xuICBbaW5kZXg6IHN0cmluZ106IEFueWZ1bmN0aW9uc1tdO1xufVxuXG5jb25zdCBldmVudHM6IEV2ZW50cyA9IHtcbiAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xufTtcblxuY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0udG9TdHJpbmcoKSA9PT0gZnVuYy50b1N0cmluZygpKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkID0+IHtcbiAgY29uc3QgZnVuY3MgPSBldmVudHNbZXZlbnROYW1lXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgZnVuY3MuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcHVibGlzaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xuIl0sIm5hbWVzIjpbImNvbXBvc2VFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVHaXRodWJEaXYiLCJjcmVhdGVXYXZlIiwiY3JlYXRlRm9vdGVyIiwiY3JlYXRlR2l0aHViSWNvbiIsInBpcmF0ZUltZyIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwibmFtZSIsInNoaXBTYWlsaW5nIiwic2hpcFNhaWxpbmcyIiwic2FpbGluZ0F1ZGlvIiwiZml4RWxlbWVudCIsIm9uVm9sdW1lQ2hhbmdlIiwiZGl2IiwiYXVkaW8iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJIVE1MQXVkaW9FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInBsYXkiLCJ0aGVuIiwiY3JlYXRlVm9sdW1lIiwicmVwbGFjZUNoaWxkcmVuIiwicmVtb3ZlIiwiRXJyb3IiLCJwYXVzZSIsImFkZCIsImNyZWF0ZVZvbHVtZURpdiIsImNyZWF0ZVNWRyIsInN1YnNjcmliZSIsImNoZWNrSWZGdW5jQ29udGFpbnNGYWtlIiwiZnVuYyIsImVsZW1lbnROYW1lIiwiY2xhc3NOYW1lcyIsInRleHRDb250ZW50IiwiaWQiLCJhdHRyaWJ1dGVzIiwiZXZlbnRMaXN0ZW5lcnMiLCJjb250YWluZXIiLCJmb3JFYWNoIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsInVuaXF1ZVNjcmlwdE5hbWUiLCJzY3JpcHRzIiwiY3JlYXRlRWxlbWVudE5TIiwiZXZlbnRXcmFwcGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0VGV4dCIsInRleHQiLCJzY3JpcHQiLCJzY3JpcHRXcmFwcGVyIiwiYXJncyIsImNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyIiwiYXJyIiwiZmFrZURpdiIsImZha2UiLCJyZXR1cm5Db250YWluZXIiLCJyZWR1Y2UiLCJhY2MiLCJjdXJyIiwibWFwIiwidW5kZWZpbmVkIiwiaHRtbEZ1bmMiLCJib2R5IiwiZXZlbnRzIiwiZXZlbnROYW1lIiwicHVzaCIsInVuc3Vic2NyaWJlIiwiaSIsImxlbmd0aCIsInRvU3RyaW5nIiwic3BsaWNlIiwicHVibGlzaCIsImZ1bmNzIl0sInNvdXJjZVJvb3QiOiIifQ==