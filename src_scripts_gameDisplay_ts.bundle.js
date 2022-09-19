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
        if (cell.classList.contains("hit") || cell.classList.contains("hit-ship")) {
          return;
        }

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
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("pirate-text", "Fire when ready Cap'n!");
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

/***/ "./src/scripts/components/explosionAudio.ts":
/*!**************************************************!*\
  !*** ./src/scripts/components/explosionAudio.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_explosion_new_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/explosion-new.mp3 */ "./src/assets/audio/explosion-new.mp3");
/* harmony import */ var _assets_audio_explosion_new_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/explosion-new.ogg */ "./src/assets/audio/explosion-new.ogg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");





var explosionAudio = function explosionAudio() {
  var playSound = function playSound(callback) {
    var div = document.querySelector(".volume-div-2");
    var audio = document.querySelector(".explosion");

    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      if (div.classList.contains("play")) {
        console.log(div.classList, div);

        var playAud = function playAud() {
          callback();
          audio.removeEventListener("ended", playAud);
        };

        audio.addEventListener("ended", playAud);
        audio.play().then()["catch"](function () {
          throw new Error("Audio failed to play");
        });
      }
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_3__.subscribe)("explosion", function (arg) {
    var fn = arg;
    playSound(fn);
  });
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_explosion_new_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_explosion_new_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("audio", ["explosion"], null, null)]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (explosionAudio);

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
/* harmony import */ var _splooshAudio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./splooshAudio */ "./src/scripts/components/splooshAudio.ts");
/* harmony import */ var _explosionAudio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explosionAudio */ "./src/scripts/components/explosionAudio.ts");
/* harmony import */ var _shipHitAudio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shipHitAudio */ "./src/scripts/components/shipHitAudio.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }










var createContainer = function createContainer(player1, player2) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_gameHeader__WEBPACK_IMPORTED_MODULE_1__["default"])()), _toConsumableArray((0,_gameMain__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player2)), _toConsumableArray((0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])()), _toConsumableArray((0,_sailingAudio__WEBPACK_IMPORTED_MODULE_4__["default"])()), _toConsumableArray((0,_splooshAudio__WEBPACK_IMPORTED_MODULE_5__["default"])()), _toConsumableArray((0,_explosionAudio__WEBPACK_IMPORTED_MODULE_6__["default"])()), _toConsumableArray((0,_shipHitAudio__WEBPACK_IMPORTED_MODULE_7__["default"])())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["container", "game-container"])]);
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

/***/ "./src/scripts/components/shipHitAudio.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/shipHitAudio.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_shipHit_new_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/shipHit-new.mp3 */ "./src/assets/audio/shipHit-new.mp3");
/* harmony import */ var _assets_audio_shipHit_new_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/shipHit-new.ogg */ "./src/assets/audio/shipHit-new.ogg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");





var shipHitAudio = function shipHitAudio() {
  var playSound = function playSound() {
    var div = document.querySelector(".volume-div-2");
    var audio = document.querySelector(".shipHit");

    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      if (div.classList.contains("play")) {
        audio.play().then(function () {
          return console.log("hit");
        })["catch"](function () {
          throw new Error("Audio failed to play");
        });
      }
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_3__.subscribe)("shipHit", playSound);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_shipHit_new_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_shipHit_new_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("audio", ["shipHit"], null, null)]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (shipHitAudio);

/***/ }),

/***/ "./src/scripts/components/splooshAudio.ts":
/*!************************************************!*\
  !*** ./src/scripts/components/splooshAudio.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_audio_sploosh_mp3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/audio/sploosh.mp3 */ "./src/assets/audio/sploosh.mp3");
/* harmony import */ var _assets_audio_sploosh_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/audio/sploosh.ogg */ "./src/assets/audio/sploosh.ogg");
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");





var splooshAudio = function splooshAudio() {
  var playSound = function playSound() {
    var div = document.querySelector(".volume-div-2");
    var audio = document.querySelector(".sploosh");

    if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
      if (div.classList.contains("play")) {
        audio.play().then()["catch"](function () {
          throw new Error("Audio failed to play");
        });
      }
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_3__.subscribe)("sploosh", playSound);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sploosh_mp3__WEBPACK_IMPORTED_MODULE_0__], ["type", "audio/mpeg"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("source", null, null, null, [["src", _assets_audio_sploosh_ogg__WEBPACK_IMPORTED_MODULE_1__], ["type", "audio/ogg"]])], (0,_domManipulator__WEBPACK_IMPORTED_MODULE_2__.createElement)("audio", ["sploosh"], null, null)]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (splooshAudio);

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
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");




