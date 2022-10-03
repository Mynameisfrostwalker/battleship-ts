"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameDisplay_ts"],{

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
    var gameboard = document.querySelector(".turn-gameboard");
    var obj = e.target;

    if (obj instanceof HTMLElement && main && gameboard instanceof HTMLElement) {
      var x = obj.getAttribute("data-x");
      var y = obj.getAttribute("data-y");
      var position = gameboard.getAttribute("data-position");

      if (x && y && position) {
        if (player1.type === "Human" && player2.type === "Human") {
          (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.receiveAttackCoords2Player)([parseInt(x, 10), parseInt(y, 10)], player1, player2, position === "player1" ? "player1" : "player2");
        } else {
          (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.receiveAttackCoords1AI1Player)([parseInt(x, 10), parseInt(y, 10)], player1, player2, playerPos);
        }

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
    var playerBoard = document.querySelector(".turn-gameboard");

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
      button.remove();
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("pirate-text", "Fire when ready Cap'n!");

      if (player1.type === "Human" && player2.type === "Human") {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("pass-screenBegin");
        setTimeout(function () {
          (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("redisplayAfterBegin");
        }, 6000);
      }

      if (player1.type === "AI") {
        (0,_gameLoop__WEBPACK_IMPORTED_MODULE_1__.AIstart)(player1, player2);
      }
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

var createBoardDisplay = function createBoardDisplay(player, type, turn) {
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

      if (cell.value.isSunk()) {
        var func = function func() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, "hit-ship")]));
        };

        elements.push.apply(elements, _toConsumableArray(func()));
      } else if (cell.value.get(cell.position) === "hit") {
        var _func = function _func() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player, "hit-ship")]));
        };

        var _cellFunc4 = type === "ship" ? _func() : [createShiplessCell(cell, "hit-ship")];

        elements.push.apply(elements, _toConsumableArray(_cellFunc4));
      } else {
        var _func2 = function _func2() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([].concat(_toConsumableArray((0,_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(shipName, shipLength, shipAxis, player, cell.coords)), [(0,_gamecell__WEBPACK_IMPORTED_MODULE_2__["default"])(cell, player)]));
        };

        var _cellFunc5 = type === "ship" ? _func2() : [createShiplessCell(cell)];

        elements.push.apply(elements, _toConsumableArray(_cellFunc5));
      }
    }
  });
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([elements, (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["gameboard", "".concat(player.playerNum, "-gameboard"), "".concat(turn, "-gameboard")], null, null, [["data-position", player.playerNum]])]);
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





var createMain = function createMain(player, type, turn) {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardHeader__WEBPACK_IMPORTED_MODULE_2__["default"])(player.type === "AI" && player.playerNum === "player2" ? "AI2" : player.name)), _toConsumableArray((0,_boardDisplay__WEBPACK_IMPORTED_MODULE_1__["default"])(player, type, turn))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-section", "".concat(player.playerNum, "-boardSection")])]);
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
/* harmony import */ var _passScreenButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passScreenButton */ "./src/scripts/components/passScreenButton.ts");
/* harmony import */ var _passScreen__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./passScreen */ "./src/scripts/components/passScreen.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }








