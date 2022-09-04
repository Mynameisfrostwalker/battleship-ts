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
/* harmony import */ var _pirateBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pirateBoard */ "./src/scripts/components/pirateBoard.ts");
/* harmony import */ var _formSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formSection */ "./src/scripts/components/formSection.ts");
/* harmony import */ var _buttonSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buttonSection */ "./src/scripts/components/buttonSection.ts");
/* harmony import */ var _blob__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blob */ "./src/scripts/components/blob.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var onFormSubmit = function onFormSubmit(form) {
  var inputs = [];

  if (form instanceof HTMLFormElement) {
    for (var i = 0; i < form.length; i += 1) {
      var _input$parentElement, _input$parentElement$;

      var input = form[i];
      var span = (_input$parentElement = input.parentElement) === null || _input$parentElement === void 0 ? void 0 : (_input$parentElement$ = _input$parentElement.nextElementSibling) === null || _input$parentElement$ === void 0 ? void 0 : _input$parentElement$.nextElementSibling;

      if (input instanceof HTMLInputElement) {
        if (input.type === "text") {
          inputs.push(input);
        }

        if (!input.disabled && span) {
          if (input.validity.valueMissing) {
            span.textContent = "Input must not be left blank!";
          } else if (input.value.trim() === "") {
            var error = "Input is blank.";
            span.textContent = "Input must not be left blank!";
            input.setCustomValidity(error);
          } else {
            span.textContent = "";
            input.setCustomValidity("");
          }
        }
      }
    }

    if (form.checkValidity()) {
      if (inputs[0].disabled) {
        inputs[0].value = "";
      }

      if (inputs[1].disabled) {
        inputs[1].value = "";
      }

      (0,_pubsub__WEBPACK_IMPORTED_MODULE_5__.publish)("start-game", inputs[0].value, inputs[1].value);
      inputs[0].value = "";
      inputs[1].value = "";
    }
  }
};

var createForm = function createForm() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_pirateBoard__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_formSection__WEBPACK_IMPORTED_MODULE_2__["default"])()), _toConsumableArray((0,_buttonSection__WEBPACK_IMPORTED_MODULE_3__["default"])()), _toConsumableArray((0,_blob__WEBPACK_IMPORTED_MODULE_4__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", ["player-form"], null, null, [["novalidate", "true"]], [["submit", onFormSubmit]])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_playerDiv__WEBPACK_IMPORTED_MODULE_1__["default"])(num)), _toConsumableArray((0,_AIDiv__WEBPACK_IMPORTED_MODULE_2__["default"])(num)), [(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", ["error-div"])]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", ["player-part", "player".concat(num, "-part")])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", ["battleship-header"], "Battleship"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", ["initial-header"])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_volumeDiv__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_form__WEBPACK_IMPORTED_MODULE_2__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["main", "initial-main"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

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