var displayGame = function displayGame(player1, player2) {
  var body = document.querySelector("body");
  var volumeDiv2 = document.querySelector(".volume-div-2");

  if (body) {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(body, [(0,_components_gameContainer__WEBPACK_IMPORTED_MODULE_1__["default"])(player1, player2)]);

    if (volumeDiv2 && volumeDiv2.classList.contains("play")) {
      var div = document.querySelector(".volume-div-2");

      if (div instanceof HTMLElement) {
        var createVolume = function createVolume() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-high"])]);
        };

        div.replaceChildren();
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
        div.classList.add("play");
        div.classList.remove("not-play");
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("sailing-play");
      }
    }
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

var attackEvents = function attackEvents(player, lasthit) {
  if (player === "Human") {
    if (lasthit && lasthit[1] === "miss") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Damn to the depths, we missed by a mile");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
      });
    } else if (lasthit && lasthit[0] === "unsunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Jolly 'eavens, we've 'it their ship!");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    } else if (lasthit && lasthit[0] === "sunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Amazin' Cap'n, their ".concat(lasthit[1], " been down to Davy Jones' Locker!"));
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    }
  } else if (lasthit && lasthit[1] === "miss") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Fortune be smilin' upon us, they've missed our ships.");
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
    });
  } else if (lasthit && lasthit[0] === "unsunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Damn to the depths, they've 'it our ".concat(lasthit[1]));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  } else if (lasthit && lasthit[0] === "sunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Shiver me timbers, our ".concat(lasthit[1], " gone down under"));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  }
};

var receiveAttackCoords1AI1Player = function receiveAttackCoords1AI1Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (player1.boardObj.areAllSunk()) {
    console.log("Player2 won!");
    return;
  }

  if (player2.boardObj.areAllSunk()) {
    console.log("Player1 won!");
    return;
  }

  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());
    setTimeout(function () {
      if (player2.boardObj.areAllSunk()) {
        console.log("Player1 won!");
        return;
      }

      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        attackEvents(player1.type, player2.boardObj.checkLastHit());
        setTimeout(function () {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
  }

  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      if (player1.boardObj.areAllSunk()) {
        console.log("Player2 won!");
        return;
      }

      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        attackEvents(player2.type, player1.boardObj.checkLastHit());
        setTimeout(function () {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
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

/***/ }),

/***/ "./src/assets/audio/explosion-new.mp3":
/*!********************************************!*\
  !*** ./src/assets/audio/explosion-new.mp3 ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01f1c6025347e24bd3b5.mp3";

/***/ }),

/***/ "./src/assets/audio/explosion-new.ogg":
/*!********************************************!*\
  !*** ./src/assets/audio/explosion-new.ogg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fc6287dbabf7b93273b0.ogg";

/***/ }),

/***/ "./src/assets/audio/shipHit-new.mp3":
/*!******************************************!*\
  !*** ./src/assets/audio/shipHit-new.mp3 ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64131331c640105fde66.mp3";

/***/ }),

/***/ "./src/assets/audio/shipHit-new.ogg":
/*!******************************************!*\
  !*** ./src/assets/audio/shipHit-new.ogg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2775eb7f847dffa0f157.ogg";

/***/ }),

/***/ "./src/assets/audio/sploosh.mp3":
/*!**************************************!*\
  !*** ./src/assets/audio/sploosh.mp3 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "84f9b3af6434fbb2baa4.mp3";

/***/ }),