var createMain = function createMain(player1, player2) {
  var screenTurn = "player1";
  var count = 0;

  var boardSections = function boardSections() {
    if (player1.type === "AI" && player2.type === "AI") {
      return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, "ship", "no-turn")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, "ship", "no-turn")))]);
    }

    if (player1.type === "Human" && player2.type === "Human") {
      return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, screenTurn === "player1" ? "ship" : "shipless", screenTurn === "player1" ? "noturn" : "turn")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, screenTurn === "player2" ? "ship" : "shipless", screenTurn === "player2" ? "noturn" : "turn")))]);
    }

    return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player1.type === "AI" ? "shipless" : "ship", player1.type === "AI" ? "turn" : "noturn")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, player2.type === "AI" ? "shipless" : "ship", player2.type === "AI" ? "turn" : "noturn")))]);
  };

  var button = function button() {
    if (player1.type === "Human" && player2.type === "AI" || player1.type === "AI" && player2.type === "Human") {
      return (0,_beginGameButton__WEBPACK_IMPORTED_MODULE_3__["default"])(player1.type === "AI" ? "player1" : "player2", player1, player2);
    }

    if (player1.type === "Human" && player2.type === "Human" && count === 0) {
      return (0,_passScreenButton__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }

    if (player1.type === "Human" && player2.type === "Human" && count !== 0) {
      return (0,_beginGameButton__WEBPACK_IMPORTED_MODULE_3__["default"])("player1", player1, player2);
    }

    return [];
  };

  var reDisplayBoard = function reDisplayBoard() {
    var component = boardSections();
    var section = document.querySelector(".board-container");

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  var reDisplayAfterFirstPass = function reDisplayAfterFirstPass() {
    var component = (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([boardSections(), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-container"])])), _toConsumableArray(button()))]);
    var section = document.querySelector("main");

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("redisplay", reDisplayBoard);

  var passScreen = function passScreen() {
    screenTurn = screenTurn === "player1" ? "player2" : "player1";
    count += 1;

    if (count === 1) {
      reDisplayAfterFirstPass();
    }
  };

  var passScreenAfterBegin = function passScreenAfterBegin() {
    screenTurn = screenTurn === "player1" ? "player2" : "player1";
    count += 1;
    var component = (0,_passScreen__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var section = document.querySelector(".board-container");

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("pass-screen", passScreen);
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("pass-screenBegin", passScreenAfterBegin);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([boardSections(), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-container"])])), _toConsumableArray(button())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["game-main"])]);
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

/***/ "./src/scripts/components/passScreen.ts":
/*!**********************************************!*\
  !*** ./src/scripts/components/passScreen.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");


var createPassScreen = function createPassScreen() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Pass Screen"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["pass-screen"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPassScreen);

/***/ }),

/***/ "./src/scripts/components/passScreenButton.ts":
/*!****************************************************!*\
  !*** ./src/scripts/components/passScreenButton.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domManipulator */ "./src/scripts/domManipulator.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pubsub */ "./src/scripts/pubsub.ts");



var createPassScreenButton = function createPassScreenButton() {
  var onPassScreen = function onPassScreen() {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.publish)("pass-screen");
  };

  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", ["button", "pass-screen-button"], "Pass Screen!", null, null, [["click", onPassScreen]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["button-section"])]);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPassScreenButton);

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
    var main = document.querySelector("main");

    if (ship instanceof HTMLElement && isShipName(shipName) && main) {
      main.classList.add("unclickable");

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
            main.classList.remove("unclickable");
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
            main.classList.remove("unclickable");
          }, 1000);
          return;
        }
      }

      main.classList.remove("unclickable");
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
        audio.play().then()["catch"](function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfZ2FtZURpc3BsYXlfdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBS0E7O0FBRUEsSUFBTU8scUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUM1QkMsU0FENEIsRUFFNUJDLE9BRjRCLEVBRzVCQyxPQUg0QixFQUl6QjtFQUNILElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLENBQUQsRUFBYztJQUM5QixJQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiO0lBQ0EsSUFBTUMsU0FBUyxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsaUJBQXZCLENBQWxCO0lBQ0EsSUFBTUUsR0FBRyxHQUFHTCxDQUFDLENBQUNNLE1BQWQ7O0lBQ0EsSUFDRUQsR0FBRyxZQUFZRSxXQUFmLElBQ0FOLElBREEsSUFFQUcsU0FBUyxZQUFZRyxXQUh2QixFQUlFO01BQ0EsSUFBTUMsQ0FBQyxHQUFHSCxHQUFHLENBQUNJLFlBQUosQ0FBaUIsUUFBakIsQ0FBVjtNQUNBLElBQU1DLENBQUMsR0FBR0wsR0FBRyxDQUFDSSxZQUFKLENBQWlCLFFBQWpCLENBQVY7TUFDQSxJQUFNRSxRQUFRLEdBQUdQLFNBQVMsQ0FBQ0ssWUFBVixDQUF1QixlQUF2QixDQUFqQjs7TUFDQSxJQUFJRCxDQUFDLElBQUlFLENBQUwsSUFBVUMsUUFBZCxFQUF3QjtRQUN0QixJQUFJZCxPQUFPLENBQUNlLElBQVIsS0FBaUIsT0FBakIsSUFBNEJkLE9BQU8sQ0FBQ2MsSUFBUixLQUFpQixPQUFqRCxFQUEwRDtVQUN4RHJCLHFFQUEwQixDQUN4QixDQUFDc0IsUUFBUSxDQUFDTCxDQUFELEVBQUksRUFBSixDQUFULEVBQWtCSyxRQUFRLENBQUNILENBQUQsRUFBSSxFQUFKLENBQTFCLENBRHdCLEVBRXhCYixPQUZ3QixFQUd4QkMsT0FId0IsRUFJeEJhLFFBQVEsS0FBSyxTQUFiLEdBQXlCLFNBQXpCLEdBQXFDLFNBSmIsQ0FBMUI7UUFNRCxDQVBELE1BT087VUFDTHJCLHdFQUE2QixDQUMzQixDQUFDdUIsUUFBUSxDQUFDTCxDQUFELEVBQUksRUFBSixDQUFULEVBQWtCSyxRQUFRLENBQUNILENBQUQsRUFBSSxFQUFKLENBQTFCLENBRDJCLEVBRTNCYixPQUYyQixFQUczQkMsT0FIMkIsRUFJM0JGLFNBSjJCLENBQTdCO1FBTUQ7O1FBQ0RTLEdBQUcsQ0FBQ1MsbUJBQUosQ0FBd0IsT0FBeEIsRUFBaUNmLFNBQWpDO1FBQ0FFLElBQUksQ0FBQ2MsU0FBTCxDQUFlQyxHQUFmLENBQW1CLGFBQW5CO01BQ0Q7SUFDRjtFQUNGLENBaENEOztFQWtDQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3pCLElBQU1DLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ2lCLGdCQUFULENBQTBCLE9BQTFCLENBQWQ7SUFDQUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsVUFBQ0MsSUFBRCxFQUFVO01BQ3RCQSxJQUFJLENBQUNOLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtJQUNELENBRkQ7SUFHQSxJQUFNTSxXQUFXLEdBQUdwQixRQUFRLENBQUNDLGFBQVQsbUJBQXBCOztJQUNBLElBQUltQixXQUFKLEVBQWlCO01BQ2YsSUFBTUMsS0FBSyxHQUFHRCxXQUFXLENBQUNILGdCQUFaLENBQTZCLFlBQTdCLENBQWQ7TUFDQUksS0FBSyxDQUFDSCxPQUFOLENBQWMsVUFBQ0ksSUFBRCxFQUFVO1FBQ3RCLElBQ0VBLElBQUksQ0FBQ1QsU0FBTCxDQUFlVSxRQUFmLENBQXdCLEtBQXhCLEtBQ0FELElBQUksQ0FBQ1QsU0FBTCxDQUFlVSxRQUFmLENBQXdCLFVBQXhCLENBRkYsRUFHRTtVQUNBO1FBQ0Q7O1FBQ0RELElBQUksQ0FBQ0UsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IzQixTQUEvQjtNQUNELENBUkQ7SUFTRDtFQUNGLENBbEJEOztFQW9CQSxJQUFNNEIsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFrQjtJQUNwQyxJQUFNQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsYUFBckI7O0lBQ0EsSUFBSUQsTUFBTSxZQUFZdEIsV0FBdEIsRUFBbUM7TUFDakNVLFlBQVk7TUFDWnhCLGtEQUFTLENBQUMscUJBQUQsRUFBd0IsWUFBTTtRQUNyQ0MsZ0RBQU8sQ0FBQyxXQUFELENBQVA7UUFDQXVCLFlBQVk7TUFDYixDQUhRLENBQVQ7TUFJQVksTUFBTSxDQUFDRSxNQUFQO01BQ0FyQyxnREFBTyxDQUFDLGFBQUQsRUFBZ0Isd0JBQWhCLENBQVA7O01BQ0EsSUFBSUcsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLE9BQWpCLElBQTRCZCxPQUFPLENBQUNjLElBQVIsS0FBaUIsT0FBakQsRUFBMEQ7UUFDeERsQixnREFBTyxDQUFDLGtCQUFELENBQVA7UUFDQXNDLFVBQVUsQ0FBQyxZQUFNO1VBQ2Z0QyxnREFBTyxDQUFDLHFCQUFELENBQVA7UUFDRCxDQUZTLEVBRVAsSUFGTyxDQUFWO01BR0Q7O01BQ0QsSUFBSUcsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLElBQXJCLEVBQTJCO1FBQ3pCcEIsa0RBQU8sQ0FBQ0ssT0FBRCxFQUFVQyxPQUFWLENBQVA7TUFDRDtJQUNGO0VBQ0YsQ0FwQkQ7O0VBc0JBLE9BQU9WLGdFQUFlLENBQUMsQ0FDckJDLDhEQUFhLENBQ1gsUUFEVyxFQUVYLENBQUMsUUFBRCxFQUFXLG1CQUFYLENBRlcsRUFHWCxRQUhXLEVBSVgsSUFKVyxFQUtYLElBTFcsRUFNWCxDQUFDLENBQUMsT0FBRCxFQUFVc0MsV0FBVixDQUFELENBTlcsQ0FEUSxFQVNyQnRDLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsZ0JBQUQsQ0FBUixDQVRRLENBQUQsQ0FBdEI7QUFXRCxDQTVGRDs7QUE4RkEsaUVBQWVNLHFCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTXdDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBaUI7RUFDbkMsSUFBTUMsR0FBRyxHQUFHRCxHQUFHLEdBQUcsRUFBbEI7RUFDQSxPQUFPRSxNQUFNLENBQUNDLFlBQVAsQ0FBb0JGLEdBQUcsR0FBRyxFQUExQixDQUFQO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNRyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUNoQixJQUFEO0VBQUEsSUFBYVosSUFBYix1RUFBb0IsT0FBcEI7RUFBQSxPQUN6QnZCLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0J1QixJQUF0QixDQUFSLEVBQXFDLElBQXJDLEVBQTJDLElBQTNDLEVBQWlELENBQzVELENBQUMsUUFBRCxZQUFjWSxJQUFJLENBQUNpQixNQUFMLENBQVksQ0FBWixDQUFkLEVBRDRELEVBRTVELENBQUMsUUFBRCxZQUFjakIsSUFBSSxDQUFDaUIsTUFBTCxDQUFZLENBQVosQ0FBZCxFQUY0RCxDQUFqRCxDQURZO0FBQUEsQ0FBM0I7O0FBTUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixDQUN6QkMsTUFEeUIsRUFFekIvQixJQUZ5QixFQUd6QmdDLElBSHlCLEVBSXRCO0VBQ0gsSUFBTUMsUUFBcUIsR0FBRyxFQUE5QjtFQUVBQSxRQUFRLENBQUNDLElBQVQsQ0FBY3pELDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsTUFBRCxFQUFTLGFBQVQsQ0FBUixFQUFpQyxJQUFqQyxFQUF1QyxJQUF2QyxDQUEzQjs7RUFFQSxLQUFLLElBQUkwRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7SUFDOUJGLFFBQVEsQ0FBQ0MsSUFBVCxDQUNFekQsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxNQUFELEVBQVMsYUFBVCxDQUFSLEVBQWlDMEQsQ0FBQyxDQUFDQyxRQUFGLEVBQWpDLEVBQStDLElBQS9DLEVBQXFELENBQ2hFLENBQUMsUUFBRCxZQUFjRCxDQUFkLEVBRGdFLENBQXJELENBRGY7RUFLRDs7RUFFREosTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxLQUFoQixDQUFzQjlCLE9BQXRCLENBQThCLFVBQUNJLElBQUQsRUFBT1ksR0FBUCxFQUFlO0lBQzNDLElBQUlBLEdBQUcsR0FBRyxFQUFOLEtBQWEsQ0FBakIsRUFBb0I7TUFDbEJTLFFBQVEsQ0FBQ0MsSUFBVCxDQUNFekQsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxNQUFELEVBQVMsYUFBVCxDQUFSLEVBQWlDOEMsV0FBVyxDQUFDQyxHQUFELENBQTVDLEVBQW1ELElBQW5ELEVBQXlELENBQ3BFLENBQUMsUUFBRCxZQUFjLENBQUNBLEdBQUcsR0FBRyxFQUFQLEVBQVdZLFFBQVgsRUFBZCxFQURvRSxDQUF6RCxDQURmO0lBS0Q7O0lBQ0QsSUFBSXhCLElBQUksQ0FBQzJCLEtBQUwsS0FBZSxPQUFuQixFQUE0QjtNQUMxQixJQUFNQyxRQUFRLEdBQ1p4QyxJQUFJLEtBQUssTUFBVCxHQUFrQnNCLHFEQUFVLENBQUNWLElBQUQsRUFBT21CLE1BQVAsQ0FBNUIsR0FBNkNILGtCQUFrQixDQUFDaEIsSUFBRCxDQURqRTtNQUVBcUIsUUFBUSxDQUFDQyxJQUFULENBQWNNLFFBQWQ7SUFDRCxDQUpELE1BSU8sSUFBSTVCLElBQUksQ0FBQzJCLEtBQUwsS0FBZSxLQUFuQixFQUEwQjtNQUMvQixJQUFNQyxTQUFRLEdBQ1p4QyxJQUFJLEtBQUssTUFBVCxHQUNJc0IscURBQVUsQ0FBQ1YsSUFBRCxFQUFPbUIsTUFBUCxFQUFlLEtBQWYsQ0FEZCxHQUVJSCxrQkFBa0IsQ0FBQ2hCLElBQUQsRUFBTyxLQUFQLENBSHhCOztNQUlBcUIsUUFBUSxDQUFDQyxJQUFULENBQWNNLFNBQWQ7SUFDRCxDQU5NLE1BTUEsSUFBSTVCLElBQUksQ0FBQ2IsUUFBTCxLQUFrQixDQUF0QixFQUF5QjtNQUM5QixJQUFJYSxJQUFJLENBQUMyQixLQUFMLENBQVdFLEdBQVgsQ0FBZTdCLElBQUksQ0FBQ2IsUUFBcEIsTUFBa0MsS0FBdEMsRUFBNkM7UUFDM0MsSUFBTXlDLFVBQVEsR0FDWnhDLElBQUksS0FBSyxNQUFULEdBQ0lzQixxREFBVSxDQUFDVixJQUFELEVBQU9tQixNQUFQLEVBQWUsVUFBZixDQURkLEdBRUlILGtCQUFrQixDQUFDaEIsSUFBRCxFQUFPLFVBQVAsQ0FIeEI7O1FBSUFxQixRQUFRLENBQUNDLElBQVQsQ0FBY00sVUFBZDtNQUNELENBTkQsTUFNTztRQUNMLElBQU1BLFVBQVEsR0FDWnhDLElBQUksS0FBSyxNQUFULEdBQWtCc0IscURBQVUsQ0FBQ1YsSUFBRCxFQUFPbUIsTUFBUCxDQUE1QixHQUE2Q0gsa0JBQWtCLENBQUNoQixJQUFELENBRGpFOztRQUVBcUIsUUFBUSxDQUFDQyxJQUFULENBQWNNLFVBQWQ7TUFDRDtJQUNGLENBWk0sTUFZQTtNQUNMLElBQU1FLFFBQVEsR0FBRzlCLElBQUksQ0FBQzJCLEtBQUwsQ0FBV0ksSUFBNUI7TUFDQSxJQUFNQyxVQUFVLEdBQUdoQyxJQUFJLENBQUMyQixLQUFMLENBQVdNLE1BQTlCO01BQ0EsSUFBTUMsUUFBUSxHQUFHbEMsSUFBSSxDQUFDMkIsS0FBTCxDQUFXUSxJQUE1Qjs7TUFDQSxJQUFJbkMsSUFBSSxDQUFDMkIsS0FBTCxDQUFXUyxNQUFYLEVBQUosRUFBeUI7UUFDdkIsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU87VUFBQSxPQUNYekUsZ0VBQWUsOEJBQ1Y2QyxpREFBVSxDQUFDcUIsUUFBRCxFQUFXRSxVQUFYLEVBQXVCRSxRQUF2QixFQUFpQ2YsTUFBakMsRUFBeUNuQixJQUFJLENBQUNpQixNQUE5QyxDQURBLElBRWJQLHFEQUFVLENBQUNWLElBQUQsRUFBT21CLE1BQVAsRUFBZSxVQUFmLENBRkcsR0FESjtRQUFBLENBQWI7O1FBS0FFLFFBQVEsQ0FBQ0MsSUFBVCxPQUFBRCxRQUFRLHFCQUFTZ0IsSUFBSSxFQUFiLEVBQVI7TUFDRCxDQVBELE1BT08sSUFBSXJDLElBQUksQ0FBQzJCLEtBQUwsQ0FBV0UsR0FBWCxDQUFlN0IsSUFBSSxDQUFDYixRQUFwQixNQUFrQyxLQUF0QyxFQUE2QztRQUNsRCxJQUFNa0QsS0FBSSxHQUFHLFNBQVBBLEtBQU87VUFBQSxPQUNYekUsZ0VBQWUsOEJBQ1Y2QyxpREFBVSxDQUFDcUIsUUFBRCxFQUFXRSxVQUFYLEVBQXVCRSxRQUF2QixFQUFpQ2YsTUFBakMsRUFBeUNuQixJQUFJLENBQUNpQixNQUE5QyxDQURBLElBRWJQLHFEQUFVLENBQUNWLElBQUQsRUFBT21CLE1BQVAsRUFBZSxVQUFmLENBRkcsR0FESjtRQUFBLENBQWI7O1FBS0EsSUFBTVMsVUFBUSxHQUNaeEMsSUFBSSxLQUFLLE1BQVQsR0FBa0JpRCxLQUFJLEVBQXRCLEdBQTJCLENBQUNyQixrQkFBa0IsQ0FBQ2hCLElBQUQsRUFBTyxVQUFQLENBQW5CLENBRDdCOztRQUVBcUIsUUFBUSxDQUFDQyxJQUFULE9BQUFELFFBQVEscUJBQVNPLFVBQVQsRUFBUjtNQUNELENBVE0sTUFTQTtRQUNMLElBQU1TLE1BQUksR0FBRyxTQUFQQSxNQUFPO1VBQUEsT0FDWHpFLGdFQUFlLDhCQUNWNkMsaURBQVUsQ0FBQ3FCLFFBQUQsRUFBV0UsVUFBWCxFQUF1QkUsUUFBdkIsRUFBaUNmLE1BQWpDLEVBQXlDbkIsSUFBSSxDQUFDaUIsTUFBOUMsQ0FEQSxJQUViUCxxREFBVSxDQUFDVixJQUFELEVBQU9tQixNQUFQLENBRkcsR0FESjtRQUFBLENBQWI7O1FBS0EsSUFBTVMsVUFBUSxHQUFHeEMsSUFBSSxLQUFLLE1BQVQsR0FBa0JpRCxNQUFJLEVBQXRCLEdBQTJCLENBQUNyQixrQkFBa0IsQ0FBQ2hCLElBQUQsQ0FBbkIsQ0FBNUM7O1FBQ0FxQixRQUFRLENBQUNDLElBQVQsT0FBQUQsUUFBUSxxQkFBU08sVUFBVCxFQUFSO01BQ0Q7SUFDRjtFQUNGLENBNUREO0VBNkRBLE9BQU9oRSxnRUFBZSxDQUFDLENBQ3JCeUQsUUFEcUIsRUFFckJ4RCw4REFBYSxDQUNYLEtBRFcsRUFFWCxDQUFDLFdBQUQsWUFBaUJzRCxNQUFNLENBQUNtQixTQUF4QiwyQkFBa0RsQixJQUFsRCxnQkFGVyxFQUdYLElBSFcsRUFJWCxJQUpXLEVBS1gsQ0FBQyxDQUFDLGVBQUQsRUFBa0JELE1BQU0sQ0FBQ21CLFNBQXpCLENBQUQsQ0FMVyxDQUZRLENBQUQsQ0FBdEI7QUFVRCxDQXhGRDs7QUEwRkEsaUVBQWVwQixrQkFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDN0dBOztBQUVBLElBQU1xQixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNSLElBQUQ7RUFBQSxPQUN4Qm5FLGdFQUFlLENBQUMsQ0FDZEMsOERBQWEsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFha0UsSUFBYixDQURDLEVBRWRsRSw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLGNBQUQsQ0FBUixDQUZDLENBQUQsQ0FEUztBQUFBLENBQTFCOztBQU1BLGlFQUFlMEUsaUJBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBOztBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQ2pCdEIsTUFEaUIsRUFFakIvQixJQUZpQixFQUdqQmdDLElBSGlCO0VBQUEsT0FLakJ4RCxnRUFBZSxDQUFDLDhCQUVUNEUsd0RBQWlCLENBQ2xCckIsTUFBTSxDQUFDL0IsSUFBUCxLQUFnQixJQUFoQixJQUF3QitCLE1BQU0sQ0FBQ21CLFNBQVAsS0FBcUIsU0FBN0MsR0FDSSxLQURKLEdBRUluQixNQUFNLENBQUNZLElBSE8sQ0FGUixzQkFPVGIseURBQWtCLENBQUNDLE1BQUQsRUFBUy9CLElBQVQsRUFBZWdDLElBQWYsQ0FQVCxJQVNkdkQsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxlQUFELFlBQXFCc0QsTUFBTSxDQUFDbUIsU0FBNUIsbUJBQVIsQ0FUQyxDQUFELENBTEU7QUFBQSxDQUFuQjs7QUFpQkEsaUVBQWVHLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07RUFDM0IsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsUUFBRCxFQUEwQjtJQUMxQyxJQUFNQyxHQUFHLEdBQUdyRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWjtJQUNBLElBQU1xRSxLQUFLLEdBQUd0RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBZDs7SUFDQSxJQUFJcUUsS0FBSyxZQUFZQyxnQkFBakIsSUFBcUNGLEdBQUcsWUFBWWhFLFdBQXhELEVBQXFFO01BQ25FLElBQUlnRSxHQUFHLENBQUN4RCxTQUFKLENBQWNVLFFBQWQsQ0FBdUIsTUFBdkIsQ0FBSixFQUFvQztRQUNsQyxJQUFNaUQsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtVQUNwQkosUUFBUTtVQUNSRSxLQUFLLENBQUMxRCxtQkFBTixDQUEwQixPQUExQixFQUFtQzRELE9BQW5DO1FBQ0QsQ0FIRDs7UUFJQUYsS0FBSyxDQUFDOUMsZ0JBQU4sQ0FBdUIsT0FBdkIsRUFBZ0NnRCxPQUFoQztRQUNBRixLQUFLLENBQ0ZHLElBREgsR0FFR0MsSUFGSCxZQUdTLFlBQU07VUFDWCxNQUFNLElBQUlDLEtBQUosQ0FBVSxzQkFBVixDQUFOO1FBQ0QsQ0FMSDtNQU1EO0lBQ0Y7RUFDRixDQWxCRDs7RUFvQkFwRixrREFBUyxDQUFDLFdBQUQsRUFBYyxVQUFDcUYsR0FBRCxFQUFrQjtJQUN2QyxJQUFNQyxFQUFFLEdBQUdELEdBQVg7SUFDQVQsU0FBUyxDQUFDVSxFQUFELENBQVQ7RUFDRCxDQUhRLENBQVQ7RUFLQSxPQUFPM0YsZ0VBQWUsQ0FBQyxDQUNyQixDQUNFQyw4REFBYSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLENBQ3hDLENBQUMsS0FBRCxFQUFRNkUsNERBQVIsQ0FEd0MsRUFFeEMsQ0FBQyxNQUFELEVBQVMsWUFBVCxDQUZ3QyxDQUE3QixDQURmLEVBS0U3RSw4REFBYSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLElBQXZCLEVBQTZCLENBQ3hDLENBQUMsS0FBRCxFQUFROEUsNERBQVIsQ0FEd0MsRUFFeEMsQ0FBQyxNQUFELEVBQVMsV0FBVCxDQUZ3QyxDQUE3QixDQUxmLENBRHFCLEVBV3JCOUUsOERBQWEsQ0FBQyxPQUFELEVBQVUsQ0FBQyxXQUFELENBQVYsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsQ0FYUSxDQUFELENBQXRCO0FBYUQsQ0F2Q0Q7O0FBeUNBLGlFQUFlK0UsY0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1pQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQ3RCeEYsT0FEc0IsRUFFdEJDLE9BRnNCO0VBQUEsT0FJdEJWLGdFQUFlLENBQUMsOEJBRVQ0Rix1REFBWSxFQUZILHNCQUdUZixxREFBVSxDQUFDcEUsT0FBRCxFQUFVQyxPQUFWLENBSEQsc0JBSVRtRixtREFBWSxFQUpILHNCQUtUQyx5REFBWSxFQUxILHNCQU1UQyx5REFBWSxFQU5ILHNCQU9UZiwyREFBYyxFQVBMLHNCQVFUZ0IseURBQVksRUFSSCxJQVVkL0YsOERBQWEsQ0FBQyxLQUFELEVBQVEsQ0FBQyxXQUFELEVBQWMsZ0JBQWQsQ0FBUixDQVZDLENBQUQsQ0FKTztBQUFBLENBQXhCOztBQWlCQSxpRUFBZWdHLGVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTCxZQUFZLEdBQUcsU0FBZkEsWUFBZTtFQUFBLE9BQ25CNUYsZ0VBQWUsQ0FBQyxFQUVaQyw4REFBYSxDQUFDLElBQUQsRUFBTyxDQUFDLG1CQUFELENBQVAsRUFBOEIsWUFBOUIsQ0FGRCw0QkFHVGtHLHdEQUFpQixDQUFDLHdCQUFELENBSFIsc0JBSVRELHNEQUFlLEVBSk4sSUFNZGpHLDhEQUFhLENBQUMsUUFBRCxFQUFXLENBQUMsYUFBRCxDQUFYLENBTkMsQ0FBRCxDQURJO0FBQUEsQ0FBckI7O0FBVUEsaUVBQWUyRixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNZixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDcEUsT0FBRCxFQUE2QkMsT0FBN0IsRUFBNEQ7RUFDN0UsSUFBSStGLFVBQWlDLEdBQUcsU0FBeEM7RUFDQSxJQUFJQyxLQUFLLEdBQUcsQ0FBWjs7RUFDQSxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07SUFDMUIsSUFBSWxHLE9BQU8sQ0FBQ2UsSUFBUixLQUFpQixJQUFqQixJQUF5QmQsT0FBTyxDQUFDYyxJQUFSLEtBQWlCLElBQTlDLEVBQW9EO01BQ2xELE9BQU94QixnRUFBZSxDQUFDLDhCQUVoQnFHLHlEQUFrQixDQUFDNUYsT0FBRCxFQUFVLE1BQVYsRUFBa0IsU0FBbEIsQ0FGRixzQkFHaEI0Rix5REFBa0IsQ0FBQzNGLE9BQUQsRUFBVSxNQUFWLEVBQWtCLFNBQWxCLENBSEYsR0FBRCxDQUF0QjtJQU1EOztJQUNELElBQUlELE9BQU8sQ0FBQ2UsSUFBUixLQUFpQixPQUFqQixJQUE0QmQsT0FBTyxDQUFDYyxJQUFSLEtBQWlCLE9BQWpELEVBQTBEO01BQ3hELE9BQU94QixnRUFBZSxDQUFDLDhCQUVoQnFHLHlEQUFrQixDQUNuQjVGLE9BRG1CLEVBRW5CZ0csVUFBVSxLQUFLLFNBQWYsR0FBMkIsTUFBM0IsR0FBb0MsVUFGakIsRUFHbkJBLFVBQVUsS0FBSyxTQUFmLEdBQTJCLFFBQTNCLEdBQXNDLE1BSG5CLENBRkYsc0JBT2hCSix5REFBa0IsQ0FDbkIzRixPQURtQixFQUVuQitGLFVBQVUsS0FBSyxTQUFmLEdBQTJCLE1BQTNCLEdBQW9DLFVBRmpCLEVBR25CQSxVQUFVLEtBQUssU0FBZixHQUEyQixRQUEzQixHQUFzQyxNQUhuQixDQVBGLEdBQUQsQ0FBdEI7SUFjRDs7SUFDRCxPQUFPekcsZ0VBQWUsQ0FBQyw4QkFFaEJxRyx5REFBa0IsQ0FDbkI1RixPQURtQixFQUVuQkEsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLElBQWpCLEdBQXdCLFVBQXhCLEdBQXFDLE1BRmxCLEVBR25CZixPQUFPLENBQUNlLElBQVIsS0FBaUIsSUFBakIsR0FBd0IsTUFBeEIsR0FBaUMsUUFIZCxDQUZGLHNCQU9oQjZFLHlEQUFrQixDQUNuQjNGLE9BRG1CLEVBRW5CQSxPQUFPLENBQUNjLElBQVIsS0FBaUIsSUFBakIsR0FBd0IsVUFBeEIsR0FBcUMsTUFGbEIsRUFHbkJkLE9BQU8sQ0FBQ2MsSUFBUixLQUFpQixJQUFqQixHQUF3QixNQUF4QixHQUFpQyxRQUhkLENBUEYsR0FBRCxDQUF0QjtFQWNELENBdkNEOztFQXlDQSxJQUFNaUIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtJQUNuQixJQUNHaEMsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLE9BQWpCLElBQTRCZCxPQUFPLENBQUNjLElBQVIsS0FBaUIsSUFBOUMsSUFDQ2YsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLElBQWpCLElBQXlCZCxPQUFPLENBQUNjLElBQVIsS0FBaUIsT0FGN0MsRUFHRTtNQUNBLE9BQU84RSw0REFBZSxDQUNwQjdGLE9BQU8sQ0FBQ2UsSUFBUixLQUFpQixJQUFqQixHQUF3QixTQUF4QixHQUFvQyxTQURoQixFQUVwQmYsT0FGb0IsRUFHcEJDLE9BSG9CLENBQXRCO0lBS0Q7O0lBQ0QsSUFBSUQsT0FBTyxDQUFDZSxJQUFSLEtBQWlCLE9BQWpCLElBQTRCZCxPQUFPLENBQUNjLElBQVIsS0FBaUIsT0FBN0MsSUFBd0RrRixLQUFLLEtBQUssQ0FBdEUsRUFBeUU7TUFDdkUsT0FBT0gsNkRBQXNCLEVBQTdCO0lBQ0Q7O0lBQ0QsSUFBSTlGLE9BQU8sQ0FBQ2UsSUFBUixLQUFpQixPQUFqQixJQUE0QmQsT0FBTyxDQUFDYyxJQUFSLEtBQWlCLE9BQTdDLElBQXdEa0YsS0FBSyxLQUFLLENBQXRFLEVBQXlFO01BQ3ZFLE9BQU9KLDREQUFlLENBQUMsU0FBRCxFQUFZN0YsT0FBWixFQUFxQkMsT0FBckIsQ0FBdEI7SUFDRDs7SUFDRCxPQUFPLEVBQVA7RUFDRCxDQWxCRDs7RUFvQkEsSUFBTWtHLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtJQUMzQixJQUFNQyxTQUFTLEdBQUdGLGFBQWEsRUFBL0I7SUFFQSxJQUFNRyxPQUFPLEdBQUdoRyxRQUFRLENBQUNDLGFBQVQsb0JBQWhCOztJQUNBLElBQUkrRixPQUFPLFlBQVkzRixXQUF2QixFQUFvQztNQUNsQ2lGLDJEQUFVLENBQUNVLE9BQUQsRUFBVSxDQUFDRCxTQUFELENBQVYsQ0FBVjtJQUNEO0VBQ0YsQ0FQRDs7RUFTQSxJQUFNRSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07SUFDcEMsSUFBTUYsU0FBUyxHQUFHN0csZ0VBQWUsQ0FBQyw4QkFFM0JBLGdFQUFlLENBQUMsQ0FDakIyRyxhQUFhLEVBREksRUFFakIxRyw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLGlCQUFELENBQVIsQ0FGSSxDQUFELENBRlksc0JBTTNCd0MsTUFBTSxFQU5xQixHQUFELENBQWpDO0lBVUEsSUFBTXFFLE9BQU8sR0FBR2hHLFFBQVEsQ0FBQ0MsYUFBVCxRQUFoQjs7SUFDQSxJQUFJK0YsT0FBTyxZQUFZM0YsV0FBdkIsRUFBb0M7TUFDbENpRiwyREFBVSxDQUFDVSxPQUFELEVBQVUsQ0FBQ0QsU0FBRCxDQUFWLENBQVY7SUFDRDtFQUNGLENBZkQ7O0VBaUJBeEcsa0RBQVMsQ0FBQyxXQUFELEVBQWN1RyxjQUFkLENBQVQ7O0VBRUEsSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtJQUN2QlAsVUFBVSxHQUFHQSxVQUFVLEtBQUssU0FBZixHQUEyQixTQUEzQixHQUF1QyxTQUFwRDtJQUNBQyxLQUFLLElBQUksQ0FBVDs7SUFDQSxJQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtNQUNmSyx1QkFBdUI7SUFDeEI7RUFDRixDQU5EOztFQVFBLElBQU1FLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUIsR0FBTTtJQUNqQ1IsVUFBVSxHQUFHQSxVQUFVLEtBQUssU0FBZixHQUEyQixTQUEzQixHQUF1QyxTQUFwRDtJQUNBQyxLQUFLLElBQUksQ0FBVDtJQUNBLElBQU1HLFNBQVMsR0FBR0wsdURBQWdCLEVBQWxDO0lBRUEsSUFBTU0sT0FBTyxHQUFHaEcsUUFBUSxDQUFDQyxhQUFULG9CQUFoQjs7SUFDQSxJQUFJK0YsT0FBTyxZQUFZM0YsV0FBdkIsRUFBb0M7TUFDbENpRiwyREFBVSxDQUFDVSxPQUFELEVBQVUsQ0FBQ0QsU0FBRCxDQUFWLENBQVY7SUFDRDtFQUNGLENBVEQ7O0VBV0F4RyxrREFBUyxDQUFDLGFBQUQsRUFBZ0IyRyxVQUFoQixDQUFUO0VBQ0EzRyxrREFBUyxDQUFDLGtCQUFELEVBQXFCNEcsb0JBQXJCLENBQVQ7RUFFQSxPQUFPakgsZ0VBQWUsQ0FBQyw4QkFFaEJBLGdFQUFlLENBQUMsQ0FDakIyRyxhQUFhLEVBREksRUFFakIxRyw4REFBYSxDQUFDLEtBQUQsRUFBUSxDQUFDLGlCQUFELENBQVIsQ0FGSSxDQUFELENBRkMsc0JBTWhCd0MsTUFBTSxFQU5VLElBUXJCeEMsOERBQWEsQ0FBQyxNQUFELEVBQVMsQ0FBQyxXQUFELENBQVQsQ0FSUSxDQUFELENBQXRCO0FBVUQsQ0E1SEQ7O0FBOEhBLGlFQUFlNEUsVUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBOztBQUVBLElBQU1xQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDM0MsSUFBRDtFQUFBLE9BQ2JBLElBQUksS0FBSyxVQUFULElBQXVCQSxJQUFJLEtBQUssWUFEbkI7QUFBQSxDQUFmOztBQUdBLElBQU00QyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDaEQsSUFBRCxFQUF3RDtFQUN6RSxJQUFNaUQsS0FBSyxHQUFHLENBQUMsU0FBRCxFQUFZLFlBQVosRUFBMEIsU0FBMUIsRUFBcUMsV0FBckMsRUFBa0QsV0FBbEQsQ0FBZDtFQUNBLE9BQU9BLEtBQUssQ0FBQ0MsUUFBTixDQUFlbEQsSUFBSSxJQUFJLEVBQXZCLENBQVA7QUFDRCxDQUhEOztBQUtBLElBQU1yQixVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDVixJQUFELEVBQWFtQixNQUFiLEVBQTJEO0VBQUEsSUFBbkIvQixJQUFtQix1RUFBWixPQUFZOztFQUM1RSxJQUFNOEYsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQzlFLEtBQUQsRUFBa0I7SUFDbENBLEtBQUssQ0FBQytFLGNBQU47SUFDQSxJQUFNQyxVQUFVLEdBQUdoRixLQUFLLENBQUNFLGFBQXpCOztJQUNBLElBQUlGLEtBQUssWUFBWWlGLFNBQWpCLElBQThCRCxVQUFVLFlBQVlyRyxXQUF4RCxFQUFxRTtNQUFBOztNQUNuRSxJQUFNdUcsRUFBRSxHQUFHLHdCQUFBbEYsS0FBSyxDQUFDbUYsWUFBTiw0RUFBb0JDLE9BQXBCLENBQTRCLFlBQTVCLE1BQTZDLEVBQXhEO01BQ0EsSUFBTTNGLElBQUksR0FBR25CLFFBQVEsQ0FBQ0MsYUFBVCxZQUEyQjJHLEVBQTNCLEVBQWI7TUFDQSxJQUFNdEcsQ0FBQyxHQUFHb0csVUFBVSxDQUFDbkcsWUFBWCxDQUF3QixRQUF4QixDQUFWO01BQ0EsSUFBTUMsQ0FBQyxHQUFHa0csVUFBVSxDQUFDbkcsWUFBWCxDQUF3QixRQUF4QixDQUFWO01BQ0EsSUFBTThDLElBQUksR0FBR2xDLElBQUgsYUFBR0EsSUFBSCx1QkFBR0EsSUFBSSxDQUFFWixZQUFOLENBQW1CLFdBQW5CLENBQWI7TUFDQSxJQUFNa0QsSUFBSSxHQUFHdEMsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVaLFlBQU4sQ0FBbUIsV0FBbkIsQ0FBYjs7TUFDQSxJQUFJRCxDQUFDLElBQUlFLENBQUwsSUFBVTRGLE1BQU0sQ0FBQzNDLElBQUQsQ0FBaEIsSUFBMEI0QyxVQUFVLENBQUNoRCxJQUFELENBQXhDLEVBQWdEO1FBQzlDLElBQU1kLE1BQXdCLEdBQUcsQ0FBQzVCLFFBQVEsQ0FBQ0wsQ0FBRCxFQUFJLEVBQUosQ0FBVCxFQUFrQkssUUFBUSxDQUFDSCxDQUFELEVBQUksRUFBSixDQUExQixDQUFqQzs7UUFDQSxJQUNFaUMsTUFBTSxDQUFDTSxRQUFQLENBQ0dnRSxrQkFESCxDQUNzQnRELElBRHRCLEVBQzRCSixJQUQ1QixFQUNrQ3RCLDZDQURsQyxFQUVHaUYsSUFGSCxDQUVRLFVBQUMvRCxLQUFEO1VBQUEsT0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhVixNQUFNLENBQUMsQ0FBRCxDQUFuQixJQUEwQlUsS0FBSyxDQUFDLENBQUQsQ0FBTCxLQUFhVixNQUFNLENBQUMsQ0FBRCxDQUF4RDtRQUFBLENBRlIsQ0FERixFQUlFO1VBQ0FtRSxVQUFVLENBQUM3RixTQUFYLENBQXFCQyxHQUFyQixDQUF5QixxQkFBekI7UUFDRCxDQU5ELE1BTU87VUFDTDRGLFVBQVUsQ0FBQzdGLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLFdBQXpCO1FBQ0Q7TUFDRjtJQUNGO0VBQ0YsQ0F2QkQ7O0VBeUJBLElBQU1tRyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDdkYsS0FBRCxFQUFrQjtJQUNqQ0EsS0FBSyxDQUFDK0UsY0FBTjtJQUNBLElBQU1DLFVBQVUsR0FBR2hGLEtBQUssQ0FBQ0UsYUFBekI7O0lBQ0EsSUFBSUYsS0FBSyxZQUFZaUYsU0FBakIsSUFBOEJELFVBQVUsWUFBWXJHLFdBQXhELEVBQXFFO01BQUE7O01BQ25FLElBQU11RyxFQUFFLEdBQUcseUJBQUFsRixLQUFLLENBQUNtRixZQUFOLDhFQUFvQkMsT0FBcEIsQ0FBNEIsWUFBNUIsTUFBNkMsRUFBeEQ7TUFDQSxJQUFNM0YsSUFBSSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULFlBQTJCMkcsRUFBM0IsRUFBYjtNQUNBLElBQU10RyxDQUFDLEdBQUdvRyxVQUFVLENBQUNuRyxZQUFYLENBQXdCLFFBQXhCLENBQVY7TUFDQSxJQUFNQyxDQUFDLEdBQUdrRyxVQUFVLENBQUNuRyxZQUFYLENBQXdCLFFBQXhCLENBQVY7TUFDQSxJQUFNOEMsSUFBSSxHQUFHbEMsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVaLFlBQU4sQ0FBbUIsV0FBbkIsQ0FBYjtNQUNBLElBQU1rRCxJQUFJLEdBQUd0QyxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVosWUFBTixDQUFtQixXQUFuQixDQUFiOztNQUNBLElBQUlELENBQUMsSUFBSUUsQ0FBTCxJQUFVNEYsTUFBTSxDQUFDM0MsSUFBRCxDQUFoQixJQUEwQjRDLFVBQVUsQ0FBQ2hELElBQUQsQ0FBeEMsRUFBZ0Q7UUFDOUMsSUFBTWQsTUFBd0IsR0FBRyxDQUFDNUIsUUFBUSxDQUFDTCxDQUFELEVBQUksRUFBSixDQUFULEVBQWtCSyxRQUFRLENBQUNILENBQUQsRUFBSSxFQUFKLENBQTFCLENBQWpDOztRQUNBLElBQ0VpQyxNQUFNLENBQUNNLFFBQVAsQ0FDR2dFLGtCQURILENBQ3NCdEQsSUFEdEIsRUFDNEJKLElBRDVCLEVBQ2tDdEIsNkNBRGxDLEVBRUdpRixJQUZILENBRVEsVUFBQy9ELEtBQUQ7VUFBQSxPQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFWLE1BQU0sQ0FBQyxDQUFELENBQW5CLElBQTBCVSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFWLE1BQU0sQ0FBQyxDQUFELENBQXhEO1FBQUEsQ0FGUixDQURGLEVBSUU7VUFDQW1FLFVBQVUsQ0FBQzdGLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLHFCQUF6QjtRQUNELENBTkQsTUFNTztVQUNMNEYsVUFBVSxDQUFDN0YsU0FBWCxDQUFxQkMsR0FBckIsQ0FBeUIsV0FBekI7UUFDRDtNQUNGO0lBQ0Y7RUFDRixDQXZCRDs7RUF5QkEsSUFBTW9HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUN4RixLQUFELEVBQWtCO0lBQ2xDLElBQU1nRixVQUFVLEdBQUdoRixLQUFLLENBQUNFLGFBQXpCOztJQUNBLElBQUk4RSxVQUFVLFlBQVlyRyxXQUExQixFQUF1QztNQUNyQ3FHLFVBQVUsQ0FBQzdGLFNBQVgsQ0FBcUJnQixNQUFyQixDQUE0QixxQkFBNUI7TUFDQTZFLFVBQVUsQ0FBQzdGLFNBQVgsQ0FBcUJnQixNQUFyQixDQUE0QixXQUE1QjtJQUNEO0VBQ0YsQ0FORDs7RUFRQSxJQUFNc0YsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ3pGLEtBQUQsRUFBa0I7SUFDN0IsSUFBTWdGLFVBQVUsR0FBR2hGLEtBQUssQ0FBQ0UsYUFBekI7O0lBQ0EsSUFBSUYsS0FBSyxZQUFZaUYsU0FBakIsSUFBOEJELFVBQVUsWUFBWXJHLFdBQXhELEVBQXFFO01BQUE7O01BQ25FLElBQU11RyxFQUFFLEdBQUcseUJBQUFsRixLQUFLLENBQUNtRixZQUFOLDhFQUFvQkMsT0FBcEIsQ0FBNEIsWUFBNUIsTUFBNkMsRUFBeEQ7TUFDQXBGLEtBQUssQ0FBQytFLGNBQU47TUFDQSxJQUFNdEYsSUFBSSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULFlBQTJCMkcsRUFBM0IsRUFBYjtNQUNBLElBQU10RyxDQUFDLEdBQUdvRyxVQUFVLENBQUNuRyxZQUFYLENBQXdCLFFBQXhCLENBQVY7TUFDQSxJQUFNQyxDQUFDLEdBQUdrRyxVQUFVLENBQUNuRyxZQUFYLENBQXdCLFFBQXhCLENBQVY7TUFDQSxJQUFNOEMsSUFBSSxHQUFHbEMsSUFBSCxhQUFHQSxJQUFILHVCQUFHQSxJQUFJLENBQUVaLFlBQU4sQ0FBbUIsV0FBbkIsQ0FBYjtNQUNBLElBQU1rRCxJQUFJLEdBQUd0QyxJQUFILGFBQUdBLElBQUgsdUJBQUdBLElBQUksQ0FBRVosWUFBTixDQUFtQixXQUFuQixDQUFiOztNQUNBLElBQUk2RixNQUFNLENBQUMzQyxJQUFELENBQU4sSUFBZ0I0QyxVQUFVLENBQUNoRCxJQUFELENBQTFCLElBQW9DdUQsRUFBcEMsSUFBMEN6RixJQUExQyxJQUFrRGIsQ0FBbEQsSUFBdURFLENBQTNELEVBQThEO1FBQzVELElBQU0rQixNQUF3QixHQUFHLENBQUM1QixRQUFRLENBQUNMLENBQUQsRUFBSSxFQUFKLENBQVQsRUFBa0JLLFFBQVEsQ0FBQ0gsQ0FBRCxFQUFJLEVBQUosQ0FBMUIsQ0FBakM7O1FBQ0EsSUFDRWlDLE1BQU0sQ0FBQ00sUUFBUCxDQUNHZ0Usa0JBREgsQ0FDc0J0RCxJQUR0QixFQUM0QkosSUFENUIsRUFDa0N0Qiw2Q0FEbEMsRUFFR2lGLElBRkgsQ0FFUSxVQUFDL0QsS0FBRDtVQUFBLE9BQVdBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBbkIsSUFBMEJVLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBeEQ7UUFBQSxDQUZSLENBREYsRUFJRTtVQUNBRSxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JxRSxTQUFoQixDQUEwQnJGLDZDQUExQixFQUFzQ1EsTUFBdEMsRUFBOENrQixJQUE5QyxFQUFvREosSUFBcEQ7VUFDQTdELGdEQUFPLENBQUMsV0FBRCxDQUFQO1FBQ0QsQ0FQRCxNQU9PO1VBQ0xrSCxVQUFVLENBQUM3RixTQUFYLENBQXFCZ0IsTUFBckIsQ0FBNEIsV0FBNUI7VUFDQTZFLFVBQVUsQ0FBQzdGLFNBQVgsQ0FBcUJnQixNQUFyQixDQUE0QixxQkFBNUI7UUFDRDtNQUNGO0lBQ0Y7RUFDRixDQXpCRDs7RUEyQkEsT0FBTzFDLDhEQUFhLENBQ2xCLEtBRGtCLEVBRWxCLENBQUMsTUFBRCxFQUFTLFdBQVQsRUFBc0J1QixJQUF0QixDQUZrQixFQUdsQixJQUhrQixFQUlsQixJQUprQixFQUtsQixDQUNFLENBQUMsUUFBRCxZQUFjWSxJQUFJLENBQUNpQixNQUFMLENBQVksQ0FBWixDQUFkLEVBREYsRUFFRSxDQUFDLFFBQUQsWUFBY2pCLElBQUksQ0FBQ2lCLE1BQUwsQ0FBWSxDQUFaLENBQWQsRUFGRixDQUxrQixFQVNsQixDQUNFLENBQUMsV0FBRCxFQUFjaUUsU0FBZCxDQURGLEVBRUUsQ0FBQyxVQUFELEVBQWFTLFFBQWIsQ0FGRixFQUdFLENBQUMsV0FBRCxFQUFjQyxTQUFkLENBSEYsRUFJRSxDQUFDLE1BQUQsRUFBU0MsSUFBVCxDQUpGLENBVGtCLENBQXBCO0FBZ0JELENBdEdEOztBQXdHQSxpRUFBZW5GLFVBQWY7Ozs7Ozs7Ozs7Ozs7OztBQ3pIQTs7QUFFQSxJQUFNMEQsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtFQUFBLE9BQ3ZCeEcsZ0VBQWUsQ0FBQyxDQUNkQyw4REFBYSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWMsYUFBZCxDQURDLEVBRWRBLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsYUFBRCxDQUFSLENBRkMsQ0FBRCxDQURRO0FBQUEsQ0FBekI7O0FBTUEsaUVBQWV1RyxnQkFBZjs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0FBRUE7O0FBRUEsSUFBTUQsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0VBQ25DLElBQU00QixZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0lBQ3pCN0gsZ0RBQU8sQ0FBQyxhQUFELENBQVA7RUFDRCxDQUZEOztFQUdBLE9BQU9OLGdFQUFlLENBQUMsQ0FDckJDLDhEQUFhLENBQ1gsUUFEVyxFQUVYLENBQUMsUUFBRCxFQUFXLG9CQUFYLENBRlcsRUFHWCxjQUhXLEVBSVgsSUFKVyxFQUtYLElBTFcsRUFNWCxDQUFDLENBQUMsT0FBRCxFQUFVa0ksWUFBVixDQUFELENBTlcsQ0FEUSxFQVNyQmxJLDhEQUFhLENBQUMsS0FBRCxFQUFRLENBQUMsZ0JBQUQsQ0FBUixDQVRRLENBQUQsQ0FBdEI7QUFXRCxDQWZEOztBQWlCQSxpRUFBZXNHLHNCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBS0E7QUFDQTtBQUNBOztBQUVBLElBQU1ZLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNoRCxJQUFELEVBQXdEO0VBQ3pFLElBQU1pRCxLQUFLLEdBQUcsQ0FBQyxTQUFELEVBQVksWUFBWixFQUEwQixTQUExQixFQUFxQyxXQUFyQyxFQUFrRCxXQUFsRCxDQUFkO0VBQ0EsT0FBT0EsS0FBSyxDQUFDQyxRQUFOLENBQWVsRCxJQUFJLElBQUksRUFBdkIsQ0FBUDtBQUNELENBSEQ7O0FBS0EsSUFBTXRCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQ2pCcUIsUUFEaUIsRUFFakJFLFVBRmlCLEVBR2pCRyxJQUhpQixFQUlqQmhCLE1BSmlCLEVBS2pCRixNQUxpQixFQU1kO0VBQ0gsSUFBTWlGLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUM5RixLQUFELEVBQWtCO0lBQ25DLElBQU1QLElBQUksR0FBR08sS0FBSyxDQUFDRSxhQUFuQjtJQUNBLElBQU03QixJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFiOztJQUNBLElBQUlrQixJQUFJLFlBQVlkLFdBQWhCLElBQStCZ0csVUFBVSxDQUFDakQsUUFBRCxDQUF6QyxJQUF1RHJELElBQTNELEVBQWlFO01BQy9EQSxJQUFJLENBQUNjLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjs7TUFDQSxJQUFJSyxJQUFJLENBQUNOLFNBQUwsQ0FBZVUsUUFBZixDQUF3QixVQUF4QixDQUFKLEVBQXlDO1FBQ3ZDa0IsTUFBTSxDQUFDTSxRQUFQLENBQWdCMEUsVUFBaEIsQ0FBMkJyRSxRQUEzQjtRQUNBLElBQU1zRSxXQUFXLEdBQUdqRixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JnRSxrQkFBaEIsQ0FDbEIsWUFEa0IsRUFFbEIzRCxRQUZrQixFQUdsQm1FLDZDQUhrQixDQUFwQjs7UUFLQSxJQUNFRyxXQUFXLENBQUNWLElBQVosQ0FDRSxVQUFDL0QsS0FBRDtVQUFBLE9BQVdBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBbkIsSUFBMEJVLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBeEQ7UUFBQSxDQURGLENBREYsRUFJRTtVQUNBRSxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JxRSxTQUFoQixDQUEwQkcsNkNBQTFCLEVBQW9DaEYsTUFBcEMsRUFBNEMsWUFBNUMsRUFBMERhLFFBQTFEO1FBQ0QsQ0FORCxNQU1PO1VBQ0xYLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQnFFLFNBQWhCLENBQTBCRyw2Q0FBMUIsRUFBb0NoRixNQUFwQyxFQUE0QyxVQUE1QyxFQUF3RGEsUUFBeEQ7VUFDQWpDLElBQUksQ0FBQ04sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO1VBQ0FnQixVQUFVLENBQUMsWUFBTTtZQUNmdEMsZ0RBQU8sQ0FBQyxXQUFELENBQVA7WUFDQU8sSUFBSSxDQUFDYyxTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCO1VBQ0QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtVQUlBO1FBQ0Q7TUFDRixDQXRCRCxNQXNCTztRQUNMWSxNQUFNLENBQUNNLFFBQVAsQ0FBZ0IwRSxVQUFoQixDQUEyQnJFLFFBQTNCOztRQUNBLElBQU1zRSxZQUFXLEdBQUdqRixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JnRSxrQkFBaEIsQ0FDbEIsVUFEa0IsRUFFbEIzRCxRQUZrQixFQUdsQm1FLDZDQUhrQixDQUFwQjs7UUFLQSxJQUNFRyxZQUFXLENBQUNWLElBQVosQ0FDRSxVQUFDL0QsS0FBRDtVQUFBLE9BQVdBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBbkIsSUFBMEJVLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYVYsTUFBTSxDQUFDLENBQUQsQ0FBeEQ7UUFBQSxDQURGLENBREYsRUFJRTtVQUNBRSxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JxRSxTQUFoQixDQUEwQkcsNkNBQTFCLEVBQW9DaEYsTUFBcEMsRUFBNEMsVUFBNUMsRUFBd0RhLFFBQXhEO1FBQ0QsQ0FORCxNQU1PO1VBQ0xYLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQnFFLFNBQWhCLENBQTBCRyw2Q0FBMUIsRUFBb0NoRixNQUFwQyxFQUE0QyxZQUE1QyxFQUEwRGEsUUFBMUQ7VUFDQWpDLElBQUksQ0FBQ04sU0FBTCxDQUFlQyxHQUFmLENBQW1CLFlBQW5CO1VBQ0FnQixVQUFVLENBQUMsWUFBTTtZQUNmdEMsZ0RBQU8sQ0FBQyxXQUFELENBQVA7WUFDQU8sSUFBSSxDQUFDYyxTQUFMLENBQWVnQixNQUFmLENBQXNCLGFBQXRCO1VBQ0QsQ0FIUyxFQUdQLElBSE8sQ0FBVjtVQUlBO1FBQ0Q7TUFDRjs7TUFDRDlCLElBQUksQ0FBQ2MsU0FBTCxDQUFlZ0IsTUFBZixDQUFzQixhQUF0QjtJQUNEOztJQUNEckMsZ0RBQU8sQ0FBQyxXQUFELENBQVA7RUFDRCxDQXJERDs7RUF1REEsSUFBTW1JLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNqRyxLQUFELEVBQWtCO0lBQ2xDLElBQU1QLElBQUksR0FBR08sS0FBSyxDQUFDRSxhQUFuQjs7SUFDQSxJQUNFRixLQUFLLFlBQVlpRixTQUFqQixJQUNBeEYsSUFBSSxZQUFZZCxXQURoQixJQUVBZ0csVUFBVSxDQUFDakQsUUFBRCxDQUhaLEVBSUU7TUFBQTs7TUFDQSx1QkFBQTFCLEtBQUssQ0FBQ21GLFlBQU4sNEVBQW9CZSxPQUFwQixDQUE0QixZQUE1QixFQUEwQ3pHLElBQUksQ0FBQ3lGLEVBQS9DO01BQ0FuRSxNQUFNLENBQUNNLFFBQVAsQ0FBZ0IwRSxVQUFoQixDQUEyQnJFLFFBQTNCO01BQ0F0QixVQUFVLENBQUMsWUFBTTtRQUNmWCxJQUFJLENBQUNOLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixXQUFuQjtNQUNELENBRlMsRUFFUCxDQUZPLENBQVY7SUFHRDtFQUNGLENBYkQ7O0VBZUEsSUFBTStHLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNuRyxLQUFELEVBQWtCO0lBQ2hDLElBQU1QLElBQUksR0FBR08sS0FBSyxDQUFDRSxhQUFuQjs7SUFDQSxJQUFJVCxJQUFJLFlBQVlkLFdBQWhCLElBQStCZ0csVUFBVSxDQUFDakQsUUFBRCxDQUE3QyxFQUF5RDtNQUN2RFgsTUFBTSxDQUFDTSxRQUFQLENBQWdCcUUsU0FBaEIsQ0FBMEJHLDZDQUExQixFQUFvQ2hGLE1BQXBDLEVBQTRDa0IsSUFBNUMsRUFBa0RMLFFBQWxEO01BQ0FqQyxJQUFJLENBQUNOLFNBQUwsQ0FBZWdCLE1BQWYsQ0FBc0IsV0FBdEI7SUFDRDtFQUNGLENBTkQ7O0VBUUEsSUFBTWMsUUFBcUIsR0FBRyxFQUE5Qjs7RUFDQSxLQUFLLElBQUlFLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdTLFVBQXBCLEVBQWdDVCxDQUFDLElBQUksQ0FBckMsRUFBd0M7SUFDdENGLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjekQsOERBQWEsQ0FBQyxLQUFELENBQTNCO0VBQ0Q7O0VBQ0QsT0FBT0QsZ0VBQWUsQ0FBQyxDQUNyQnlELFFBRHFCLEVBRXJCeEQsOERBQWEsQ0FDWCxLQURXLEVBRVgsQ0FBQyxNQUFELEVBQVNpRSxRQUFULEVBQW1CSyxJQUFuQixDQUZXLEVBR1gsSUFIVyxFQUlYNkQsNkNBQU0sRUFKSyxFQUtYLENBQ0UsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQURGLEVBRUUsQ0FBQyxXQUFELEVBQWNsRSxRQUFkLENBRkYsRUFHRSxDQUFDLFdBQUQsRUFBY0ssSUFBZCxDQUhGLEVBSUUsQ0FBQyxRQUFELEVBQVdsQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVPLFFBQVYsRUFBWCxDQUpGLEVBS0UsQ0FBQyxRQUFELEVBQVdQLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVU8sUUFBVixFQUFYLENBTEYsQ0FMVyxFQVlYLENBQ0UsQ0FBQyxXQUFELEVBQWM2RSxTQUFkLENBREYsRUFFRSxDQUFDLFNBQUQsRUFBWUUsT0FBWixDQUZGLEVBR0UsQ0FBQyxPQUFELEVBQVVMLFVBQVYsQ0FIRixDQVpXLENBRlEsQ0FBRCxDQUF0QjtBQXFCRCxDQTlHRDs7QUFnSEEsaUVBQWV6RixVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTW1ELFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07RUFDekIsSUFBTWYsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtJQUN0QixJQUFNRSxHQUFHLEdBQUdyRSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBWjtJQUNBLElBQU1xRSxLQUFLLEdBQUd0RSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBZDs7SUFDQSxJQUFJcUUsS0FBSyxZQUFZQyxnQkFBakIsSUFBcUNGLEdBQUcsWUFBWWhFLFdBQXhELEVBQXFFO01BQ25FLElBQUlnRSxHQUFHLENBQUN4RCxTQUFKLENBQWNVLFFBQWQsQ0FBdUIsTUFBdkIsQ0FBSixFQUFvQztRQUNsQytDLEtBQUssQ0FDRkcsSUFESCxHQUVHQyxJQUZILFlBR1MsWUFBTTtVQUNYLE1BQU0sSUFBSUMsS0FBSixDQUFVLHNCQUFWLENBQU47UUFDRCxDQUxIO01BTUQ7SUFDRjtFQUNGLENBYkQ7O0VBZUFwRixrREFBUyxDQUFDLFNBQUQsRUFBWTRFLFNBQVosQ0FBVDtFQUVBLE9BQU9qRixnRUFBZSxDQUFDLENBQ3JCLENBQ0VDLDhEQUFhLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsQ0FDeEMsQ0FBQyxLQUFELEVBQVEySSwwREFBUixDQUR3QyxFQUV4QyxDQUFDLE1BQUQsRUFBUyxZQUFULENBRndDLENBQTdCLENBRGYsRUFLRTNJLDhEQUFhLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkIsQ0FDeEMsQ0FBQyxLQUFELEVBQVE0SSwwREFBUixDQUR3QyxFQUV4QyxDQUFDLE1BQUQsRUFBUyxXQUFULENBRndDLENBQTdCLENBTGYsQ0FEcUIsRUFXckI1SSw4REFBYSxDQUFDLE9BQUQsRUFBVSxDQUFDLFNBQUQsQ0FBVixFQUF1QixJQUF2QixFQUE2QixJQUE3QixDQVhRLENBQUQsQ0FBdEI7QUFhRCxDQS9CRDs7QUFpQ0EsaUVBQWUrRixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUQsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtFQUN6QixJQUFNZCxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0lBQ3RCLElBQU1FLEdBQUcsR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFaO0lBQ0EsSUFBTXFFLEtBQUssR0FBR3RFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFkOztJQUNBLElBQUlxRSxLQUFLLFlBQVlDLGdCQUFqQixJQUFxQ0YsR0FBRyxZQUFZaEUsV0FBeEQsRUFBcUU7TUFDbkUsSUFBSWdFLEdBQUcsQ0FBQ3hELFNBQUosQ0FBY1UsUUFBZCxDQUF1QixNQUF2QixDQUFKLEVBQW9DO1FBQ2xDK0MsS0FBSyxDQUNGRyxJQURILEdBRUdDLElBRkgsWUFHUyxZQUFNO1VBQ1gsTUFBTSxJQUFJQyxLQUFKLENBQVUsc0JBQVYsQ0FBTjtRQUNELENBTEg7TUFNRDtJQUNGO0VBQ0YsQ0FiRDs7RUFlQXBGLGtEQUFTLENBQUMsU0FBRCxFQUFZNEUsU0FBWixDQUFUO0VBRUEsT0FBT2pGLGdFQUFlLENBQUMsQ0FDckIsQ0FDRUMsOERBQWEsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixDQUN4QyxDQUFDLEtBQUQsRUFBUTZJLHNEQUFSLENBRHdDLEVBRXhDLENBQUMsTUFBRCxFQUFTLFlBQVQsQ0FGd0MsQ0FBN0IsQ0FEZixFQUtFN0ksOERBQWEsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixJQUF2QixFQUE2QixDQUN4QyxDQUFDLEtBQUQsRUFBUThJLHNEQUFSLENBRHdDLEVBRXhDLENBQUMsTUFBRCxFQUFTLFdBQVQsQ0FGd0MsQ0FBN0IsQ0FMZixDQURxQixFQVdyQjlJLDhEQUFhLENBQUMsT0FBRCxFQUFVLENBQUMsU0FBRCxDQUFWLEVBQXVCLElBQXZCLEVBQTZCLElBQTdCLENBWFEsQ0FBRCxDQUF0QjtBQWFELENBL0JEOztBQWlDQSxpRUFBZThGLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNaUQsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FDbEJ2SSxPQURrQixFQUVsQkMsT0FGa0IsRUFHZjtFQUNILElBQU11SSxJQUFJLEdBQUduSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtFQUNBLElBQU1tSSxVQUFVLEdBQUdwSSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7O0VBQ0EsSUFBSWtJLElBQUosRUFBVTtJQUNSN0MsMkRBQVUsQ0FBQzZDLElBQUQsRUFBTyxDQUFDaEQscUVBQWUsQ0FBQ3hGLE9BQUQsRUFBVUMsT0FBVixDQUFoQixDQUFQLENBQVY7O0lBQ0EsSUFBSXdJLFVBQVUsSUFBSUEsVUFBVSxDQUFDdkgsU0FBWCxDQUFxQlUsUUFBckIsQ0FBOEIsTUFBOUIsQ0FBbEIsRUFBeUQ7TUFDdkQsSUFBTThDLEdBQUcsR0FBR3JFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFaOztNQUNBLElBQUlvRSxHQUFHLFlBQVloRSxXQUFuQixFQUFnQztRQUM5QixJQUFNZ0ksWUFBWSxHQUFHLFNBQWZBLFlBQWU7VUFBQSxPQUNuQm5KLGdFQUFlLENBQUMsQ0FBQ0MsOERBQWEsQ0FBQyxHQUFELEVBQU0sQ0FBQyxVQUFELEVBQWEsZ0JBQWIsQ0FBTixDQUFkLENBQUQsQ0FESTtRQUFBLENBQXJCOztRQUVBa0YsR0FBRyxDQUFDaUUsZUFBSjtRQUNBaEQsMkRBQVUsQ0FBQ2pCLEdBQUQsRUFBTSxDQUFDZ0UsWUFBWSxFQUFiLENBQU4sQ0FBVjtRQUNBaEUsR0FBRyxDQUFDeEQsU0FBSixDQUFjQyxHQUFkLENBQWtCLE1BQWxCO1FBQ0F1RCxHQUFHLENBQUN4RCxTQUFKLENBQWNnQixNQUFkLENBQXFCLFVBQXJCO1FBQ0FyQyxnREFBTyxDQUFDLGNBQUQsQ0FBUDtNQUNEO0lBQ0Y7RUFDRjtBQUNGLENBckJEOztBQXVCQSxpRUFBZTBJLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9iZWdpbkdhbWVCdXR0b24udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmREaXNwbGF5LnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkSGVhZGVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JvYXJkU2VjdGlvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9leHBsb3Npb25BdWRpby50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lQ29udGFpbmVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZU1haW4udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZWNlbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvcGFzc1NjcmVlbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9wYXNzU2NyZWVuQnV0dG9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvc2hpcEhpdEF1ZGlvLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NwbG9vc2hBdWRpby50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZURpc3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7XG4gIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyLFxuICByZWNlaXZlQXR0YWNrQ29vcmRzMlBsYXllcixcbiAgQUlzdGFydCxcbn0gZnJvbSBcIi4uL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5cbmNvbnN0IGNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiA9IChcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiLFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT4ge1xuICBjb25zdCBjZWxsRXZlbnQgPSAoZTogRXZlbnQpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50dXJuLWdhbWVib2FyZFwiKTtcbiAgICBjb25zdCBvYmogPSBlLnRhcmdldDtcbiAgICBpZiAoXG4gICAgICBvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgICAgbWFpbiAmJlxuICAgICAgZ2FtZWJvYXJkIGluc3RhbmNlb2YgSFRNTEVsZW1lbnRcbiAgICApIHtcbiAgICAgIGNvbnN0IHggPSBvYmouZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgY29uc3QgeSA9IG9iai5nZXRBdHRyaWJ1dGUoXCJkYXRhLXlcIik7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IGdhbWVib2FyZC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXBvc2l0aW9uXCIpO1xuICAgICAgaWYgKHggJiYgeSAmJiBwb3NpdGlvbikge1xuICAgICAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkh1bWFuXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHtcbiAgICAgICAgICByZWNlaXZlQXR0YWNrQ29vcmRzMlBsYXllcihcbiAgICAgICAgICAgIFtwYXJzZUludCh4LCAxMCksIHBhcnNlSW50KHksIDEwKV0sXG4gICAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHBvc2l0aW9uID09PSBcInBsYXllcjFcIiA/IFwicGxheWVyMVwiIDogXCJwbGF5ZXIyXCJcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyKFxuICAgICAgICAgICAgW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXSxcbiAgICAgICAgICAgIHBsYXllcjEsXG4gICAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgICAgcGxheWVyUG9zXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBvYmoucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxFdmVudCk7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhdHRhY2hFdmVudHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gICAgfSk7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAudHVybi1nYW1lYm9hcmRgKTtcbiAgICBpZiAocGxheWVyQm9hcmQpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLWNlbGxcIik7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0LXNoaXBcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxFdmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25CZWdpbkdhbWUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoYnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgc3Vic2NyaWJlKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgfSk7XG4gICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgXCJGaXJlIHdoZW4gcmVhZHkgQ2FwJ24hXCIpO1xuICAgICAgaWYgKHBsYXllcjEudHlwZSA9PT0gXCJIdW1hblwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJIdW1hblwiKSB7XG4gICAgICAgIHB1Ymxpc2goXCJwYXNzLXNjcmVlbkJlZ2luXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgfSwgNjAwMCk7XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkFJXCIpIHtcbiAgICAgICAgQUlzdGFydChwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiYnV0dG9uXCIsXG4gICAgICBbXCJidXR0b25cIiwgXCJiZWdpbi1nYW1lLWJ1dHRvblwiXSxcbiAgICAgIFwiQmVnaW4hXCIsXG4gICAgICBudWxsLFxuICAgICAgbnVsbCxcbiAgICAgIFtbXCJjbGlja1wiLCBvbkJlZ2luR2FtZV1dXG4gICAgKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJ1dHRvbi1zZWN0aW9uXCJdKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVCZWdpbkdhbWVCdXR0b247XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IENoaWxkRnVuYyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlQ2VsbCBmcm9tIFwiLi9nYW1lY2VsbFwiO1xuXG5jb25zdCBuZHhUb0xldHRlciA9IChuZHg6IG51bWJlcikgPT4ge1xuICBjb25zdCBudW0gPSBuZHggLyAxMDtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUobnVtICsgNjUpO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcGxlc3NDZWxsID0gKGNlbGw6IENlbGwsIHR5cGUgPSBcImVtcHR5XCIpID0+XG4gIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcImdhbWUtY2VsbFwiLCB0eXBlXSwgbnVsbCwgbnVsbCwgW1xuICAgIFtcImRhdGEteFwiLCBgJHtjZWxsLmNvb3Jkc1swXX1gXSxcbiAgICBbXCJkYXRhLXlcIiwgYCR7Y2VsbC5jb29yZHNbMV19YF0sXG4gIF0pO1xuXG5jb25zdCBjcmVhdGVCb2FyZERpc3BsYXkgPSAoXG4gIHBsYXllcjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHR5cGU6IFwic2hpcFwiIHwgXCJzaGlwbGVzc1wiLFxuICB0dXJuOiBzdHJpbmdcbikgPT4ge1xuICBjb25zdCBlbGVtZW50czogQ2hpbGRGdW5jW10gPSBbXTtcblxuICBlbGVtZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBudWxsLCBudWxsKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZWxlbWVudHMucHVzaChcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBpLnRvU3RyaW5nKCksIG51bGwsIFtcbiAgICAgICAgW1wiZGF0YS15XCIsIGAke2l9YF0sXG4gICAgICBdKVxuICAgICk7XG4gIH1cblxuICBwbGF5ZXIuYm9hcmRPYmouYm9hcmQuZm9yRWFjaCgoY2VsbCwgbmR4KSA9PiB7XG4gICAgaWYgKG5keCAlIDEwID09PSAwKSB7XG4gICAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJudW1iZXItY2VsbFwiXSwgbmR4VG9MZXR0ZXIobmR4KSwgbnVsbCwgW1xuICAgICAgICAgIFtcImRhdGEteFwiLCBgJHsobmR4IC8gMTApLnRvU3RyaW5nKCl9YF0sXG4gICAgICAgIF0pXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoY2VsbC52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgIHR5cGUgPT09IFwic2hpcFwiID8gY3JlYXRlQ2VsbChjZWxsLCBwbGF5ZXIpIDogY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwpO1xuICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgfSBlbHNlIGlmIChjZWxsLnZhbHVlID09PSBcImhpdFwiKSB7XG4gICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgIHR5cGUgPT09IFwic2hpcFwiXG4gICAgICAgICAgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciwgXCJoaXRcIilcbiAgICAgICAgICA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsLCBcImhpdFwiKTtcbiAgICAgIGVsZW1lbnRzLnB1c2goY2VsbEZ1bmMpO1xuICAgIH0gZWxzZSBpZiAoY2VsbC5wb3NpdGlvbiAhPT0gMCkge1xuICAgICAgaWYgKGNlbGwudmFsdWUuZ2V0KGNlbGwucG9zaXRpb24pID09PSBcImhpdFwiKSB7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgICB0eXBlID09PSBcInNoaXBcIlxuICAgICAgICAgICAgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciwgXCJoaXQtc2hpcFwiKVxuICAgICAgICAgICAgOiBjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCwgXCJoaXQtc2hpcFwiKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllcikgOiBjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goY2VsbEZ1bmMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGNlbGwudmFsdWUubmFtZTtcbiAgICAgIGNvbnN0IHNoaXBMZW5ndGggPSBjZWxsLnZhbHVlLmxlbmd0aDtcbiAgICAgIGNvbnN0IHNoaXBBeGlzID0gY2VsbC52YWx1ZS5heGlzO1xuICAgICAgaWYgKGNlbGwudmFsdWUuaXNTdW5rKCkpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9ICgpID0+XG4gICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgIC4uLmNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIHNoaXBBeGlzLCBwbGF5ZXIsIGNlbGwuY29vcmRzKSxcbiAgICAgICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpLFxuICAgICAgICAgIF0pO1xuICAgICAgICBlbGVtZW50cy5wdXNoKC4uLmZ1bmMoKSk7XG4gICAgICB9IGVsc2UgaWYgKGNlbGwudmFsdWUuZ2V0KGNlbGwucG9zaXRpb24pID09PSBcImhpdFwiKSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAuLi5jcmVhdGVTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBzaGlwQXhpcywgcGxheWVyLCBjZWxsLmNvb3JkcyksXG4gICAgICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciwgXCJoaXQtc2hpcFwiKSxcbiAgICAgICAgICBdKTtcbiAgICAgICAgY29uc3QgY2VsbEZ1bmMgPVxuICAgICAgICAgIHR5cGUgPT09IFwic2hpcFwiID8gZnVuYygpIDogW2NyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsLCBcImhpdC1zaGlwXCIpXTtcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5jZWxsRnVuYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBmdW5jID0gKCkgPT5cbiAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgICAgLi4uY3JlYXRlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCwgc2hpcEF4aXMsIHBsYXllciwgY2VsbC5jb29yZHMpLFxuICAgICAgICAgICAgY3JlYXRlQ2VsbChjZWxsLCBwbGF5ZXIpLFxuICAgICAgICAgIF0pO1xuICAgICAgICBjb25zdCBjZWxsRnVuYyA9IHR5cGUgPT09IFwic2hpcFwiID8gZnVuYygpIDogW2NyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsKV07XG4gICAgICAgIGVsZW1lbnRzLnB1c2goLi4uY2VsbEZ1bmMpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGVsZW1lbnRzLFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1wiZ2FtZWJvYXJkXCIsIGAke3BsYXllci5wbGF5ZXJOdW19LWdhbWVib2FyZGAsIGAke3R1cm59LWdhbWVib2FyZGBdLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbW1wiZGF0YS1wb3NpdGlvblwiLCBwbGF5ZXIucGxheWVyTnVtXV1cbiAgICApLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvYXJkRGlzcGxheTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVib2FyZEhlYWRlciA9IChuYW1lOiBzdHJpbmcpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIG5hbWUpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWJvYXJkSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZERpc3BsYXkgZnJvbSBcIi4vYm9hcmREaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlQm9hcmRIZWFkZXIgZnJvbSBcIi4vYm9hcmRIZWFkZXJcIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChcbiAgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgdHlwZTogXCJzaGlwXCIgfCBcInNoaXBsZXNzXCIsXG4gIHR1cm46IHN0cmluZ1xuKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUJvYXJkSGVhZGVyKFxuICAgICAgICBwbGF5ZXIudHlwZSA9PT0gXCJBSVwiICYmIHBsYXllci5wbGF5ZXJOdW0gPT09IFwicGxheWVyMlwiXG4gICAgICAgICAgPyBcIkFJMlwiXG4gICAgICAgICAgOiBwbGF5ZXIubmFtZVxuICAgICAgKSxcbiAgICAgIC4uLmNyZWF0ZUJvYXJkRGlzcGxheShwbGF5ZXIsIHR5cGUsIHR1cm4pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1zZWN0aW9uXCIsIGAke3BsYXllci5wbGF5ZXJOdW19LWJvYXJkU2VjdGlvbmBdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgZXhwbG9zaW9uIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5tcDNcIjtcbmltcG9ydCBleHBsb3Npb24yIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBleHBsb3Npb25BdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgcGxheVNvdW5kID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4cGxvc2lvblwiKTtcbiAgICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIikpIHtcbiAgICAgICAgY29uc3QgcGxheUF1ZCA9ICgpID0+IHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIGF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBwbGF5QXVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHBsYXlBdWQpO1xuICAgICAgICBhdWRpb1xuICAgICAgICAgIC5wbGF5KClcbiAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJleHBsb3Npb25cIiwgKGFyZzogdW5rbm93bikgPT4ge1xuICAgIGNvbnN0IGZuID0gYXJnIGFzICgpID0+IHZvaWQ7XG4gICAgcGxheVNvdW5kKGZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb25dLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb24yXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL29nZ1wiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIFtcImV4cGxvc2lvblwiXSwgbnVsbCwgbnVsbCksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwbG9zaW9uQXVkaW87XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9nYW1lSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9nYW1lTWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5pbXBvcnQgc3Bsb29zaEF1ZGlvIGZyb20gXCIuL3NwbG9vc2hBdWRpb1wiO1xuaW1wb3J0IGV4cGxvc2lvbkF1ZGlvIGZyb20gXCIuL2V4cGxvc2lvbkF1ZGlvXCI7XG5pbXBvcnQgc2hpcEhpdEF1ZGlvIGZyb20gXCIuL3NoaXBIaXRBdWRpb1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUhlYWRlcigpLFxuICAgICAgLi4uY3JlYXRlTWFpbihwbGF5ZXIxLCBwbGF5ZXIyKSxcbiAgICAgIC4uLmNyZWF0ZUZvb3RlcigpLFxuICAgICAgLi4uc2FpbGluZ0F1ZGlvKCksXG4gICAgICAuLi5zcGxvb3NoQXVkaW8oKSxcbiAgICAgIC4uLmV4cGxvc2lvbkF1ZGlvKCksXG4gICAgICAuLi5zaGlwSGl0QXVkaW8oKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiZ2FtZS1jb250YWluZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXAtaGVhZGVyXCJdLCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZChcIlBsYWNlIHllciBzaGlwcyBDYXAnbiFcIiksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5pbXBvcnQgYmVnaW5HYW1lQnV0dG9uIGZyb20gXCIuL2JlZ2luR2FtZUJ1dHRvblwiO1xuaW1wb3J0IGNyZWF0ZVBhc3NTY3JlZW5CdXR0b24gZnJvbSBcIi4vcGFzc1NjcmVlbkJ1dHRvblwiO1xuaW1wb3J0IGNyZWF0ZVBhc3NTY3JlZW4gZnJvbSBcIi4vcGFzc1NjcmVlblwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBsZXQgc2NyZWVuVHVybjogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIiA9IFwicGxheWVyMVwiO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBib2FyZFNlY3Rpb25zID0gKCkgPT4ge1xuICAgIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIikge1xuICAgICAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgIFtcbiAgICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24ocGxheWVyMSwgXCJzaGlwXCIsIFwibm8tdHVyblwiKSxcbiAgICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24ocGxheWVyMiwgXCJzaGlwXCIsIFwibm8tdHVyblwiKSxcbiAgICAgICAgXSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkh1bWFuXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHtcbiAgICAgIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICBbXG4gICAgICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKFxuICAgICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICAgIHNjcmVlblR1cm4gPT09IFwicGxheWVyMVwiID8gXCJzaGlwXCIgOiBcInNoaXBsZXNzXCIsXG4gICAgICAgICAgICBzY3JlZW5UdXJuID09PSBcInBsYXllcjFcIiA/IFwibm90dXJuXCIgOiBcInR1cm5cIlxuICAgICAgICAgICksXG4gICAgICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKFxuICAgICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICAgIHNjcmVlblR1cm4gPT09IFwicGxheWVyMlwiID8gXCJzaGlwXCIgOiBcInNoaXBsZXNzXCIsXG4gICAgICAgICAgICBzY3JlZW5UdXJuID09PSBcInBsYXllcjJcIiA/IFwibm90dXJuXCIgOiBcInR1cm5cIlxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICBdKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICBbXG4gICAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihcbiAgICAgICAgICBwbGF5ZXIxLFxuICAgICAgICAgIHBsYXllcjEudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCIsXG4gICAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInR1cm5cIiA6IFwibm90dXJuXCJcbiAgICAgICAgKSxcbiAgICAgICAgLi4uY3JlYXRlQm9hcmRTZWN0aW9uKFxuICAgICAgICAgIHBsYXllcjIsXG4gICAgICAgICAgcGxheWVyMi50eXBlID09PSBcIkFJXCIgPyBcInNoaXBsZXNzXCIgOiBcInNoaXBcIixcbiAgICAgICAgICBwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIiA/IFwidHVyblwiIDogXCJub3R1cm5cIlxuICAgICAgICApLFxuICAgICAgXSxcbiAgICBdKTtcbiAgfTtcblxuICBjb25zdCBidXR0b24gPSAoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgKHBsYXllcjEudHlwZSA9PT0gXCJIdW1hblwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiKSB8fFxuICAgICAgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJIdW1hblwiKVxuICAgICkge1xuICAgICAgcmV0dXJuIGJlZ2luR2FtZUJ1dHRvbihcbiAgICAgICAgcGxheWVyMS50eXBlID09PSBcIkFJXCIgPyBcInBsYXllcjFcIiA6IFwicGxheWVyMlwiLFxuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBwbGF5ZXIyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkh1bWFuXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIgJiYgY291bnQgPT09IDApIHtcbiAgICAgIHJldHVybiBjcmVhdGVQYXNzU2NyZWVuQnV0dG9uKCk7XG4gICAgfVxuICAgIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiSHVtYW5cIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiSHVtYW5cIiAmJiBjb3VudCAhPT0gMCkge1xuICAgICAgcmV0dXJuIGJlZ2luR2FtZUJ1dHRvbihcInBsYXllcjFcIiwgcGxheWVyMSwgcGxheWVyMik7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfTtcblxuICBjb25zdCByZURpc3BsYXlCb2FyZCA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBib2FyZFNlY3Rpb25zKCk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmJvYXJkLWNvbnRhaW5lcmApO1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGZpeEVsZW1lbnQoc2VjdGlvbiwgW2NvbXBvbmVudF0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZURpc3BsYXlBZnRlckZpcnN0UGFzcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgW1xuICAgICAgICAuLi5jb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgIGJvYXJkU2VjdGlvbnMoKSxcbiAgICAgICAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJvYXJkLWNvbnRhaW5lclwiXSksXG4gICAgICAgIF0pLFxuICAgICAgICAuLi5idXR0b24oKSxcbiAgICAgIF0sXG4gICAgXSk7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbWFpbmApO1xuICAgIGlmIChzZWN0aW9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGZpeEVsZW1lbnQoc2VjdGlvbiwgW2NvbXBvbmVudF0pO1xuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJyZWRpc3BsYXlcIiwgcmVEaXNwbGF5Qm9hcmQpO1xuXG4gIGNvbnN0IHBhc3NTY3JlZW4gPSAoKSA9PiB7XG4gICAgc2NyZWVuVHVybiA9IHNjcmVlblR1cm4gPT09IFwicGxheWVyMVwiID8gXCJwbGF5ZXIyXCIgOiBcInBsYXllcjFcIjtcbiAgICBjb3VudCArPSAxO1xuICAgIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgcmVEaXNwbGF5QWZ0ZXJGaXJzdFBhc3MoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcGFzc1NjcmVlbkFmdGVyQmVnaW4gPSAoKSA9PiB7XG4gICAgc2NyZWVuVHVybiA9IHNjcmVlblR1cm4gPT09IFwicGxheWVyMVwiID8gXCJwbGF5ZXIyXCIgOiBcInBsYXllcjFcIjtcbiAgICBjb3VudCArPSAxO1xuICAgIGNvbnN0IGNvbXBvbmVudCA9IGNyZWF0ZVBhc3NTY3JlZW4oKTtcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuYm9hcmQtY29udGFpbmVyYCk7XG4gICAgaWYgKHNlY3Rpb24gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgZml4RWxlbWVudChzZWN0aW9uLCBbY29tcG9uZW50XSk7XG4gICAgfVxuICB9O1xuXG4gIHN1YnNjcmliZShcInBhc3Mtc2NyZWVuXCIsIHBhc3NTY3JlZW4pO1xuICBzdWJzY3JpYmUoXCJwYXNzLXNjcmVlbkJlZ2luXCIsIHBhc3NTY3JlZW5BZnRlckJlZ2luKTtcblxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jb21wb3NlRWxlbWVudHMoW1xuICAgICAgICBib2FyZFNlY3Rpb25zKCksXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtY29udGFpbmVyXCJdKSxcbiAgICAgIF0pLFxuICAgICAgLi4uYnV0dG9uKCksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBbXCJnYW1lLW1haW5cIl0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEF4aXMgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcyB9IGZyb20gXCIuLi9zaGlwXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4uL3NoaXBcIjtcblxuY29uc3QgaXNBeGlzID0gKGF4aXM6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBheGlzIGlzIEF4aXMgPT5cbiAgYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiO1xuXG5jb25zdCBpc1NoaXBOYW1lID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBuYW1lIGlzIFNoaXBOYW1lcyA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICByZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSB8fCBcIlwiKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoY2VsbDogQ2VsbCwgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllciwgdHlwZSA9IFwiZW1wdHlcIikgPT4ge1xuICBjb25zdCBkcmFnRW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgdGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlcj8uZ2V0RGF0YShcInRleHQvcGxhaW5cIikgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKHggJiYgeSAmJiBpc0F4aXMoYXhpcykgJiYgaXNTaGlwTmFtZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqXG4gICAgICAgICAgICAuZ2V0QXZhaWxhYmxlQ29vcmRzKGF4aXMsIG5hbWUsIGNyZWF0ZVNoaXApXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgdGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlcj8uZ2V0RGF0YShcInRleHQvcGxhaW5cIikgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKHggJiYgeSAmJiBpc0F4aXMoYXhpcykgJiYgaXNTaGlwTmFtZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqXG4gICAgICAgICAgICAuZ2V0QXZhaWxhYmxlQ29vcmRzKGF4aXMsIG5hbWUsIGNyZWF0ZVNoaXApXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ0xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0YXJnZXRDZWxsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgY29uc3QgeCA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgY29uc3QgeSA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgY29uc3QgbmFtZSA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgIGNvbnN0IGF4aXMgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF4aXNcIik7XG4gICAgICBpZiAoaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkgJiYgaWQgJiYgc2hpcCAmJiB4ICYmIHkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoY3JlYXRlU2hpcCwgY29vcmRzLCBheGlzLCBuYW1lKTtcbiAgICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXItYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW1wiY2VsbFwiLCBcImdhbWUtY2VsbFwiLCB0eXBlXSxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgW1wiZGF0YS14XCIsIGAke2NlbGwuY29vcmRzWzBdfWBdLFxuICAgICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICAgIF0sXG4gICAgW1xuICAgICAgW1wiZHJhZ2VudGVyXCIsIGRyYWdFbnRlcl0sXG4gICAgICBbXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcl0sXG4gICAgICBbXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlXSxcbiAgICAgIFtcImRyb3BcIiwgZHJvcF0sXG4gICAgXVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVQYXNzU2NyZWVuID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsIFwiUGFzcyBTY3JlZW5cIiksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwYXNzLXNjcmVlblwiXSksXG4gIF0pO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXNzU2NyZWVuO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyLCBBSXN0YXJ0IH0gZnJvbSBcIi4uL2dhbWVMb29wXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUsIHB1Ymxpc2ggfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5cbmNvbnN0IGNyZWF0ZVBhc3NTY3JlZW5CdXR0b24gPSAoKSA9PiB7XG4gIGNvbnN0IG9uUGFzc1NjcmVlbiA9ICgpID0+IHtcbiAgICBwdWJsaXNoKFwicGFzcy1zY3JlZW5cIik7XG4gIH07XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgW1wiYnV0dG9uXCIsIFwicGFzcy1zY3JlZW4tYnV0dG9uXCJdLFxuICAgICAgXCJQYXNzIFNjcmVlbiFcIixcbiAgICAgIG51bGwsXG4gICAgICBudWxsLFxuICAgICAgW1tcImNsaWNrXCIsIG9uUGFzc1NjcmVlbl1dXG4gICAgKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImJ1dHRvbi1zZWN0aW9uXCJdKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYXNzU2NyZWVuQnV0dG9uO1xuIiwiaW1wb3J0IHVuaXFpZCBmcm9tIFwidW5pcWlkXCI7XG5pbXBvcnQgdHlwZSB7IENoaWxkRnVuYyB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcyB9IGZyb20gXCIuLi9zaGlwXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5pbXBvcnQgc2hpcEZ1bmMgZnJvbSBcIi4uL3NoaXBcIjtcblxuY29uc3QgaXNTaGlwTmFtZSA9IChuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKTogbmFtZSBpcyBTaGlwTmFtZXMgPT4ge1xuICBjb25zdCBuYW1lcyA9IFtcImNhcnJpZXJcIiwgXCJiYXR0bGVzaGlwXCIsIFwiY3J1aXNlclwiLCBcInN1Ym1hcmluZVwiLCBcImRlc3Ryb3llclwiXTtcbiAgcmV0dXJuIG5hbWVzLmluY2x1ZGVzKG5hbWUgfHwgXCJcIik7XG59O1xuXG5jb25zdCBjcmVhdGVTaGlwID0gKFxuICBzaGlwTmFtZTogc3RyaW5nLFxuICBzaGlwTGVuZ3RoOiBudW1iZXIsXG4gIGF4aXM6IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiLFxuICBwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLFxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl1cbikgPT4ge1xuICBjb25zdCBjaGFuZ2VBeGlzID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgICBpZiAoc2hpcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2hpcE5hbWUoc2hpcE5hbWUpICYmIG1haW4pIHtcbiAgICAgIG1haW4uY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgICAgaWYgKHNoaXAuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIikpIHtcbiAgICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IHBsYXllci5ib2FyZE9iai5nZXRBdmFpbGFibGVDb29yZHMoXG4gICAgICAgICAgXCJob3Jpem9udGFsXCIsXG4gICAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgICAgc2hpcEZ1bmNcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNvb3JkaW5hdGVzLnNvbWUoXG4gICAgICAgICAgICAodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcImhvcml6b250YWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJ2ZXJ0aWNhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcC1lcnJvclwiKTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgICAgICBtYWluLmNsYXNzTGlzdC5yZW1vdmUoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5ib2FyZE9iai5yZW1vdmVTaGlwKHNoaXBOYW1lKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmRPYmouZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICAgIFwidmVydGljYWxcIixcbiAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICBzaGlwRnVuY1xuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWVbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZVsxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwidmVydGljYWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJob3Jpem9udGFsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVycm9yXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgfVxuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gIH07XG5cbiAgY29uc3QgZHJhZ1N0YXJ0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChcbiAgICAgIGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmXG4gICAgICBzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiZcbiAgICAgIGlzU2hpcE5hbWUoc2hpcE5hbWUpXG4gICAgKSB7XG4gICAgICBldmVudC5kYXRhVHJhbnNmZXI/LnNldERhdGEoXCJ0ZXh0L3BsYWluXCIsIHNoaXAuaWQpO1xuICAgICAgcGxheWVyLmJvYXJkT2JqLnJlbW92ZVNoaXAoc2hpcE5hbWUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkcmFnRW5kID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmIChzaGlwIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgJiYgaXNTaGlwTmFtZShzaGlwTmFtZSkpIHtcbiAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBlbGVtZW50czogQ2hpbGRGdW5jW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKGNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpO1xuICB9XG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGVsZW1lbnRzLFxuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgW1wic2hpcFwiLCBzaGlwTmFtZSwgYXhpc10sXG4gICAgICBudWxsLFxuICAgICAgdW5pcWlkKCksXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdnYWJsZVwiLCBcInRydWVcIl0sXG4gICAgICAgIFtcImRhdGEtbmFtZVwiLCBzaGlwTmFtZV0sXG4gICAgICAgIFtcImRhdGEtYXhpc1wiLCBheGlzXSxcbiAgICAgICAgW1wiZGF0YS14XCIsIGNvb3Jkc1swXS50b1N0cmluZygpXSxcbiAgICAgICAgW1wiZGF0YS15XCIsIGNvb3Jkc1sxXS50b1N0cmluZygpXSxcbiAgICAgIF0sXG4gICAgICBbXG4gICAgICAgIFtcImRyYWdzdGFydFwiLCBkcmFnU3RhcnRdLFxuICAgICAgICBbXCJkcmFnZW5kXCIsIGRyYWdFbmRdLFxuICAgICAgICBbXCJjbGlja1wiLCBjaGFuZ2VBeGlzXSxcbiAgICAgIF1cbiAgICApLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iLCJpbXBvcnQgc2hpcEhpdCBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NoaXBIaXQtbmV3Lm1wM1wiO1xuaW1wb3J0IHNoaXBIaXQyIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2hpcEhpdC1uZXcub2dnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgc2hpcEhpdEF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBwbGF5U291bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXBIaXRcIik7XG4gICAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5XCIpKSB7XG4gICAgICAgIGF1ZGlvXG4gICAgICAgICAgLnBsYXkoKVxuICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN1YnNjcmliZShcInNoaXBIaXRcIiwgcGxheVNvdW5kKTtcblxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBIaXRdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzaGlwSGl0Ml0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzaGlwSGl0XCJdLCBudWxsLCBudWxsKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaGlwSGl0QXVkaW87XG4iLCJpbXBvcnQgc3Bsb29zaCBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NwbG9vc2gubXAzXCI7XG5pbXBvcnQgc3Bsb29zaDIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hdWRpby9zcGxvb3NoLm9nZ1wiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmUgfSBmcm9tIFwiLi4vcHVic3ViXCI7XG5cbmNvbnN0IHNwbG9vc2hBdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgcGxheVNvdW5kID0gKCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWRpdi0yXCIpO1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zcGxvb3NoXCIpO1xuICAgIGlmIChhdWRpbyBpbnN0YW5jZW9mIEhUTUxBdWRpb0VsZW1lbnQgJiYgZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGlmIChkaXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxheVwiKSkge1xuICAgICAgICBhdWRpb1xuICAgICAgICAgIC5wbGF5KClcbiAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJzcGxvb3NoXCIsIHBsYXlTb3VuZCk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzcGxvb3NoXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL21wZWdcIl0sXG4gICAgICBdKSxcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc3Bsb29zaDJdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vb2dnXCJdLFxuICAgICAgXSksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwiYXVkaW9cIiwgW1wic3Bsb29zaFwiXSwgbnVsbCwgbnVsbCksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc3Bsb29zaEF1ZGlvO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVDb250YWluZXIgZnJvbSBcIi4vY29tcG9uZW50cy9nYW1lQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IGRpc3BsYXlHYW1lID0gKFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXJcbikgPT4ge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IHZvbHVtZURpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZvbHVtZS1kaXYtMlwiKTtcbiAgaWYgKGJvZHkpIHtcbiAgICBmaXhFbGVtZW50KGJvZHksIFtjcmVhdGVDb250YWluZXIocGxheWVyMSwgcGxheWVyMildKTtcbiAgICBpZiAodm9sdW1lRGl2MiAmJiB2b2x1bWVEaXYyLmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIikpIHtcbiAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWRpdi0yXCIpO1xuICAgICAgaWYgKGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGNyZWF0ZVZvbHVtZSA9ICgpID0+XG4gICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1zb2xpZFwiLCBcImZhLXZvbHVtZS1oaWdoXCJdKV0pO1xuICAgICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoXCJwbGF5XCIpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1wbGF5XCIpO1xuICAgICAgICBwdWJsaXNoKFwic2FpbGluZy1wbGF5XCIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZGlzcGxheUdhbWU7XG4iXSwibmFtZXMiOlsiY29tcG9zZUVsZW1lbnRzIiwiY3JlYXRlRWxlbWVudCIsInJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIiwicmVjZWl2ZUF0dGFja0Nvb3JkczJQbGF5ZXIiLCJBSXN0YXJ0Iiwic3Vic2NyaWJlIiwicHVibGlzaCIsImNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiIsInBsYXllclBvcyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY2VsbEV2ZW50IiwiZSIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnYW1lYm9hcmQiLCJvYmoiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsIngiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwicG9zaXRpb24iLCJ0eXBlIiwicGFyc2VJbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0YWNoRXZlbnRzIiwic2hpcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNoaXAiLCJwbGF5ZXJCb2FyZCIsImNlbGxzIiwiY2VsbCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQmVnaW5HYW1lIiwiZXZlbnQiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicmVtb3ZlIiwic2V0VGltZW91dCIsImNyZWF0ZVNoaXAiLCJjcmVhdGVDZWxsIiwibmR4VG9MZXR0ZXIiLCJuZHgiLCJudW0iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjcmVhdGVTaGlwbGVzc0NlbGwiLCJjb29yZHMiLCJjcmVhdGVCb2FyZERpc3BsYXkiLCJwbGF5ZXIiLCJ0dXJuIiwiZWxlbWVudHMiLCJwdXNoIiwiaSIsInRvU3RyaW5nIiwiYm9hcmRPYmoiLCJib2FyZCIsInZhbHVlIiwiY2VsbEZ1bmMiLCJnZXQiLCJzaGlwTmFtZSIsIm5hbWUiLCJzaGlwTGVuZ3RoIiwibGVuZ3RoIiwic2hpcEF4aXMiLCJheGlzIiwiaXNTdW5rIiwiZnVuYyIsInBsYXllck51bSIsImNyZWF0ZWJvYXJkSGVhZGVyIiwiY3JlYXRlQm9hcmRIZWFkZXIiLCJjcmVhdGVNYWluIiwiZXhwbG9zaW9uIiwiZXhwbG9zaW9uMiIsImV4cGxvc2lvbkF1ZGlvIiwicGxheVNvdW5kIiwiY2FsbGJhY2siLCJkaXYiLCJhdWRpbyIsIkhUTUxBdWRpb0VsZW1lbnQiLCJwbGF5QXVkIiwicGxheSIsInRoZW4iLCJFcnJvciIsImFyZyIsImZuIiwiY3JlYXRlSGVhZGVyIiwiY3JlYXRlRm9vdGVyIiwic2FpbGluZ0F1ZGlvIiwic3Bsb29zaEF1ZGlvIiwic2hpcEhpdEF1ZGlvIiwiY3JlYXRlQ29udGFpbmVyIiwiY3JlYXRlVm9sdW1lRGl2IiwiY3JlYXRlUGlyYXRlQm9hcmQiLCJmaXhFbGVtZW50IiwiY3JlYXRlQm9hcmRTZWN0aW9uIiwiYmVnaW5HYW1lQnV0dG9uIiwiY3JlYXRlUGFzc1NjcmVlbkJ1dHRvbiIsImNyZWF0ZVBhc3NTY3JlZW4iLCJzY3JlZW5UdXJuIiwiY291bnQiLCJib2FyZFNlY3Rpb25zIiwicmVEaXNwbGF5Qm9hcmQiLCJjb21wb25lbnQiLCJzZWN0aW9uIiwicmVEaXNwbGF5QWZ0ZXJGaXJzdFBhc3MiLCJwYXNzU2NyZWVuIiwicGFzc1NjcmVlbkFmdGVyQmVnaW4iLCJpc0F4aXMiLCJpc1NoaXBOYW1lIiwibmFtZXMiLCJpbmNsdWRlcyIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Q2VsbCIsIkRyYWdFdmVudCIsImlkIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNvbWUiLCJkcmFnT3ZlciIsImRyYWdMZWF2ZSIsImRyb3AiLCJwbGFjZVNoaXAiLCJvblBhc3NTY3JlZW4iLCJ1bmlxaWQiLCJzaGlwRnVuYyIsImNoYW5nZUF4aXMiLCJyZW1vdmVTaGlwIiwiY29vcmRpbmF0ZXMiLCJkcmFnU3RhcnQiLCJzZXREYXRhIiwiZHJhZ0VuZCIsInNoaXBIaXQiLCJzaGlwSGl0MiIsInNwbG9vc2giLCJzcGxvb3NoMiIsImRpc3BsYXlHYW1lIiwiYm9keSIsInZvbHVtZURpdjIiLCJjcmVhdGVWb2x1bWUiLCJyZXBsYWNlQ2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9