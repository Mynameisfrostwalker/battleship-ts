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


var onVolumeChange = function onVolumeChange(event) {
  var div = event.currentTarget;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY29tcG9uZW50c19mb290ZXJfdHMtc3JjX3NjcmlwdHNfY29tcG9uZW50c19waXJhdGVCb2FyZF90cy1zcmNfc2NyaXB0c19jb21wb25lbnRzLWY1NGUwMC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQ25CSixnRUFBZSxDQUFDLDhCQUNWRSxzREFBZSxFQURMLHNCQUNZQyxpREFBVSxFQUR0QixJQUVkRiw4REFBYSxDQUFDLFFBQUQsRUFBVyxDQUFDLFFBQUQsQ0FBWCxDQUZDLENBQUQsQ0FESTtBQUFBLENBQXJCOztBQU1BLGlFQUFlRyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQSxJQUFNRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0VBQUEsT0FDdEJGLGdFQUFlLENBQUMsRUFFWkMsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxhQUFELENBQVIsRUFBeUIscUJBQXpCLENBRkQsNEJBR1RJLHVEQUFnQixFQUhQLElBS2RKLDhEQUFhLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLENBQ25DLENBQUMsTUFBRCxFQUFTLHdDQUFULENBRG1DLEVBRW5DLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FGbUMsQ0FBeEIsQ0FMQyxFQVNkQSw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLFlBQUQsQ0FBUixDQVRDLENBQUQsQ0FETztBQUFBLENBQXhCOztBQWFBLGlFQUFlQyxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLE9BQ3ZCTCxnRUFBZSxDQUFDLENBQ2RDLDhEQUFhLENBQUMsR0FBRCxFQUFNLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FBTixDQURD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QyxTQUFELENBQXBCOztFQUNBLElBQUk5QixLQUFLLENBQUNDLE9BQU4sQ0FBY3FDLEtBQWQsQ0FBSixFQUEwQjtJQUN4QkEsS0FBSyxDQUFDN0MsT0FBTixDQUFjLFVBQUNSLElBQUQsRUFBVTtNQUN0QkEsSUFBSSxNQUFKLFNBQVErQixJQUFSO0lBQ0QsQ0FGRDtFQUdEO0FBQ0YsQ0FQRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9naXRodWJEaXYudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2l0aHViSWNvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9waXJhdGVCb2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zYWlsaW5nQXVkaW8udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvdm9sdW1lRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dhdmUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdG9yLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlR2l0aHViRGl2IGZyb20gXCIuL2dpdGh1YkRpdlwiO1xuaW1wb3J0IGNyZWF0ZVdhdmUgZnJvbSBcIi4vd2F2ZVwiO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVHaXRodWJEaXYoKSwgLi4uY3JlYXRlV2F2ZSgpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtcImZvb3RlclwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb290ZXI7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVHaXRodWJJY29uIGZyb20gXCIuL2dpdGh1Ykljb25cIjtcblxuY29uc3QgY3JlYXRlR2l0aHViRGl2ID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1uYW1lXCJdLCBcIk15bmFtZWlzZnJvc3R3YWxrZXJcIiksXG4gICAgICAuLi5jcmVhdGVHaXRodWJJY29uKCksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJocmVmXCIsIFwiaHR0cHM6Ly9naXRodWIuY29tL015bmFtZWlzZnJvc3R3YWxrZXJcIl0sXG4gICAgICBbXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItZGl2XCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdpdGh1YkRpdjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVHaXRodWJJY29uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViLWljb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2l0aHViSWNvbjtcbiIsImltcG9ydCBwaXJhdGVJbWcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9pbWFnZXMvcGlyYXRlLnN2Z1wiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZVBpcmF0ZUJvYXJkID0gKFxuICBuYW1lID0gXCJBaG95IENhcCduLCBiZSB5ZSByZWFkeSB0byBzYWlsIHRoZSBzZXZlbiBzZWFzIHdpdGggeWVyIGxveWFsIGNyZXc/XCJcbikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwiaDJcIiwgW1wiZm9ybS1oZWFkZXJcIl0sIG5hbWUpLFxuICAgICAgY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJwaXJhdGUtaW1hZ2VcIl0sIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHBpcmF0ZUltZ10sXG4gICAgICAgIFtcIndpZHRoXCIsIFwiOCVcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLWlubmVyLWJvcmRlclwiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwaXJhdGUtb3V0ZXItYm9yZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBpcmF0ZUJvYXJkO1xuIiwiaW1wb3J0IHNoaXBTYWlsaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2FpbGluZy5tcDNcIjtcbmltcG9ydCBzaGlwU2FpbGluZzIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hdWRpby9zYWlsaW5nLm9nZ1wiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IHNhaWxpbmdBdWRpbyA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZ10sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9tcGVnXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBTYWlsaW5nMl0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzaGlwLXNhaWxpbmdcIl0sIG51bGwsIG51bGwsIFtbXCJsb29wXCIsIFwidHJ1ZVwiXV0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgc2FpbGluZ0F1ZGlvO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBmaXhFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IG9uVm9sdW1lQ2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBkaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zYWlsaW5nXCIpO1xuICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJub3QtcGxheVwiKSkge1xuICAgICAgYXVkaW9cbiAgICAgICAgLnBsYXkoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIl0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1wbGF5XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVZvbHVtZSA9ICgpID0+XG4gICAgICAgIGNvbXBvc2VFbGVtZW50cyhbY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUteG1hcmtcIl0pXSk7XG4gICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBmaXhFbGVtZW50KGRpdiwgW2NyZWF0ZVZvbHVtZSgpXSk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5vdC1wbGF5XCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlVm9sdW1lRGl2ID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS14bWFya1wiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJub3QtcGxheVwiXSwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiY2xpY2tcIiwgb25Wb2x1bWVDaGFuZ2VdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widm9sdW1lLWRpdlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVWb2x1bWVEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVXYXZlID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFY0Ni4yOWM0Ny43OSwyMi4yLDEwMy41OSwzMi4xNywxNTgsMjgsNzAuMzYtNS4zNywxMzYuMzMtMzMuMzEsMjA2LjgtMzcuNUM0MzguNjQsMzIuNDMsNTEyLjM0LDUzLjY3LDU4Myw3Mi4wNWM2OS4yNywxOCwxMzguMywyNC44OCwyMDkuNCwxMy4wOCwzNi4xNS02LDY5Ljg1LTE3Ljg0LDEwNC40NS0yOS4zNEM5ODkuNDksMjUsMTExMy0xNC4yOSwxMjAwLDUyLjQ3VjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm9wYWNpdHlcIiwgXCIuMjVcIl0sXG4gICAgICAgIFtcImNsYXNzXCIsIFwic2hhcGUtZmlsbFwiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWMTUuODFDMTMsMzYuOTIsMjcuNjQsNTYuODYsNDcuNjksNzIuMDUsOTkuNDEsMTExLjI3LDE2NSwxMTEsMjI0LjU4LDkxLjU4YzMxLjE1LTEwLjE1LDYwLjA5LTI2LjA3LDg5LjY3LTM5LjgsNDAuOTItMTksODQuNzMtNDYsMTMwLjgzLTQ5LjY3LDM2LjI2LTIuODUsNzAuOSw5LjQyLDk4LjYsMzEuNTYsMzEuNzcsMjUuMzksNjIuMzIsNjIsMTAzLjYzLDczLDQwLjQ0LDEwLjc5LDgxLjM1LTYuNjksMTE5LjEzLTI0LjI4czc1LjE2LTM5LDExNi45Mi00My4wNWM1OS43My01Ljg1LDExMy4yOCwyMi44OCwxNjguOSwzOC44NCwzMC4yLDguNjYsNTksNi4xNyw4Ny4wOS03LjUsMjIuNDMtMTAuODksNDgtMjYuOTMsNjAuNjUtNDkuMjRWMFpcIixcbiAgICAgICAgXSxcbiAgICAgICAgW1wib3BhY2l0eVwiLCBcIi41XCJdLFxuICAgICAgICBbXCJjbGFzc1wiLCBcInNoYXBlLWZpbGxcIl0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjUuNjNDMTQ5LjkzLDU5LDMxNC4wOSw3MS4zMiw0NzUuODMsNDIuNTdjNDMtNy42NCw4NC4yMy0yMC4xMiwxMjcuNjEtMjYuNDYsNTktOC42MywxMTIuNDgsMTIuMjQsMTY1LjU2LDM1LjRDODI3LjkzLDc3LjIyLDg4Niw5NS4yNCw5NTEuMiw5MGM4Ni41My03LDE3Mi40Ni00NS43MSwyNDguOC04NC44MVYwWlwiLFxuICAgICAgICBdLFxuICAgICAgICBbXCJjbGFzc1wiLCBcInNoYXBlLWZpbGxcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZVNWRyhcInN2Z1wiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJkYXRhLW5hbWVcIiwgXCJMYXllciAxXCJdLFxuICAgICAgW1wieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXSxcbiAgICAgIFtcInZpZXdCb3hcIiwgXCIwIDAgMTIwMCAxMjBcIl0sXG4gICAgICBbXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwibm9uZVwiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIndhdmVcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlV2F2ZTtcbiIsImltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG50eXBlIEhUTUxGdW5jID0gKCkgPT4gSFRNTEVsZW1lbnQgfCBTVkdFbGVtZW50O1xudHlwZSBDaGlsZCA9IEhUTUxGdW5jIHwgSFRNTEZ1bmNbXTtcbnR5cGUgQ2hpbGRGdW5jID0gKGNoaWxkPzogQ2hpbGQpID0+IEhUTUxGdW5jO1xudHlwZSBDaGlsZEZ1bmNBcnIgPSBDaGlsZEZ1bmNbXTtcblxuY29uc3QgY2hlY2tJZkZ1bmNDb250YWluc0Zha2UgPSAoXG4gIGZ1bmM6IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfVxuKTogZnVuYyBpcyB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9ID0+IFwiZmFrZVwiIGluIGZ1bmM7XG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAoXG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IG51bGwsXG4gIHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCxcbiAgaWQ/OiBzdHJpbmcgfCBudWxsLFxuICBhdHRyaWJ1dGVzPzogW3N0cmluZywgc3RyaW5nXVtdIHwgbnVsbCxcbiAgZXZlbnRMaXN0ZW5lcnM/OiBbc3RyaW5nLCAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJbMF0sIGV2ZW50TGlzdGVuZXJbMV0pO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY3JlYXRlU1ZHID0gKFxuICBlbGVtZW50TmFtZTogc3RyaW5nLFxuICBjbGFzc05hbWVzPzogc3RyaW5nW10gfCBudWxsLFxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGwsXG4gIGlkPzogc3RyaW5nIHwgbnVsbCxcbiAgYXR0cmlidXRlcz86IFtzdHJpbmcsIHN0cmluZ11bXSB8IG51bGwsXG4gIGV2ZW50TGlzdGVuZXJzPzogW3N0cmluZywgKGNvbnRhaW5lcjogU1ZHRWxlbWVudCkgPT4gdm9pZF1bXSB8IG51bGwsXG4gIHVuaXF1ZVNjcmlwdE5hbWU/OiBzdHJpbmcgfCBudWxsLFxuICBzY3JpcHRzPzogW3N0cmluZywgKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZF1bXSB8IG51bGxcbikgPT4ge1xuICBjb25zdCBjb250YWluZXI6IFNWR0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGVsZW1lbnROYW1lXG4gICk7XG5cbiAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBjb250YWluZXIuaWQgPSBpZDtcbiAgfVxuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBldmVudFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJbMV0oY29udGFpbmVyKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJbMF0sIGV2ZW50V3JhcHBlcik7XG4gICAgfSk7XG4gIH1cblxuICBpZiAodW5pcXVlU2NyaXB0TmFtZSkge1xuICAgIGNvbnN0IGFkZENsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlOiB1bmtub3duLCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRleHQgPSAodGV4dDogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1hZGRDbGFzc2AsIGFkZENsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tcmVtb3ZlQ2xhc3NgLCByZW1vdmVDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXNldEF0dHJpYnV0ZWAsIHNldEF0dHJpYnV0ZSk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXNldFRleHRgLCBzZXRUZXh0KTtcblxuICAgIGlmIChzY3JpcHRzKSB7XG4gICAgICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHRXcmFwcGVyID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgIHNjcmlwdFsxXShjb250YWluZXIsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tJHtzY3JpcHRbMF19YCwgc2NyaXB0V3JhcHBlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGNoaWxkPzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGVja0lmRnVuY0NvbnRhaW5zRmFrZShjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gIH07XG59O1xuXG5jb25zdCBjaGVja0lmVHlwZUNoaWxkRnVuY0FyciA9IChcbiAgYXJyOiBDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnJcbik6IGFyciBpcyBDaGlsZEZ1bmNBcnIgPT4gQXJyYXkuaXNBcnJheShhcnIpO1xuXG5jb25zdCBjb21wb3NlRWxlbWVudHMgPSAoYXJyOiAoQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyKVtdKTogQ2hpbGRGdW5jQXJyID0+IHtcbiAgY29uc3QgZmFrZURpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZha2VEaXYuZmFrZSA9IHRydWU7XG5cbiAgY29uc3QgcmV0dXJuQ29udGFpbmVyID0gYXJyLnJlZHVjZTxDaGlsZD4oKGFjYywgY3VycikgPT4ge1xuICAgIGlmIChjaGVja0lmVHlwZUNoaWxkRnVuY0FycihjdXJyKSkge1xuICAgICAgcmV0dXJuIGN1cnIubWFwKChmdW5jKSA9PiBmdW5jKHVuZGVmaW5lZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyKGFjYyk7XG4gIH0sIGZha2VEaXYpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJldHVybkNvbnRhaW5lcikpIHtcbiAgICByZXR1cm4gcmV0dXJuQ29udGFpbmVyLm1hcCgoaHRtbEZ1bmMpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGh0bWxGdW5jKCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiAoKSA9PiBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSByZXR1cm5Db250YWluZXIoKTtcbiAgcmV0dXJuIFsoKSA9PiAoKSA9PiBjb250YWluZXJdO1xufTtcblxuY29uc3QgZml4RWxlbWVudCA9IChib2R5OiBIVE1MRWxlbWVudCwgY2hpbGQ6IENoaWxkRnVuY0FycltdKSA9PiB7XG4gIGJvZHkucmVwbGFjZUNoaWxkcmVuKCk7XG4gIGNoaWxkLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICBmdW5jLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQ2hpbGRGdW5jIH07XG5leHBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9O1xuIiwidHlwZSBBbnlmdW5jdGlvbnMgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgRXZlbnRzIHtcbiAgW2luZGV4OiBzdHJpbmddOiBBbnlmdW5jdGlvbnNbXTtcbn1cblxuY29uc3QgZXZlbnRzOiBFdmVudHMgPSB7XG4gIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogW2Z1bmNzXVxufTtcblxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmdW5jKTtcbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiJdLCJuYW1lcyI6WyJjb21wb3NlRWxlbWVudHMiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlR2l0aHViRGl2IiwiY3JlYXRlV2F2ZSIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUdpdGh1Ykljb24iLCJwaXJhdGVJbWciLCJjcmVhdGVQaXJhdGVCb2FyZCIsIm5hbWUiLCJzaGlwU2FpbGluZyIsInNoaXBTYWlsaW5nMiIsInNhaWxpbmdBdWRpbyIsImZpeEVsZW1lbnQiLCJvblZvbHVtZUNoYW5nZSIsImV2ZW50IiwiZGl2IiwiY3VycmVudFRhcmdldCIsImF1ZGlvIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiSFRNTEF1ZGlvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJwbGF5IiwidGhlbiIsImNyZWF0ZVZvbHVtZSIsInJlcGxhY2VDaGlsZHJlbiIsInJlbW92ZSIsIkVycm9yIiwicGF1c2UiLCJhZGQiLCJjcmVhdGVWb2x1bWVEaXYiLCJjcmVhdGVTVkciLCJzdWJzY3JpYmUiLCJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZXMiLCJ0ZXh0Q29udGVudCIsImlkIiwiYXR0cmlidXRlcyIsImV2ZW50TGlzdGVuZXJzIiwiY29udGFpbmVyIiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJ1bmlxdWVTY3JpcHROYW1lIiwic2NyaXB0cyIsImNyZWF0ZUVsZW1lbnROUyIsImV2ZW50V3JhcHBlciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJ2YWx1ZSIsInJlbW92ZUF0dHJpYnV0ZSIsInNldFRleHQiLCJ0ZXh0Iiwic2NyaXB0Iiwic2NyaXB0V3JhcHBlciIsImFyZ3MiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiYm9keSIsImV2ZW50cyIsImV2ZW50TmFtZSIsInB1c2giLCJ1bnN1YnNjcmliZSIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInNwbGljZSIsInB1Ymxpc2giLCJmdW5jcyJdLCJzb3VyY2VSb290IjoiIn0=