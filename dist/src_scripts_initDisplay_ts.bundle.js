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


var onCheckboxChange = function onCheckboxChange(event) {
  var check = event.currentTarget;

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








var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var form = event.currentTarget;
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


var onNameInput = function onNameInput(event) {
  var input = event.currentTarget;

  if (input instanceof HTMLInputElement) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0tvQixHQUhMLGFBSVgsSUFKVyxFQUtYLENBQUMsQ0FBQyxLQUFELGtCQUFpQkEsR0FBakIsWUFBRCxDQUxXLENBZGYsQ0FEYyxFQXVCZHBCLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsaUJBQUQsQ0FBUixDQXZCQyxDQUFELENBRE87QUFBQSxDQUF4Qjs7QUEyQkEsaUVBQWVpRCxlQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDakRBO0FBQ0E7O0FBRUEsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtFQUN4QixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQzVDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7RUFDQSxJQUFJMkMsSUFBSixFQUFVO0lBQ1JGLDJEQUFVLENBQUNFLElBQUQsRUFBTyxDQUFDM0IsaUVBQWUsRUFBaEIsQ0FBUCxDQUFWO0VBQ0Q7QUFDRixDQUxEOztBQU9BLGlFQUFlMEIsV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL0FJRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Jsb2IudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYnV0dG9uU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb3JtUGFydC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9mb3JtU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9oZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvbWFpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wbGF5ZXJEaXYudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2luaXREaXNwbGF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBvbkNoZWNrYm94Q2hhbmdlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBjaGVjayA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGlmIChjaGVjayBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBjaGVjay5wYXJlbnRFbGVtZW50Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHNwYW4gPSBjaGVjay5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgaW5wdXQgPSBkaXY/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXQgJiYgZGl2ICYmIHNwYW4pIHtcbiAgICAgIGlmIChjaGVjay5jaGVja2VkKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQUlEaXYgPSAobnVtOiBudW1iZXIpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIFwiQUkgbW9kZTpcIiwgbnVsbCwgW1xuICAgICAgICBbXCJmb3JcIiwgYEFJJHtudW19LWlucHV0YF0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYEFJJHtudW19LWlucHV0YCxcbiAgICAgICAgW1xuICAgICAgICAgIFtcInR5cGVcIiwgXCJjaGVja2JveFwiXSxcbiAgICAgICAgICBbXCJuYW1lXCIsIGBBSSR7bnVtfWBdLFxuICAgICAgICBdLFxuICAgICAgICBbW1wiY2hhbmdlXCIsIG9uQ2hlY2tib3hDaGFuZ2VdXVxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiQUktZWxlbWVudHNcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUlEaXY7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVCbG9iID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVTVkcoXCJwYXRoXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcbiAgICAgICAgXCJkXCIsXG4gICAgICAgIFwiTTUxLjEgLTgwQzY2LjkgLTY5LjQgODAuNyAtNTYuMyA4OS45IC00MEM5OSAtMjMuNiAxMDMuNSAtNC4xIDk4LjkgMTIuOUM5NC4zIDI5LjggODAuOCA0NCA2OC4yIDU5LjdDNTUuNSA3NS4zIDQzLjggOTIuMyAyNiAxMDUuMkM4LjIgMTE4IC0xNS44IDEyNi43IC00MCAxMjQuOEMtNjQuMyAxMjIuOSAtODguOCAxMTAuNiAtOTQuNyA4OS44Qy0xMDAuNyA2OS4xIC04Ny45IDQwIC04MC40IDE4LjRDLTcyLjkgLTMuMiAtNzAuNiAtMTcuMiAtNjkuNiAtMzcuMUMtNjguNyAtNTYuOSAtNjkuMiAtODIuNyAtNTcuOSAtOTUuNEMtNDYuNSAtMTA4IC0yMy4yIC0xMDcuNSAtMi44IC0xMDMuMkMxNy43IC05OC44IDM1LjMgLTkwLjYgNTEuMSAtODBcIixcbiAgICAgIF0sXG4gICAgICBbXCJmaWxsXCIsIFwiIzAwMDAwMGIzXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZVNWRyhcImdcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1widHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDQ0Ny43NjQzODg3MzYyMzQzIDI5MC40NDI4NTQ3ODQ0MzgzKVwiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVTVkcoXCJzdmdcIiwgbnVsbCwgbnVsbCwgXCJ2aXN1YWxcIiwgW1xuICAgICAgW1widmlld0JveFwiLCBcIjAgMCA5MDAgNjAwXCJdLFxuICAgICAgW1wid2lkdGhcIiwgXCIxMDB2d1wiXSxcbiAgICAgIFtcImhlaWdodFwiLCBcIjUwMFwiXSxcbiAgICAgIFtcInhtbG5zXCIsIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIl0sXG4gICAgICBbXCJ4bWxuczp4bGlua1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIl0sXG4gICAgICBbXCJ2ZXJzaW9uXCIsIFwiMS4xXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYmxvYlwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCbG9iO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZUJ1dHRvblNlY3Rpb24gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiYnV0dG9uXCIsIFwiZ2FtZS1zdGFydC1idXR0b25cIl0sIFwiU3RhcnQgR2FtZSFcIiksXG4gICAgY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW1wiYnV0dG9uLXNlY3Rpb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnV0dG9uU2VjdGlvbjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL21haW5cIjtcbmltcG9ydCBjcmVhdGVGb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5pbXBvcnQgc2FpbGluZ0F1ZGlvIGZyb20gXCIuL3NhaWxpbmdBdWRpb1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5jcmVhdGVIZWFkZXIoKSwgLi4uY3JlYXRlTWFpbigpLCAuLi5jcmVhdGVGb290ZXIoKSwgLi4uc2FpbGluZ0F1ZGlvKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiY29udGFpbmVyLWhvbWVcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlUGlyYXRlQm9hcmQgZnJvbSBcIi4vcGlyYXRlQm9hcmRcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXJTZWN0aW9uIGZyb20gXCIuL2Zvcm1TZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlQnV0dG9uU2VjdGlvbiBmcm9tIFwiLi9idXR0b25TZWN0aW9uXCI7XG5pbXBvcnQgY3JlYXRlQmxvYiBmcm9tIFwiLi9ibG9iXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBvbkZvcm1TdWJtaXQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IGZvcm0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBjb25zdCBpbnB1dHM6IEhUTUxJbnB1dEVsZW1lbnRbXSA9IFtdO1xuICBpZiAoZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5wdXQgPSBmb3JtW2ldO1xuICAgICAgY29uc3Qgc3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZz8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoaW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICAgICAgICBpbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpbnB1dC5kaXNhYmxlZCAmJiBzcGFuKSB7XG4gICAgICAgICAgaWYgKGlucHV0LnZhbGlkaXR5LnZhbHVlTWlzc2luZykge1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gXCJcIikge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBcIklucHV0IGlzIGJsYW5rLlwiO1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIjtcbiAgICAgICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KGVycm9yKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShcIlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGZvcm0uY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICBpZiAoaW5wdXRzWzBdLmRpc2FibGVkKSB7XG4gICAgICAgIGlucHV0c1swXS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXRzWzFdLmRpc2FibGVkKSB7XG4gICAgICAgIGlucHV0c1sxXS52YWx1ZSA9IFwiXCI7XG4gICAgICB9XG4gICAgICBwdWJsaXNoKFwic3RhcnQtZ2FtZVwiLCBpbnB1dHNbMF0udmFsdWUsIGlucHV0c1sxXS52YWx1ZSk7XG4gICAgICBpbnB1dHNbMF0udmFsdWUgPSBcIlwiO1xuICAgICAgaW5wdXRzWzFdLnZhbHVlID0gXCJcIjtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZVBpcmF0ZUJvYXJkKCksXG4gICAgICAuLi5jcmVhdGVQbGF5ZXJTZWN0aW9uKCksXG4gICAgICAuLi5jcmVhdGVCdXR0b25TZWN0aW9uKCksXG4gICAgICAuLi5jcmVhdGVCbG9iKCksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJmb3JtXCIsXG4gICAgICBbXCJwbGF5ZXItZm9ybVwiXSxcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgW1tcIm5vdmFsaWRhdGVcIiwgXCJ0cnVlXCJdXSxcbiAgICAgIFtbXCJzdWJtaXRcIiwgb25Gb3JtU3VibWl0XV1cbiAgICApLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllckRpdiBmcm9tIFwiLi9wbGF5ZXJEaXZcIjtcbmltcG9ydCBjcmVhdGVBSURpdiBmcm9tIFwiLi9BSURpdlwiO1xuXG5jb25zdCBjcmVhdGVQYXJ0ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZVBsYXllckRpdihudW0pLFxuICAgICAgLi4uY3JlYXRlQUlEaXYobnVtKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcImVycm9yLWRpdlwiXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwicFwiLCBbXCJwbGF5ZXItcGFydFwiLCBgcGxheWVyJHtudW19LXBhcnRgXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXJ0O1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlUGFydCBmcm9tIFwiLi9mb3JtUGFydFwiO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXJTZWN0aW9uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlUGFydCgxKSwgLi4uY3JlYXRlUGFydCgyKV0sXG4gICAgY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIiwgW1wicGxheWVyLXNlY3Rpb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyU2VjdGlvbjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBbXCJiYXR0bGVzaGlwLWhlYWRlclwiXSwgXCJCYXR0bGVzaGlwXCIpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiaW5pdGlhbC1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSBcIi4vZm9ybVwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlVm9sdW1lRGl2KCksIC4uLmNyZWF0ZUZvcm0oKV0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wibWFpblwiLCBcImluaXRpYWwtbWFpblwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IG9uTmFtZUlucHV0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBpbnB1dCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBzcGFuID0gaW5wdXQucGFyZW50RWxlbWVudD8ubmV4dEVsZW1lbnRTaWJsaW5nPy5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgaWYgKHNwYW4pIHtcbiAgICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIjtcbiAgICAgIH1cbiAgICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBcIklucHV0IGlzIGJsYW5rLlwiO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJJbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rIVwiO1xuICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShlcnJvcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVQbGF5ZXJEaXYgPSAobnVtOiBudW1iZXIpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJpbnB1dFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBudWxsLFxuICAgICAgICBgcGxheWVyJHtudW19LWlucHV0YCxcbiAgICAgICAgW1xuICAgICAgICAgIFtcInR5cGVcIiwgXCJ0ZXh0XCJdLFxuICAgICAgICAgIFtcIm5hbWVcIiwgYHBsYXllciR7bnVtfWBdLFxuICAgICAgICAgIFtcInBsYWNlaG9sZGVyXCIsIFwiIFwiXSxcbiAgICAgICAgICBbXCJyZXF1aXJlZFwiLCBcInRydWVcIl0sXG4gICAgICAgIF0sXG4gICAgICAgIFtbXCJpbnB1dFwiLCBvbk5hbWVJbnB1dF1dXG4gICAgICApLFxuICAgICAgY3JlYXRlRWxlbWVudChcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICBbXCJwbGF5ZXItbGFiZWxcIl0sXG4gICAgICAgIGBFbnRlciBQbGF5ZXIgJHtudW19IE5hbWU6YCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgW1tcImZvclwiLCBgcGxheWVyJHtudW19LWlucHV0YF1dXG4gICAgICApLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwbGF5ZXItZWxlbWVudHNcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyRGl2O1xuIiwiaW1wb3J0IHsgZml4RWxlbWVudCB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFpbmVyXCI7XG5cbmNvbnN0IGluaXREaXNwbGF5ID0gKCkgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGlmIChib2R5KSB7XG4gICAgZml4RWxlbWVudChib2R5LCBbY3JlYXRlQ29udGFpbmVyKCldKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5pdERpc3BsYXk7XG4iXSwibmFtZXMiOlsiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsIm9uQ2hlY2tib3hDaGFuZ2UiLCJldmVudCIsImNoZWNrIiwiY3VycmVudFRhcmdldCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJkaXYiLCJwYXJlbnRFbGVtZW50IiwicHJldmlvdXNFbGVtZW50U2libGluZyIsInNwYW4iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJpbnB1dCIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja2VkIiwiY2xhc3NMaXN0IiwiYWRkIiwidGV4dENvbnRlbnQiLCJkaXNhYmxlZCIsInJlbW92ZSIsImNyZWF0ZUFJRGl2IiwibnVtIiwiY3JlYXRlU1ZHIiwiY3JlYXRlQmxvYiIsImNyZWF0ZUJ1dHRvblNlY3Rpb24iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVNYWluIiwiY3JlYXRlRm9vdGVyIiwic2FpbGluZ0F1ZGlvIiwiY3JlYXRlQ29udGFpbmVyIiwiY3JlYXRlUGlyYXRlQm9hcmQiLCJjcmVhdGVQbGF5ZXJTZWN0aW9uIiwicHVibGlzaCIsIm9uRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImlucHV0cyIsIkhUTUxGb3JtRWxlbWVudCIsImkiLCJsZW5ndGgiLCJ0eXBlIiwicHVzaCIsInZhbGlkaXR5IiwidmFsdWVNaXNzaW5nIiwidmFsdWUiLCJ0cmltIiwiZXJyb3IiLCJzZXRDdXN0b21WYWxpZGl0eSIsImNoZWNrVmFsaWRpdHkiLCJjcmVhdGVGb3JtIiwiY3JlYXRlUGxheWVyRGl2IiwiY3JlYXRlUGFydCIsImNyZWF0ZVZvbHVtZURpdiIsIm9uTmFtZUlucHV0IiwiZml4RWxlbWVudCIsImluaXREaXNwbGF5IiwiYm9keSIsImRvY3VtZW50Il0sInNvdXJjZVJvb3QiOiIifQ==