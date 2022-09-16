"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameDisplay_ts"],{

/***/ "./src/scripts/aiPlayer.ts":
/*!*********************************!*\
  !*** ./src/scripts/aiPlayer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");


var createAI = function createAI(boardFunc, playerNum) {
  var coordsArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }

  var _createPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardFunc, "AI", playerNum),
      name = _createPlayer.name,
      boardObj = _createPlayer.boardObj,
      attack = _createPlayer.attackEnemy;

  var initialPlace = function initialPlace(shipFunc) {
    var ships = ["cruiser", "battleship", "carrier", "submarine", "destroyer"];
    ships.forEach(function (shipName) {
      var axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      var availableCoords = boardObj.getAIAvailableCoords(axis, shipName, shipFunc);
      var randomCoord = availableCoords[Math.floor(Math.random() * availableCoords.length)];
      boardObj.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  var attackEnemy = function attackEnemy(enemy) {
    var random = Math.floor(Math.random() * coordsArr.length);
    var coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
  };

  return {
    name: name,
    playerNum: playerNum,
    type: "AI",
    boardObj: boardObj,
    attackEnemy: attackEnemy,
    initialPlace: initialPlace
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAI);

/***/ }),

/***/ "./src/scripts/components/beginGameButton.ts":
/*!***************************************************!*\
  !*** ./src/scripts/components/beginGameButton.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _gameLoop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameLoop */ "./src/scripts/gameLoop.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");




var createBeginGameButton = function createBeginGameButton(playerPos, player1, player2) {
  var cellEvent = function cellEvent(e) {
    var main = document.querySelector("main");
    var obj = e.target;

    if (obj instanceof HTMLElement && main) {
      var x = obj.getAttribute("data-x");
      var y = obj.getAttribute("data-y");

      if (x && y) {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.receiveAttackCoords1AI1Player)([parseInt(x, 10), parseInt(y, 10)], player1, player2, playerPos);
        obj.removeEventListener("click", cellEvent);
        main.classList.add("unclickable");
      }
    }
  };

  var attachEvents = function attachEvents() {
    var ships = document.querySelectorAll(".ship");
    ships.forEach(function (ship) {
      ship.classList.add("unclickable");
    });
    var playerBoard = document.querySelector(".".concat(playerPos, "-gameboard"));

    if (playerBoard) {
      var cells = playerBoard.querySelectorAll(".game-cell");
      cells.forEach(function (cell) {
        cell.addEventListener("click", cellEvent);
      });
    }
  };

  var onBeginGame = function onBeginGame(event) {
    var button = event.currentTarget;

    if (button instanceof HTMLElement) {
      attachEvents();
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.subscribe)("redisplayAfterBegin", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("redisplay");
        attachEvents();
      });
      button.remove();
    }
  };

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["button", "begin-game-button"], "Begin!", null, null, [["click", onBeginGame]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["button-section"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBeginGameButton);

/***/ }),

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
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "empty";
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell", type], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]]);
};

var createBoardDisplay = function createBoardDisplay(player, type) {
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
      var cellFunc = type === "ship" ? (0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player) : createShiplessCell(cell);
      elements.push(cellFunc);
    } else if (cell.value === "hit") {
      var _cellFunc = type === "ship" ? (0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, "hit") : createShiplessCell(cell, "hit");

      elements.push(_cellFunc);
    } else if (cell.position !== 0) {
      if (cell.value.get(cell.position) === "hit") {
        var _cellFunc2 = type === "ship" ? (0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, "hit-ship") : createShiplessCell(cell, "hit-ship");

        elements.push(_cellFunc2);
      } else {
        var _cellFunc3 = type === "ship" ? (0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player) : createShiplessCell(cell);

        elements.push(_cellFunc3);
      }
    } else {
      var shipName = cell.value.name;
      var shipLength = cell.value.length;
      var shipAxis = cell.value.axis;

      if (cell.value.get(cell.position) === "hit") {
        var func = function func() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, "hit-ship")]));
        };

        var _cellFunc4 = type === "ship" ? func() : [createShiplessCell(cell, "hit-ship")];

        elements.push.apply(elements, _toConsumableArray(_cellFunc4));
      } else {
        var _func = function _func() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player)]));
        };

        var _cellFunc5 = type === "ship" ? _func() : [createShiplessCell(cell)];

        elements.push.apply(elements, _toConsumableArray(_cellFunc5));
      }
    }
  });
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([elements, (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["gameboard", "".concat(player.playerNum, "-gameboard")])]);
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