/***/ "./src/assets/audio/sploosh.ogg":
/*!**************************************!*\
  !*** ./src/assets/audio/sploosh.ogg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8a416d8c4611a18ec3eb.ogg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQzVKLElBQUQsQ0FBbEUsR0FDSTJKLFNBQVMsQ0FBQzVGLEdBQUQsQ0FEYixHQUVJNEYsU0FITTtFQUFBLENBQVo7O0VBS0EsSUFBTVEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3BHLEdBQUQsRUFBaUI7SUFDM0IsSUFBSUEsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxHQUFHNkYsV0FBVyxDQUFDNUosSUFBRCxDQUFqQyxFQUF5QztNQUN2QzJKLFNBQVMsQ0FBQzVGLEdBQUQsQ0FBVCxHQUFpQixLQUFqQjtJQUNEO0VBQ0YsQ0FKRDs7RUFNQSxJQUFNcUcsTUFBTSxHQUFHLFNBQVRBLE1BQVM7SUFBQSxPQUFNVCxTQUFTLENBQUNVLEtBQVYsQ0FBZ0IsVUFBQzdGLEtBQUQ7TUFBQSxPQUFXQSxLQUFLLEtBQUssS0FBckI7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBZjs7RUFFQSxPQUFPO0lBQUV4RSxJQUFJLEVBQUpBLElBQUY7SUFBUVMsSUFBSSxFQUFKQSxJQUFSO0lBQWNPLE1BQU0sRUFBRTRJLFdBQVcsQ0FBQzVKLElBQUQsQ0FBakM7SUFBeUMyRSxHQUFHLEVBQUhBLEdBQXpDO0lBQThDd0YsR0FBRyxFQUFIQSxHQUE5QztJQUFtREMsTUFBTSxFQUFOQTtFQUFuRCxDQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBLGlFQUFlekcsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iZWdpbkdhbWVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmREaXNwbGF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkSGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9leHBsb3Npb25BdWRpby50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZWNlbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2hpcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zaGlwSGl0QXVkaW8udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc3Bsb29zaEF1ZGlvLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lRGlzcGxheS50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZUxvb3AudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvc2hpcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvYXJkRnVuYyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuaW50ZXJmYWNlIEFJUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkFJXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlQUkgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IEFJUGxheWVyID0+IHtcbiAgY29uc3QgY29vcmRzQXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb29yZHNBcnIucHVzaChbaSwgal0pO1xuICAgIH1cbiAgfVxuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBib2FyZE9iaixcbiAgICBhdHRhY2tFbmVteTogYXR0YWNrLFxuICB9ID0gY3JlYXRlUGxheWVyKGJvYXJkRnVuYywgXCJBSVwiLCBwbGF5ZXJOdW0pO1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkT2JqLmdldEFJQXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3Jkc0Fyci5sZW5ndGgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNvb3Jkc0Fyci5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICBhdHRhY2soZW5lbXksIGNvb3Jkc1swXSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgcGxheWVyTnVtLCB0eXBlOiBcIkFJXCIsIGJvYXJkT2JqLCBhdHRhY2tFbmVteSwgaW5pdGlhbFBsYWNlIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IEFJUGxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBSTtcbiIsImltcG9ydCB7IG1haW5Nb2R1bGUgfSBmcm9tIFwicHJvY2Vzc1wiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIH0gZnJvbSBcIi4uL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5cbmNvbnN0IGNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiA9IChcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiLFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT4ge1xuICBjb25zdCBjZWxsRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3Qgb2JqID0gZS50YXJnZXQ7XG4gICAgaWYgKG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIG1haW4pIHtcbiAgICAgIGNvbnN0IHggPSBvYmouZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgY29uc3QgeSA9IG9iai5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBpZiAoeCAmJiB5KSB7XG4gICAgICAgIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyKFxuICAgICAgICAgIFtwYXJzZUludCh4LCAxMCksIHBhcnNlSW50KHksIDEwKV0sXG4gICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgIHBsYXllclBvc1xuICAgICAgICApO1xuICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxFdmVudCk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2hFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgfSk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtwbGF5ZXJQb3N9LWdhbWVib2FyZGApO1xuICAgIGlmIChwbGF5ZXJCb2FyZCkge1xuICAgICAgY29uc3QgY2VsbHMgPSBwbGF5ZXJCb2FyZC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdhbWUtY2VsbFwiKTtcbiAgICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0XCIpIHx8XG4gICAgICAgICAgY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoXCJoaXQtc2hpcFwiKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2VsbEV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkJlZ2luR2FtZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChidXR0b24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgYXR0YWNoRXZlbnRzKCk7XG4gICAgICBzdWJzY3JpYmUoXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgYXR0YWNoRXZlbnRzKCk7XG4gICAgICB9KTtcbiAgICAgIHB1Ymxpc2goXCJwaXJhdGUtdGV4dFwiLCBcIkZpcmUgd2hlbiByZWFkeSBDYXAnbiFcIik7XG4gICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgW1wiYnV0dG9uXCIsIFwiYmVnaW4tZ2FtZS1idXR0b25cIl0sXG4gICAgICBcIkJlZ2luIVwiLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbW1wiY2xpY2tcIiwgb25CZWdpbkdhbWVdXVxuICAgICksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJidXR0b24tc2VjdGlvblwiXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmVnaW5HYW1lQnV0dG9uO1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vZ2FtZWNlbGxcIjtcblxuY29uc3QgbmR4VG9MZXR0ZXIgPSAobmR4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgbnVtID0gbmR4IC8gMTA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSArIDY1KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBsZXNzQ2VsbCA9IChjZWxsOiBDZWxsLCB0eXBlID0gXCJlbXB0eVwiKSA9PlxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIiwgdHlwZV0sIG51bGwsIG51bGwsIFtcbiAgICBbXCJkYXRhLXhcIiwgYCR7Y2VsbC5jb29yZHNbMF19YF0sXG4gICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICBdKTtcblxuY29uc3QgY3JlYXRlQm9hcmREaXNwbGF5ID0gKFxuICBwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLFxuICB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIlxuKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzOiBDaGlsZEZ1bmNbXSA9IFtdO1xuXG4gIGVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIG51bGwsIG51bGwpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIGkudG9TdHJpbmcoKSwgbnVsbCwgW1xuICAgICAgICBbXCJkYXRhLXlcIiwgYCR7aX1gXSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuXG4gIHBsYXllci5ib2FyZE9iai5ib2FyZC5mb3JFYWNoKChjZWxsLCBuZHgpID0+IHtcbiAgICBpZiAobmR4ICUgMTAgPT09IDApIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBuZHhUb0xldHRlcihuZHgpLCBudWxsLCBbXG4gICAgICAgICAgW1wiZGF0YS14XCIsIGAkeyhuZHggLyAxMCkudG9TdHJpbmcoKX1gXSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChjZWxsLnZhbHVlID09PSBcImVtcHR5XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllcikgOiBjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCk7XG4gICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICB9IGVsc2UgaWYgKGNlbGwudmFsdWUgPT09IFwiaGl0XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCJcbiAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdFwiKVxuICAgICAgICAgIDogY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0XCIpO1xuICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgfSBlbHNlIGlmIChjZWxsLnBvc2l0aW9uICE9PSAwKSB7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgY2VsbEZ1bmMgPVxuICAgICAgICAgIHR5cGUgPT09IFwic2hpcFwiXG4gICAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpXG4gICAgICAgICAgICA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsLCBcImhpdC1zaGlwXCIpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgICB0eXBlID09PSBcInNoaXBcIiA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyKSA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbC52YWx1ZS5uYW1lO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGNlbGwudmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3Qgc2hpcEF4aXMgPSBjZWxsLnZhbHVlLmF4aXM7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9ICgpID0+XG4gICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgIC4uLmNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIHNoaXBBeGlzLCBwbGF5ZXIsIGNlbGwuY29vcmRzKSxcbiAgICAgICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpLFxuICAgICAgICAgIF0pO1xuICAgICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0LXNoaXBcIildO1xuICAgICAgICBlbGVtZW50cy5wdXNoKC4uLmNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAuLi5jcmVhdGVTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBzaGlwQXhpcywgcGxheWVyLCBjZWxsLmNvb3JkcyksXG4gICAgICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciksXG4gICAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID0gdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwpXTtcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5jZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgZWxlbWVudHMsXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnYW1lYm9hcmRcIiwgYCR7cGxheWVyLnBsYXllck51bX0tZ2FtZWJvYXJkYF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvYXJkRGlzcGxheTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVib2FyZEhlYWRlciA9IChuYW1lOiBzdHJpbmcpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIG5hbWUpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWJvYXJkSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZERpc3BsYXkgZnJvbSBcIi4vYm9hcmREaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlQm9hcmRIZWFkZXIgZnJvbSBcIi4vYm9hcmRIZWFkZXJcIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLCB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlQm9hcmRIZWFkZXIocGxheWVyLm5hbWUpLCAuLi5jcmVhdGVCb2FyZERpc3BsYXkocGxheWVyLCB0eXBlKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1zZWN0aW9uXCIsIGAke3BsYXllci5wbGF5ZXJOdW19LWJvYXJkU2VjdGlvbmBdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgZXhwbG9zaW9uIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5tcDNcIjtcbmltcG9ydCBleHBsb3Npb24yIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBleHBsb3Npb25BdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgcGxheVNvdW5kID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4cGxvc2lvblwiKTtcbiAgICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIikpIHtcbiAgICAgICAgY29uc29sZS5sb2coZGl2LmNsYXNzTGlzdCwgZGl2KTtcbiAgICAgICAgY29uc3QgcGxheUF1ZCA9ICgpID0+IHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIGF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBwbGF5QXVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHBsYXlBdWQpO1xuICAgICAgICBhdWRpb1xuICAgICAgICAgIC5wbGF5KClcbiAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJleHBsb3Npb25cIiwgKGFyZzogdW5rbm93bikgPT4ge1xuICAgIGNvbnN0IGZuID0gYXJnIGFzICgpID0+IHZvaWQ7XG4gICAgcGxheVNvdW5kKGZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb25dLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb24yXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL29nZ1wiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIFtcImV4cGxvc2lvblwiXSwgbnVsbCwgbnVsbCksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwbG9zaW9uQXVkaW87XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9nYW1lSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9nYW1lTWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5pbXBvcnQgc3Bsb29zaEF1ZGlvIGZyb20gXCIuL3NwbG9vc2hBdWRpb1wiO1xuaW1wb3J0IGV4cGxvc2lvbkF1ZGlvIGZyb20gXCIuL2V4cGxvc2lvbkF1ZGlvXCI7XG5pbXBvcnQgc2hpcEhpdEF1ZGlvIGZyb20gXCIuL3NoaXBIaXRBdWRpb1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUhlYWRlcigpLFxuICAgICAgLi4uY3JlYXRlTWFpbihwbGF5ZXIxLCBwbGF5ZXIyKSxcbiAgICAgIC4uLmNyZWF0ZUZvb3RlcigpLFxuICAgICAgLi4uc2FpbGluZ0F1ZGlvKCksXG4gICAgICAuLi5zcGxvb3NoQXVkaW8oKSxcbiAgICAgIC4uLmV4cGxvc2lvbkF1ZGlvKCksXG4gICAgICAuLi5zaGlwSGl0QXVkaW8oKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiZ2FtZS1jb250YWluZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXAtaGVhZGVyXCJdLCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZChcIlBsYWNlIHllciBzaGlwcyBDYXAnbiFcIiksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5pbXBvcnQgYmVnaW5HYW1lQnV0dG9uIGZyb20gXCIuL2JlZ2luR2FtZUJ1dHRvblwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBjb25zdCByZURpc3BsYXlCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgW1xuICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24oXG4gICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICBwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiA/IFwic2hpcGxlc3NcIiA6IFwic2hpcFwiXG4gICAgICAgICksXG4gICAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihcbiAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCJcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgXSk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLWNvbnRhaW5lcmApO1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGZpeEVsZW1lbnQoc2VjdGlvbiwgW2NvbXBvbmVudF0pO1xuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJyZWRpc3BsYXlcIiwgcmVEaXNwbGF5Qm9hcmQpO1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24oXG4gICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInNoaXBsZXNzXCIgOiBcInNoaXBcIlxuICAgICAgICAgICksXG4gICAgICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCJcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkLWNvbnRhaW5lclwiXSksXG4gICAgICBdKSxcbiAgICAgIC4uLmJlZ2luR2FtZUJ1dHRvbihcbiAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInBsYXllcjFcIiA6IFwicGxheWVyMlwiLFxuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyXG4gICAgICApLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcIm1haW5cIiwgW1wiZ2FtZS1tYWluXCJdKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluO1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBeGlzIH0gZnJvbSBcIi4uL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi4vc2hpcFwiO1xuaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuLi9zaGlwXCI7XG5cbmNvbnN0IGlzQXhpcyA9IChheGlzOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogYXhpcyBpcyBBeGlzID0+XG4gIGF4aXMgPT09IFwidmVydGljYWxcIiB8fCBheGlzID09PSBcImhvcml6b250YWxcIjtcblxuY29uc3QgaXNTaGlwTmFtZSA9IChuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogbmFtZSBpcyBTaGlwTmFtZXMgPT4ge1xuICBjb25zdCBuYW1lcyA9IFtcImNhcnJpZXJcIiwgXCJiYXR0bGVzaGlwXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3Ryb3llclwiXTtcbiAgcmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUgfHwgXCJcIik7XG59O1xuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNlbGw6IENlbGwsIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsIHR5cGUgPSBcImVtcHR5XCIpID0+IHtcbiAgY29uc3QgZHJhZ0VudGVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICBjb25zdCB4ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICBjb25zdCB5ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBjb25zdCBuYW1lID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgY29uc3QgYXhpcyA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtYXhpc1wiKTtcbiAgICAgIGlmICh4ICYmIHkgJiYgaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdPdmVyID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gICAgICBjb25zdCB4ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXhcIik7XG4gICAgICBjb25zdCB5ID0gdGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBjb25zdCBuYW1lID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1uYW1lXCIpO1xuICAgICAgY29uc3QgYXhpcyA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtYXhpc1wiKTtcbiAgICAgIGlmICh4ICYmIHkgJiYgaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LmFkZChcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdMZWF2ZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAodGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXItYXZhaWxhYmxlXCIpO1xuICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcm9wID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChldmVudCBpbnN0YW5jZW9mIERyYWdFdmVudCAmJiB0YXJnZXRDZWxsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGNvbnN0IGlkID0gZXZlbnQuZGF0YVRyYW5zZmVyPy5nZXREYXRhKFwidGV4dC9wbGFpblwiKSB8fCBcIlwiO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKGlzQXhpcyhheGlzKSAmJiBpc1NoaXBOYW1lKG5hbWUpICYmIGlkICYmIHNoaXAgJiYgeCAmJiB5KSB7XG4gICAgICAgIGNvbnN0IGNvb3JkczogW251bWJlciwgbnVtYmVyXSA9IFtwYXJzZUludCh4LCAxMCksIHBhcnNlSW50KHksIDEwKV07XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmpcbiAgICAgICAgICAgIC5nZXRBdmFpbGFibGVDb29yZHMoYXhpcywgbmFtZSwgY3JlYXRlU2hpcClcbiAgICAgICAgICAgIC5zb21lKCh2YWx1ZSkgPT4gdmFsdWVbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZVsxXSA9PT0gY29vcmRzWzFdKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKGNyZWF0ZVNoaXAsIGNvb3JkcywgYXhpcywgbmFtZSk7XG4gICAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY3JlYXRlRWxlbWVudChcbiAgICBcImRpdlwiLFxuICAgIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIiwgdHlwZV0sXG4gICAgbnVsbCxcbiAgICBudWxsLFxuICAgIFtcbiAgICAgIFtcImRhdGEteFwiLCBgJHtjZWxsLmNvb3Jkc1swXX1gXSxcbiAgICAgIFtcImRhdGEteVwiLCBgJHtjZWxsLmNvb3Jkc1sxXX1gXSxcbiAgICBdLFxuICAgIFtcbiAgICAgIFtcImRyYWdlbnRlclwiLCBkcmFnRW50ZXJdLFxuICAgICAgW1wiZHJhZ292ZXJcIiwgZHJhZ092ZXJdLFxuICAgICAgW1wiZHJhZ2xlYXZlXCIsIGRyYWdMZWF2ZV0sXG4gICAgICBbXCJkcm9wXCIsIGRyb3BdLFxuICAgIF1cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgdW5pcWlkIGZyb20gXCJ1bmlxaWRcIjtcbmltcG9ydCB0eXBlIHsgQ2hpbGRGdW5jIH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgU2hpcE5hbWVzIH0gZnJvbSBcIi4uL3NoaXBcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBzaGlwRnVuYyBmcm9tIFwiLi4vc2hpcFwiO1xuXG5jb25zdCBpc1NoaXBOYW1lID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBuYW1lIGlzIFNoaXBOYW1lcyA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICByZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSB8fCBcIlwiKTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAoXG4gIHNoaXBOYW1lOiBzdHJpbmcsXG4gIHNoaXBMZW5ndGg6IG51bWJlcixcbiAgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCIsXG4gIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXVxuKSA9PiB7XG4gIGNvbnN0IGNoYW5nZUF4aXMgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKHNoaXAgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc1NoaXBOYW1lKHNoaXBOYW1lKSkge1xuICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHBsYXllci5ib2FyZE9iai5nZXRBdmFpbGFibGVDb29yZHMoXG4gICAgICAgICAgXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcImhvcml6b250YWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJ2ZXJ0aWNhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkT2JqLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgICBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcInZlcnRpY2FsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwiaG9yaXpvbnRhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gIH07XG5cbiAgY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmXG4gICAgICBzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgIGlzU2hpcE5hbWUoc2hpcE5hbWUpXG4gICAgKSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHNoaXAuaWQpO1xuICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTaGlwTmFtZShzaGlwTmFtZSkpIHtcbiAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlbGVtZW50czogQ2hpbGRGdW5jW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICB9XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGVsZW1lbnRzLFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1wic2hpcFwiLCBzaGlwTmFtZSwgYXhpc10sXG4gICAgICBudWxsLFxuICAgICAgdW5pcWlkKCksXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdnYWJsZVwiLCBcInRydWVcIl0sXG4gICAgICAgIFtcImRhdGEtbmFtZVwiLCBzaGlwTmFtZV0sXG4gICAgICAgIFtcImRhdGEtYXhpc1wiLCBheGlzXSxcbiAgICAgICAgW1wiZGF0YS14XCIsIGNvb3Jkc1swXS50b1N0cmluZygpXSxcbiAgICAgICAgW1wiZGF0YS15XCIsIGNvb3Jkc1sxXS50b1N0cmluZygpXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRdLFxuICAgICAgICBbXCJkcmFnZW5kXCIsIGRyYWdFbmRdLFxuICAgICAgICBbXCJjbGlja1wiLCBjaGFuZ2VBeGlzXSxcbiAgICAgIF1cbiAgICApLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgc2hpcEhpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NoaXBIaXQtbmV3Lm1wM1wiO1xuaW1wb3J0IHNoaXBIaXQyIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2hpcEhpdC1uZXcub2dnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgc2hpcEhpdEF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBwbGF5U291bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBIaXRcIik7XG4gICAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5XCIpKSB7XG4gICAgICAgIGF1ZGlvXG4gICAgICAgICAgLnBsYXkoKVxuICAgICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiaGl0XCIpKVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdWRpbyBmYWlsZWQgdG8gcGxheVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3Vic2NyaWJlKFwic2hpcEhpdFwiLCBwbGF5U291bmQpO1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc2hpcEhpdF0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9tcGVnXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBIaXQyXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL29nZ1wiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIFtcInNoaXBIaXRcIl0sIG51bGwsIG51bGwpLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBIaXRBdWRpbztcbiIsImltcG9ydCBzcGxvb3NoIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc3Bsb29zaC5tcDNcIjtcbmltcG9ydCBzcGxvb3NoMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NwbG9vc2gub2dnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgc3Bsb29zaEF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBwbGF5U291bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwbG9vc2hcIik7XG4gICAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5XCIpKSB7XG4gICAgICAgIGF1ZGlvXG4gICAgICAgICAgLnBsYXkoKVxuICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN1YnNjcmliZShcInNwbG9vc2hcIiwgcGxheVNvdW5kKTtcblxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNwbG9vc2hdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzcGxvb3NoMl0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzcGxvb3NoXCJdLCBudWxsLCBudWxsKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzcGxvb3NoQXVkaW87XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVDb250YWluZXJcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgZGlzcGxheUdhbWUgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3Qgdm9sdW1lRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWRpdi0yXCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcihwbGF5ZXIxLCBwbGF5ZXIyKV0pO1xuICAgIGlmICh2b2x1bWVEaXYyICYmIHZvbHVtZURpdjIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxheVwiKSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgICBpZiAoZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW2NyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIl0pXSk7XG4gICAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsYXlcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXBsYXlcIik7XG4gICAgICAgIHB1Ymxpc2goXCJzYWlsaW5nLXBsYXlcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5R2FtZTtcbiIsImltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVBSSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUgfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjFOYW1lOiBzdHJpbmcsIHBsYXllcjJOYW1lOiBzdHJpbmcpID0+IHtcbiAgbGV0IHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyID0gY3JlYXRlUGxheWVyKFxuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBwbGF5ZXIxTmFtZSxcbiAgICBcInBsYXllcjFcIlxuICApO1xuICBsZXQgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIHBsYXllcjJOYW1lLFxuICAgIFwicGxheWVyMlwiXG4gICk7XG4gIGlmIChwbGF5ZXIxTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllcjEgPSBjcmVhdGVBSShjcmVhdGVHYW1lYm9hcmQsIFwicGxheWVyMVwiKTtcbiAgfVxuICBpZiAocGxheWVyMk5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIyID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkLCBcInBsYXllcjJcIik7XG4gIH1cbiAgcGxheWVyMS5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIHBsYXllcjIuaW5pdGlhbFBsYWNlKGNyZWF0ZVNoaXApO1xuICBpZiAoXG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJIdW1hblwiKSB8fFxuICAgIChwbGF5ZXIxLnR5cGUgPT09IFwiSHVtYW5cIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIilcbiAgKSB7XG4gICAgcHVibGlzaChcImRpc3BsYXktYm9hcmRzXCIsIHBsYXllcjEsIHBsYXllcjIpO1xuICB9XG59O1xuXG5jb25zdCBhdHRhY2tFdmVudHMgPSAoXG4gIHBsYXllcjogXCJBSVwiIHwgXCJIdW1hblwiLFxuICBsYXN0aGl0OiBbc3RyaW5nLCBzdHJpbmddIHwgbnVsbFxuKSA9PiB7XG4gIGlmIChwbGF5ZXIgPT09IFwiSHVtYW5cIikge1xuICAgIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMV0gPT09IFwibWlzc1wiKSB7XG4gICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgXCJEYW1uIHRvIHRoZSBkZXB0aHMsIHdlIG1pc3NlZCBieSBhIG1pbGVcIik7XG4gICAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaChcInNwbG9vc2hcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFswXSA9PT0gXCJ1bnN1bmtcIikge1xuICAgICAgcHVibGlzaChcInBpcmF0ZS10ZXh0XCIsIGBKb2xseSAnZWF2ZW5zLCB3ZSd2ZSAnaXQgdGhlaXIgc2hpcCFgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInN1bmtcIikge1xuICAgICAgcHVibGlzaChcbiAgICAgICAgXCJwaXJhdGUtdGV4dFwiLFxuICAgICAgICBgQW1hemluJyBDYXAnbiwgdGhlaXIgJHtsYXN0aGl0WzFdfSBiZWVuIGRvd24gdG8gRGF2eSBKb25lcycgTG9ja2VyIWBcbiAgICAgICk7XG4gICAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaChcInNoaXBIaXRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzFdID09PSBcIm1pc3NcIikge1xuICAgIHB1Ymxpc2goXG4gICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICBcIkZvcnR1bmUgYmUgc21pbGluJyB1cG9uIHVzLCB0aGV5J3ZlIG1pc3NlZCBvdXIgc2hpcHMuXCJcbiAgICApO1xuICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgcHVibGlzaChcInNwbG9vc2hcIik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInVuc3Vua1wiKSB7XG4gICAgcHVibGlzaChcInBpcmF0ZS10ZXh0XCIsIGBEYW1uIHRvIHRoZSBkZXB0aHMsIHRoZXkndmUgJ2l0IG91ciAke2xhc3RoaXRbMV19YCk7XG4gICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMF0gPT09IFwic3Vua1wiKSB7XG4gICAgcHVibGlzaChcbiAgICAgIFwicGlyYXRlLXRleHRcIixcbiAgICAgIGBTaGl2ZXIgbWUgdGltYmVycywgb3VyICR7bGFzdGhpdFsxXX0gZ29uZSBkb3duIHVuZGVyYFxuICAgICk7XG4gICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIgPSAoXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXJQb3M6IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGlmIChwbGF5ZXIxLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyMiB3b24hXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICBjb25zb2xlLmxvZyhcIlBsYXllcjEgd29uIVwiKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKHBsYXllclBvcyA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICBwbGF5ZXIyLmF0dGFja0VuZW15KHBsYXllcjEuYm9hcmRPYmosIGNvb3Jkcyk7XG4gICAgcHVibGlzaChcInJlZGlzcGxheUFmdGVyQmVnaW5cIik7XG4gICAgYXR0YWNrRXZlbnRzKHBsYXllcjIudHlwZSwgcGxheWVyMS5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChwbGF5ZXIyLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIlBsYXllcjEgd29uIVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIG1haW4pIHtcbiAgICAgICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqKTtcbiAgICAgICAgcHVibGlzaChcInJlZGlzcGxheUFmdGVyQmVnaW5cIik7XG4gICAgICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgICAgfSwgMjAwMCk7XG4gICAgICB9XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuICBpZiAocGxheWVyUG9zID09PSBcInBsYXllcjJcIikge1xuICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMS50eXBlLCBwbGF5ZXIyLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyMiB3b24hXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyMi50eXBlID09PSBcIkFJXCIgJiYgbWFpbikge1xuICAgICAgICBwbGF5ZXIyLmF0dGFja0VuZW15KHBsYXllcjEuYm9hcmRPYmopO1xuICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgYXR0YWNrRXZlbnRzKHBsYXllcjIudHlwZSwgcGxheWVyMS5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgc3RhcnRHYW1lLCByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllciB9O1xuIiwiaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkh1bWFuXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbiAgcmVtb3ZlU2hpcDogKG5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxudHlwZSBCb2FyZEZ1bmMgPSAoYm9hcmQ/OiBDZWxsW10pID0+IEdhbWVib2FyZDtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTmFtZTogc3RyaW5nLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IFBsYXllciA9PiB7XG4gIGNvbnN0IGJvYXJkID0gYm9hcmRGdW5jKCk7XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBib2FyZC5yZW1vdmVTaGlwKG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICB0eXBlOiBcIkh1bWFuXCIsXG4gICAgcGxheWVyTnVtLFxuICAgIGJvYXJkT2JqOiBib2FyZCxcbiAgICBhdHRhY2tFbmVteSxcbiAgICBwbGFjZVNoaXAsXG4gICAgaW5pdGlhbFBsYWNlLFxuICAgIHJlbW92ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFBsYXllciwgQm9hcmRGdW5jIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIgfCBudWxsKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIgfCBudWxsKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gbnVsbCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBheGlzLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJjcmVhdGVBSSIsImJvYXJkRnVuYyIsInBsYXllck51bSIsImNvb3Jkc0FyciIsImkiLCJqIiwicHVzaCIsIm5hbWUiLCJib2FyZE9iaiIsImF0dGFjayIsImF0dGFja0VuZW15IiwiaW5pdGlhbFBsYWNlIiwic2hpcEZ1bmMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwTmFtZSIsImF4aXMiLCJNYXRoIiwicmFuZG9tIiwiYXZhaWxhYmxlQ29vcmRzIiwiZ2V0QUlBdmFpbGFibGVDb29yZHMiLCJyYW5kb21Db29yZCIsImZsb29yIiwibGVuZ3RoIiwicGxhY2VTaGlwIiwiZW5lbXkiLCJjb29yZHMiLCJzcGxpY2UiLCJ0eXBlIiwiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsInJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIiwic3Vic2NyaWJlIiwicHVibGlzaCIsImNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiIsInBsYXllclBvcyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY2VsbEV2ZW50IiwiZSIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYmoiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsIngiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwicGFyc2VJbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0YWNoRXZlbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXAiLCJwbGF5ZXJCb2FyZCIsImNlbGxzIiwiY2VsbCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQmVnaW5HYW1lIiwiZXZlbnQiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicmVtb3ZlIiwiY3JlYXRlU2hpcCIsImNyZWF0ZUNlbGwiLCJuZHhUb0xldHRlciIsIm5keCIsIm51bSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImNyZWF0ZVNoaXBsZXNzQ2VsbCIsImNyZWF0ZUJvYXJkRGlzcGxheSIsInBsYXllciIsImVsZW1lbnRzIiwidG9TdHJpbmciLCJib2FyZCIsInZhbHVlIiwiY2VsbEZ1bmMiLCJwb3NpdGlvbiIsImdldCIsInNoaXBMZW5ndGgiLCJzaGlwQXhpcyIsImZ1bmMiLCJjcmVhdGVib2FyZEhlYWRlciIsImNyZWF0ZUJvYXJkSGVhZGVyIiwiY3JlYXRlTWFpbiIsImV4cGxvc2lvbiIsImV4cGxvc2lvbjIiLCJleHBsb3Npb25BdWRpbyIsInBsYXlTb3VuZCIsImNhbGxiYWNrIiwiZGl2IiwiYXVkaW8iLCJIVE1MQXVkaW9FbGVtZW50IiwiY29uc29sZSIsImxvZyIsInBsYXlBdWQiLCJwbGF5IiwidGhlbiIsIkVycm9yIiwiYXJnIiwiZm4iLCJjcmVhdGVIZWFkZXIiLCJjcmVhdGVGb290ZXIiLCJzYWlsaW5nQXVkaW8iLCJzcGxvb3NoQXVkaW8iLCJzaGlwSGl0QXVkaW8iLCJjcmVhdGVDb250YWluZXIiLCJjcmVhdGVWb2x1bWVEaXYiLCJjcmVhdGVQaXJhdGVCb2FyZCIsImZpeEVsZW1lbnQiLCJjcmVhdGVCb2FyZFNlY3Rpb24iLCJiZWdpbkdhbWVCdXR0b24iLCJyZURpc3BsYXlCb2FyZCIsImNvbXBvbmVudCIsInNlY3Rpb24iLCJpc0F4aXMiLCJpc1NoaXBOYW1lIiwibmFtZXMiLCJpbmNsdWRlcyIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Q2VsbCIsIkRyYWdFdmVudCIsImlkIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNvbWUiLCJkcmFnT3ZlciIsImRyYWdMZWF2ZSIsImRyb3AiLCJ1bmlxaWQiLCJjaGFuZ2VBeGlzIiwicmVtb3ZlU2hpcCIsImNvb3JkaW5hdGVzIiwic2V0VGltZW91dCIsImRyYWdTdGFydCIsInNldERhdGEiLCJkcmFnRW5kIiwic2hpcEhpdCIsInNoaXBIaXQyIiwic3Bsb29zaCIsInNwbG9vc2gyIiwiZGlzcGxheUdhbWUiLCJib2R5Iiwidm9sdW1lRGl2MiIsImNyZWF0ZVZvbHVtZSIsInJlcGxhY2VDaGlsZHJlbiIsImNyZWF0ZUdhbWVib2FyZCIsInN0YXJ0R2FtZSIsInBsYXllcjFOYW1lIiwicGxheWVyMk5hbWUiLCJhdHRhY2tFdmVudHMiLCJsYXN0aGl0IiwiYXJlQWxsU3VuayIsImNoZWNrTGFzdEhpdCIsInBsYXllck5hbWUiLCJyZWNlaXZlQXR0YWNrIiwic2hpcEFycmF5Iiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJ1bmRlZmluZWQiLCJoaXQiLCJpc1N1bmsiLCJldmVyeSJdLCJzb3VyY2VSb290IjoiIn0=