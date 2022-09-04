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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["github-name"], "Mynameisfrostwalker")].concat(_toConsumableArray((0,_githubIcon__WEBPACK_IMPORTED_MODULE_1__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, null, null, [["href", "https://github.com/Mynameisfrostwalker"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["github-div"])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", ["form-header"], "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", ["pirate-image"], null, null, [["src", _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_0__], ["width", "8%"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-inner-border"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-outer-border"])]);
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
      var eventWrapper = function eventWrapper(event) {
        event.preventDefault();
        eventListener[1](container);
      };

      container.addEventListener(eventListener[0], eventWrapper);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY29tcG9uZW50c19mb290ZXJfdHMtc3JjX3NjcmlwdHNfY29tcG9uZW50c19waXJhdGVCb2FyZF90cy1zcmNfc2NyaXB0c19jb21wb25lbnRzLWY1NGUwMC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQ25CSixnRUFBZSxDQUFDLDhCQUNWRSxzREFBZSxFQURMLHNCQUNZQyxpREFBVSxFQUR0QixJQUVkRiw4REFBYSxDQUFDLFFBQUQsRUFBVyxDQUFDLFFBQUQsQ0FBWCxDQUZDLENBQUQsQ0FESTtBQUFBLENBQXJCOztBQU1BLGlFQUFlRyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQSxJQUFNRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0VBQUEsT0FDdEJGLGdFQUFlLENBQUMsRUFFWkMsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxhQUFELENBQVIsRUFBeUIscUJBQXpCLENBRkQsNEJBR1RJLHVEQUFnQixFQUhQLElBS2RKLDhEQUFhLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLENBQ25DLENBQUMsTUFBRCxFQUFTLHdDQUFULENBRG1DLENBQXhCLENBTEMsRUFRZEEsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxZQUFELENBQVIsQ0FSQyxDQUFELENBRE87QUFBQSxDQUF4Qjs7QUFZQSxpRUFBZUMsZUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLE9BQ3ZCTCxnRUFBZSxDQUFDLENBQ2RDLDhEQUFhLENBQUMsR0FBRCxFQUFNLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FBTixDQURDLEVBRWRBLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMs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R1QsTUFBTSxDQUFDQyxTQUFELENBQXBCOztFQUNBLElBQUk3QixLQUFLLENBQUNDLE9BQU4sQ0FBY29DLEtBQWQsQ0FBSixFQUEwQjtJQUN4QkEsS0FBSyxDQUFDL0MsT0FBTixDQUFjLFVBQUNSLElBQUQsRUFBVTtNQUN0QkEsSUFBSSxNQUFKLFNBQVFpQyxJQUFSO0lBQ0QsQ0FGRDtFQUdEO0FBQ0YsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9naXRodWJEaXYudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2l0aHViSWNvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9waXJhdGVCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zYWlsaW5nQXVkaW8udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvdm9sdW1lRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dhdmUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdG9yLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlR2l0aHViRGl2IGZyb20gXCIuL2dpdGh1YkRpdlwiO1xuaW1wb3J0IGNyZWF0ZVdhdmUgZnJvbSBcIi4vd2F2ZVwiO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVHaXRodWJEaXYoKSwgLi4uY3JlYXRlV2F2ZSgpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtcImZvb3RlclwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Ykljb25cIjtcblxuY29uc3QgY3JlYXRlR2l0aHViRGl2ID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1uYW1lXCJdLCBcIk15bmFtZWlzZnJvc3R3YWxrZXJcIiksXG4gICAgICAuLi5jcmVhdGVHaXRodWJJY29uKCksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL015bmFtZWlzZnJvc3R3YWxrZXJcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItZGl2XCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdpdGh1YkRpdjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVHaXRodWJJY29uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViLWljb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2l0aHViSWNvbjtcbiIsImltcG9ydCBwaXJhdGVJbWcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGlyYXRlLnN2Z1wiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZVBpcmF0ZUJvYXJkID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImgyXCIsXG4gICAgICAgIFtcImZvcm0taGVhZGVyXCJdLFxuICAgICAgICBcIkFob3kgQ2FwJ24sIGJlIHllIHJlYWR5IHRvIHNhaWwgdGhlIHNldmVuIHNlYXMgd2l0aCB5ZXIgbG95YWwgY3Jldz9cIlxuICAgICAgKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wicGlyYXRlLWltYWdlXCJdLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBwaXJhdGVJbWddLFxuICAgICAgICBbXCJ3aWR0aFwiLCBcIjglXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInBpcmF0ZS1pbm5lci1ib3JkZXJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLW91dGVyLWJvcmRlclwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQaXJhdGVCb2FyZDtcbiIsImltcG9ydCBzaGlwU2FpbGluZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NhaWxpbmcubXAzXCI7XG5pbXBvcnQgc2hpcFNhaWxpbmcyIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2FpbGluZy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBzYWlsaW5nQXVkaW8gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc2hpcFNhaWxpbmddLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZzJdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vb2dnXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgW1wic2hpcC1zYWlsaW5nXCJdLCBudWxsLCBudWxsLCBbW1wibG9vcFwiLCBcInRydWVcIl1dKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IHNhaWxpbmdBdWRpbztcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgZml4RWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBvblZvbHVtZUNoYW5nZSA9IChkaXY6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNhaWxpbmdcIik7XG4gIGlmIChhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQgJiYgZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdC1wbGF5XCIpKSB7XG4gICAgICBhdWRpb1xuICAgICAgICAucGxheSgpXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBjcmVhdGVWb2x1bWUgPSAoKSA9PlxuICAgICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUtaGlnaFwiXSksXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXBsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdWRpby5wYXVzZSgpO1xuICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS14bWFya1wiXSldKTtcbiAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwibm90LXBsYXlcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVWb2x1bWVEaXYgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLXhtYXJrXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIm5vdC1wbGF5XCJdLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJjbGlja1wiLCBvblZvbHVtZUNoYW5nZV0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ2b2x1bWUtZGl2XCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVZvbHVtZURpdjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZVdhdmUgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjQ2LjI5YzQ3Ljc5LDIyLjIsMTAzLjU5LDMyLjE3LDE1OCwyOCw3MC4zNi01LjM3LDEzNi4zMy0zMy4zMSwyMDYuOC0zNy41QzQzOC42NCwzMi40Myw1MTIuMzQsNTMuNjcsNTgzLDcyLjA1YzY5LjI3LDE4LDEzOC4zLDI0Ljg4LDIwOS40LDEzLjA4LDM2LjE1LTYsNjkuODUtMTcuODQsMTA0LjQ1LTI5LjM0Qzk4OS40OSwyNSwxMTEzLTE0LjI5LDEyMDAsNTIuNDdWMFpcIixcbiAgICAgICAgXSxcbiAgICAgICAgW1wib3BhY2l0eVwiLCBcIi4yNVwiXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFYxNS44MUMxMywzNi45MiwyNy42NCw1Ni44Niw0Ny42OSw3Mi4wNSw5OS40MSwxMTEuMjcsMTY1LDExMSwyMjQuNTgsOTEuNThjMzEuMTUtMTAuMTUsNjAuMDktMjYuMDcsODkuNjctMzkuOCw0MC45Mi0xOSw4NC43My00NiwxMzAuODMtNDkuNjcsMzYuMjYtMi44NSw3MC45LDkuNDIsOTguNiwzMS41NiwzMS43NywyNS4zOSw2Mi4zMiw2MiwxMDMuNjMsNzMsNDAuNDQsMTAuNzksODEuMzUtNi42OSwxMTkuMTMtMjQuMjhzNzUuMTYtMzksMTE2LjkyLTQzLjA1YzU5LjczLTUuODUsMTEzLjI4LDIyLjg4LDE2OC45LDM4Ljg0LDMwLjIsOC42Niw1OSw2LjE3LDg3LjA5LTcuNSwyMi40My0xMC44OSw0OC0yNi45Myw2MC42NS00OS4yNFYwWlwiLFxuICAgICAgICBdLFxuICAgICAgICBbXCJvcGFjaXR5XCIsIFwiLjVcIl0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWNS42M0MxNDkuOTMsNTksMzE0LjA5LDcxLjMyLDQ3NS44Myw0Mi41N2M0My03LjY0LDg0LjIzLTIwLjEyLDEyNy42MS0yNi40Niw1OS04LjYzLDExMi40OCwxMi4yNCwxNjUuNTYsMzUuNEM4MjcuOTMsNzcuMjIsODg2LDk1LjI0LDk1MS4yLDkwYzg2LjUzLTcsMTcyLjQ2LTQ1LjcxLDI0OC44LTg0LjgxVjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlU1ZHKFwic3ZnXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcImRhdGEtbmFtZVwiLCBcIkxheWVyIDFcIl0sXG4gICAgICBbXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJdLFxuICAgICAgW1widmlld0JveFwiLCBcIjAgMCAxMjAwIDEyMFwiXSxcbiAgICAgIFtcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wid2F2ZVwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXYXZlO1xuIiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbnR5cGUgSFRNTEZ1bmMgPSAoKSA9PiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50V3JhcHBlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lclsxXShjb250YWluZXIpO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRXcmFwcGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNWRyA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChjb250YWluZXI6IFNWR0VsZW1lbnQpID0+IHZvaWRdW10gfCBudWxsLFxuICB1bmlxdWVTY3JpcHROYW1lPzogc3RyaW5nIHwgbnVsbCxcbiAgc2NyaXB0cz86IFtzdHJpbmcsICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBTVkdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBlbGVtZW50TmFtZVxuICApO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICBldmVudExpc3RlbmVyWzFdKGNvbnRhaW5lcik7XG4gICAgICB9O1xuXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyWzBdLCBldmVudFdyYXBwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVuaXF1ZVNjcmlwdE5hbWUpIHtcbiAgICBjb25zdCBhZGRDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGF0dHJpYnV0ZTogdW5rbm93biwgdmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tYWRkQ2xhc3NgLCBhZGRDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXJlbW92ZUNsYXNzYCwgcmVtb3ZlQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRBdHRyaWJ1dGVgLCBzZXRBdHRyaWJ1dGUpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRUZXh0YCwgc2V0VGV4dCk7XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0V3JhcHBlciA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICBzY3JpcHRbMV0oY29udGFpbmVyLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LSR7c2NyaXB0WzBdfWAsIHNjcmlwdFdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEVsZW1lbnQsIGNoaWxkOiBDaGlsZEZ1bmNBcnJbXSkgPT4ge1xuICBib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuICBjaGlsZC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgZnVuYy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQoKSgpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgdHlwZSB7IENoaWxkRnVuYyB9O1xuZXhwb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTVkcgfTtcbiIsInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXS50b1N0cmluZygpID09PSBmdW5jLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG4iXSwibmFtZXMiOlsiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZUdpdGh1YkRpdiIsImNyZWF0ZVdhdmUiLCJjcmVhdGVGb290ZXIiLCJjcmVhdGVHaXRodWJJY29uIiwicGlyYXRlSW1nIiwiY3JlYXRlUGlyYXRlQm9hcmQiLCJzaGlwU2FpbGluZyIsInNoaXBTYWlsaW5nMiIsInNhaWxpbmdBdWRpbyIsImZpeEVsZW1lbnQiLCJvblZvbHVtZUNoYW5nZSIsImRpdiIsImF1ZGlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEF1ZGlvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwbGF5IiwidGhlbiIsImNyZWF0ZVZvbHVtZSIsInJlcGxhY2VDaGlsZHJlbiIsInJlbW92ZSIsIkVycm9yIiwicGF1c2UiLCJhZGQiLCJjcmVhdGVWb2x1bWVEaXYiLCJjcmVhdGVTVkciLCJzdWJzY3JpYmUiLCJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZXMiLCJ0ZXh0Q29udGVudCIsImlkIiwiYXR0cmlidXRlcyIsImV2ZW50TGlzdGVuZXJzIiwiY29udGFpbmVyIiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJldmVudFdyYXBwZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwidW5pcXVlU2NyaXB0TmFtZSIsInNjcmlwdHMiLCJjcmVhdGVFbGVtZW50TlMiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwidmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUZXh0IiwidGV4dCIsInNjcmlwdCIsInNjcmlwdFdyYXBwZXIiLCJhcmdzIiwiY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIiLCJhcnIiLCJmYWtlRGl2IiwiZmFrZSIsInJldHVybkNvbnRhaW5lciIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJtYXAiLCJ1bmRlZmluZWQiLCJodG1sRnVuYyIsImJvZHkiLCJldmVudHMiLCJldmVudE5hbWUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJpIiwibGVuZ3RoIiwidG9TdHJpbmciLCJzcGxpY2UiLCJwdWJsaXNoIiwiZnVuY3MiXSwic291cmNlUm9vdCI6IiJ9