var createMain = function createMain(player, type) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardHeader__WEBPACK_IMPORTED_MODULE_2__["default"])(player.name)), _toConsumableArray((0,_boardDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(player, type))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-section", "".concat(player.playerNum, "-boardSection")])]);
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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");
/* harmony import */ var _boardSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boardSection */ "./src/scripts/components/boardSection.ts");
/* harmony import */ var _beginGameButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./beginGameButton */ "./src/scripts/components/beginGameButton.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }






var createMain = function createMain(player1, player2) {
  var reDisplayBoard = function reDisplayBoard() {
    var component = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player1.type === "AI" ? "shipless" : "ship")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, player2.type === "AI" ? "shipless" : "ship")))]);
    var section = document.querySelector(".board-container");

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("redisplay", reDisplayBoard);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player1.type === "AI" ? "shipless" : "ship")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, player2.type === "AI" ? "shipless" : "ship"))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-container"])])), _toConsumableArray((0,_beginGameButton__WEBPACK_IMPORTED_MODULE_3__["default"])(player1.type === "AI" ? "player1" : "player2", player1, player2))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["game-main"])]);
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

var createCell = function createCell(cell, player) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "empty";

  var dragEnter = function dragEnter(event) {
    event.preventDefault();
    var targetCell = event.currentTarget;

    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      var _event$dataTransfer;

      var id = ((_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.getData("text/plain")) || "";
      var ship = document.querySelector("#".concat(id));
      var x = targetCell.getAttribute("data-x");
      var y = targetCell.getAttribute("data-y");
      var name = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-name");
      var axis = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-axis");

      if (x && y && isAxis(axis) && isShipName(name)) {
        var coords = [parseInt(x, 10), parseInt(y, 10)];

        if (player.boardObj.getAvailableCoords(axis, name, _ship__WEBPACK_IMPORTED_MODULE_2__["default"]).some(function (value) {
          return value[0] === coords[0] && value[1] === coords[1];
        })) {
          targetCell.classList.add("drag-over-available");
        } else {
          targetCell.classList.add("drag-over");
        }
      }
    }
  };

  var dragOver = function dragOver(event) {
    event.preventDefault();
    var targetCell = event.currentTarget;

    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      var _event$dataTransfer2;

      var id = ((_event$dataTransfer2 = event.dataTransfer) === null || _event$dataTransfer2 === void 0 ? void 0 : _event$dataTransfer2.getData("text/plain")) || "";
      var ship = document.querySelector("#".concat(id));
      var x = targetCell.getAttribute("data-x");
      var y = targetCell.getAttribute("data-y");
      var name = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-name");
      var axis = ship === null || ship === void 0 ? void 0 : ship.getAttribute("data-axis");

      if (x && y && isAxis(axis) && isShipName(name)) {
        var coords = [parseInt(x, 10), parseInt(y, 10)];

        if (player.boardObj.getAvailableCoords(axis, name, _ship__WEBPACK_IMPORTED_MODULE_2__["default"]).some(function (value) {
          return value[0] === coords[0] && value[1] === coords[1];
        })) {
          targetCell.classList.add("drag-over-available");
        } else {
          targetCell.classList.add("drag-over");
        }
      }
    }
  };

  var dragLeave = function dragLeave(event) {
    var targetCell = event.currentTarget;

    if (targetCell instanceof HTMLElement) {
      targetCell.classList.remove("drag-over-available");
      targetCell.classList.remove("drag-over");
    }
  };

  var drop = function drop(event) {
    var targetCell = event.currentTarget;

    if (event instanceof DragEvent && targetCell instanceof HTMLElement) {
      var _event$dataTransfer3;

      var id = ((_event$dataTransfer3 = event.dataTransfer) === null || _event$dataTransfer3 === void 0 ? void 0 : _event$dataTransfer3.getData("text/plain")) || "";
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
          player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_2__["default"], coords, axis, name);
          (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("redisplay");
        } else {
          targetCell.classList.remove("drag-over");
          targetCell.classList.remove("drag-over-available");
        }
      }
    }
  };

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["cell", "game-cell", type], null, null, [["data-x", "".concat(cell.coords[0])], ["data-y", "".concat(cell.coords[1])]], [["dragenter", dragEnter], ["dragover", dragOver], ["dragleave", dragLeave], ["drop", drop]]);
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

