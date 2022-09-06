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
/* harmony import */ var _gamecell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gamecell */ "./src/scripts/components/gamecell.ts");
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

var createShiplessCell = function createShiplessCell(cell) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell"], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]]);
};

var createBoardDisplay = function createBoardDisplay(player, type, playerPos) {
  var elements = [];
  elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], null, null));

  for (var i = 0; i < 10; i += 1) {
    elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], i.toString(), null, [["data-y", "".concat(i)]]));
  }

  player.boardObj.board.forEach(function (cell, ndx) {
    if (ndx % 10 === 0) {
      elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "number-cell"], ndxToLetter(ndx), null, [["data-x", "".concat((ndx / 10).toString())]]));
    }

    if (cell.value === "empty") {
      if (type === "ship") {
        elements.push((0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, playerPos));
      } else {
        elements.push(createShiplessCell(cell));
      }
    } else if (cell.position !== 0) {
      if (type === "ship") {
        elements.push((0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, playerPos));
      } else {
        elements.push(createShiplessCell(cell));
      }
    } else if (cell.value !== "hit") {
      if (type === "ship") {
        var shipName = cell.value.name;
        var shipLength = cell.value.length;
        var shipAxis = cell.value.axis;

        var func = function func() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, playerPos, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, playerPos)]));
        };

        elements.push.apply(elements, _toConsumableArray(func()));
      } else {
        elements.push(createShiplessCell(cell));
      }
    }
  });
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([elements, (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["gameboard", "".concat(playerPos, "-gameboard")])]);
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
/* harmony import */ var _boardDisplay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardDisplay */ "./src/scripts/components/boardDisplay.ts");
/* harmony import */ var _boardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardHeader */ "./src/scripts/components/boardHeader.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var createMain = function createMain(player, type, playerPos) {
  var reDisplayBoard = function reDisplayBoard() {
    var component = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardHeader__WEBPACK_IMPORTED_MODULE_3__["default"])(player.name)), _toConsumableArray((0,_boardDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])(player, type, playerPos))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["boardSection", "".concat(playerPos, "-boardSection")])]);
    var section = document.querySelector(".".concat(playerPos, "-boardSection"));

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("".concat(playerPos, "-redisplay"), reDisplayBoard);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardHeader__WEBPACK_IMPORTED_MODULE_3__["default"])(player.name)), _toConsumableArray((0,_boardDisplay__WEBPACK_IMPORTED_MODULE_2__["default"])(player, type, playerPos))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["boardSection", "".concat(playerPos, "-boardSection")])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", ["battleship-header"], "Battleship")].concat(_toConsumableArray((0,_pirateBoard__WEBPACK_IMPORTED_MODULE_2__["default"])("Place yer ships Cap'n!")), _toConsumableArray((0,_volumeDiv__WEBPACK_IMPORTED_MODULE_1__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", ["game-header"])]);
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
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_1__["default"])(player1, "ship", "player1")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_1__["default"])(player2, "shipless", "player2"))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["game-main"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/scripts/components/gamecell.ts":
/*!********************************************!*\
  !*** ./src/scripts/components/gamecell.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ship */ "./src/scripts/ship.ts");




var isAxis = function isAxis(axis) {
  return axis === "vertical" || axis === "horizontal";
};

var isShipName = function isShipName(name) {
  var names = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  return names.includes(name || "");
};

var createCell = function createCell(cell, player, playerPos) {
  var dragEnter = function dragEnter(event) {
    event.preventDefault();
    var targetCell = event.currentTarget;

    if (targetCell instanceof HTMLElement) {
      targetCell.classList.add("drag-over");
    }
  };

  var dragOver = function dragOver(event) {
    event.preventDefault();
    var targetCell = event.currentTarget;

    if (targetCell instanceof HTMLElement) {
      targetCell.classList.add("drag-over");
    }
  };

  var dragLeave = function dragLeave(event) {
    var targetCell = event.currentTarget;

    if (targetCell instanceof HTMLElement) {
      targetCell.classList.remove("drag-over");
    }
  };

  var drop = function drop(event) {
    var targetCell = event.currentTarget;

    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      var _event$dataTransfer;

      var id = ((_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.getData("text/plain")) || "";
      event.preventDefault();
      var ship = document.querySelector("#".concat(id));
      var x = targetCell.getAttribute("data-x");
      var y = targetCell.getAttribute("data-y");
      var name = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-name");
      var axis = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-axis");

      if (isAxis(axis) && isShipName(name) && id && ship && x && y) {
        var coords = [parseInt(x, 10), parseInt(y, 10)];

        if (player.boardObj.getAvailableCoords(axis, name, _ship__WEBPACK_IMPORTED_MODULE_2__["default"]).some(function (value) {
          return value[0] === coords[0] && value[1] === coords[1];
        })) {
          player.boardObj.removeShip(name);
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_2__["default"], coords, axis, name);
          (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("".concat(playerPos, "-redisplay"));
        } else {
          targetCell.classList.remove("drag-over");
        }
      }
    }
  };

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell"], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]], [["dragenter", dragEnter], ["dragover", dragOver], ["dragleave", dragLeave], ["drop", drop]]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCell);

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
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uniqid */ "./node_modules/uniqid/index.js");
/* harmony import */ var uniqid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uniqid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ship */ "./src/scripts/ship.ts");





