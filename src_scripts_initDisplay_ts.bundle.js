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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WCxDQUFDLENBQUMsS0FBRCxrQkFBaUJBLEdBQWpCLFlBQUQsQ0FMVyxDQWRmLENBRGMsRUF1QmRwQiw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLGlCQUFELENBQVIsQ0F2QkMsQ0FBRCxDQURPO0FBQUEsQ0FBeEI7O0FBMkJBLGlFQUFlZ0QsZUFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBOztBQUVBLElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07RUFDeEIsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUMzQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0VBQ0EsSUFBSTBDLElBQUosRUFBVTtJQUNSRiwyREFBVSxDQUFDRSxJQUFELEVBQU8sQ0FBQzFCLGlFQUFlLEVBQWhCLENBQVAsQ0FBVjtFQUNEO0FBQ0YsQ0FMRDs7QUFPQSxpRUFBZXlCLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9BSURpdi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9ibG9iLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2J1dHRvblNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvY29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2Zvcm0udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybVBhcnQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZm9ybVNlY3Rpb24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvaGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL21haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGxheWVyRGl2LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9pbml0RGlzcGxheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3Qgb25DaGVja2JveENoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgY29uc3QgY2hlY2sgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBpZiAoY2hlY2sgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3QgZGl2ID0gY2hlY2sucGFyZW50RWxlbWVudD8ucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICBjb25zdCBzcGFuID0gY2hlY2sucGFyZW50RWxlbWVudD8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IGlucHV0ID0gZGl2Py5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gICAgaWYgKGlucHV0ICYmIGRpdiAmJiBzcGFuKSB7XG4gICAgICBpZiAoY2hlY2suY2hlY2tlZCkge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgaW5wdXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUFJRGl2ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBcIkFJIG1vZGU6XCIsIG51bGwsIFtcbiAgICAgICAgW1wiZm9yXCIsIGBBSSR7bnVtfS1pbnB1dGBdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgICBcImlucHV0XCIsXG4gICAgICAgIG51bGwsXG4gICAgICAgIG51bGwsXG4gICAgICAgIGBBSSR7bnVtfS1pbnB1dGAsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwiY2hlY2tib3hcIl0sXG4gICAgICAgICAgW1wibmFtZVwiLCBgQUkke251bX1gXSxcbiAgICAgICAgXSxcbiAgICAgICAgW1tcImNoYW5nZVwiLCBvbkNoZWNrYm94Q2hhbmdlXV1cbiAgICAgICksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcIkFJLWVsZW1lbnRzXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJRGl2O1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50LCBjcmVhdGVTVkcgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlQmxvYiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlU1ZHKFwicGF0aFwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICBbXG4gICAgICAgIFwiZFwiLFxuICAgICAgICBcIk01MS4xIC04MEM2Ni45IC02OS40IDgwLjcgLTU2LjMgODkuOSAtNDBDOTkgLTIzLjYgMTAzLjUgLTQuMSA5OC45IDEyLjlDOTQuMyAyOS44IDgwLjggNDQgNjguMiA1OS43QzU1LjUgNzUuMyA0My44IDkyLjMgMjYgMTA1LjJDOC4yIDExOCAtMTUuOCAxMjYuNyAtNDAgMTI0LjhDLTY0LjMgMTIyLjkgLTg4LjggMTEwLjYgLTk0LjcgODkuOEMtMTAwLjcgNjkuMSAtODcuOSA0MCAtODAuNCAxOC40Qy03Mi45IC0zLjIgLTcwLjYgLTE3LjIgLTY5LjYgLTM3LjFDLTY4LjcgLTU2LjkgLTY5LjIgLTgyLjcgLTU3LjkgLTk1LjRDLTQ2LjUgLTEwOCAtMjMuMiAtMTA3LjUgLTIuOCAtMTAzLjJDMTcuNyAtOTguOCAzNS4zIC05MC42IDUxLjEgLTgwXCIsXG4gICAgICBdLFxuICAgICAgW1wiZmlsbFwiLCBcIiMwMDAwMDBiM1wiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVTVkcoXCJnXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgIFtcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSg0NDcuNzY0Mzg4NzM2MjM0MyAyOTAuNDQyODU0Nzg0NDM4MylcIl0sXG4gICAgXSksXG4gICAgY3JlYXRlU1ZHKFwic3ZnXCIsIG51bGwsIG51bGwsIFwidmlzdWFsXCIsIFtcbiAgICAgIFtcInZpZXdCb3hcIiwgXCIwIDAgOTAwIDYwMFwiXSxcbiAgICAgIFtcIndpZHRoXCIsIFwiMTAwdndcIl0sXG4gICAgICBbXCJoZWlnaHRcIiwgXCI1MDBcIl0sXG4gICAgICBbXCJ4bWxuc1wiLCBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJdLFxuICAgICAgW1wieG1sbnM6eGxpbmtcIiwgXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCJdLFxuICAgICAgW1widmVyc2lvblwiLCBcIjEuMVwiXSxcbiAgICBdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJsb2JcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmxvYjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVCdXR0b25TZWN0aW9uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImJ1dHRvblwiLCBcImdhbWUtc3RhcnQtYnV0dG9uXCJdLCBcIlN0YXJ0IEdhbWUhXCIpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcImJ1dHRvbi1zZWN0aW9uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJ1dHRvblNlY3Rpb247XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9tYWluXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHNhaWxpbmdBdWRpbyBmcm9tIFwiLi9zYWlsaW5nQXVkaW9cIjtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlSGVhZGVyKCksIC4uLmNyZWF0ZU1haW4oKSwgLi4uY3JlYXRlRm9vdGVyKCksIC4uLnNhaWxpbmdBdWRpbygpXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNvbnRhaW5lclwiLCBcImNvbnRhaW5lci1ob21lXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhaW5lcjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyU2VjdGlvbiBmcm9tIFwiLi9mb3JtU2VjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZUJ1dHRvblNlY3Rpb24gZnJvbSBcIi4vYnV0dG9uU2VjdGlvblwiO1xuaW1wb3J0IGNyZWF0ZUJsb2IgZnJvbSBcIi4vYmxvYlwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBjb25zdCBmb3JtID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgY29uc3QgaW5wdXRzOiBIVE1MSW5wdXRFbGVtZW50W10gPSBbXTtcbiAgaWYgKGZvcm0gaW5zdGFuY2VvZiBIVE1MRm9ybUVsZW1lbnQpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcm0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gZm9ybVtpXTtcbiAgICAgIGNvbnN0IHNwYW4gPSBpbnB1dC5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc/Lm5leHRFbGVtZW50U2libGluZztcbiAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGlucHV0LnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgICAgICAgaW5wdXRzLnB1c2goaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW5wdXQuZGlzYWJsZWQgJiYgc3Bhbikge1xuICAgICAgICAgIGlmIChpbnB1dC52YWxpZGl0eS52YWx1ZU1pc3NpbmcpIHtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yID0gXCJJbnB1dCBpcyBibGFuay5cIjtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICAgICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShlcnJvcik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChmb3JtLmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgaWYgKGlucHV0c1swXS5kaXNhYmxlZCkge1xuICAgICAgICBpbnB1dHNbMF0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgaWYgKGlucHV0c1sxXS5kaXNhYmxlZCkge1xuICAgICAgICBpbnB1dHNbMV0udmFsdWUgPSBcIlwiO1xuICAgICAgfVxuICAgICAgcHVibGlzaChcInN0YXJ0LWdhbWVcIiwgaW5wdXRzWzBdLnZhbHVlLCBpbnB1dHNbMV0udmFsdWUpO1xuICAgICAgaW5wdXRzWzBdLnZhbHVlID0gXCJcIjtcbiAgICAgIGlucHV0c1sxXS52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZCgpLFxuICAgICAgLi4uY3JlYXRlUGxheWVyU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQnV0dG9uU2VjdGlvbigpLFxuICAgICAgLi4uY3JlYXRlQmxvYigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZm9ybVwiLFxuICAgICAgW1wicGxheWVyLWZvcm1cIl0sXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIFtbXCJub3ZhbGlkYXRlXCIsIFwidHJ1ZVwiXV0sXG4gICAgICBbW1wic3VibWl0XCIsIG9uRm9ybVN1Ym1pdF1dXG4gICAgKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXJEaXYgZnJvbSBcIi4vcGxheWVyRGl2XCI7XG5pbXBvcnQgY3JlYXRlQUlEaXYgZnJvbSBcIi4vQUlEaXZcIjtcblxuY29uc3QgY3JlYXRlUGFydCA9IChudW06IG51bWJlcikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVQbGF5ZXJEaXYobnVtKSxcbiAgICAgIC4uLmNyZWF0ZUFJRGl2KG51bSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJlcnJvci1kaXZcIl0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcInBcIiwgW1wicGxheWVyLXBhcnRcIiwgYHBsYXllciR7bnVtfS1wYXJ0YF0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFydDtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVBhcnQgZnJvbSBcIi4vZm9ybVBhcnRcIjtcblxuY29uc3QgY3JlYXRlUGxheWVyU2VjdGlvbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZVBhcnQoMSksIC4uLmNyZWF0ZVBhcnQoMildLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIsIFtcInBsYXllci1zZWN0aW9uXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllclNlY3Rpb247XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW1wiYmF0dGxlc2hpcC1oZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtcImluaXRpYWwtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUhlYWRlcjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVZvbHVtZURpdiBmcm9tIFwiLi92b2x1bWVEaXZcIjtcbmltcG9ydCBjcmVhdGVGb3JtIGZyb20gXCIuL2Zvcm1cIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmNyZWF0ZVZvbHVtZURpdigpLCAuLi5jcmVhdGVGb3JtKCldLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJtYWluXCIsIFtcIm1haW5cIiwgXCJpbml0aWFsLW1haW5cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbjtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBvbk5hbWVJbnB1dCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgY29uc3QgaW5wdXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgY29uc3Qgc3BhbiA9IGlucHV0LnBhcmVudEVsZW1lbnQ/Lm5leHRFbGVtZW50U2libGluZz8ubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgIGlmIChzcGFuKSB7XG4gICAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICB9XG4gICAgICBpZiAoaW5wdXQudmFsdWUudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gXCJJbnB1dCBpcyBibGFuay5cIjtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiSW5wdXQgbXVzdCBub3QgYmUgbGVmdCBibGFuayFcIjtcbiAgICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoZXJyb3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3Bhbi50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGlucHV0LnNldEN1c3RvbVZhbGlkaXR5KFwiXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlUGxheWVyRGl2ID0gKG51bTogbnVtYmVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwiaW5wdXRcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgYHBsYXllciR7bnVtfS1pbnB1dGAsXG4gICAgICAgIFtcbiAgICAgICAgICBbXCJ0eXBlXCIsIFwidGV4dFwiXSxcbiAgICAgICAgICBbXCJuYW1lXCIsIGBwbGF5ZXIke251bX1gXSxcbiAgICAgICAgICBbXCJwbGFjZWhvbGRlclwiLCBcIiBcIl0sXG4gICAgICAgICAgW1wicmVxdWlyZWRcIiwgXCJ0cnVlXCJdLFxuICAgICAgICBdLFxuICAgICAgICBbW1wiaW5wdXRcIiwgb25OYW1lSW5wdXRdXVxuICAgICAgKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgW1wicGxheWVyLWxhYmVsXCJdLFxuICAgICAgICBgRW50ZXIgUGxheWVyICR7bnVtfSBOYW1lOmAsXG4gICAgICAgIG51bGwsXG4gICAgICAgIFtbXCJmb3JcIiwgYHBsYXllciR7bnVtfS1pbnB1dGBdXVxuICAgICAgKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicGxheWVyLWVsZW1lbnRzXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllckRpdjtcbiIsImltcG9ydCB7IGZpeEVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbnRhaW5lclwiO1xuXG5jb25zdCBpbml0RGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcigpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluaXREaXNwbGF5O1xuIl0sIm5hbWVzIjpbImNvbXBvc2VFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJvbkNoZWNrYm94Q2hhbmdlIiwiZXZlbnQiLCJjaGVjayIsImN1cnJlbnRUYXJnZXQiLCJIVE1MSW5wdXRFbGVtZW50IiwiZGl2IiwicGFyZW50RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJzcGFuIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiaW5wdXQiLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tlZCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50IiwiZGlzYWJsZWQiLCJyZW1vdmUiLCJjcmVhdGVBSURpdiIsIm51bSIsImNyZWF0ZVNWRyIsImNyZWF0ZUJsb2IiLCJjcmVhdGVCdXR0b25TZWN0aW9uIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlTWFpbiIsImNyZWF0ZUZvb3RlciIsInNhaWxpbmdBdWRpbyIsImNyZWF0ZUNvbnRhaW5lciIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwiY3JlYXRlUGxheWVyU2VjdGlvbiIsInB1Ymxpc2giLCJvbkZvcm1TdWJtaXQiLCJmb3JtIiwiaW5wdXRzIiwiSFRNTEZvcm1FbGVtZW50IiwiaSIsImxlbmd0aCIsInR5cGUiLCJwdXNoIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJ2YWx1ZSIsInRyaW0iLCJlcnJvciIsInNldEN1c3RvbVZhbGlkaXR5IiwiY2hlY2tWYWxpZGl0eSIsImNyZWF0ZUZvcm0iLCJjcmVhdGVQbGF5ZXJEaXYiLCJjcmVhdGVQYXJ0IiwiY3JlYXRlVm9sdW1lRGl2Iiwib25OYW1lSW5wdXQiLCJmaXhFbGVtZW50IiwiaW5pdERpc3BsYXkiLCJib2R5IiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9