var createShip = function createShip(shipName, shipLength, axis, player, coords) {
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
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("redisplay");
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
            (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("redisplay");
          }, 1000);
          return;
        }
      }
    }

    (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("redisplay");
  };

  var dragStart = function dragStart(event) {
    var ship = event.currentTarget;

    if (event instanceof DragEvent && ship instanceof HTMLElement && isShipName(shipName)) {
      var _event$dataTransfer;

      (_event$dataTransfer = event.dataTransfer) === null || _event$dataTransfer === void 0 ? void 0 : _event$dataTransfer.setData("text/plain", ship.id);
      player.boardObj.removeShip(shipName);
      setTimeout(function () {
        ship.classList.add("invisible");
      }, 0);
    }
  };

  var dragEnd = function dragEnd(event) {
    var ship = event.currentTarget;

    if (ship instanceof HTMLElement && isShipName(shipName)) {
      player.boardObj.placeShip(_ship__WEBPACK_IMPORTED_MODULE_3__["default"], coords, axis, shipName);
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

/***/ "./src/scripts/gameLoop.ts":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveAttackCoords1AI1Player": () => (/* binding */ receiveAttackCoords1AI1Player),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _aiPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiPlayer */ "./src/scripts/aiPlayer.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");






var startGame = function startGame(player1Name, player2Name) {
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player1Name, "player1");
  var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player2Name, "player2");

  if (player1Name === "") {
    player1 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], "player1");
  }

  if (player2Name === "") {
    player2 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], "player2");
  }

  player1.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);
  player2.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (player1.type === "AI" && player2.type === "Human" || player1.type === "Human" && player2.type === "AI") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("display-boards", player1, player2);
  }
};

var receiveAttackCoords1AI1Player = function receiveAttackCoords1AI1Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    setTimeout(function () {
      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }

  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    setTimeout(function () {
      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }
};



/***/ }),

