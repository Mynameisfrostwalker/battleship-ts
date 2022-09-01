"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_initDisplay_ts"],{

/***/ "./src/scripts/components/AIDiv.ts":
/*!*****************************************!*\
  !*** ./src/scripts/components/AIDiv.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var onCheckboxChange = function onCheckboxChange(check) {
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

var createAIDiv = function createAIDiv(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "AI mode:", null, [["for", "AI".concat(num, "-input")]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", null, null, "AI".concat(num, "-input"), [["type", "checkbox"], ["name", "AI".concat(num)]], [["change", onCheckboxChange]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["AI-elements"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAIDiv);

/***/ }),

/***/ "./src/scripts/components/blob.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/blob.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createBlob = function createBlob() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("path", null, null, null, [["d", "M51.1 -80C66.9 -69.4 80.7 -56.3 89.9 -40C99 -23.6 103.5 -4.1 98.9 12.9C94.3 29.8 80.8 44 68.2 59.7C55.5 75.3 43.8 92.3 26 105.2C8.2 118 -15.8 126.7 -40 124.8C-64.3 122.9 -88.8 110.6 -94.7 89.8C-100.7 69.1 -87.9 40 -80.4 18.4C-72.9 -3.2 -70.6 -17.2 -69.6 -37.1C-68.7 -56.9 -69.2 -82.7 -57.9 -95.4C-46.5 -108 -23.2 -107.5 -2.8 -103.2C17.7 -98.8 35.3 -90.6 51.1 -80"], ["fill", "#000000b3"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("g", null, null, null, [["transform", "translate(447.7643887362343 290.4428547844383)"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createSVG)("svg", null, null, "visual", [["viewBox", "0 0 900 600"], ["width", "100vw"], ["height", "500"], ["xmlns", "http://www.w3.org/2000/svg"], ["xmlns:xlink", "http://www.w3.org/1999/xlink"], ["version", "1.1"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["blob"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlob);

/***/ }),

/***/ "./src/scripts/components/buttonSection.ts":
/*!*************************************************!*\
  !*** ./src/scripts/components/buttonSection.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createButtonSection = function createButtonSection() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["button", "game-start-button"], "Start Game!"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", ["button-section"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createButtonSection);

/***/ }),

/***/ "./src/scripts/components/container.ts":
/*!*********************************************!*\
  !*** ./src/scripts/components/container.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/scripts/components/header.ts");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/scripts/components/main.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/scripts/components/footer.ts");
/* harmony import */ var _sailingAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sailingAudio */ "./src/scripts/components/sailingAudio.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var createContainer = function createContainer() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_header__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_main__WEBPACK_IMPORTED_MODULE_2__["default"])()), _toConsumableArray((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])()), _toConsumableArray((0,_sailingAudio__WEBPACK_IMPORTED_MODULE_4__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["container", "container-home"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

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

/***/ "./src/scripts/components/form.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/form.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
/* harmony import */ var _pirateBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pirateBoard */ "./src/scripts/components/pirateBoard.ts");
/* harmony import */ var _formSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formSection */ "./src/scripts/components/formSection.ts");
/* harmony import */ var _buttonSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttonSection */ "./src/scripts/components/buttonSection.ts");
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blob */ "./src/scripts/components/blob.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var onFormSubmit = function onFormSubmit(form) {
  if (form instanceof HTMLFormElement) {
    for (var i = 0; i < form.length; i += 1) {
      var input = form[i];

      if (input instanceof HTMLInputElement) {
        if (!input.disabled) {
          if (input.validity.valueMissing) {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "Input must not be left blank!");
          }

          if (input.value.trim() === "") {
            var error = "Input is blank.";
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "Input must not be left blank!");
            input.setCustomValidity(error);
          } else {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "");
            input.setCustomValidity("");
          }
        }
      }
    }
  }
};

var createForm = function createForm() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_pirateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])()), _toConsumableArray((0,_formSection__WEBPACK_IMPORTED_MODULE_3__["default"])()), _toConsumableArray((0,_buttonSection__WEBPACK_IMPORTED_MODULE_4__["default"])()), _toConsumableArray((0,_blob__WEBPACK_IMPORTED_MODULE_5__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", ["player-form"], null, null, [["novalidate", "true"]], [["submit", onFormSubmit]])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);

/***/ }),

/***/ "./src/scripts/components/formPart.ts":
/*!********************************************!*\
  !*** ./src/scripts/components/formPart.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _playerDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playerDiv */ "./src/scripts/components/playerDiv.ts");