var isShipName = function isShipName(name) {
  var names = ["carrier", "battleship", "cruiser", "submarine", "destroyer"];
  return names.includes(name || "");
};

var createShip = function createShip(shipName, shipLength, axis, player, playerPos, coords) {
  var changeAxis = function changeAxis(event) {
    var ship = event.currentTarget;

    if (ship instanceof HTMLElement && isShipName(shipName)) {
      if (ship.classList.contains("vertical")) {
        player.boardObj.removeShip(shipName);
        var coordinates = player.boardObj.getAvailableCoords("horizontal", shipName, _ship__WEBPACK_IMPORTED_MODULE_3__["default"]);

        if (coordinates.some(function (value) {
          return value[0] === coords[0] && value[1] === coords[1];
        })) {
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_3__["default"], coords, "horizontal", shipName);
        } else {
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_3__["default"], coords, "vertical", shipName);
          ship.classList.add("ship-error");
          setTimeout(function () {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("".concat(playerPos, "-redisplay"));
          }, 1000);
          return;
        }
      } else {
        player.boardObj.removeShip(shipName);

        var _coordinates = player.boardObj.getAvailableCoords("vertical", shipName, _ship__WEBPACK_IMPORTED_MODULE_3__["default"]);

        if (_coordinates.some(function (value) {
          return value[0] === coords[0] && value[1] === coords[1];
        })) {
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_3__["default"], coords, "vertical", shipName);
        } else {
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_3__["default"], coords, "horizontal", shipName);
          ship.classList.add("ship-error");
          setTimeout(function () {
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("".concat(playerPos, "-redisplay"));
          }, 1000);
          return;
        }
      }
    }

    (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("".concat(playerPos, "-redisplay"));
  };

  var dragStart = function dragStart(event) {
    var ship = event.currentTarget;

    if (event instanceof DragEvent && ship instanceof HTMLElement) {
      var _event$dataTransfer;

      (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.setData("text/plain", ship.id);
      setTimeout(function () {
        ship.classList.add("invisible");
      }, 0);
    }
  };

  var dragEnd = function dragEnd(event) {
    var ship = event.currentTarget;

    if (ship instanceof HTMLElement) {
      ship.classList.remove("invisible");
    }
  };

  var elements = [];

  for (var i = 0; i < shipLength; i += 1) {
    elements.push((0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div"));
  }

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.composeElements)([elements, (0,_domManipulator__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", ["ship", shipName, axis], null, uniqid__WEBPACK_IMPORTED_MODULE_0___default()(), [["draggable", "true"], ["data-name", shipName], ["data-axis", axis], ["data-x", coords[0].toString()], ["data-y", coords[1].toString()]], [["dragstart", dragStart], ["dragend", dragEnd], ["click", changeAxis]])]);
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

/***/ }),

/***/ "./src/scripts/ship.ts":
/*!*****************************!*\
  !*** ./src/scripts/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createShip = function createShip(name, axis) {
  var shipArray = [];
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };

  for (var i = 1; i <= shipLengths[name]; i += 1) {
    shipArray.push(name);
  }

  var get = function get(num) {
    return num !== undefined && num >= 0 && num < shipLengths[name] ? shipArray[num] : shipArray;
  };

  var hit = function hit(num) {
    if (num >= 0 && num < shipLengths[name]) {
      shipArray[num] = "hit";
    }
  };

  var isSunk = function isSunk() {
    return shipArray.every(function (value) {
      return value === "hit";
    });
  };

  return {
    name: name,
    axis: axis,
    length: shipLengths[name],
    get: get,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQU0sRUFBRWlFLFdBQVcsQ0FBQ25FLElBQUQsQ0FBakM7SUFBeUN5RSxHQUFHLEVBQUhBLEdBQXpDO0lBQThDRSxHQUFHLEVBQUhBLEdBQTlDO0lBQW1EQyxNQUFNLEVBQU5BO0VBQW5ELENBQVA7QUFDRCxDQTVCRDs7QUErQkEsaUVBQWVwRyxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmREaXNwbGF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkSGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZWNlbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3NoaXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vZ2FtZWNlbGxcIjtcblxuY29uc3QgbmR4VG9MZXR0ZXIgPSAobmR4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgbnVtID0gbmR4IC8gMTA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSArIDY1KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBsZXNzQ2VsbCA9IChjZWxsOiBDZWxsKSA9PlxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIl0sIG51bGwsIG51bGwsIFtcbiAgICBbXCJkYXRhLXhcIiwgYCR7Y2VsbC5jb29yZHNbMF19YF0sXG4gICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICBdKTtcblxuY29uc3QgY3JlYXRlQm9hcmREaXNwbGF5ID0gKFxuICBwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLFxuICB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIixcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pID0+IHtcbiAgY29uc3QgZWxlbWVudHM6IENoaWxkRnVuY1tdID0gW107XG5cbiAgZWxlbWVudHMucHVzaChjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJudW1iZXItY2VsbFwiXSwgbnVsbCwgbnVsbCkpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJudW1iZXItY2VsbFwiXSwgaS50b1N0cmluZygpLCBudWxsLCBbXG4gICAgICAgIFtcImRhdGEteVwiLCBgJHtpfWBdLFxuICAgICAgXSlcbiAgICApO1xuICB9XG5cbiAgcGxheWVyLmJvYXJkT2JqLmJvYXJkLmZvckVhY2goKGNlbGwsIG5keCkgPT4ge1xuICAgIGlmIChuZHggJSAxMCA9PT0gMCkge1xuICAgICAgZWxlbWVudHMucHVzaChcbiAgICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIG5keFRvTGV0dGVyKG5keCksIG51bGwsIFtcbiAgICAgICAgICBbXCJkYXRhLXhcIiwgYCR7KG5keCAvIDEwKS50b1N0cmluZygpfWBdLFxuICAgICAgICBdKVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKGNlbGwudmFsdWUgPT09IFwiZW1wdHlcIikge1xuICAgICAgaWYgKHR5cGUgPT09IFwic2hpcFwiKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY3JlYXRlQ2VsbChjZWxsLCBwbGF5ZXIsIHBsYXllclBvcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2VsbC5wb3NpdGlvbiAhPT0gMCkge1xuICAgICAgaWYgKHR5cGUgPT09IFwic2hpcFwiKSB7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY3JlYXRlQ2VsbChjZWxsLCBwbGF5ZXIsIHBsYXllclBvcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCkpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2VsbC52YWx1ZSAhPT0gXCJoaXRcIikge1xuICAgICAgaWYgKHR5cGUgPT09IFwic2hpcFwiKSB7XG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbC52YWx1ZS5uYW1lO1xuICAgICAgICBjb25zdCBzaGlwTGVuZ3RoID0gY2VsbC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHNoaXBBeGlzID0gY2VsbC52YWx1ZS5heGlzO1xuICAgICAgICBjb25zdCBmdW5jID0gKCkgPT5cbiAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgICAgLi4uY3JlYXRlU2hpcChcbiAgICAgICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgICAgIHNoaXBMZW5ndGgsXG4gICAgICAgICAgICAgIHNoaXBBeGlzLFxuICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgIHBsYXllclBvcyxcbiAgICAgICAgICAgICAgY2VsbC5jb29yZHNcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciwgcGxheWVyUG9zKSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5mdW5jKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWxlbWVudHMucHVzaChjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCkpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGVsZW1lbnRzLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2FtZWJvYXJkXCIsIGAke3BsYXllclBvc30tZ2FtZWJvYXJkYF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvYXJkRGlzcGxheTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVib2FyZEhlYWRlciA9IChuYW1lOiBzdHJpbmcpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIG5hbWUpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWJvYXJkSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVCb2FyZERpc3BsYXkgZnJvbSBcIi4vYm9hcmREaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlQm9hcmRIZWFkZXIgZnJvbSBcIi4vYm9hcmRIZWFkZXJcIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChcbiAgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgdHlwZTogXCJzaGlwXCIgfCBcInNoaXBsZXNzXCIsXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKSA9PiB7XG4gIGNvbnN0IHJlRGlzcGxheUJvYXJkID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICBbXG4gICAgICAgIC4uLmNyZWF0ZUJvYXJkSGVhZGVyKHBsYXllci5uYW1lKSxcbiAgICAgICAgLi4uY3JlYXRlQm9hcmREaXNwbGF5KHBsYXllciwgdHlwZSwgcGxheWVyUG9zKSxcbiAgICAgIF0sXG4gICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkU2VjdGlvblwiLCBgJHtwbGF5ZXJQb3N9LWJvYXJkU2VjdGlvbmBdKSxcbiAgICBdKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJQb3N9LWJvYXJkU2VjdGlvbmApO1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGZpeEVsZW1lbnQoc2VjdGlvbiwgW2NvbXBvbmVudF0pO1xuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoYCR7cGxheWVyUG9zfS1yZWRpc3BsYXlgLCByZURpc3BsYXlCb2FyZCk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgLi4uY3JlYXRlQm9hcmRIZWFkZXIocGxheWVyLm5hbWUpLFxuICAgICAgLi4uY3JlYXRlQm9hcmREaXNwbGF5KHBsYXllciwgdHlwZSwgcGxheWVyUG9zKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmRTZWN0aW9uXCIsIGAke3BsYXllclBvc30tYm9hcmRTZWN0aW9uYF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9nYW1lSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9nYW1lTWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgLi4uY3JlYXRlSGVhZGVyKCksXG4gICAgICAuLi5jcmVhdGVNYWluKHBsYXllcjEsIHBsYXllcjIpLFxuICAgICAgLi4uY3JlYXRlRm9vdGVyKCksXG4gICAgICAuLi5zYWlsaW5nQXVkaW8oKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiZ2FtZS1jb250YWluZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXAtaGVhZGVyXCJdLCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZChcIlBsYWNlIHllciBzaGlwcyBDYXAnbiFcIiksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5cbmNvbnN0IGNyZWF0ZU1haW4gPSAocGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihwbGF5ZXIxLCBcInNoaXBcIiwgXCJwbGF5ZXIxXCIpLFxuICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKHBsYXllcjIsIFwic2hpcGxlc3NcIiwgXCJwbGF5ZXIyXCIpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wiZ2FtZS1tYWluXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEF4aXMgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcyB9IGZyb20gXCIuLi9zaGlwXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4uL3NoaXBcIjtcblxuY29uc3QgaXNBeGlzID0gKGF4aXM6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBheGlzIGlzIEF4aXMgPT5cbiAgYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiO1xuXG5jb25zdCBpc1NoaXBOYW1lID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBuYW1lIGlzIFNoaXBOYW1lcyA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICByZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSB8fCBcIlwiKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoXG4gIGNlbGw6IENlbGwsXG4gIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKSA9PiB7XG4gIGNvbnN0IGRyYWdFbnRlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0YXJnZXRDZWxsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctb3ZlclwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdMZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgY29uc3QgeCA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgY29uc3QgeSA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgY29uc3QgbmFtZSA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgIGNvbnN0IGF4aXMgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF4aXNcIik7XG4gICAgICBpZiAoaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkgJiYgaWQgJiYgc2hpcCAmJiB4ICYmIHkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5yZW1vdmVTaGlwKG5hbWUpO1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoY3JlYXRlU2hpcCwgY29vcmRzLCBheGlzLCBuYW1lKTtcbiAgICAgICAgICBwdWJsaXNoKGAke3BsYXllclBvc30tcmVkaXNwbGF5YCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW1wiY2VsbFwiLCBcImdhbWUtY2VsbFwiXSxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgW1wiZGF0YS14XCIsIGAke2NlbGwuY29vcmRzWzBdfWBdLFxuICAgICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICAgIF0sXG4gICAgW1xuICAgICAgW1wiZHJhZ2VudGVyXCIsIGRyYWdFbnRlcl0sXG4gICAgICBbXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcl0sXG4gICAgICBbXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlXSxcbiAgICAgIFtcImRyb3BcIiwgZHJvcF0sXG4gICAgXVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi4vc2hpcFwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IHNoaXBGdW5jIGZyb20gXCIuLi9zaGlwXCI7XG5cbmNvbnN0IGlzU2hpcE5hbWUgPSAobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IG5hbWUgaXMgU2hpcE5hbWVzID0+IHtcbiAgY29uc3QgbmFtZXMgPSBbXCJjYXJyaWVyXCIsIFwiYmF0dGxlc2hpcFwiLCBcImNydWlzZXJcIiwgXCJzdWJtYXJpbmVcIiwgXCJkZXN0cm95ZXJcIl07XG4gIHJldHVybiBuYW1lcy5pbmNsdWRlcyhuYW1lIHx8IFwiXCIpO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcCA9IChcbiAgc2hpcE5hbWU6IHN0cmluZyxcbiAgc2hpcExlbmd0aDogbnVtYmVyLFxuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIixcbiAgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiLFxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl1cbikgPT4ge1xuICBjb25zdCBjaGFuZ2VBeGlzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTaGlwTmFtZShzaGlwTmFtZSkpIHtcbiAgICAgIGlmIChzaGlwLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpKSB7XG4gICAgICAgIHBsYXllci5ib2FyZE9iai5yZW1vdmVTaGlwKHNoaXBOYW1lKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmRPYmouZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICAgIFwiaG9yaXpvbnRhbFwiLFxuICAgICAgICAgIHNoaXBOYW1lLFxuICAgICAgICAgIHNoaXBGdW5jXG4gICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjb29yZGluYXRlcy5zb21lKFxuICAgICAgICAgICAgKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgICApXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJob3Jpem9udGFsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwidmVydGljYWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInNoaXAtZXJyb3JcIik7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBwdWJsaXNoKGAke3BsYXllclBvc30tcmVkaXNwbGF5YCk7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkT2JqLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgICBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcInZlcnRpY2FsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwiaG9yaXpvbnRhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goYCR7cGxheWVyUG9zfS1yZWRpc3BsYXlgKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGlzaChgJHtwbGF5ZXJQb3N9LXJlZGlzcGxheWApO1xuICB9O1xuXG4gIGNvbnN0IGRyYWdTdGFydCA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgc2hpcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHNoaXAuaWQpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZWxlbWVudHM6IENoaWxkRnVuY1tdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSArPSAxKSB7XG4gICAgZWxlbWVudHMucHVzaChjcmVhdGVFbGVtZW50KFwiZGl2XCIpKTtcbiAgfVxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBlbGVtZW50cyxcbiAgICBjcmVhdGVFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIFtcInNoaXBcIiwgc2hpcE5hbWUsIGF4aXNdLFxuICAgICAgbnVsbCxcbiAgICAgIHVuaXFpZCgpLFxuICAgICAgW1xuICAgICAgICBbXCJkcmFnZ2FibGVcIiwgXCJ0cnVlXCJdLFxuICAgICAgICBbXCJkYXRhLW5hbWVcIiwgc2hpcE5hbWVdLFxuICAgICAgICBbXCJkYXRhLWF4aXNcIiwgYXhpc10sXG4gICAgICAgIFtcImRhdGEteFwiLCBjb29yZHNbMF0udG9TdHJpbmcoKV0sXG4gICAgICAgIFtcImRhdGEteVwiLCBjb29yZHNbMV0udG9TdHJpbmcoKV0sXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBbXCJkcmFnc3RhcnRcIiwgZHJhZ1N0YXJ0XSxcbiAgICAgICAgW1wiZHJhZ2VuZFwiLCBkcmFnRW5kXSxcbiAgICAgICAgW1wiY2xpY2tcIiwgY2hhbmdlQXhpc10sXG4gICAgICBdXG4gICAgKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IHsgZml4RWxlbWVudCB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlQ29udGFpbmVyIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZUNvbnRhaW5lclwiO1xuXG5jb25zdCBkaXNwbGF5R2FtZSA9IChcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcihwbGF5ZXIxLCBwbGF5ZXIyKV0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5R2FtZTtcbiIsInR5cGUgU2hpcE5hbWVzID1cbiAgfCBcImNhcnJpZXJcIlxuICB8IFwiYmF0dGxlc2hpcFwiXG4gIHwgXCJjcnVpc2VyXCJcbiAgfCBcInN1Ym1hcmluZVwiXG4gIHwgXCJkZXN0cm95ZXJcIjtcblxudHlwZSBTaGlwVmFsdWVzID0gU2hpcE5hbWVzIHwgXCJoaXRcIjtcblxuaW50ZXJmYWNlIFNoaXAge1xuICBuYW1lOiBTaGlwTmFtZXM7XG4gIGF4aXM6IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgZ2V0KG51bT86IG51bWJlcik6IFNoaXBWYWx1ZXNbXSB8IFNoaXBWYWx1ZXM7XG4gIGhpdChudW06IG51bWJlcik6IHZvaWQ7XG4gIGlzU3VuaygpOiBib29sZWFuO1xufVxuXG5jb25zdCBjcmVhdGVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcywgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIpOiBTaGlwID0+IHtcbiAgY29uc3Qgc2hpcEFycmF5OiBTaGlwVmFsdWVzW10gPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbiAgfTtcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzaGlwTGVuZ3Roc1tuYW1lXTsgaSArPSAxKSB7XG4gICAgc2hpcEFycmF5LnB1c2gobmFtZSk7XG4gIH1cblxuICBjb25zdCBnZXQgPSAobnVtPzogbnVtYmVyKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdXG4gICAgICA/IHNoaXBBcnJheVtudW1dXG4gICAgICA6IHNoaXBBcnJheTtcblxuICBjb25zdCBoaXQgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgc2hpcExlbmd0aHNbbmFtZV0pIHtcbiAgICAgIHNoaXBBcnJheVtudW1dID0gXCJoaXRcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUgPT09IFwiaGl0XCIpO1xuXG4gIHJldHVybiB7IG5hbWUsIGF4aXMsIGxlbmd0aDogc2hpcExlbmd0aHNbbmFtZV0sIGdldCwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgU2hpcFZhbHVlcywgU2hpcE5hbWVzLCBTaGlwIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIl0sIm5hbWVzIjpbImNvbXBvc2VFbGVtZW50cyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVTaGlwIiwiY3JlYXRlQ2VsbCIsIm5keFRvTGV0dGVyIiwibmR4IiwibnVtIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiY3JlYXRlU2hpcGxlc3NDZWxsIiwiY2VsbCIsImNvb3JkcyIsImNyZWF0ZUJvYXJkRGlzcGxheSIsInBsYXllciIsInR5cGUiLCJwbGF5ZXJQb3MiLCJlbGVtZW50cyIsInB1c2giLCJpIiwidG9TdHJpbmciLCJib2FyZE9iaiIsImJvYXJkIiwiZm9yRWFjaCIsInZhbHVlIiwicG9zaXRpb24iLCJzaGlwTmFtZSIsIm5hbWUiLCJzaGlwTGVuZ3RoIiwibGVuZ3RoIiwic2hpcEF4aXMiLCJheGlzIiwiZnVuYyIsImNyZWF0ZWJvYXJkSGVhZGVyIiwiZml4RWxlbWVudCIsInN1YnNjcmliZSIsImNyZWF0ZUJvYXJkSGVhZGVyIiwiY3JlYXRlTWFpbiIsInJlRGlzcGxheUJvYXJkIiwiY29tcG9uZW50Iiwic2VjdGlvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIkhUTUxFbGVtZW50IiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlRm9vdGVyIiwic2FpbGluZ0F1ZGlvIiwiY3JlYXRlQ29udGFpbmVyIiwicGxheWVyMSIsInBsYXllcjIiLCJjcmVhdGVWb2x1bWVEaXYiLCJjcmVhdGVQaXJhdGVCb2FyZCIsImNyZWF0ZUJvYXJkU2VjdGlvbiIsInB1Ymxpc2giLCJpc0F4aXMiLCJpc1NoaXBOYW1lIiwibmFtZXMiLCJpbmNsdWRlcyIsImRyYWdFbnRlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXRDZWxsIiwiY3VycmVudFRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsImRyYWdPdmVyIiwiZHJhZ0xlYXZlIiwicmVtb3ZlIiwiZHJvcCIsIkRyYWdFdmVudCIsImlkIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsInNoaXAiLCJ4IiwiZ2V0QXR0cmlidXRlIiwieSIsInBhcnNlSW50IiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwic29tZSIsInJlbW92ZVNoaXAiLCJwbGFjZVNoaXAiLCJ1bmlxaWQiLCJzaGlwRnVuYyIsImNoYW5nZUF4aXMiLCJjb250YWlucyIsImNvb3JkaW5hdGVzIiwic2V0VGltZW91dCIsImRyYWdTdGFydCIsInNldERhdGEiLCJkcmFnRW5kIiwiZGlzcGxheUdhbWUiLCJib2R5Iiwic2hpcEFycmF5Iiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJnZXQiLCJ1bmRlZmluZWQiLCJoaXQiLCJpc1N1bmsiLCJldmVyeSJdLCJzb3VyY2VSb290IjoiIn0=