/***/ "./src/scripts/player.ts":
/*!*******************************!*\
  !*** ./src/scripts/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createPlayer = function createPlayer(boardFunc, playerName, playerNum) {
  var board = boardFunc();

  var attackEnemy = function attackEnemy(enemy, coords) {
    enemy.receiveAttack(coords);
  };

  var placeShip = function placeShip(shipFunc, coords, axis, shipName) {
    board.placeShip(shipFunc, coords, axis, shipName);
  };

  var removeShip = function removeShip(name) {
    board.removeShip(name);
  };

  var initialPlace = function initialPlace(shipFunc) {
    var ships = ["cruiser", "battleship", "carrier", "submarine", "destroyer"];
    ships.forEach(function (shipName) {
      var axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      var availableCoords = board.getAvailableCoords(axis, shipName, shipFunc);
      var randomCoord = availableCoords[Math.floor(Math.random() * availableCoords.length)];
      board.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  return {
    name: playerName,
    type: "Human",
    playerNum: playerNum,
    boardObj: board,
    attackEnemy: attackEnemy,
    placeShip: placeShip,
    initialPlace: initialPlace,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

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
    return num !== undefined && num !== null && num >= 0 && num < shipLengths[name] ? shipArray[num] : shipArray;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzlDaUksU0FBUyxDQUFDL0gsSUFBVixDQUFlQyxJQUFmO0VBQ0Q7O0VBRUQsSUFBTTBFLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNaLEdBQUQ7SUFBQSxPQUNWQSxHQUFHLEtBQUt1RSxTQUFSLElBQXFCdkUsR0FBRyxLQUFLLElBQTdCLElBQXFDQSxHQUFHLElBQUksQ0FBNUMsSUFBaURBLEdBQUcsR0FBR2lFLFdBQVcsQ0FBQy9ILElBQUQsQ0FBbEUsR0FDSThILFNBQVMsQ0FBQ2hFLEdBQUQsQ0FEYixHQUVJZ0UsU0FITTtFQUFBLENBQVo7O0VBS0EsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3hFLEdBQUQsRUFBaUI7SUFDM0IsSUFBSUEsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxHQUFHaUUsV0FBVyxDQUFDL0gsSUFBRCxDQUFqQyxFQUF5QztNQUN2QzhILFNBQVMsQ0FBQ2hFLEdBQUQsQ0FBVCxHQUFpQixLQUFqQjtJQUNEO0VBQ0YsQ0FKRDs7RUFNQSxJQUFNeUUsTUFBTSxHQUFHLFNBQVRBLE1BQVM7SUFBQSxPQUFNVCxTQUFTLENBQUNVLEtBQVYsQ0FBZ0IsVUFBQ2pFLEtBQUQ7TUFBQSxPQUFXQSxLQUFLLEtBQUssS0FBckI7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBZjs7RUFFQSxPQUFPO0lBQUV2RSxJQUFJLEVBQUpBLElBQUY7SUFBUVMsSUFBSSxFQUFKQSxJQUFSO0lBQWNPLE1BQU0sRUFBRStHLFdBQVcsQ0FBQy9ILElBQUQsQ0FBakM7SUFBeUMwRSxHQUFHLEVBQUhBLEdBQXpDO0lBQThDNEQsR0FBRyxFQUFIQSxHQUE5QztJQUFtREMsTUFBTSxFQUFOQTtFQUFuRCxDQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBLGlFQUFlN0UsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iZWdpbkdhbWVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmREaXNwbGF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkSGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZWNlbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2dhbWVMb29wLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3NoaXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb2FyZEZ1bmMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmludGVyZmFjZSBBSVBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJBSVwiO1xuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCI7XG4gIGJvYXJkT2JqOiBHYW1lYm9hcmQ7XG4gIGF0dGFja0VuZW15OiAoZW5lbXk6IEdhbWVib2FyZCkgPT4gdm9pZDtcbiAgaW5pdGlhbFBsYWNlOiAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUFJID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pOiBBSVBsYXllciA9PiB7XG4gIGNvbnN0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMsIFwiQUlcIiwgcGxheWVyTnVtKTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZE9iai5nZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yZHNBcnIubGVuZ3RoKTtcbiAgICBjb25zdCBjb29yZHMgPSBjb29yZHNBcnIuc3BsaWNlKHJhbmRvbSwgMSk7XG4gICAgYXR0YWNrKGVuZW15LCBjb29yZHNbMF0pO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIHBsYXllck51bSwgdHlwZTogXCJBSVwiLCBib2FyZE9iaiwgYXR0YWNrRW5lbXksIGluaXRpYWxQbGFjZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBBSVBsYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUk7XG4iLCJpbXBvcnQgeyBtYWluTW9kdWxlIH0gZnJvbSBcInByb2Nlc3NcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllciB9IGZyb20gXCIuLi9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBjcmVhdGVCZWdpbkdhbWVCdXR0b24gPSAoXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIixcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+IHtcbiAgY29uc3QgY2VsbEV2ZW50ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG9iaiA9IGUudGFyZ2V0O1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBtYWluKSB7XG4gICAgICBjb25zdCB4ID0gb2JqLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSBvYmouZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgaWYgKHggJiYgeSkge1xuICAgICAgICByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllcihcbiAgICAgICAgICBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldLFxuICAgICAgICAgIHBsYXllcjEsXG4gICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICBwbGF5ZXJQb3NcbiAgICAgICAgKTtcbiAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjZWxsRXZlbnQpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNoRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyUG9zfS1nYW1lYm9hcmRgKTtcbiAgICBpZiAocGxheWVyQm9hcmQpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLWNlbGxcIik7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxFdmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25CZWdpbkdhbWUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoYnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgc3Vic2NyaWJlKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgfSk7XG4gICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgW1wiYnV0dG9uXCIsIFwiYmVnaW4tZ2FtZS1idXR0b25cIl0sXG4gICAgICBcIkJlZ2luIVwiLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbW1wiY2xpY2tcIiwgb25CZWdpbkdhbWVdXVxuICAgICksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJidXR0b24tc2VjdGlvblwiXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmVnaW5HYW1lQnV0dG9uO1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vZ2FtZWNlbGxcIjtcblxuY29uc3QgbmR4VG9MZXR0ZXIgPSAobmR4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgbnVtID0gbmR4IC8gMTA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSArIDY1KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBsZXNzQ2VsbCA9IChjZWxsOiBDZWxsLCB0eXBlID0gXCJlbXB0eVwiKSA9PlxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIiwgdHlwZV0sIG51bGwsIG51bGwsIFtcbiAgICBbXCJkYXRhLXhcIiwgYCR7Y2VsbC5jb29yZHNbMF19YF0sXG4gICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICBdKTtcblxuY29uc3QgY3JlYXRlQm9hcmREaXNwbGF5ID0gKFxuICBwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLFxuICB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIlxuKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzOiBDaGlsZEZ1bmNbXSA9IFtdO1xuXG4gIGVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIG51bGwsIG51bGwpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIGkudG9TdHJpbmcoKSwgbnVsbCwgW1xuICAgICAgICBbXCJkYXRhLXlcIiwgYCR7aX1gXSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuXG4gIHBsYXllci5ib2FyZE9iai5ib2FyZC5mb3JFYWNoKChjZWxsLCBuZHgpID0+IHtcbiAgICBpZiAobmR4ICUgMTAgPT09IDApIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBuZHhUb0xldHRlcihuZHgpLCBudWxsLCBbXG4gICAgICAgICAgW1wiZGF0YS14XCIsIGAkeyhuZHggLyAxMCkudG9TdHJpbmcoKX1gXSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChjZWxsLnZhbHVlID09PSBcImVtcHR5XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllcikgOiBjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCk7XG4gICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICB9IGVsc2UgaWYgKGNlbGwudmFsdWUgPT09IFwiaGl0XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCJcbiAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdFwiKVxuICAgICAgICAgIDogY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0XCIpO1xuICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgfSBlbHNlIGlmIChjZWxsLnBvc2l0aW9uICE9PSAwKSB7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgY2VsbEZ1bmMgPVxuICAgICAgICAgIHR5cGUgPT09IFwic2hpcFwiXG4gICAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpXG4gICAgICAgICAgICA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsLCBcImhpdC1zaGlwXCIpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgICB0eXBlID09PSBcInNoaXBcIiA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyKSA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbC52YWx1ZS5uYW1lO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGNlbGwudmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3Qgc2hpcEF4aXMgPSBjZWxsLnZhbHVlLmF4aXM7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9ICgpID0+XG4gICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgIC4uLmNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIHNoaXBBeGlzLCBwbGF5ZXIsIGNlbGwuY29vcmRzKSxcbiAgICAgICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpLFxuICAgICAgICAgIF0pO1xuICAgICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0LXNoaXBcIildO1xuICAgICAgICBlbGVtZW50cy5wdXNoKC4uLmNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAuLi5jcmVhdGVTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBzaGlwQXhpcywgcGxheWVyLCBjZWxsLmNvb3JkcyksXG4gICAgICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciksXG4gICAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID0gdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwpXTtcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5jZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgZWxlbWVudHMsXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnYW1lYm9hcmRcIiwgYCR7cGxheWVyLnBsYXllck51bX0tZ2FtZWJvYXJkYF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvYXJkRGlzcGxheTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVib2FyZEhlYWRlciA9IChuYW1lOiBzdHJpbmcpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIG5hbWUpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWJvYXJkSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZERpc3BsYXkgZnJvbSBcIi4vYm9hcmREaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlQm9hcmRIZWFkZXIgZnJvbSBcIi4vYm9hcmRIZWFkZXJcIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLCB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlQm9hcmRIZWFkZXIocGxheWVyLm5hbWUpLCAuLi5jcmVhdGVCb2FyZERpc3BsYXkocGxheWVyLCB0eXBlKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1zZWN0aW9uXCIsIGAke3BsYXllci5wbGF5ZXJOdW19LWJvYXJkU2VjdGlvbmBdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9nYW1lSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9nYW1lTWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9IChcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgLi4uY3JlYXRlSGVhZGVyKCksXG4gICAgICAuLi5jcmVhdGVNYWluKHBsYXllcjEsIHBsYXllcjIpLFxuICAgICAgLi4uY3JlYXRlRm9vdGVyKCksXG4gICAgICAuLi5zYWlsaW5nQXVkaW8oKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiZ2FtZS1jb250YWluZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXAtaGVhZGVyXCJdLCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZChcIlBsYWNlIHllciBzaGlwcyBDYXAnbiFcIiksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5pbXBvcnQgYmVnaW5HYW1lQnV0dG9uIGZyb20gXCIuL2JlZ2luR2FtZUJ1dHRvblwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBjb25zdCByZURpc3BsYXlCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgW1xuICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24oXG4gICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICBwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiA/IFwic2hpcGxlc3NcIiA6IFwic2hpcFwiXG4gICAgICAgICksXG4gICAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihcbiAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCJcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgXSk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLWNvbnRhaW5lcmApO1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGZpeEVsZW1lbnQoc2VjdGlvbiwgW2NvbXBvbmVudF0pO1xuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJyZWRpc3BsYXlcIiwgcmVEaXNwbGF5Qm9hcmQpO1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24oXG4gICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInNoaXBsZXNzXCIgOiBcInNoaXBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCJcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkLWNvbnRhaW5lclwiXSksXG4gICAgICBdKSxcbiAgICAgIC4uLmJlZ2luR2FtZUJ1dHRvbihcbiAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInBsYXllcjFcIiA6IFwicGxheWVyMlwiLFxuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyXG4gICAgICApLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wiZ2FtZS1tYWluXCJdKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluO1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBeGlzIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi4vc2hpcFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuLi9zaGlwXCI7XG5cbmNvbnN0IGlzQXhpcyA9IChheGlzOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogYXhpcyBpcyBBeGlzID0+XG4gIGF4aXMgPT09IFwidmVydGljYWxcIiB8fCBheGlzID09PSBcImhvcml6b250YWxcIjtcblxuY29uc3QgaXNTaGlwTmFtZSA9IChuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogbmFtZSBpcyBTaGlwTmFtZXMgPT4ge1xuICBjb25zdCBuYW1lcyA9IFtcImNhcnJpZXJcIiwgXCJiYXR0bGVzaGlwXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3Ryb3llclwiXTtcbiAgcmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUgfHwgXCJcIik7XG59O1xuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNlbGw6IENlbGwsIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsIHR5cGUgPSBcImVtcHR5XCIpID0+IHtcbiAgY29uc3QgZHJhZ0VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICBjb25zdCB4ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICBjb25zdCB5ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBjb25zdCBuYW1lID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgY29uc3QgYXhpcyA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtYXhpc1wiKTtcbiAgICAgIGlmICh4ICYmIHkgJiYgaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdPdmVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICBjb25zdCB4ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICBjb25zdCB5ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBjb25zdCBuYW1lID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgY29uc3QgYXhpcyA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtYXhpc1wiKTtcbiAgICAgIGlmICh4ICYmIHkgJiYgaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdMZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXItYXZhaWxhYmxlXCIpO1xuICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcm9wID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIERyYWdFdmVudCAmJiB0YXJnZXRDZWxsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlkID0gZXZlbnQuZGF0YVRyYW5zZmVyPy5nZXREYXRhKFwidGV4dC9wbGFpblwiKSB8fCBcIlwiO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKGlzQXhpcyhheGlzKSAmJiBpc1NoaXBOYW1lKG5hbWUpICYmIGlkICYmIHNoaXAgJiYgeCAmJiB5KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogW251bWJlciwgbnVtYmVyXSA9IFtwYXJzZUludCh4LCAxMCksIHBhcnNlSW50KHksIDEwKV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmpcbiAgICAgICAgICAgIC5nZXRBdmFpbGFibGVDb29yZHMoYXhpcywgbmFtZSwgY3JlYXRlU2hpcClcbiAgICAgICAgICAgIC5zb21lKCh2YWx1ZSkgPT4gdmFsdWVbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZVsxXSA9PT0gY29vcmRzWzFdKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKGNyZWF0ZVNoaXAsIGNvb3JkcywgYXhpcywgbmFtZSk7XG4gICAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIiwgdHlwZV0sXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIFtcbiAgICAgIFtcImRhdGEteFwiLCBgJHtjZWxsLmNvb3Jkc1swXX1gXSxcbiAgICAgIFtcImRhdGEteVwiLCBgJHtjZWxsLmNvb3Jkc1sxXX1gXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIFtcImRyYWdlbnRlclwiLCBkcmFnRW50ZXJdLFxuICAgICAgW1wiZHJhZ292ZXJcIiwgZHJhZ092ZXJdLFxuICAgICAgW1wiZHJhZ2xlYXZlXCIsIGRyYWdMZWF2ZV0sXG4gICAgICBbXCJkcm9wXCIsIGRyb3BdLFxuICAgIF1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB0eXBlIHsgQ2hpbGRGdW5jIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgU2hpcE5hbWVzIH0gZnJvbSBcIi4uL3NoaXBcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBzaGlwRnVuYyBmcm9tIFwiLi4vc2hpcFwiO1xuXG5jb25zdCBpc1NoaXBOYW1lID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBuYW1lIGlzIFNoaXBOYW1lcyA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICByZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSB8fCBcIlwiKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAoXG4gIHNoaXBOYW1lOiBzdHJpbmcsXG4gIHNoaXBMZW5ndGg6IG51bWJlcixcbiAgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIsXG4gIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXVxuKSA9PiB7XG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKHNoaXAgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc1NoaXBOYW1lKHNoaXBOYW1lKSkge1xuICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHBsYXllci5ib2FyZE9iai5nZXRBdmFpbGFibGVDb29yZHMoXG4gICAgICAgICAgXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcImhvcml6b250YWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJ2ZXJ0aWNhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkT2JqLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgICBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcInZlcnRpY2FsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwiaG9yaXpvbnRhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gIH07XG5cbiAgY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmXG4gICAgICBzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgIGlzU2hpcE5hbWUoc2hpcE5hbWUpXG4gICAgKSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHNoaXAuaWQpO1xuICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTaGlwTmFtZShzaGlwTmFtZSkpIHtcbiAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlbGVtZW50czogQ2hpbGRGdW5jW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICB9XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGVsZW1lbnRzLFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1wic2hpcFwiLCBzaGlwTmFtZSwgYXhpc10sXG4gICAgICBudWxsLFxuICAgICAgdW5pcWlkKCksXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdnYWJsZVwiLCBcInRydWVcIl0sXG4gICAgICAgIFtcImRhdGEtbmFtZVwiLCBzaGlwTmFtZV0sXG4gICAgICAgIFtcImRhdGEtYXhpc1wiLCBheGlzXSxcbiAgICAgICAgW1wiZGF0YS14XCIsIGNvb3Jkc1swXS50b1N0cmluZygpXSxcbiAgICAgICAgW1wiZGF0YS15XCIsIGNvb3Jkc1sxXS50b1N0cmluZygpXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRdLFxuICAgICAgICBbXCJkcmFnZW5kXCIsIGRyYWdFbmRdLFxuICAgICAgICBbXCJjbGlja1wiLCBjaGFuZ2VBeGlzXSxcbiAgICAgIF1cbiAgICApLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lQ29udGFpbmVyXCI7XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gKFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGlmIChib2R5KSB7XG4gICAgZml4RWxlbWVudChib2R5LCBbY3JlYXRlQ29udGFpbmVyKHBsYXllcjEsIHBsYXllcjIpXSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXlHYW1lO1xuIiwiaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUFJIGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyMU5hbWU6IHN0cmluZywgcGxheWVyMk5hbWU6IHN0cmluZykgPT4ge1xuICBsZXQgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIHBsYXllcjFOYW1lLFxuICAgIFwicGxheWVyMVwiXG4gICk7XG4gIGxldCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllciA9IGNyZWF0ZVBsYXllcihcbiAgICBjcmVhdGVHYW1lYm9hcmQsXG4gICAgcGxheWVyMk5hbWUsXG4gICAgXCJwbGF5ZXIyXCJcbiAgKTtcbiAgaWYgKHBsYXllcjFOYW1lID09PSBcIlwiKSB7XG4gICAgcGxheWVyMSA9IGNyZWF0ZUFJKGNyZWF0ZUdhbWVib2FyZCwgXCJwbGF5ZXIxXCIpO1xuICB9XG4gIGlmIChwbGF5ZXIyTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllcjIgPSBjcmVhdGVBSShjcmVhdGVHYW1lYm9hcmQsIFwicGxheWVyMlwiKTtcbiAgfVxuICBwbGF5ZXIxLmluaXRpYWxQbGFjZShjcmVhdGVTaGlwKTtcbiAgcGxheWVyMi5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIGlmIChcbiAgICAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHx8XG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJIdW1hblwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiKVxuICApIHtcbiAgICBwdWJsaXNoKFwiZGlzcGxheS1ib2FyZHNcIiwgcGxheWVyMSwgcGxheWVyMik7XG4gIH1cbn07XG5cbmNvbnN0IHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyID0gKFxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBpZiAocGxheWVyUG9zID09PSBcInBsYXllcjFcIikge1xuICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaik7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuICBpZiAocGxheWVyUG9zID09PSBcInBsYXllcjJcIikge1xuICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaik7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lLCByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllciB9O1xuIiwiaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkh1bWFuXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbiAgcmVtb3ZlU2hpcDogKG5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxudHlwZSBCb2FyZEZ1bmMgPSAoYm9hcmQ/OiBDZWxsW10pID0+IEdhbWVib2FyZDtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTmFtZTogc3RyaW5nLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IFBsYXllciA9PiB7XG4gIGNvbnN0IGJvYXJkID0gYm9hcmRGdW5jKCk7XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBib2FyZC5yZW1vdmVTaGlwKG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICB0eXBlOiBcIkh1bWFuXCIsXG4gICAgcGxheWVyTnVtLFxuICAgIGJvYXJkT2JqOiBib2FyZCxcbiAgICBhdHRhY2tFbmVteSxcbiAgICBwbGFjZVNoaXAsXG4gICAgaW5pdGlhbFBsYWNlLFxuICAgIHJlbW92ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFBsYXllciwgQm9hcmRGdW5jIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIgfCBudWxsKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIgfCBudWxsKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gbnVsbCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBheGlzLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJjcmVhdGVBSSIsImJvYXJkRnVuYyIsInBsYXllck51bSIsImNvb3Jkc0FyciIsImkiLCJqIiwicHVzaCIsIm5hbWUiLCJib2FyZE9iaiIsImF0dGFjayIsImF0dGFja0VuZW15IiwiaW5pdGlhbFBsYWNlIiwic2hpcEZ1bmMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwTmFtZSIsImF4aXMiLCJNYXRoIiwicmFuZG9tIiwiYXZhaWxhYmxlQ29vcmRzIiwiZ2V0QUlBdmFpbGFibGVDb29yZHMiLCJyYW5kb21Db29yZCIsImZsb29yIiwibGVuZ3RoIiwicGxhY2VTaGlwIiwiZW5lbXkiLCJjb29yZHMiLCJzcGxpY2UiLCJ0eXBlIiwiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsInJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIiwic3Vic2NyaWJlIiwicHVibGlzaCIsImNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiIsInBsYXllclBvcyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY2VsbEV2ZW50IiwiZSIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYmoiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsIngiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwicGFyc2VJbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0YWNoRXZlbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXAiLCJwbGF5ZXJCb2FyZCIsImNlbGxzIiwiY2VsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbkJlZ2luR2FtZSIsImV2ZW50IiwiYnV0dG9uIiwiY3VycmVudFRhcmdldCIsInJlbW92ZSIsImNyZWF0ZVNoaXAiLCJjcmVhdGVDZWxsIiwibmR4VG9MZXR0ZXIiLCJuZHgiLCJudW0iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjcmVhdGVTaGlwbGVzc0NlbGwiLCJjcmVhdGVCb2FyZERpc3BsYXkiLCJwbGF5ZXIiLCJlbGVtZW50cyIsInRvU3RyaW5nIiwiYm9hcmQiLCJ2YWx1ZSIsImNlbGxGdW5jIiwicG9zaXRpb24iLCJnZXQiLCJzaGlwTGVuZ3RoIiwic2hpcEF4aXMiLCJmdW5jIiwiY3JlYXRlYm9hcmRIZWFkZXIiLCJjcmVhdGVCb2FyZEhlYWRlciIsImNyZWF0ZU1haW4iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJzYWlsaW5nQXVkaW8iLCJjcmVhdGVDb250YWluZXIiLCJjcmVhdGVWb2x1bWVEaXYiLCJjcmVhdGVQaXJhdGVCb2FyZCIsImZpeEVsZW1lbnQiLCJjcmVhdGVCb2FyZFNlY3Rpb24iLCJiZWdpbkdhbWVCdXR0b24iLCJyZURpc3BsYXlCb2FyZCIsImNvbXBvbmVudCIsInNlY3Rpb24iLCJpc0F4aXMiLCJpc1NoaXBOYW1lIiwibmFtZXMiLCJpbmNsdWRlcyIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Q2VsbCIsIkRyYWdFdmVudCIsImlkIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNvbWUiLCJkcmFnT3ZlciIsImRyYWdMZWF2ZSIsImRyb3AiLCJ1bmlxaWQiLCJjaGFuZ2VBeGlzIiwiY29udGFpbnMiLCJyZW1vdmVTaGlwIiwiY29vcmRpbmF0ZXMiLCJzZXRUaW1lb3V0IiwiZHJhZ1N0YXJ0Iiwic2V0RGF0YSIsImRyYWdFbmQiLCJkaXNwbGF5R2FtZSIsImJvZHkiLCJjcmVhdGVHYW1lYm9hcmQiLCJzdGFydEdhbWUiLCJwbGF5ZXIxTmFtZSIsInBsYXllcjJOYW1lIiwicGxheWVyTmFtZSIsInJlY2VpdmVBdHRhY2siLCJzaGlwQXJyYXkiLCJzaGlwTGVuZ3RocyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsInVuZGVmaW5lZCIsImhpdCIsImlzU3VuayIsImV2ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==