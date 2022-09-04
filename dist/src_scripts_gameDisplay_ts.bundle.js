"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameDisplay_ts"],{

/***/ "./src/scripts/components/boardDisplay.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/boardDisplay.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/scripts/components/ship.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var ndxToLetter = function ndxToLetter(ndx) {
  var num = ndx / 10;
  return String.fromCharCode(num + 65);
};

var createBoardDisplay = function createBoardDisplay(name, board) {
  var elements = [];
  elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], null, null));

  for (var i = 0; i < 10; i += 1) {
    elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], i.toString(), null, [["data-y", "".concat(i)]]));
  }

  board.forEach(function (cell, ndx) {
    if (ndx % 10 === 0) {
      elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], ndxToLetter(ndx), null, [["data-y", "".concat((ndx / 10).toString())]]));
    }

    if (cell.value === "empty") {
      elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell"], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]]));
    } else if (cell.position !== 0) {
      elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell"], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]]));
    } else if (cell.value !== "hit") {
      var shipName = cell.value.name;
      var shipLength = cell.value.length;
      var shipAxis = cell.value.axis;

      var func = function func() {
        return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis)), [(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["game-cell", "cell"], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]])]));
      };

      elements.push.apply(elements, _toConsumableArray(func()));
    }
  });
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(elements), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["gameboard", "".concat(name, "-gameboard")])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBoardDisplay);

/***/ }),

/***/ "./src/scripts/components/boardHeader.ts":
/*!***********************************************!*\
  !*** ./src/scripts/components/boardHeader.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createboardHeader = function createboardHeader(name) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, name), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-header"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createboardHeader);

/***/ }),

/***/ "./src/scripts/components/boardSection.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/boardSection.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _boardDisplay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardDisplay */ "./src/scripts/components/boardDisplay.ts");
/* harmony import */ var _boardHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardHeader */ "./src/scripts/components/boardHeader.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createMain = function createMain(name, board, player) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardHeader__WEBPACK_IMPORTED_MODULE_2__["default"])(name)), _toConsumableArray((0,_boardDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(player, board))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["boardSection"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/scripts/components/gameContainer.ts":
/*!*************************************************!*\
  !*** ./src/scripts/components/gameContainer.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _gameHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameHeader */ "./src/scripts/components/gameHeader.ts");
/* harmony import */ var _gameMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameMain */ "./src/scripts/components/gameMain.ts");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/scripts/components/footer.ts");
/* harmony import */ var _sailingAudio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sailingAudio */ "./src/scripts/components/sailingAudio.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }







var createContainer = function createContainer(player1, player2) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_gameHeader__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_gameMain__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player2)), _toConsumableArray((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])()), _toConsumableArray((0,_sailingAudio__WEBPACK_IMPORTED_MODULE_4__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["container", "game-container"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContainer);

/***/ }),

/***/ "./src/scripts/components/gameHeader.ts":
/*!**********************************************!*\
  !*** ./src/scripts/components/gameHeader.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _volumeDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./volumeDiv */ "./src/scripts/components/volumeDiv.ts");
/* harmony import */ var _pirateBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pirateBoard */ "./src/scripts/components/pirateBoard.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var createHeader = function createHeader() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", ["battleship-header"], "Battleship")].concat(_toConsumableArray((0,_pirateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])()), _toConsumableArray((0,_volumeDiv__WEBPACK_IMPORTED_MODULE_1__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", ["game-header"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);

/***/ }),

/***/ "./src/scripts/components/gameMain.ts":
/*!********************************************!*\
  !*** ./src/scripts/components/gameMain.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _boardSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boardSection */ "./src/scripts/components/boardSection.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createMain = function createMain(player1, player2) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_1__["default"])(player1.name, player1.boardObj.board, player1.type)), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_1__["default"])(player2.name, player2.boardObj.board, player2.type))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["game-main"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/scripts/components/ship.ts":
/*!****************************************!*\
  !*** ./src/scripts/components/ship.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createShip = function createShip(shipName, shipLength, axis) {
  var elements = [];

  for (var i = 0; i < shipLength; i += 1) {
    elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div"));
  }

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(elements), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["ship", "".concat(shipName), axis], null, null, [["draggable", "true"]])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

/***/ }),

/***/ "./src/scripts/gameDisplay.ts":
/*!************************************!*\
  !*** ./src/scripts/gameDisplay.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _components_gameContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/gameContainer */ "./src/scripts/components/gameContainer.ts");



