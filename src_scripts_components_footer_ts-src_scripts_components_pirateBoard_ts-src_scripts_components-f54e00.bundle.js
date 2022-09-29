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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");




var createPirateBoard = function createPirateBoard() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Ahoy Cap'n, be ye ready to sail the seven seas with yer loyal crew?";

  var changeName = function changeName(str) {
    if (typeof str === "string") {
      var text = document.querySelector(".pirate-text");

      if (text) {
        text.textContent = str;
      }
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.subscribe)("pirate-text", changeName);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", ["pirate-text"], name), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("img", ["pirate-image"], null, null, [["src", _assets_images_pirate_svg__WEBPACK_IMPORTED_MODULE_0__], ["width", "8%"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-inner-border"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["pirate-outer-border"])]);
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");





var sailingAudio = function sailingAudio() {
  var playSound = function playSound() {
    console.log("beep");
    var div = document.querySelector(".volume-div-2");
    var audio = document.querySelector(".ship-sailing");

    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      console.log("beep");

      if (div.classList.contains("play")) {
        audio.volume = 0.2;
        audio.play().then()["catch"](function () {
          throw new Error("Audio failed to play");
        });
      }
    }
  };

  var pauseSound = function pauseSound() {
    var audio = document.querySelector(".ship-sailing");

    if (audio instanceof HTMLAudioElement) {
      audio.pause();
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_3__.subscribe)("sailing-play", playSound);
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_3__.subscribe)("sailing-pause", pauseSound);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sailing_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("audio", ["ship-sailing", "current-audio"], null, null, [["loop", "true"]])]);
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
  var audio = document.querySelector(".current-audio");

  if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
    if (div.classList.contains("not-play")) {
      audio.volume = 0.2;
      audio.play().then(function () {
        var createVolume = function createVolume() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-high"])]);
        };

        div.replaceChildren();
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
        div.classList.remove("not-play");
        div.classList.add("play");
      })["catch"](function () {
        throw new Error("Audio failed to play");
      });
    } else {
      var audios = document.querySelectorAll("audio");

      if (audios) {
        audios.forEach(function (aud) {
          aud.pause();
        });
      }

      var createVolume = function createVolume() {
        return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-xmark"])]);
      };

      div.replaceChildren();
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
      div.classList.add("not-play");
      div.classList.remove("play");
    }
  }
};

var createVolumeDiv = function createVolumeDiv() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-xmark"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["not-play", "volume-div-2"], null, null, null, [["click", onVolumeChange]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["volume-div"])]);
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
/* harmony export */   "clear": () => (/* binding */ clear),
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