/* harmony import */ var _AIDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AIDiv */ "./src/scripts/components/AIDiv.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createPart = function createPart(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_playerDiv__WEBPACK_IMPORTED_MODULE_1__["default"])(num)), _toConsumableArray((0,_AIDiv__WEBPACK_IMPORTED_MODULE_2__["default"])(num)), [(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", ["error-div"], null, null, null, null, "error-span")]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["player-part", "player".concat(num, "-part")])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPart);

/***/ }),

/***/ "./src/scripts/components/formSection.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/formSection.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _formPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formPart */ "./src/scripts/components/formPart.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createPlayerSection = function createPlayerSection() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_formPart__WEBPACK_IMPORTED_MODULE_1__["default"])(1)), _toConsumableArray((0,_formPart__WEBPACK_IMPORTED_MODULE_1__["default"])(2))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", ["player-section"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayerSection);

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

/***/ "./src/scripts/components/header.ts":
/*!******************************************!*\
  !*** ./src/scripts/components/header.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createHeader = function createHeader() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", ["battleship-header"], "Battleship"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", ["header-div"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/scripts/components/main.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/main.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _volumeDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volumeDiv */ "./src/scripts/components/volumeDiv.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form */ "./src/scripts/components/form.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createMain = function createMain() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_volumeDiv__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_form__WEBPACK_IMPORTED_MODULE_2__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["main", "main-home"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

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

/***/ "./src/scripts/components/playerDiv.ts":
/*!*********************************************!*\
  !*** ./src/scripts/components/playerDiv.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");



var onNameInput = function onNameInput(input) {
  if (input instanceof HTMLInputElement) {
    if (input.validity.valueMissing) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "Input must not be left blank!");
    }

    if (input.value.trim() === "") {
      var error = "Input is blank.";
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "Input must not be left blank!");
      input.setCustomValidity(error);
    } else {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("error-span-setText", "");
      input.setCustomValidity("");
    }
  }
};

var createPlayerDiv = function createPlayerDiv(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", null, null, "player".concat(num, "-input"), [["type", "text"], ["name", "player".concat(num)], ["placeholder", " "], ["required", "true"]], [["input", onNameInput]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", ["player-label"], "Enter Player ".concat(num, " Name:"), null, [["for", "player".concat(num, "-input")]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["player-elements"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayerDiv);

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

var createElement = function createElement(elementName, classNames, textContent, id, attributes, eventListeners, uniqueScriptName, scripts) {
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
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
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
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
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
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _components_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/container */ "./src/scripts/components/container.ts");