var displayGame = function displayGame(player1, player2) {
  var body = document.querySelector("body");

  if (body) {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(body, [(0,_components_gameContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(player1, player2)]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayGame);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7O0VBQ0EsSUFBSUYsSUFBSixFQUFVO0lBQ1JGLDJEQUFVLENBQUNFLElBQUQsRUFBTyxDQUFDVixxRUFBZSxDQUFDQyxPQUFELEVBQVVDLE9BQVYsQ0FBaEIsQ0FBUCxDQUFWO0VBQ0Q7QUFDRixDQVJEOztBQVVBLGlFQUFlTyxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmREaXNwbGF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkSGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgQ2hpbGRGdW5jIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgbmR4VG9MZXR0ZXIgPSAobmR4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgbnVtID0gbmR4IC8gMTA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSArIDY1KTtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvYXJkRGlzcGxheSA9IChuYW1lOiBzdHJpbmcsIGJvYXJkOiBDZWxsW10pID0+IHtcbiAgY29uc3QgZWxlbWVudHM6IENoaWxkRnVuY1tdID0gW107XG4gIGVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIG51bGwsIG51bGwpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZWxlbWVudHMucHVzaChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBpLnRvU3RyaW5nKCksIG51bGwsIFtcbiAgICAgICAgW1wiZGF0YS15XCIsIGAke2l9YF0sXG4gICAgICBdKVxuICAgICk7XG4gIH1cbiAgYm9hcmQuZm9yRWFjaCgoY2VsbCwgbmR4KSA9PiB7XG4gICAgaWYgKG5keCAlIDEwID09PSAwKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJudW1iZXItY2VsbFwiXSwgbmR4VG9MZXR0ZXIobmR4KSwgbnVsbCwgW1xuICAgICAgICAgIFtcImRhdGEteVwiLCBgJHsobmR4IC8gMTApLnRvU3RyaW5nKCl9YF0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoY2VsbC52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIl0sIG51bGwsIG51bGwsIFtcbiAgICAgICAgICBbXCJkYXRhLXhcIiwgYCR7Y2VsbC5jb29yZHNbMF19YF0sXG4gICAgICAgICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGNlbGwucG9zaXRpb24gIT09IDApIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcImdhbWUtY2VsbFwiXSwgbnVsbCwgbnVsbCwgW1xuICAgICAgICAgIFtcImRhdGEteFwiLCBgJHtjZWxsLmNvb3Jkc1swXX1gXSxcbiAgICAgICAgICBbXCJkYXRhLXlcIiwgYCR7Y2VsbC5jb29yZHNbMV19YF0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY2VsbC52YWx1ZSAhPT0gXCJoaXRcIikge1xuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjZWxsLnZhbHVlLm5hbWU7XG4gICAgICBjb25zdCBzaGlwTGVuZ3RoID0gY2VsbC52YWx1ZS5sZW5ndGg7XG4gICAgICBjb25zdCBzaGlwQXhpcyA9IGNlbGwudmFsdWUuYXhpcztcbiAgICAgIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgIC4uLmNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIHNoaXBBeGlzKSxcbiAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdhbWUtY2VsbFwiLCBcImNlbGxcIl0sIG51bGwsIG51bGwsIFtcbiAgICAgICAgICAgIFtcImRhdGEteFwiLCBgJHtjZWxsLmNvb3Jkc1swXX1gXSxcbiAgICAgICAgICAgIFtcImRhdGEteVwiLCBgJHtjZWxsLmNvb3Jkc1sxXX1gXSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSk7XG4gICAgICBlbGVtZW50cy5wdXNoKC4uLmZ1bmMoKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgWy4uLmVsZW1lbnRzXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImdhbWVib2FyZFwiLCBgJHtuYW1lfS1nYW1lYm9hcmRgXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQm9hcmREaXNwbGF5O1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZWJvYXJkSGVhZGVyID0gKG5hbWU6IHN0cmluZykgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaDNcIiwgbnVsbCwgbmFtZSksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlYm9hcmRIZWFkZXI7XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi4vY2VsbFwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlQm9hcmREaXNwbGF5IGZyb20gXCIuL2JvYXJkRGlzcGxheVwiO1xuaW1wb3J0IGNyZWF0ZUJvYXJkSGVhZGVyIGZyb20gXCIuL2JvYXJkSGVhZGVyXCI7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAobmFtZTogc3RyaW5nLCBib2FyZDogQ2VsbFtdLCBwbGF5ZXI6IHN0cmluZykgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlQm9hcmRIZWFkZXIobmFtZSksIC4uLmNyZWF0ZUJvYXJkRGlzcGxheShwbGF5ZXIsIGJvYXJkKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZFNlY3Rpb25cIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWFpbjtcbiIsImltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlSGVhZGVyIGZyb20gXCIuL2dhbWVIZWFkZXJcIjtcbmltcG9ydCBjcmVhdGVNYWluIGZyb20gXCIuL2dhbWVNYWluXCI7XG5pbXBvcnQgY3JlYXRlRm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuaW1wb3J0IHNhaWxpbmdBdWRpbyBmcm9tIFwiLi9zYWlsaW5nQXVkaW9cIjtcblxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jcmVhdGVIZWFkZXIoKSxcbiAgICAgIC4uLmNyZWF0ZU1haW4ocGxheWVyMSwgcGxheWVyMiksXG4gICAgICAuLi5jcmVhdGVGb290ZXIoKSxcbiAgICAgIC4uLnNhaWxpbmdBdWRpbygpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjb250YWluZXJcIiwgXCJnYW1lLWNvbnRhaW5lclwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWluZXI7XG4iLCJpbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVWb2x1bWVEaXYgZnJvbSBcIi4vdm9sdW1lRGl2XCI7XG5pbXBvcnQgY3JlYXRlUGlyYXRlQm9hcmQgZnJvbSBcIi4vcGlyYXRlQm9hcmRcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwiaDFcIiwgW1wiYmF0dGxlc2hpcC1oZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICAgIC4uLmNyZWF0ZVBpcmF0ZUJvYXJkKCksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAocGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihwbGF5ZXIxLm5hbWUsIHBsYXllcjEuYm9hcmRPYmouYm9hcmQsIHBsYXllcjEudHlwZSksXG4gICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24ocGxheWVyMi5uYW1lLCBwbGF5ZXIyLmJvYXJkT2JqLmJvYXJkLCBwbGF5ZXIyLnR5cGUpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wiZ2FtZS1tYWluXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IENoaWxkRnVuYyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAoXG4gIHNoaXBOYW1lOiBzdHJpbmcsXG4gIHNoaXBMZW5ndGg6IG51bWJlcixcbiAgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCJcbikgPT4ge1xuICBjb25zdCBlbGVtZW50czogQ2hpbGRGdW5jW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICB9XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFsuLi5lbGVtZW50c10sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJzaGlwXCIsIGAke3NoaXBOYW1lfWAsIGF4aXNdLCBudWxsLCBudWxsLCBbXG4gICAgICBbXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCJdLFxuICAgIF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lQ29udGFpbmVyXCI7XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gKFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGlmIChib2R5KSB7XG4gICAgZml4RWxlbWVudChib2R5LCBbY3JlYXRlQ29udGFpbmVyKHBsYXllcjEsIHBsYXllcjIpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHYW1lO1xuIl0sIm5hbWVzIjpbImNvbXBvc2VFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVTaGlwIiwibmR4VG9MZXR0ZXIiLCJuZHgiLCJudW0iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjcmVhdGVCb2FyZERpc3BsYXkiLCJuYW1lIiwiYm9hcmQiLCJlbGVtZW50cyIsInB1c2giLCJpIiwidG9TdHJpbmciLCJmb3JFYWNoIiwiY2VsbCIsInZhbHVlIiwiY29vcmRzIiwicG9zaXRpb24iLCJzaGlwTmFtZSIsInNoaXBMZW5ndGgiLCJsZW5ndGgiLCJzaGlwQXhpcyIsImF4aXMiLCJmdW5jIiwiY3JlYXRlYm9hcmRIZWFkZXIiLCJjcmVhdGVCb2FyZEhlYWRlciIsImNyZWF0ZU1haW4iLCJwbGF5ZXIiLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJzYWlsaW5nQXVkaW8iLCJjcmVhdGVDb250YWluZXIiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNyZWF0ZVZvbHVtZURpdiIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwiY3JlYXRlQm9hcmRTZWN0aW9uIiwiYm9hcmRPYmoiLCJ0eXBlIiwiZml4RWxlbWVudCIsImRpc3BsYXlHYW1lIiwiYm9keSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=