var clear = function clear() {
  events = {};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY29tcG9uZW50c19mb290ZXJfdHMtc3JjX3NjcmlwdHNfY29tcG9uZW50c19waXJhdGVCb2FyZF90cy1zcmNfc2NyaXB0c19jb21wb25lbnRzLWY1NGUwMC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQ25CSixnRUFBZSxDQUFDLDhCQUNWRSxzREFBZSxFQURMLHNCQUNZQyxpREFBVSxFQUR0QixJQUVkRiw4REFBYSxDQUFDLFFBQUQsRUFBVyxDQUFDLFFBQUQsQ0FBWCxDQUZDLENBQUQsQ0FESTtBQUFBLENBQXJCOztBQU1BLGlFQUFlRyxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTs7QUFFQSxJQUFNRixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0VBQUEsT0FDdEJGLGdFQUFlLENBQUMsRUFFWkMsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxhQUFELENBQVIsRUFBeUIscUJBQXpCLENBRkQsNEJBR1RJLHVEQUFnQixFQUhQLElBS2RKLDhEQUFhLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCLENBQ25DLENBQUMsTUFBRCxFQUFTLHdDQUFULENBRG1DLEVBRW5DLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FGbUMsQ0FBeEIsQ0FMQyxFQVNkQSw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLFlBQUQsQ0FBUixDQVRDLENBQUQsQ0FETztBQUFBLENBQXhCOztBQWFBLGlFQUFlQyxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7O0FBRUEsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLE9BQ3ZCTCxnRUFBZSxDQUFDLENBQ2RDLDhEQUFhLENBQUMsR0FBRCxFQUFNLENBQUMsV0FBRCxFQUFjLFdBQWQsQ0FBTixDQURD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QUNDLFNBQUQsQ0FBVixFQUF1QjtJQUNyQixLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdKLE1BQU0sQ0FBQ0MsU0FBRCxDQUFOLENBQWtCSSxNQUF0QyxFQUE4Q0QsQ0FBQyxJQUFJLENBQW5ELEVBQXNEO01BQ3BELElBQUlKLE1BQU0sQ0FBQ0MsU0FBRCxDQUFOLENBQWtCRyxDQUFsQixFQUFxQkUsUUFBckIsT0FBb0MvQyxJQUFJLENBQUMrQyxRQUFMLEVBQXhDLEVBQXlEO1FBQ3ZETixNQUFNLENBQUNDLFNBQUQsQ0FBTixDQUFrQk0sTUFBbEIsQ0FBeUJILENBQXpCLEVBQTRCLENBQTVCO1FBQ0E7TUFDRDtJQUNGO0VBQ0Y7QUFDRixDQVREOztBQVdBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNQLFNBQUQsRUFBaUQ7RUFBQSxrQ0FBMUJkLElBQTBCO0lBQTFCQSxJQUEwQjtFQUFBOztFQUMvRCxJQUFNc0IsS0FBSyxHQUFHVCxNQUFNLENBQUNDLFNBQUQsQ0FBcEI7O0VBQ0EsSUFBSTdCLEtBQUssQ0FBQ0MsT0FBTixDQUFjb0MsS0FBZCxDQUFKLEVBQTBCO0lBQ3hCQSxLQUFLLENBQUN2RCxPQUFOLENBQWMsVUFBQ0ssSUFBRCxFQUFVO01BQ3RCQSxJQUFJLE1BQUosU0FBUTRCLElBQVI7SUFDRCxDQUZEO0VBR0Q7QUFDRixDQVBEOztBQVNBLElBQU11QixLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0VBQ2xCVixNQUFNLEdBQUcsRUFBVDtBQUNELENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2l0aHViRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dpdGh1Ykljb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGlyYXRlQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2FpbGluZ0F1ZGlvLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3ZvbHVtZURpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy93YXZlLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9kb21NYW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUdpdGh1YkRpdiBmcm9tIFwiLi9naXRodWJEaXZcIjtcbmltcG9ydCBjcmVhdGVXYXZlIGZyb20gXCIuL3dhdmVcIjtcblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlR2l0aHViRGl2KCksIC4uLmNyZWF0ZVdhdmUoKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImZvb3RlclwiLCBbXCJmb290ZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9vdGVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlR2l0aHViSWNvbiBmcm9tIFwiLi9naXRodWJJY29uXCI7XG5cbmNvbnN0IGNyZWF0ZUdpdGh1YkRpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItbmFtZVwiXSwgXCJNeW5hbWVpc2Zyb3N0d2Fsa2VyXCIpLFxuICAgICAgLi4uY3JlYXRlR2l0aHViSWNvbigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9NeW5hbWVpc2Zyb3N0d2Fsa2VyXCJdLFxuICAgICAgW1widGFyZ2V0XCIsIFwiX2JsYW5rXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViLWRpdlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHaXRodWJEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlR2l0aHViSWNvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1pY29uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdpdGh1Ykljb247XG4iLCJpbXBvcnQgcGlyYXRlSW1nIGZyb20gXCIuLi8uLi9hc3NldHMvaW1hZ2VzL3BpcmF0ZS5zdmdcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBjcmVhdGVQaXJhdGVCb2FyZCA9IChcbiAgbmFtZSA9IFwiQWhveSBDYXAnbiwgYmUgeWUgcmVhZHkgdG8gc2FpbCB0aGUgc2V2ZW4gc2VhcyB3aXRoIHllciBsb3lhbCBjcmV3P1wiXG4pID0+IHtcbiAgY29uc3QgY2hhbmdlTmFtZSA9IChzdHI6IHVua25vd24pID0+IHtcbiAgICBpZiAodHlwZW9mIHN0ciA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGlyYXRlLXRleHRcIik7XG4gICAgICBpZiAodGV4dCkge1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gc3RyO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgc3Vic2NyaWJlKFwicGlyYXRlLXRleHRcIiwgY2hhbmdlTmFtZSk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgyXCIsIFtcInBpcmF0ZS10ZXh0XCJdLCBuYW1lKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgW1wicGlyYXRlLWltYWdlXCJdLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBwaXJhdGVJbWddLFxuICAgICAgICBbXCJ3aWR0aFwiLCBcIjglXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInBpcmF0ZS1pbm5lci1ib3JkZXJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLW91dGVyLWJvcmRlclwiXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGlyYXRlQm9hcmQ7XG4iLCJpbXBvcnQgc2hpcFNhaWxpbmcgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hdWRpby9zYWlsaW5nLm1wM1wiO1xuaW1wb3J0IHNoaXBTYWlsaW5nMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NhaWxpbmcub2dnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgc2FpbGluZ0F1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBwbGF5U291bmQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJiZWVwXCIpO1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWRpdi0yXCIpO1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXNhaWxpbmdcIik7XG4gICAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc29sZS5sb2coXCJiZWVwXCIpO1xuICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5XCIpKSB7XG4gICAgICAgIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgICAgICAgYXVkaW9cbiAgICAgICAgICAucGxheSgpXG4gICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdWRpbyBmYWlsZWQgdG8gcGxheVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGF1c2VTb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1zYWlsaW5nXCIpO1xuICAgIGlmIChhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQpIHtcbiAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgfVxuICB9O1xuXG4gIHN1YnNjcmliZShcInNhaWxpbmctcGxheVwiLCBwbGF5U291bmQpO1xuICBzdWJzY3JpYmUoXCJzYWlsaW5nLXBhdXNlXCIsIHBhdXNlU291bmQpO1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc2hpcFNhaWxpbmddLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZzJdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vb2dnXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgW1wic2hpcC1zYWlsaW5nXCIsIFwiY3VycmVudC1hdWRpb1wiXSwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wibG9vcFwiLCBcInRydWVcIl0sXG4gICAgXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2FpbGluZ0F1ZGlvO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBmaXhFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IG9uVm9sdW1lQ2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBkaXYgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3VycmVudC1hdWRpb1wiKTtcbiAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90LXBsYXlcIikpIHtcbiAgICAgIGF1ZGlvLnZvbHVtZSA9IDAuMjtcbiAgICAgIGF1ZGlvXG4gICAgICAgIC5wbGF5KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNyZWF0ZVZvbHVtZSA9ICgpID0+XG4gICAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS1oaWdoXCJdKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICBmaXhFbGVtZW50KGRpdiwgW2NyZWF0ZVZvbHVtZSgpXSk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcGxheVwiKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsYXlcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBhdWRpb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYXVkaW9cIik7XG4gICAgICBpZiAoYXVkaW9zKSB7XG4gICAgICAgIGF1ZGlvcy5mb3JFYWNoKChhdWQpID0+IHtcbiAgICAgICAgICBhdWQucGF1c2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBjb25zdCBjcmVhdGVWb2x1bWUgPSAoKSA9PlxuICAgICAgICBjb21wb3NlRWxlbWVudHMoW2NyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLXhtYXJrXCJdKV0pO1xuICAgICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJub3QtcGxheVwiKTtcbiAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwicGxheVwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVZvbHVtZURpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUteG1hcmtcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibm90LXBsYXlcIiwgXCJ2b2x1bWUtZGl2LTJcIl0sIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcImNsaWNrXCIsIG9uVm9sdW1lQ2hhbmdlXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInZvbHVtZS1kaXZcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVm9sdW1lRGl2O1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTVkcgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlV2F2ZSA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWNDYuMjljNDcuNzksMjIuMiwxMDMuNTksMzIuMTcsMTU4LDI4LDcwLjM2LTUuMzcsMTM2LjMzLTMzLjMxLDIwNi44LTM3LjVDNDM4LjY0LDMyLjQzLDUxMi4zNCw1My42Nyw1ODMsNzIuMDVjNjkuMjcsMTgsMTM4LjMsMjQuODgsMjA5LjQsMTMuMDgsMzYuMTUtNiw2OS44NS0xNy44NCwxMDQuNDUtMjkuMzRDOTg5LjQ5LDI1LDExMTMtMTQuMjksMTIwMCw1Mi40N1YwWlwiLFxuICAgICAgICBdLFxuICAgICAgICBbXCJvcGFjaXR5XCIsIFwiLjI1XCJdLFxuICAgICAgICBbXCJjbGFzc1wiLCBcInNoYXBlLWZpbGxcIl0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjE1LjgxQzEzLDM2LjkyLDI3LjY0LDU2Ljg2LDQ3LjY5LDcyLjA1LDk5LjQxLDExMS4yNywxNjUsMTExLDIyNC41OCw5MS41OGMzMS4xNS0xMC4xNSw2MC4wOS0yNi4wNyw4OS42Ny0zOS44LDQwLjkyLTE5LDg0LjczLTQ2LDEzMC44My00OS42NywzNi4yNi0yLjg1LDcwLjksOS40Miw5OC42LDMxLjU2LDMxLjc3LDI1LjM5LDYyLjMyLDYyLDEwMy42Myw3Myw0MC40NCwxMC43OSw4MS4zNS02LjY5LDExOS4xMy0yNC4yOHM3NS4xNi0zOSwxMTYuOTItNDMuMDVjNTkuNzMtNS44NSwxMTMuMjgsMjIuODgsMTY4LjksMzguODQsMzAuMiw4LjY2LDU5LDYuMTcsODcuMDktNy41LDIyLjQzLTEwLjg5LDQ4LTI2LjkzLDYwLjY1LTQ5LjI0VjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm9wYWNpdHlcIiwgXCIuNVwiXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFY1LjYzQzE0OS45Myw1OSwzMTQuMDksNzEuMzIsNDc1LjgzLDQyLjU3YzQzLTcuNjQsODQuMjMtMjAuMTIsMTI3LjYxLTI2LjQ2LDU5LTguNjMsMTEyLjQ4LDEyLjI0LDE2NS41NiwzNS40QzgyNy45Myw3Ny4yMiw4ODYsOTUuMjQsOTUxLjIsOTBjODYuNTMtNywxNzIuNDYtNDUuNzEsMjQ4LjgtODQuODFWMFpcIixcbiAgICAgICAgXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVTVkcoXCJzdmdcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiZGF0YS1uYW1lXCIsIFwiTGF5ZXIgMVwiXSxcbiAgICAgIFtcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIl0sXG4gICAgICBbXCJ2aWV3Qm94XCIsIFwiMCAwIDEyMDAgMTIwXCJdLFxuICAgICAgW1wicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcIm5vbmVcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3YXZlXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdhdmU7XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxudHlwZSBIVE1MRnVuYyA9ICgpID0+IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudDtcbnR5cGUgQ2hpbGQgPSBIVE1MRnVuYyB8IEhUTUxGdW5jW107XG50eXBlIENoaWxkRnVuYyA9IChjaGlsZD86IENoaWxkKSA9PiBIVE1MRnVuYztcbnR5cGUgQ2hpbGRGdW5jQXJyID0gQ2hpbGRGdW5jW107XG5cbmNvbnN0IGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlID0gKFxuICBmdW5jOiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH1cbik6IGZ1bmMgaXMgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSA9PiBcImZha2VcIiBpbiBmdW5jO1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKFxuICBlbGVtZW50TmFtZTogc3RyaW5nLFxuICBjbGFzc05hbWVzPzogc3RyaW5nW10gfCBudWxsLFxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGwsXG4gIGlkPzogc3RyaW5nIHwgbnVsbCxcbiAgYXR0cmlidXRlcz86IFtzdHJpbmcsIHN0cmluZ11bXSB8IG51bGwsXG4gIGV2ZW50TGlzdGVuZXJzPzogW3N0cmluZywgKGV2ZW50OiBFdmVudCkgPT4gdm9pZF1bXSB8IG51bGxcbikgPT4ge1xuICBjb25zdCBjb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG5cbiAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBjb250YWluZXIuaWQgPSBpZDtcbiAgfVxuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyWzBdLCBldmVudExpc3RlbmVyWzFdKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNWRyA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChjb250YWluZXI6IFNWR0VsZW1lbnQpID0+IHZvaWRdW10gfCBudWxsLFxuICB1bmlxdWVTY3JpcHROYW1lPzogc3RyaW5nIHwgbnVsbCxcbiAgc2NyaXB0cz86IFtzdHJpbmcsICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBTVkdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBlbGVtZW50TmFtZVxuICApO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICBldmVudExpc3RlbmVyWzFdKGNvbnRhaW5lcik7XG4gICAgICB9O1xuXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyWzBdLCBldmVudFdyYXBwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVuaXF1ZVNjcmlwdE5hbWUpIHtcbiAgICBjb25zdCBhZGRDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGF0dHJpYnV0ZTogdW5rbm93biwgdmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tYWRkQ2xhc3NgLCBhZGRDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXJlbW92ZUNsYXNzYCwgcmVtb3ZlQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRBdHRyaWJ1dGVgLCBzZXRBdHRyaWJ1dGUpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRUZXh0YCwgc2V0VGV4dCk7XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0V3JhcHBlciA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICBzY3JpcHRbMV0oY29udGFpbmVyLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LSR7c2NyaXB0WzBdfWAsIHNjcmlwdFdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEVsZW1lbnQsIGNoaWxkOiBDaGlsZEZ1bmNBcnJbXSkgPT4ge1xuICBib2R5LnJlcGxhY2VDaGlsZHJlbigpO1xuICBjaGlsZC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgZnVuYy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQoKSgpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgdHlwZSB7IENoaWxkRnVuYyB9O1xuZXhwb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTVkcgfTtcbiIsInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmxldCBldmVudHM6IEV2ZW50cyA9IHtcbiAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xufTtcblxuY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0udG9TdHJpbmcoKSA9PT0gZnVuYy50b1N0cmluZygpKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkID0+IHtcbiAgY29uc3QgZnVuY3MgPSBldmVudHNbZXZlbnROYW1lXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgZnVuY3MuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGV2ZW50cyA9IHt9O1xufTtcblxuZXhwb3J0IHsgcHVibGlzaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSwgY2xlYXIgfTtcbiJdLCJuYW1lcyI6WyJjb21wb3NlRWxlbWVudHMiLCJjcmVhdGVFbGVtZW50IiwiY3JlYXRlR2l0aHViRGl2IiwiY3JlYXRlV2F2ZSIsImNyZWF0ZUZvb3RlciIsImNyZWF0ZUdpdGh1Ykljb24iLCJwaXJhdGVJbWciLCJzdWJzY3JpYmUiLCJjcmVhdGVQaXJhdGVCb2FyZCIsIm5hbWUiLCJjaGFuZ2VOYW1lIiwic3RyIiwidGV4dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50Iiwic2hpcFNhaWxpbmciLCJzaGlwU2FpbGluZzIiLCJzYWlsaW5nQXVkaW8iLCJwbGF5U291bmQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYXVkaW8iLCJIVE1MQXVkaW9FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInZvbHVtZSIsInBsYXkiLCJ0aGVuIiwiRXJyb3IiLCJwYXVzZVNvdW5kIiwicGF1c2UiLCJmaXhFbGVtZW50Iiwib25Wb2x1bWVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJjcmVhdGVWb2x1bWUiLCJyZXBsYWNlQ2hpbGRyZW4iLCJyZW1vdmUiLCJhZGQiLCJhdWRpb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImF1ZCIsImNyZWF0ZVZvbHVtZURpdiIsImNyZWF0ZVNWRyIsImNoZWNrSWZGdW5jQ29udGFpbnNGYWtlIiwiZnVuYyIsImVsZW1lbnROYW1lIiwiY2xhc3NOYW1lcyIsImlkIiwiYXR0cmlidXRlcyIsImV2ZW50TGlzdGVuZXJzIiwiY29udGFpbmVyIiwiY2xhc3NOYW1lIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZCIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsInVuaXF1ZVNjcmlwdE5hbWUiLCJzY3JpcHRzIiwiY3JlYXRlRWxlbWVudE5TIiwiZXZlbnRXcmFwcGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0VGV4dCIsInNjcmlwdCIsInNjcmlwdFdyYXBwZXIiLCJhcmdzIiwiY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIiLCJhcnIiLCJmYWtlRGl2IiwiZmFrZSIsInJldHVybkNvbnRhaW5lciIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJtYXAiLCJ1bmRlZmluZWQiLCJodG1sRnVuYyIsImJvZHkiLCJldmVudHMiLCJldmVudE5hbWUiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJpIiwibGVuZ3RoIiwidG9TdHJpbmciLCJzcGxpY2UiLCJwdWJsaXNoIiwiZnVuY3MiLCJjbGVhciJdLCJzb3VyY2VSb290IjoiIn0=