var initDisplay = function initDisplay() {
  var body = document.querySelector("body");

  if (body) {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(body, [(0,_components_container__WEBPACK_IMPORTED_MODULE_1__["default"])()]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDisplay);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBRkQ7RUFHRDtBQUNGLENBUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9BSURpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9ibG9iLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2J1dHRvblNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvb3Rlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb3JtLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1QYXJ0LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1TZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dpdGh1YkRpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9naXRodWJJY29uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3BpcmF0ZUJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3BsYXllckRpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zYWlsaW5nQXVkaW8udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvdm9sdW1lRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3dhdmUudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdG9yLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9pbml0RGlzcGxheS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgb25DaGVja2JveENoYW5nZSA9IChjaGVjazogSFRNTEVsZW1lbnQpID0+IHtcbiAgaWYgKGNoZWNrIGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIGNvbnN0IGRpdiA9IGNoZWNrLnBhcmVudEVsZW1lbnQ/LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3Qgc3BhbiA9IGNoZWNrLnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZztcbiAgICBjb25zdCBpbnB1dCA9IGRpdj8ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgIGlmIChpbnB1dCAmJiBkaXYgJiYgc3Bhbikge1xuICAgICAgaWYgKGNoZWNrLmNoZWNrZWQpIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIGlucHV0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVBSURpdiA9IChudW06IG51bWJlcikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgXCJBSSBtb2RlOlwiLCBudWxsLCBbXG4gICAgICAgIFtcImZvclwiLCBgQUkke251bX0taW5wdXRgXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBgQUkke251bX0taW5wdXRgLFxuICAgICAgICBbXG4gICAgICAgICAgW1widHlwZVwiLCBcImNoZWNrYm94XCJdLFxuICAgICAgICAgIFtcIm5hbWVcIiwgYEFJJHtudW19YF0sXG4gICAgICAgIF0sXG4gICAgICAgIFtbXCJjaGFuZ2VcIiwgb25DaGVja2JveENoYW5nZV1dXG4gICAgICApLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJBSS1lbGVtZW50c1wiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBSURpdjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZUJsb2IgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1xuICAgICAgICBcImRcIixcbiAgICAgICAgXCJNNTEuMSAtODBDNjYuOSAtNjkuNCA4MC43IC01Ni4zIDg5LjkgLTQwQzk5IC0yMy42IDEwMy41IC00LjEgOTguOSAxMi45Qzk0LjMgMjkuOCA4MC44IDQ0IDY4LjIgNTkuN0M1NS41IDc1LjMgNDMuOCA5Mi4zIDI2IDEwNS4yQzguMiAxMTggLTE1LjggMTI2LjcgLTQwIDEyNC44Qy02NC4zIDEyMi45IC04OC44IDExMC42IC05NC43IDg5LjhDLTEwMC43IDY5LjEgLTg3LjkgNDAgLTgwLjQgMTguNEMtNzIuOSAtMy4yIC03MC42IC0xNy4yIC02OS42IC0zNy4xQy02OC43IC01Ni45IC02OS4yIC04Mi43IC01Ny45IC05NS40Qy00Ni41IC0xMDggLTIzLjIgLTEwNy41IC0yLjggLTEwMy4yQzE3LjcgLTk4LjggMzUuMyAtOTAuNiA1MS4xIC04MFwiLFxuICAgICAgXSxcbiAgICAgIFtcImZpbGxcIiwgXCIjMDAwMDAwYjNcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlU1ZHKFwiZ1wiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoNDQ3Ljc2NDM4ODczNjIzNDMgMjkwLjQ0Mjg1NDc4NDQzODMpXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZVNWRyhcInN2Z1wiLCBudWxsLCBudWxsLCBcInZpc3VhbFwiLCBbXG4gICAgICBbXCJ2aWV3Qm94XCIsIFwiMCAwIDkwMCA2MDBcIl0sXG4gICAgICBbXCJ3aWR0aFwiLCBcIjEwMHZ3XCJdLFxuICAgICAgW1wiaGVpZ2h0XCIsIFwiNTAwXCJdLFxuICAgICAgW1wieG1sbnNcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXSxcbiAgICAgIFtcInhtbG5zOnhsaW5rXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiXSxcbiAgICAgIFtcInZlcnNpb25cIiwgXCIxLjFcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJibG9iXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJsb2I7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlQnV0dG9uU2VjdGlvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJidXR0b25cIiwgXCJnYW1lLXN0YXJ0LWJ1dHRvblwiXSwgXCJTdGFydCBHYW1lIVwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJidXR0b24tc2VjdGlvblwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCdXR0b25TZWN0aW9uO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2hlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSBcIi4vbWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZUhlYWRlcigpLCAuLi5jcmVhdGVNYWluKCksIC4uLmNyZWF0ZUZvb3RlcigpLCAuLi5zYWlsaW5nQXVkaW8oKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIiwgXCJjb250YWluZXItaG9tZVwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWluZXI7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVHaXRodWJEaXYgZnJvbSBcIi4vZ2l0aHViRGl2XCI7XG5pbXBvcnQgY3JlYXRlV2F2ZSBmcm9tIFwiLi93YXZlXCI7XG5cbmNvbnN0IGNyZWF0ZUZvb3RlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZUdpdGh1YkRpdigpLCAuLi5jcmVhdGVXYXZlKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIiwgW1wiZm9vdGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvb3RlcjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVQaXJhdGVCb2FyZCBmcm9tIFwiLi9waXJhdGVCb2FyZFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllclNlY3Rpb24gZnJvbSBcIi4vZm9ybVNlY3Rpb25cIjtcbmltcG9ydCBjcmVhdGVCdXR0b25TZWN0aW9uIGZyb20gXCIuL2J1dHRvblNlY3Rpb25cIjtcbmltcG9ydCBjcmVhdGVCbG9iIGZyb20gXCIuL2Jsb2JcIjtcblxuY29uc3Qgb25Gb3JtU3VibWl0ID0gKGZvcm06IEhUTUxFbGVtZW50KSA9PiB7XG4gIGlmIChmb3JtIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JtLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBpbnB1dCA9IGZvcm1baV07XG4gICAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICAgIGlmICghaW5wdXQuZGlzYWJsZWQpIHtcbiAgICAgICAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgICAgICBwdWJsaXNoKFwiZXJyb3Itc3Bhbi1zZXRUZXh0XCIsIFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBcIklucHV0IGlzIGJsYW5rLlwiO1xuICAgICAgICAgICAgcHVibGlzaChcImVycm9yLXNwYW4tc2V0VGV4dFwiLCBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCIpO1xuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3IpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdWJsaXNoKFwiZXJyb3Itc3Bhbi1zZXRUZXh0XCIsIFwiXCIpO1xuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZCgpLFxuICAgICAgLi4uY3JlYXRlUGxheWVyU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQnV0dG9uU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQmxvYigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZm9ybVwiLFxuICAgICAgW1wicGxheWVyLWZvcm1cIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIFtbXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiXV0sXG4gICAgICBbW1wic3VibWl0XCIsIG9uRm9ybVN1Ym1pdF1dXG4gICAgKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXJEaXYgZnJvbSBcIi4vcGxheWVyRGl2XCI7XG5pbXBvcnQgY3JlYXRlQUlEaXYgZnJvbSBcIi4vQUlEaXZcIjtcblxuY29uc3QgY3JlYXRlUGFydCA9IChudW06IG51bWJlcikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQbGF5ZXJEaXYobnVtKSxcbiAgICAgIC4uLmNyZWF0ZUFJRGl2KG51bSksXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAgW1wiZXJyb3ItZGl2XCJdLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImVycm9yLXNwYW5cIlxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInBsYXllci1wYXJ0XCIsIGBwbGF5ZXIke251bX0tcGFydGBdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBhcnQ7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVQYXJ0IGZyb20gXCIuL2Zvcm1QYXJ0XCI7XG5cbmNvbnN0IGNyZWF0ZVBsYXllclNlY3Rpb24gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVQYXJ0KDEpLCAuLi5jcmVhdGVQYXJ0KDIpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwic2VjdGlvblwiLCBbXCJwbGF5ZXItc2VjdGlvblwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXJTZWN0aW9uO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlR2l0aHViSWNvbiBmcm9tIFwiLi9naXRodWJJY29uXCI7XG5cbmNvbnN0IGNyZWF0ZUdpdGh1YkRpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnaXRodWItbmFtZVwiXSwgXCJNeW5hbWVpc2Zyb3N0d2Fsa2VyXCIpLFxuICAgICAgLi4uY3JlYXRlR2l0aHViSWNvbigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9NeW5hbWVpc2Zyb3N0d2Fsa2VyXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViLWRpdlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHaXRodWJEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlR2l0aHViSWNvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtYnJhbmRzXCIsIFwiZmEtZ2l0aHViXCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdpdGh1Yi1pY29uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdpdGh1Ykljb247XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW1wiYmF0dGxlc2hpcC1oZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtcImhlYWRlci1kaXZcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSBcIi4vZm9ybVwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlVm9sdW1lRGl2KCksIC4uLmNyZWF0ZUZvcm0oKV0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wibWFpblwiLCBcIm1haW4taG9tZVwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluO1xuIiwiaW1wb3J0IHBpcmF0ZUltZyBmcm9tIFwiLi4vLi4vYXNzZXRzL2ltYWdlcy9waXJhdGUuc3ZnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlUGlyYXRlQm9hcmQgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaDJcIixcbiAgICAgICAgW1wiZm9ybS1oZWFkZXJcIl0sXG4gICAgICAgIFwiQWhveSBDYXAnbiwgYmUgeWUgcmVhZHkgdG8gc2FpbCB0aGUgc2V2ZW4gc2VhcyB3aXRoIHllciBsb3lhbCBjcmV3P1wiXG4gICAgICApLFxuICAgICAgY3JlYXRlRWxlbWVudChcImltZ1wiLCBbXCJwaXJhdGUtaW1hZ2VcIl0sIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHBpcmF0ZUltZ10sXG4gICAgICAgIFtcIndpZHRoXCIsIFwiOCVcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGlyYXRlLWlubmVyLWJvcmRlclwiXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwaXJhdGUtb3V0ZXItYm9yZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBpcmF0ZUJvYXJkO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBvbk5hbWVJbnB1dCA9IChpbnB1dDogSFRNTEVsZW1lbnQpID0+IHtcbiAgaWYgKGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgIHB1Ymxpc2goXCJlcnJvci1zcGFuLXNldFRleHRcIiwgXCJJbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rIVwiKTtcbiAgICB9XG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgY29uc3QgZXJyb3IgPSBcIklucHV0IGlzIGJsYW5rLlwiO1xuICAgICAgcHVibGlzaChcImVycm9yLXNwYW4tc2V0VGV4dFwiLCBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCIpO1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwdWJsaXNoKFwiZXJyb3Itc3Bhbi1zZXRUZXh0XCIsIFwiXCIpO1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQbGF5ZXJEaXYgPSAobnVtOiBudW1iZXIpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBgcGxheWVyJHtudW19LWlucHV0YCxcbiAgICAgICAgW1xuICAgICAgICAgIFtcInR5cGVcIiwgXCJ0ZXh0XCJdLFxuICAgICAgICAgIFtcIm5hbWVcIiwgYHBsYXllciR7bnVtfWBdLFxuICAgICAgICAgIFtcInBsYWNlaG9sZGVyXCIsIFwiIFwiXSxcbiAgICAgICAgICBbXCJyZXF1aXJlZFwiLCBcInRydWVcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtbXCJpbnB1dFwiLCBvbk5hbWVJbnB1dF1dXG4gICAgICApLFxuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICBbXCJwbGF5ZXItbGFiZWxcIl0sXG4gICAgICAgIGBFbnRlciBQbGF5ZXIgJHtudW19IE5hbWU6YCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1tcImZvclwiLCBgcGxheWVyJHtudW19LWlucHV0YF1dXG4gICAgICApLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwbGF5ZXItZWxlbWVudHNcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyRGl2O1xuIiwiaW1wb3J0IHNoaXBTYWlsaW5nIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2FpbGluZy5tcDNcIjtcbmltcG9ydCBzaGlwU2FpbGluZzIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hdWRpby9zYWlsaW5nLm9nZ1wiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IHNhaWxpbmdBdWRpbyA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwU2FpbGluZ10sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9tcGVnXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBTYWlsaW5nMl0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzaGlwLXNhaWxpbmdcIl0sIG51bGwsIG51bGwsIFtbXCJsb29wXCIsIFwidHJ1ZVwiXV0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgc2FpbGluZ0F1ZGlvO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBmaXhFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IG9uVm9sdW1lQ2hhbmdlID0gKGRpdjogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtc2FpbGluZ1wiKTtcbiAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90LXBsYXlcIikpIHtcbiAgICAgIGF1ZGlvXG4gICAgICAgIC5wbGF5KClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNyZWF0ZVZvbHVtZSA9ICgpID0+XG4gICAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS1oaWdoXCJdKSxcbiAgICAgICAgICAgIF0pO1xuICAgICAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgICBmaXhFbGVtZW50KGRpdiwgW2NyZWF0ZVZvbHVtZSgpXSk7XG4gICAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJub3QtcGxheVwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdWRpbyBmYWlsZWQgdG8gcGxheVwiKTtcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgICBjb25zdCBjcmVhdGVWb2x1bWUgPSAoKSA9PlxuICAgICAgICBjb21wb3NlRWxlbWVudHMoW2NyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLXhtYXJrXCJdKV0pO1xuICAgICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJub3QtcGxheVwiKTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZVZvbHVtZURpdiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUteG1hcmtcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wibm90LXBsYXlcIl0sIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcImNsaWNrXCIsIG9uVm9sdW1lQ2hhbmdlXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInZvbHVtZS1kaXZcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlVm9sdW1lRGl2O1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTVkcgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlV2F2ZSA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcbiAgICAgICAgICBcImRcIixcbiAgICAgICAgICBcIk0wLDBWNDYuMjljNDcuNzksMjIuMiwxMDMuNTksMzIuMTcsMTU4LDI4LDcwLjM2LTUuMzcsMTM2LjMzLTMzLjMxLDIwNi44LTM3LjVDNDM4LjY0LDMyLjQzLDUxMi4zNCw1My42Nyw1ODMsNzIuMDVjNjkuMjcsMTgsMTM4LjMsMjQuODgsMjA5LjQsMTMuMDgsMzYuMTUtNiw2OS44NS0xNy44NCwxMDQuNDUtMjkuMzRDOTg5LjQ5LDI1LDExMTMtMTQuMjksMTIwMCw1Mi40N1YwWlwiLFxuICAgICAgICBdLFxuICAgICAgICBbXCJvcGFjaXR5XCIsIFwiLjI1XCJdLFxuICAgICAgICBbXCJjbGFzc1wiLCBcInNoYXBlLWZpbGxcIl0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZVNWRyhcInBhdGhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXG4gICAgICAgICAgXCJkXCIsXG4gICAgICAgICAgXCJNMCwwVjE1LjgxQzEzLDM2LjkyLDI3LjY0LDU2Ljg2LDQ3LjY5LDcyLjA1LDk5LjQxLDExMS4yNywxNjUsMTExLDIyNC41OCw5MS41OGMzMS4xNS0xMC4xNSw2MC4wOS0yNi4wNyw4OS42Ny0zOS44LDQwLjkyLTE5LDg0LjczLTQ2LDEzMC44My00OS42NywzNi4yNi0yLjg1LDcwLjksOS40Miw5OC42LDMxLjU2LDMxLjc3LDI1LjM5LDYyLjMyLDYyLDEwMy42Myw3Myw0MC40NCwxMC43OSw4MS4zNS02LjY5LDExOS4xMy0yNC4yOHM3NS4xNi0zOSwxMTYuOTItNDMuMDVjNTkuNzMtNS44NSwxMTMuMjgsMjIuODgsMTY4LjksMzguODQsMzAuMiw4LjY2LDU5LDYuMTcsODcuMDktNy41LDIyLjQzLTEwLjg5LDQ4LTI2LjkzLDYwLjY1LTQ5LjI0VjBaXCIsXG4gICAgICAgIF0sXG4gICAgICAgIFtcIm9wYWNpdHlcIiwgXCIuNVwiXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1xuICAgICAgICAgIFwiZFwiLFxuICAgICAgICAgIFwiTTAsMFY1LjYzQzE0OS45Myw1OSwzMTQuMDksNzEuMzIsNDc1LjgzLDQyLjU3YzQzLTcuNjQsODQuMjMtMjAuMTIsMTI3LjYxLTI2LjQ2LDU5LTguNjMsMTEyLjQ4LDEyLjI0LDE2NS41NiwzNS40QzgyNy45Myw3Ny4yMiw4ODYsOTUuMjQsOTUxLjIsOTBjODYuNTMtNywxNzIuNDYtNDUuNzEsMjQ4LjgtODQuODFWMFpcIixcbiAgICAgICAgXSxcbiAgICAgICAgW1wiY2xhc3NcIiwgXCJzaGFwZS1maWxsXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVTVkcoXCJzdmdcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiZGF0YS1uYW1lXCIsIFwiTGF5ZXIgMVwiXSxcbiAgICAgIFtcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIl0sXG4gICAgICBbXCJ2aWV3Qm94XCIsIFwiMCAwIDEyMDAgMTIwXCJdLFxuICAgICAgW1wicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcIm5vbmVcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ3YXZlXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVdhdmU7XG4iLCJpbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxudHlwZSBIVE1MRnVuYyA9ICgpID0+IEhUTUxFbGVtZW50IHwgU1ZHRWxlbWVudDtcbnR5cGUgQ2hpbGQgPSBIVE1MRnVuYyB8IEhUTUxGdW5jW107XG50eXBlIENoaWxkRnVuYyA9IChjaGlsZD86IENoaWxkKSA9PiBIVE1MRnVuYztcbnR5cGUgQ2hpbGRGdW5jQXJyID0gQ2hpbGRGdW5jW107XG5cbmNvbnN0IGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlID0gKFxuICBmdW5jOiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH1cbik6IGZ1bmMgaXMgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSA9PiBcImZha2VcIiBpbiBmdW5jO1xuXG5jb25zdCBjcmVhdGVFbGVtZW50ID0gKFxuICBlbGVtZW50TmFtZTogc3RyaW5nLFxuICBjbGFzc05hbWVzPzogc3RyaW5nW10gfCBudWxsLFxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGwsXG4gIGlkPzogc3RyaW5nIHwgbnVsbCxcbiAgYXR0cmlidXRlcz86IFtzdHJpbmcsIHN0cmluZ11bXSB8IG51bGwsXG4gIGV2ZW50TGlzdGVuZXJzPzogW3N0cmluZywgKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpID0+IHZvaWRdW10gfCBudWxsLFxuICB1bmlxdWVTY3JpcHROYW1lPzogc3RyaW5nIHwgbnVsbCxcbiAgc2NyaXB0cz86IFtzdHJpbmcsICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudExpc3RlbmVyWzFdKGNvbnRhaW5lcik7XG4gICAgICB9O1xuXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyWzBdLCBldmVudFdyYXBwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVuaXF1ZVNjcmlwdE5hbWUpIHtcbiAgICBjb25zdCBhZGRDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGF0dHJpYnV0ZTogdW5rbm93biwgdmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tYWRkQ2xhc3NgLCBhZGRDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXJlbW92ZUNsYXNzYCwgcmVtb3ZlQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRBdHRyaWJ1dGVgLCBzZXRBdHRyaWJ1dGUpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRUZXh0YCwgc2V0VGV4dCk7XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0V3JhcHBlciA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICBzY3JpcHRbMV0oY29udGFpbmVyLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LSR7c2NyaXB0WzBdfWAsIHNjcmlwdFdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY3JlYXRlU1ZHID0gKFxuICBlbGVtZW50TmFtZTogc3RyaW5nLFxuICBjbGFzc05hbWVzPzogc3RyaW5nW10gfCBudWxsLFxuICB0ZXh0Q29udGVudD86IHN0cmluZyB8IG51bGwsXG4gIGlkPzogc3RyaW5nIHwgbnVsbCxcbiAgYXR0cmlidXRlcz86IFtzdHJpbmcsIHN0cmluZ11bXSB8IG51bGwsXG4gIGV2ZW50TGlzdGVuZXJzPzogW3N0cmluZywgKGNvbnRhaW5lcjogU1ZHRWxlbWVudCkgPT4gdm9pZF1bXSB8IG51bGwsXG4gIHVuaXF1ZVNjcmlwdE5hbWU/OiBzdHJpbmcgfCBudWxsLFxuICBzY3JpcHRzPzogW3N0cmluZywgKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZF1bXSB8IG51bGxcbikgPT4ge1xuICBjb25zdCBjb250YWluZXI6IFNWR0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIGVsZW1lbnROYW1lXG4gICk7XG5cbiAgaWYgKGNsYXNzTmFtZXMpIHtcbiAgICBjbGFzc05hbWVzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KTtcbiAgfVxuICBpZiAodGV4dENvbnRlbnQpIHtcbiAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgfVxuICBpZiAoaWQpIHtcbiAgICBjb250YWluZXIuaWQgPSBpZDtcbiAgfVxuICBpZiAoYXR0cmlidXRlcykge1xuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZVswXSwgYXR0cmlidXRlWzFdKTtcbiAgICB9KTtcbiAgfVxuICBpZiAoZXZlbnRMaXN0ZW5lcnMpIHtcbiAgICBldmVudExpc3RlbmVycy5mb3JFYWNoKChldmVudExpc3RlbmVyKSA9PiB7XG4gICAgICBjb25zdCBldmVudFdyYXBwZXIgPSAoKSA9PiB7XG4gICAgICAgIGV2ZW50TGlzdGVuZXJbMV0oY29udGFpbmVyKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TGlzdGVuZXJbMF0sIGV2ZW50V3JhcHBlcik7XG4gICAgfSk7XG4gIH1cblxuICBpZiAodW5pcXVlU2NyaXB0TmFtZSkge1xuICAgIGNvbnN0IGFkZENsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRBdHRyaWJ1dGUgPSAoYXR0cmlidXRlOiB1bmtub3duLCB2YWx1ZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBhdHRyaWJ1dGUgPT09IFwic3RyaW5nXCIgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldFRleHQgPSAodGV4dDogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1hZGRDbGFzc2AsIGFkZENsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tcmVtb3ZlQ2xhc3NgLCByZW1vdmVDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXNldEF0dHJpYnV0ZWAsIHNldEF0dHJpYnV0ZSk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXNldFRleHRgLCBzZXRUZXh0KTtcblxuICAgIGlmIChzY3JpcHRzKSB7XG4gICAgICBzY3JpcHRzLmZvckVhY2goKHNjcmlwdCkgPT4ge1xuICAgICAgICBjb25zdCBzY3JpcHRXcmFwcGVyID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4ge1xuICAgICAgICAgIHNjcmlwdFsxXShjb250YWluZXIsIC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tJHtzY3JpcHRbMF19YCwgc2NyaXB0V3JhcHBlcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKGNoaWxkPzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGVja0lmRnVuY0NvbnRhaW5zRmFrZShjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gIH07XG59O1xuXG5jb25zdCBjaGVja0lmVHlwZUNoaWxkRnVuY0FyciA9IChcbiAgYXJyOiBDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnJcbik6IGFyciBpcyBDaGlsZEZ1bmNBcnIgPT4gQXJyYXkuaXNBcnJheShhcnIpO1xuXG5jb25zdCBjb21wb3NlRWxlbWVudHMgPSAoYXJyOiAoQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyKVtdKTogQ2hpbGRGdW5jQXJyID0+IHtcbiAgY29uc3QgZmFrZURpdiA9ICgpID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGZha2VEaXYuZmFrZSA9IHRydWU7XG5cbiAgY29uc3QgcmV0dXJuQ29udGFpbmVyID0gYXJyLnJlZHVjZTxDaGlsZD4oKGFjYywgY3VycikgPT4ge1xuICAgIGlmIChjaGVja0lmVHlwZUNoaWxkRnVuY0FycihjdXJyKSkge1xuICAgICAgcmV0dXJuIGN1cnIubWFwKChmdW5jKSA9PiBmdW5jKHVuZGVmaW5lZCkpO1xuICAgIH1cblxuICAgIHJldHVybiBjdXJyKGFjYyk7XG4gIH0sIGZha2VEaXYpO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHJldHVybkNvbnRhaW5lcikpIHtcbiAgICByZXR1cm4gcmV0dXJuQ29udGFpbmVyLm1hcCgoaHRtbEZ1bmMpID0+IHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGh0bWxGdW5jKCk7XG5cbiAgICAgIHJldHVybiAoKSA9PiAoKSA9PiBjb250YWluZXI7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXIgPSByZXR1cm5Db250YWluZXIoKTtcbiAgcmV0dXJuIFsoKSA9PiAoKSA9PiBjb250YWluZXJdO1xufTtcblxuY29uc3QgZml4RWxlbWVudCA9IChib2R5OiBIVE1MRWxlbWVudCwgY2hpbGQ6IENoaWxkRnVuY0FycltdKSA9PiB7XG4gIGNoaWxkLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICBmdW5jLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKCkpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGZpeEVsZW1lbnQsIGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH07XG4iLCJpbXBvcnQgeyBmaXhFbGVtZW50IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb250YWluZXJcIjtcblxuY29uc3QgaW5pdERpc3BsYXkgPSAoKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBmaXhFbGVtZW50KGJvZHksIFtjcmVhdGVDb250YWluZXIoKV0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0RGlzcGxheTtcbiIsInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXS50b1N0cmluZygpID09PSBmdW5jLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG4iXSwibmFtZXMiOlsiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hlY2tib3hDaGFuZ2UiLCJjaGVjayIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkaXYiLCJwYXJlbnRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInNwYW4iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJkaXNhYmxlZCIsInJlbW92ZSIsImNyZWF0ZUFJRGl2IiwibnVtIiwiY3JlYXRlU1ZHIiwiY3JlYXRlQmxvYiIsImNyZWF0ZUJ1dHRvblNlY3Rpb24iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVNYWluIiwiY3JlYXRlRm9vdGVyIiwic2FpbGluZ0F1ZGlvIiwiY3JlYXRlQ29udGFpbmVyIiwiY3JlYXRlR2l0aHViRGl2IiwiY3JlYXRlV2F2ZSIsInB1Ymxpc2giLCJjcmVhdGVQaXJhdGVCb2FyZCIsImNyZWF0ZVBsYXllclNlY3Rpb24iLCJvbkZvcm1TdWJtaXQiLCJmb3JtIiwiSFRNTEZvcm1FbGVtZW50IiwiaSIsImxlbmd0aCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwidmFsdWUiLCJ0cmltIiwiZXJyb3IiLCJzZXRDdXN0b21WYWxpZGl0eSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVQbGF5ZXJEaXYiLCJjcmVhdGVQYXJ0IiwiY3JlYXRlR2l0aHViSWNvbiIsImNyZWF0ZVZvbHVtZURpdiIsInBpcmF0ZUltZyIsIm9uTmFtZUlucHV0Iiwic2hpcFNhaWxpbmciLCJzaGlwU2FpbGluZzIiLCJmaXhFbGVtZW50Iiwib25Wb2x1bWVDaGFuZ2UiLCJhdWRpbyIsImRvY3VtZW50IiwiSFRNTEF1ZGlvRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY29udGFpbnMiLCJwbGF5IiwidGhlbiIsImNyZWF0ZVZvbHVtZSIsInJlcGxhY2VDaGlsZHJlbiIsIkVycm9yIiwicGF1c2UiLCJzdWJzY3JpYmUiLCJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZXMiLCJpZCIsImF0dHJpYnV0ZXMiLCJldmVudExpc3RlbmVycyIsInVuaXF1ZVNjcmlwdE5hbWUiLCJzY3JpcHRzIiwiY29udGFpbmVyIiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJldmVudFdyYXBwZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUZXh0IiwidGV4dCIsInNjcmlwdCIsInNjcmlwdFdyYXBwZXIiLCJhcmdzIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVFbGVtZW50TlMiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiYm9keSIsImluaXREaXNwbGF5IiwiZXZlbnRzIiwiZXZlbnROYW1lIiwicHVzaCIsInVuc3Vic2NyaWJlIiwidG9TdHJpbmciLCJzcGxpY2UiLCJmdW5jcyJdLCJzb3VyY2VSb290IjoiIn0=