var onNameInput = function onNameInput(input) {
  var _input$parentElement, _input$parentElement$;

  var span = (_input$parentElement = input.parentElement) === null || _input$parentElement === void 0 ? void 0 : (_input$parentElement$ = _input$parentElement.nextElementSibling) === null || _input$parentElement$ === void 0 ? void 0 : _input$parentElement$.nextElementSibling;

  if (input instanceof HTMLInputElement && span) {
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

var createPlayerDiv = function createPlayerDiv(num) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", null, null, "player".concat(num, "-input"), [["type", "text"], ["name", "player".concat(num)], ["placeholder", " "], ["required", "true"]], [["input", onNameInput]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", ["player-label"], "Enter Player ".concat(num, " Name:"), null, [["for", "player".concat(num, "-input")]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["player-elements"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayerDiv);

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Q0E7QUFDQTs7QUFFQSxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0VBQ3hCLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDM0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztFQUNBLElBQUkwQyxJQUFKLEVBQVU7SUFDUkYsMkRBQVUsQ0FBQ0UsSUFBRCxFQUFPLENBQUMxQixpRUFBZSxFQUFoQixDQUFQLENBQVY7RUFDRDtBQUNGLENBTEQ7O0FBT0EsaUVBQWV5QixXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvQUlEaXYudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYmxvYi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9idXR0b25TZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb3JtLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1QYXJ0LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm1TZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2hlYWRlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9tYWluLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3BsYXllckRpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvaW5pdERpc3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IG9uQ2hlY2tib3hDaGFuZ2UgPSAoY2hlY2s6IEhUTUxFbGVtZW50KSA9PiB7XG4gIGlmIChjaGVjayBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBjaGVjay5wYXJlbnRFbGVtZW50Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHNwYW4gPSBjaGVjay5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgaW5wdXQgPSBkaXY/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXQgJiYgZGl2ICYmIHNwYW4pIHtcbiAgICAgIGlmIChjaGVjay5jaGVja2VkKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQUlEaXYgPSAobnVtOiBudW1iZXIpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIFwiQUkgbW9kZTpcIiwgbnVsbCwgW1xuICAgICAgICBbXCJmb3JcIiwgYEFJJHtudW19LWlucHV0YF0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYEFJJHtudW19LWlucHV0YCxcbiAgICAgICAgW1xuICAgICAgICAgIFtcInR5cGVcIiwgXCJjaGVja2JveFwiXSxcbiAgICAgICAgICBbXCJuYW1lXCIsIGBBSSR7bnVtfWBdLFxuICAgICAgICBdLFxuICAgICAgICBbW1wiY2hhbmdlXCIsIG9uQ2hlY2tib3hDaGFuZ2VdXVxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiQUktZWxlbWVudHNcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUlEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVCbG9iID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTTUxLjEgLTgwQzY2LjkgLTY5LjQgODAuNyAtNTYuMyA4OS45IC00MEM5OSAtMjMuNiAxMDMuNSAtNC4xIDk4LjkgMTIuOUM5NC4zIDI5LjggODAuOCA0NCA2OC4yIDU5LjdDNTUuNSA3NS4zIDQzLjggOTIuMyAyNiAxMDUuMkM4LjIgMTE4IC0xNS44IDEyNi43IC00MCAxMjQuOEMtNjQuMyAxMjIuOSAtODguOCAxMTAuNiAtOTQuNyA4OS44Qy0xMDAuNyA2OS4xIC04Ny45IDQwIC04MC40IDE4LjRDLTcyLjkgLTMuMiAtNzAuNiAtMTcuMiAtNjkuNiAtMzcuMUMtNjguNyAtNTYuOSAtNjkuMiAtODIuNyAtNTcuOSAtOTUuNEMtNDYuNSAtMTA4IC0yMy4yIC0xMDcuNSAtMi44IC0xMDMuMkMxNy43IC05OC44IDM1LjMgLTkwLjYgNTEuMSAtODBcIixcbiAgICAgIF0sXG4gICAgICBbXCJmaWxsXCIsIFwiIzAwMDAwMGIzXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZVNWRyhcImdcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1widHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDQ0Ny43NjQzODg3MzYyMzQzIDI5MC40NDI4NTQ3ODQ0MzgzKVwiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVTVkcoXCJzdmdcIiwgbnVsbCwgbnVsbCwgXCJ2aXN1YWxcIiwgW1xuICAgICAgW1widmlld0JveFwiLCBcIjAgMCA5MDAgNjAwXCJdLFxuICAgICAgW1wid2lkdGhcIiwgXCIxMDB2d1wiXSxcbiAgICAgIFtcImhlaWdodFwiLCBcIjUwMFwiXSxcbiAgICAgIFtcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIl0sXG4gICAgICBbXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIl0sXG4gICAgICBbXCJ2ZXJzaW9uXCIsIFwiMS4xXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYmxvYlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCbG9iO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblNlY3Rpb24gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiYnV0dG9uXCIsIFwiZ2FtZS1zdGFydC1idXR0b25cIl0sIFwiU3RhcnQgR2FtZSFcIiksXG4gICAgY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW1wiYnV0dG9uLXNlY3Rpb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uU2VjdGlvbjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgc2FpbGluZ0F1ZGlvIGZyb20gXCIuL3NhaWxpbmdBdWRpb1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVIZWFkZXIoKSwgLi4uY3JlYXRlTWFpbigpLCAuLi5jcmVhdGVGb290ZXIoKSwgLi4uc2FpbGluZ0F1ZGlvKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiY29udGFpbmVyLWhvbWVcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlUGlyYXRlQm9hcmQgZnJvbSBcIi4vcGlyYXRlQm9hcmRcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXJTZWN0aW9uIGZyb20gXCIuL2Zvcm1TZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlQnV0dG9uU2VjdGlvbiBmcm9tIFwiLi9idXR0b25TZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlQmxvYiBmcm9tIFwiLi9ibG9iXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBvbkZvcm1TdWJtaXQgPSAoZm9ybTogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3QgaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgaWYgKGZvcm0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybVtpXTtcbiAgICAgIGNvbnN0IHNwYW4gPSBpbnB1dC5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc/Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgaW5wdXRzLnB1c2goaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5wdXQuZGlzYWJsZWQgJiYgc3Bhbikge1xuICAgICAgICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gXCJJbnB1dCBpcyBibGFuay5cIjtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaWYgKGlucHV0c1swXS5kaXNhYmxlZCkge1xuICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0c1sxXS5kaXNhYmxlZCkge1xuICAgICAgICBpbnB1dHNbMV0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgcHVibGlzaChcInN0YXJ0LWdhbWVcIiwgaW5wdXRzWzBdLnZhbHVlLCBpbnB1dHNbMV0udmFsdWUpO1xuICAgICAgaW5wdXRzWzBdLnZhbHVlID0gXCJcIjtcbiAgICAgIGlucHV0c1sxXS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZCgpLFxuICAgICAgLi4uY3JlYXRlUGxheWVyU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQnV0dG9uU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQmxvYigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZm9ybVwiLFxuICAgICAgW1wicGxheWVyLWZvcm1cIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIFtbXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiXV0sXG4gICAgICBbW1wic3VibWl0XCIsIG9uRm9ybVN1Ym1pdF1dXG4gICAgKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXJEaXYgZnJvbSBcIi4vcGxheWVyRGl2XCI7XG5pbXBvcnQgY3JlYXRlQUlEaXYgZnJvbSBcIi4vQUlEaXZcIjtcblxuY29uc3QgY3JlYXRlUGFydCA9IChudW06IG51bWJlcikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQbGF5ZXJEaXYobnVtKSxcbiAgICAgIC4uLmNyZWF0ZUFJRGl2KG51bSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJlcnJvci1kaXZcIl0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgW1wicGxheWVyLXBhcnRcIiwgYHBsYXllciR7bnVtfS1wYXJ0YF0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFydDtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVBhcnQgZnJvbSBcIi4vZm9ybVBhcnRcIjtcblxuY29uc3QgY3JlYXRlUGxheWVyU2VjdGlvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZVBhcnQoMSksIC4uLmNyZWF0ZVBhcnQoMildLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcInBsYXllci1zZWN0aW9uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllclNlY3Rpb247XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW1wiYmF0dGxlc2hpcC1oZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtcImluaXRpYWwtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVZvbHVtZURpdiBmcm9tIFwiLi92b2x1bWVEaXZcIjtcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gXCIuL2Zvcm1cIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZVZvbHVtZURpdigpLCAuLi5jcmVhdGVGb3JtKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFtcIm1haW5cIiwgXCJpbml0aWFsLW1haW5cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBvbk5hbWVJbnB1dCA9IChpbnB1dDogSFRNTEVsZW1lbnQpID0+IHtcbiAgY29uc3Qgc3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZz8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50ICYmIHNwYW4pIHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJJbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rIVwiO1xuICAgIH1cbiAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICBjb25zdCBlcnJvciA9IFwiSW5wdXQgaXMgYmxhbmsuXCI7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJJbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rIVwiO1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUGxheWVyRGl2ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYHBsYXllciR7bnVtfS1pbnB1dGAsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICAgICAgICBbXCJuYW1lXCIsIGBwbGF5ZXIke251bX1gXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIiBcIl0sXG4gICAgICAgICAgW1wicmVxdWlyZWRcIiwgXCJ0cnVlXCJdLFxuICAgICAgICBdLFxuICAgICAgICBbW1wiaW5wdXRcIiwgb25OYW1lSW5wdXRdXVxuICAgICAgKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgW1wicGxheWVyLWxhYmVsXCJdLFxuICAgICAgICBgRW50ZXIgUGxheWVyICR7bnVtfSBOYW1lOmAsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtbXCJmb3JcIiwgYHBsYXllciR7bnVtfS1pbnB1dGBdXVxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGxheWVyLWVsZW1lbnRzXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllckRpdjtcbiIsImltcG9ydCB7IGZpeEVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuXG5jb25zdCBpbml0RGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcigpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXREaXNwbGF5O1xuIl0sIm5hbWVzIjpbImNvbXBvc2VFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoZWNrYm94Q2hhbmdlIiwiY2hlY2siLCJIVE1MSW5wdXRFbGVtZW50IiwiZGl2IiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzcGFuIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tlZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJjcmVhdGVBSURpdiIsIm51bSIsImNyZWF0ZVNWRyIsImNyZWF0ZUJsb2IiLCJjcmVhdGVCdXR0b25TZWN0aW9uIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlTWFpbiIsImNyZWF0ZUZvb3RlciIsInNhaWxpbmdBdWRpbyIsImNyZWF0ZUNvbnRhaW5lciIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwiY3JlYXRlUGxheWVyU2VjdGlvbiIsInB1Ymxpc2giLCJvbkZvcm1TdWJtaXQiLCJmb3JtIiwiaW5wdXRzIiwiSFRNTEZvcm1FbGVtZW50IiwiaSIsImxlbmd0aCIsInR5cGUiLCJwdXNoIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJ2YWx1ZSIsInRyaW0iLCJlcnJvciIsInNldEN1c3RvbVZhbGlkaXR5IiwiY2hlY2tWYWxpZGl0eSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVQbGF5ZXJEaXYiLCJjcmVhdGVQYXJ0IiwiY3JlYXRlVm9sdW1lRGl2Iiwib25OYW1lSW5wdXQiLCJmaXhFbGVtZW50IiwiaW5pdERpc3BsYXkiLCJib2R5IiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9