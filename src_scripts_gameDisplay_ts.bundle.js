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
      button.remove();
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_2__.publish)("pirate-text", "Fire when ready Cap'n!");

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
  var boardSections = function boardSections() {
    return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player1, player1.type === "AI" ? "shipless" : "ship")), _toConsumableArray((0,_boardSection__WEBPACK_IMPORTED_MODULE_2__["default"])(player2, player2.type === "AI" ? "shipless" : "ship")))]);
  };

  var reDisplayBoard = function reDisplayBoard() {
    var component = boardSections();
    var section = document.querySelector(".board-container");

    if (section instanceof HTMLElement) {
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(section, [component]);
    }
  };

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_1__.subscribe)("redisplay", reDisplayBoard);
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[].concat(_toConsumableArray((0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([boardSections(), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["board-container"])])), _toConsumableArray((0,_beginGameButton__WEBPACK_IMPORTED_MODULE_3__["default"])(player1.type === "AI" ? "player1" : "player2", player1, player2))), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("main", ["game-main"])]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBckI7O1FBRUE4RSxHQUFHLENBQUMwRCxlQUFKO1FBQ0F6QywyREFBVSxDQUFDakIsR0FBRCxFQUFNLENBQUN5RCxZQUFZLEVBQWIsQ0FBTixDQUFWO1FBQ0F6RCxHQUFHLENBQUN4RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsTUFBbEI7UUFDQXVELEdBQUcsQ0FBQ3hELFNBQUosQ0FBY2dCLE1BQWQsQ0FBcUIsVUFBckI7UUFDQWxDLGdEQUFPLENBQUMsY0FBRCxDQUFQO01BQ0Q7SUFDRjtFQUNGO0FBQ0YsQ0FyQkQ7O0FBdUJBLGlFQUFlZ0ksV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2JlZ2luR2FtZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9ib2FyZERpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmRIZWFkZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvYm9hcmRTZWN0aW9uLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2V4cGxvc2lvbkF1ZGlvLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL2dhbWVDb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NvbXBvbmVudHMvZ2FtZUhlYWRlci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lTWFpbi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9nYW1lY2VsbC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jb21wb25lbnRzL3NoaXBIaXRBdWRpby50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY29tcG9uZW50cy9zcGxvb3NoQXVkaW8udHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2dhbWVEaXNwbGF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllciwgQUlzdGFydCB9IGZyb20gXCIuLi9nYW1lTG9vcFwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlLCBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBjcmVhdGVCZWdpbkdhbWVCdXR0b24gPSAoXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIixcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+IHtcbiAgY29uc3QgY2VsbEV2ZW50ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICAgIGNvbnN0IG9iaiA9IGUudGFyZ2V0O1xuICAgIGlmIChvYmogaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBtYWluKSB7XG4gICAgICBjb25zdCB4ID0gb2JqLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSBvYmouZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgaWYgKHggJiYgeSkge1xuICAgICAgICByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllcihcbiAgICAgICAgICBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldLFxuICAgICAgICAgIHBsYXllcjEsXG4gICAgICAgICAgcGxheWVyMixcbiAgICAgICAgICBwbGF5ZXJQb3NcbiAgICAgICAgKTtcbiAgICAgICAgb2JqLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjZWxsRXZlbnQpO1xuICAgICAgICBtYWluLmNsYXNzTGlzdC5hZGQoXCJ1bmNsaWNrYWJsZVwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYXR0YWNoRXZlbnRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIHNoaXBzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInVuY2xpY2thYmxlXCIpO1xuICAgIH0pO1xuICAgIGNvbnN0IHBsYXllckJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7cGxheWVyUG9zfS1nYW1lYm9hcmRgKTtcbiAgICBpZiAocGxheWVyQm9hcmQpIHtcbiAgICAgIGNvbnN0IGNlbGxzID0gcGxheWVyQm9hcmQucXVlcnlTZWxlY3RvckFsbChcIi5nYW1lLWNlbGxcIik7XG4gICAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5jb250YWlucyhcImhpdFwiKSB8fFxuICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGl0LXNoaXBcIilcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNlbGxFdmVudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25CZWdpbkdhbWUgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoYnV0dG9uIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgc3Vic2NyaWJlKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gICAgICAgIGF0dGFjaEV2ZW50cygpO1xuICAgICAgfSk7XG4gICAgICBidXR0b24ucmVtb3ZlKCk7XG4gICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgXCJGaXJlIHdoZW4gcmVhZHkgQ2FwJ24hXCIpO1xuICAgICAgaWYgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiKSB7XG4gICAgICAgIEFJc3RhcnQocGxheWVyMSwgcGxheWVyMik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIGNyZWF0ZUVsZW1lbnQoXG4gICAgICBcImJ1dHRvblwiLFxuICAgICAgW1wiYnV0dG9uXCIsIFwiYmVnaW4tZ2FtZS1idXR0b25cIl0sXG4gICAgICBcIkJlZ2luIVwiLFxuICAgICAgbnVsbCxcbiAgICAgIG51bGwsXG4gICAgICBbW1wiY2xpY2tcIiwgb25CZWdpbkdhbWVdXVxuICAgICksXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJidXR0b24tc2VjdGlvblwiXSksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmVnaW5HYW1lQnV0dG9uO1xuIiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4uL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vZ2FtZWNlbGxcIjtcblxuY29uc3QgbmR4VG9MZXR0ZXIgPSAobmR4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgbnVtID0gbmR4IC8gMTA7XG4gIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKG51bSArIDY1KTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNoaXBsZXNzQ2VsbCA9IChjZWxsOiBDZWxsLCB0eXBlID0gXCJlbXB0eVwiKSA9PlxuICBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImNlbGxcIiwgXCJnYW1lLWNlbGxcIiwgdHlwZV0sIG51bGwsIG51bGwsIFtcbiAgICBbXCJkYXRhLXhcIiwgYCR7Y2VsbC5jb29yZHNbMF19YF0sXG4gICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICBdKTtcblxuY29uc3QgY3JlYXRlQm9hcmREaXNwbGF5ID0gKFxuICBwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLFxuICB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIlxuKSA9PiB7XG4gIGNvbnN0IGVsZW1lbnRzOiBDaGlsZEZ1bmNbXSA9IFtdO1xuXG4gIGVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIG51bGwsIG51bGwpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBlbGVtZW50cy5wdXNoKFxuICAgICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJjZWxsXCIsIFwibnVtYmVyLWNlbGxcIl0sIGkudG9TdHJpbmcoKSwgbnVsbCwgW1xuICAgICAgICBbXCJkYXRhLXlcIiwgYCR7aX1gXSxcbiAgICAgIF0pXG4gICAgKTtcbiAgfVxuXG4gIHBsYXllci5ib2FyZE9iai5ib2FyZC5mb3JFYWNoKChjZWxsLCBuZHgpID0+IHtcbiAgICBpZiAobmR4ICUgMTAgPT09IDApIHtcbiAgICAgIGVsZW1lbnRzLnB1c2goXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY2VsbFwiLCBcIm51bWJlci1jZWxsXCJdLCBuZHhUb0xldHRlcihuZHgpLCBudWxsLCBbXG4gICAgICAgICAgW1wiZGF0YS14XCIsIGAkeyhuZHggLyAxMCkudG9TdHJpbmcoKX1gXSxcbiAgICAgICAgXSlcbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChjZWxsLnZhbHVlID09PSBcImVtcHR5XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBjcmVhdGVDZWxsKGNlbGwsIHBsYXllcikgOiBjcmVhdGVTaGlwbGVzc0NlbGwoY2VsbCk7XG4gICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICB9IGVsc2UgaWYgKGNlbGwudmFsdWUgPT09IFwiaGl0XCIpIHtcbiAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCJcbiAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdFwiKVxuICAgICAgICAgIDogY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0XCIpO1xuICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgfSBlbHNlIGlmIChjZWxsLnBvc2l0aW9uICE9PSAwKSB7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgY2VsbEZ1bmMgPVxuICAgICAgICAgIHR5cGUgPT09IFwic2hpcFwiXG4gICAgICAgICAgICA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpXG4gICAgICAgICAgICA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsLCBcImhpdC1zaGlwXCIpO1xuICAgICAgICBlbGVtZW50cy5wdXNoKGNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID1cbiAgICAgICAgICB0eXBlID09PSBcInNoaXBcIiA/IGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyKSA6IGNyZWF0ZVNoaXBsZXNzQ2VsbChjZWxsKTtcbiAgICAgICAgZWxlbWVudHMucHVzaChjZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbC52YWx1ZS5uYW1lO1xuICAgICAgY29uc3Qgc2hpcExlbmd0aCA9IGNlbGwudmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3Qgc2hpcEF4aXMgPSBjZWxsLnZhbHVlLmF4aXM7XG4gICAgICBpZiAoY2VsbC52YWx1ZS5pc1N1bmsoKSkge1xuICAgICAgICBjb25zdCBmdW5jID0gKCkgPT5cbiAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgICAgICAgLi4uY3JlYXRlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCwgc2hpcEF4aXMsIHBsYXllciwgY2VsbC5jb29yZHMpLFxuICAgICAgICAgICAgY3JlYXRlQ2VsbChjZWxsLCBwbGF5ZXIsIFwiaGl0LXNoaXBcIiksXG4gICAgICAgICAgXSk7XG4gICAgICAgIGVsZW1lbnRzLnB1c2goLi4uZnVuYygpKTtcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC52YWx1ZS5nZXQoY2VsbC5wb3NpdGlvbikgPT09IFwiaGl0XCIpIHtcbiAgICAgICAgY29uc3QgZnVuYyA9ICgpID0+XG4gICAgICAgICAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICAgICAgICAgIC4uLmNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgsIHNoaXBBeGlzLCBwbGF5ZXIsIGNlbGwuY29vcmRzKSxcbiAgICAgICAgICAgIGNyZWF0ZUNlbGwoY2VsbCwgcGxheWVyLCBcImhpdC1zaGlwXCIpLFxuICAgICAgICAgIF0pO1xuICAgICAgICBjb25zdCBjZWxsRnVuYyA9XG4gICAgICAgICAgdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwsIFwiaGl0LXNoaXBcIildO1xuICAgICAgICBlbGVtZW50cy5wdXNoKC4uLmNlbGxGdW5jKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZ1bmMgPSAoKSA9PlxuICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAuLi5jcmVhdGVTaGlwKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBzaGlwQXhpcywgcGxheWVyLCBjZWxsLmNvb3JkcyksXG4gICAgICAgICAgICBjcmVhdGVDZWxsKGNlbGwsIHBsYXllciksXG4gICAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGNlbGxGdW5jID0gdHlwZSA9PT0gXCJzaGlwXCIgPyBmdW5jKCkgOiBbY3JlYXRlU2hpcGxlc3NDZWxsKGNlbGwpXTtcbiAgICAgICAgZWxlbWVudHMucHVzaCguLi5jZWxsRnVuYyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgZWxlbWVudHMsXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJnYW1lYm9hcmRcIiwgYCR7cGxheWVyLnBsYXllck51bX0tZ2FtZWJvYXJkYF0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJvYXJkRGlzcGxheTtcbiIsImltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuXG5jb25zdCBjcmVhdGVib2FyZEhlYWRlciA9IChuYW1lOiBzdHJpbmcpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgzXCIsIG51bGwsIG5hbWUpLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtaGVhZGVyXCJdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZWJvYXJkSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCBjcmVhdGVCb2FyZERpc3BsYXkgZnJvbSBcIi4vYm9hcmREaXNwbGF5XCI7XG5pbXBvcnQgY3JlYXRlQm9hcmRIZWFkZXIgZnJvbSBcIi4vYm9hcmRIZWFkZXJcIjtcblxuY29uc3QgY3JlYXRlTWFpbiA9IChwbGF5ZXI6IFBsYXllciB8IEFJUGxheWVyLCB0eXBlOiBcInNoaXBcIiB8IFwic2hpcGxlc3NcIikgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbLi4uY3JlYXRlQm9hcmRIZWFkZXIocGxheWVyLm5hbWUpLCAuLi5jcmVhdGVCb2FyZERpc3BsYXkocGxheWVyLCB0eXBlKV0sXG4gICAgY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJib2FyZC1zZWN0aW9uXCIsIGAke3BsYXllci5wbGF5ZXJOdW19LWJvYXJkU2VjdGlvbmBdKSxcbiAgXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgZXhwbG9zaW9uIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5tcDNcIjtcbmltcG9ydCBleHBsb3Npb24yIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vZXhwbG9zaW9uLW5ldy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBleHBsb3Npb25BdWRpbyA9ICgpID0+IHtcbiAgY29uc3QgcGxheVNvdW5kID0gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmV4cGxvc2lvblwiKTtcbiAgICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIikpIHtcbiAgICAgICAgY29uc3QgcGxheUF1ZCA9ICgpID0+IHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIGF1ZGlvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCBwbGF5QXVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHBsYXlBdWQpO1xuICAgICAgICBhdWRpb1xuICAgICAgICAgIC5wbGF5KClcbiAgICAgICAgICAudGhlbigpXG4gICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBzdWJzY3JpYmUoXCJleHBsb3Npb25cIiwgKGFyZzogdW5rbm93bikgPT4ge1xuICAgIGNvbnN0IGZuID0gYXJnIGFzICgpID0+IHZvaWQ7XG4gICAgcGxheVNvdW5kKGZuKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb25dLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBleHBsb3Npb24yXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL29nZ1wiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIFtcImV4cGxvc2lvblwiXSwgbnVsbCwgbnVsbCksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZXhwbG9zaW9uQXVkaW87XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9nYW1lSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9nYW1lTWFpblwiO1xuaW1wb3J0IGNyZWF0ZUZvb3RlciBmcm9tIFwiLi9mb290ZXJcIjtcbmltcG9ydCBzYWlsaW5nQXVkaW8gZnJvbSBcIi4vc2FpbGluZ0F1ZGlvXCI7XG5pbXBvcnQgc3Bsb29zaEF1ZGlvIGZyb20gXCIuL3NwbG9vc2hBdWRpb1wiO1xuaW1wb3J0IGV4cGxvc2lvbkF1ZGlvIGZyb20gXCIuL2V4cGxvc2lvbkF1ZGlvXCI7XG5pbXBvcnQgc2hpcEhpdEF1ZGlvIGZyb20gXCIuL3NoaXBIaXRBdWRpb1wiO1xuXG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIC4uLmNyZWF0ZUhlYWRlcigpLFxuICAgICAgLi4uY3JlYXRlTWFpbihwbGF5ZXIxLCBwbGF5ZXIyKSxcbiAgICAgIC4uLmNyZWF0ZUZvb3RlcigpLFxuICAgICAgLi4uc2FpbGluZ0F1ZGlvKCksXG4gICAgICAuLi5zcGxvb3NoQXVkaW8oKSxcbiAgICAgIC4uLmV4cGxvc2lvbkF1ZGlvKCksXG4gICAgICAuLi5zaGlwSGl0QXVkaW8oKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiY29udGFpbmVyXCIsIFwiZ2FtZS1jb250YWluZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFpbmVyO1xuIiwiaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgY3JlYXRlVm9sdW1lRGl2IGZyb20gXCIuL3ZvbHVtZURpdlwiO1xuaW1wb3J0IGNyZWF0ZVBpcmF0ZUJvYXJkIGZyb20gXCIuL3BpcmF0ZUJvYXJkXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgW1xuICAgICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXAtaGVhZGVyXCJdLCBcIkJhdHRsZXNoaXBcIiksXG4gICAgICAuLi5jcmVhdGVQaXJhdGVCb2FyZChcIlBsYWNlIHllciBzaGlwcyBDYXAnbiFcIiksXG4gICAgICAuLi5jcmVhdGVWb2x1bWVEaXYoKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIiwgW1wiZ2FtZS1oZWFkZXJcIl0pLFxuICBdKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlSGVhZGVyO1xuIiwiaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcbmltcG9ydCBjcmVhdGVCb2FyZFNlY3Rpb24gZnJvbSBcIi4vYm9hcmRTZWN0aW9uXCI7XG5pbXBvcnQgYmVnaW5HYW1lQnV0dG9uIGZyb20gXCIuL2JlZ2luR2FtZUJ1dHRvblwiO1xuXG5jb25zdCBjcmVhdGVNYWluID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBjb25zdCBib2FyZFNlY3Rpb25zID0gKCkgPT5cbiAgICBjb21wb3NlRWxlbWVudHMoW1xuICAgICAgW1xuICAgICAgICAuLi5jcmVhdGVCb2FyZFNlY3Rpb24oXG4gICAgICAgICAgcGxheWVyMSxcbiAgICAgICAgICBwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiA/IFwic2hpcGxlc3NcIiA6IFwic2hpcFwiXG4gICAgICAgICksXG4gICAgICAgIC4uLmNyZWF0ZUJvYXJkU2VjdGlvbihcbiAgICAgICAgICBwbGF5ZXIyLFxuICAgICAgICAgIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiID8gXCJzaGlwbGVzc1wiIDogXCJzaGlwXCJcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgXSk7XG5cbiAgY29uc3QgcmVEaXNwbGF5Qm9hcmQgPSAoKSA9PiB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gYm9hcmRTZWN0aW9ucygpO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ib2FyZC1jb250YWluZXJgKTtcbiAgICBpZiAoc2VjdGlvbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBmaXhFbGVtZW50KHNlY3Rpb24sIFtjb21wb25lbnRdKTtcbiAgICB9XG4gIH07XG5cbiAgc3Vic2NyaWJlKFwicmVkaXNwbGF5XCIsIHJlRGlzcGxheUJvYXJkKTtcblxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICAuLi5jb21wb3NlRWxlbWVudHMoW1xuICAgICAgICBib2FyZFNlY3Rpb25zKCksXG4gICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiYm9hcmQtY29udGFpbmVyXCJdKSxcbiAgICAgIF0pLFxuICAgICAgLi4uYmVnaW5HYW1lQnV0dG9uKFxuICAgICAgICBwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiA/IFwicGxheWVyMVwiIDogXCJwbGF5ZXIyXCIsXG4gICAgICAgIHBsYXllcjEsXG4gICAgICAgIHBsYXllcjJcbiAgICAgICksXG4gICAgXSxcbiAgICBjcmVhdGVFbGVtZW50KFwibWFpblwiLCBbXCJnYW1lLW1haW5cIl0pLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1haW47XG4iLCJpbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4uL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEF4aXMgfSBmcm9tIFwiLi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcyB9IGZyb20gXCIuLi9zaGlwXCI7XG5pbXBvcnQgeyBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4uL3NoaXBcIjtcblxuY29uc3QgaXNBeGlzID0gKGF4aXM6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBheGlzIGlzIEF4aXMgPT5cbiAgYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiIHx8IGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiO1xuXG5jb25zdCBpc1NoaXBOYW1lID0gKG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpOiBuYW1lIGlzIFNoaXBOYW1lcyA9PiB7XG4gIGNvbnN0IG5hbWVzID0gW1wiY2FycmllclwiLCBcImJhdHRsZXNoaXBcIiwgXCJjcnVpc2VyXCIsIFwic3VibWFyaW5lXCIsIFwiZGVzdHJveWVyXCJdO1xuICByZXR1cm4gbmFtZXMuaW5jbHVkZXMobmFtZSB8fCBcIlwiKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoY2VsbDogQ2VsbCwgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllciwgdHlwZSA9IFwiZW1wdHlcIikgPT4ge1xuICBjb25zdCBkcmFnRW50ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgdGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlcj8uZ2V0RGF0YShcInRleHQvcGxhaW5cIikgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKHggJiYgeSAmJiBpc0F4aXMoYXhpcykgJiYgaXNTaGlwTmFtZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqXG4gICAgICAgICAgICAuZ2V0QXZhaWxhYmxlQ29vcmRzKGF4aXMsIG5hbWUsIGNyZWF0ZVNoaXApXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ092ZXIgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiYgdGFyZ2V0Q2VsbCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBjb25zdCBpZCA9IGV2ZW50LmRhdGFUcmFuc2Zlcj8uZ2V0RGF0YShcInRleHQvcGxhaW5cIikgfHwgXCJcIjtcbiAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgICAgIGNvbnN0IHggPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteFwiKTtcbiAgICAgIGNvbnN0IHkgPSB0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEteVwiKTtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XG4gICAgICBjb25zdCBheGlzID0gc2hpcD8uZ2V0QXR0cmlidXRlKFwiZGF0YS1heGlzXCIpO1xuICAgICAgaWYgKHggJiYgeSAmJiBpc0F4aXMoYXhpcykgJiYgaXNTaGlwTmFtZShuYW1lKSkge1xuICAgICAgICBjb25zdCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0gPSBbcGFyc2VJbnQoeCwgMTApLCBwYXJzZUludCh5LCAxMCldO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqXG4gICAgICAgICAgICAuZ2V0QXZhaWxhYmxlQ29vcmRzKGF4aXMsIG5hbWUsIGNyZWF0ZVNoaXApXG4gICAgICAgICAgICAuc29tZSgodmFsdWUpID0+IHZhbHVlWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWVbMV0gPT09IGNvb3Jkc1sxXSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKFwiZHJhZy1vdmVyLWF2YWlsYWJsZVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoXCJkcmFnLW92ZXJcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZHJhZ0xlYXZlID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIGlmICh0YXJnZXRDZWxsIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3Zlci1hdmFpbGFibGVcIik7XG4gICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXJcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyb3AgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgRHJhZ0V2ZW50ICYmIHRhcmdldENlbGwgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgY29uc3QgaWQgPSBldmVudC5kYXRhVHJhbnNmZXI/LmdldERhdGEoXCJ0ZXh0L3BsYWluXCIpIHx8IFwiXCI7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICAgICAgY29uc3QgeCA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS14XCIpO1xuICAgICAgY29uc3QgeSA9IHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS15XCIpO1xuICAgICAgY29uc3QgbmFtZSA9IHNoaXA/LmdldEF0dHJpYnV0ZShcImRhdGEtbmFtZVwiKTtcbiAgICAgIGNvbnN0IGF4aXMgPSBzaGlwPy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWF4aXNcIik7XG4gICAgICBpZiAoaXNBeGlzKGF4aXMpICYmIGlzU2hpcE5hbWUobmFtZSkgJiYgaWQgJiYgc2hpcCAmJiB4ICYmIHkpIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdID0gW3BhcnNlSW50KHgsIDEwKSwgcGFyc2VJbnQoeSwgMTApXTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBsYXllci5ib2FyZE9ialxuICAgICAgICAgICAgLmdldEF2YWlsYWJsZUNvb3JkcyhheGlzLCBuYW1lLCBjcmVhdGVTaGlwKVxuICAgICAgICAgICAgLnNvbWUoKHZhbHVlKSA9PiB2YWx1ZVswXSA9PT0gY29vcmRzWzBdICYmIHZhbHVlWzFdID09PSBjb29yZHNbMV0pXG4gICAgICAgICkge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoY3JlYXRlU2hpcCwgY29vcmRzLCBheGlzLCBuYW1lKTtcbiAgICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhcmdldENlbGwuY2xhc3NMaXN0LnJlbW92ZShcImRyYWctb3ZlclwiKTtcbiAgICAgICAgICB0YXJnZXRDZWxsLmNsYXNzTGlzdC5yZW1vdmUoXCJkcmFnLW92ZXItYXZhaWxhYmxlXCIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBjcmVhdGVFbGVtZW50KFxuICAgIFwiZGl2XCIsXG4gICAgW1wiY2VsbFwiLCBcImdhbWUtY2VsbFwiLCB0eXBlXSxcbiAgICBudWxsLFxuICAgIG51bGwsXG4gICAgW1xuICAgICAgW1wiZGF0YS14XCIsIGAke2NlbGwuY29vcmRzWzBdfWBdLFxuICAgICAgW1wiZGF0YS15XCIsIGAke2NlbGwuY29vcmRzWzFdfWBdLFxuICAgIF0sXG4gICAgW1xuICAgICAgW1wiZHJhZ2VudGVyXCIsIGRyYWdFbnRlcl0sXG4gICAgICBbXCJkcmFnb3ZlclwiLCBkcmFnT3Zlcl0sXG4gICAgICBbXCJkcmFnbGVhdmVcIiwgZHJhZ0xlYXZlXSxcbiAgICAgIFtcImRyb3BcIiwgZHJvcF0sXG4gICAgXVxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsImltcG9ydCB1bmlxaWQgZnJvbSBcInVuaXFpZFwiO1xuaW1wb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4uL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi4vc2hpcFwiO1xuaW1wb3J0IHsgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4uL2RvbU1hbmlwdWxhdG9yXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuaW1wb3J0IHNoaXBGdW5jIGZyb20gXCIuLi9zaGlwXCI7XG5cbmNvbnN0IGlzU2hpcE5hbWUgPSAobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCk6IG5hbWUgaXMgU2hpcE5hbWVzID0+IHtcbiAgY29uc3QgbmFtZXMgPSBbXCJjYXJyaWVyXCIsIFwiYmF0dGxlc2hpcFwiLCBcImNydWlzZXJcIiwgXCJzdWJtYXJpbmVcIiwgXCJkZXN0cm95ZXJcIl07XG4gIHJldHVybiBuYW1lcy5pbmNsdWRlcyhuYW1lIHx8IFwiXCIpO1xufTtcblxuY29uc3QgY3JlYXRlU2hpcCA9IChcbiAgc2hpcE5hbWU6IHN0cmluZyxcbiAgc2hpcExlbmd0aDogbnVtYmVyLFxuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIixcbiAgcGxheWVyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdXG4pID0+IHtcbiAgY29uc3QgY2hhbmdlQXhpcyA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICBjb25zdCBzaGlwID0gZXZlbnQuY3VycmVudFRhcmdldDtcbiAgICBpZiAoc2hpcCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50ICYmIGlzU2hpcE5hbWUoc2hpcE5hbWUpKSB7XG4gICAgICBpZiAoc2hpcC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKSkge1xuICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gcGxheWVyLmJvYXJkT2JqLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgICBcImhvcml6b250YWxcIixcbiAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICBzaGlwRnVuY1xuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWVbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZVsxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwiaG9yaXpvbnRhbFwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBcInZlcnRpY2FsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVycm9yXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBsYXllci5ib2FyZE9iai5yZW1vdmVTaGlwKHNoaXBOYW1lKTtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBwbGF5ZXIuYm9hcmRPYmouZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICAgIFwidmVydGljYWxcIixcbiAgICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgICBzaGlwRnVuY1xuICAgICAgICApO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgY29vcmRpbmF0ZXMuc29tZShcbiAgICAgICAgICAgICh2YWx1ZSkgPT4gdmFsdWVbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZVsxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICBwbGF5ZXIuYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIFwidmVydGljYWxcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBsYXllci5ib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgXCJob3Jpem9udGFsXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwLWVycm9yXCIpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcHVibGlzaChcInJlZGlzcGxheVwiKTtcbiAgfTtcblxuICBjb25zdCBkcmFnU3RhcnQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKFxuICAgICAgZXZlbnQgaW5zdGFuY2VvZiBEcmFnRXZlbnQgJiZcbiAgICAgIHNoaXAgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJlxuICAgICAgaXNTaGlwTmFtZShzaGlwTmFtZSlcbiAgICApIHtcbiAgICAgIGV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RGF0YShcInRleHQvcGxhaW5cIiwgc2hpcC5pZCk7XG4gICAgICBwbGF5ZXIuYm9hcmRPYmoucmVtb3ZlU2hpcChzaGlwTmFtZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgfSwgMCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRyYWdFbmQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKHNoaXAgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCAmJiBpc1NoaXBOYW1lKHNoaXBOYW1lKSkge1xuICAgICAgcGxheWVyLmJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGVsZW1lbnRzOiBDaGlsZEZ1bmNbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkgKz0gMSkge1xuICAgIGVsZW1lbnRzLnB1c2goY3JlYXRlRWxlbWVudChcImRpdlwiKSk7XG4gIH1cbiAgcmV0dXJuIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgZWxlbWVudHMsXG4gICAgY3JlYXRlRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBbXCJzaGlwXCIsIHNoaXBOYW1lLCBheGlzXSxcbiAgICAgIG51bGwsXG4gICAgICB1bmlxaWQoKSxcbiAgICAgIFtcbiAgICAgICAgW1wiZHJhZ2dhYmxlXCIsIFwidHJ1ZVwiXSxcbiAgICAgICAgW1wiZGF0YS1uYW1lXCIsIHNoaXBOYW1lXSxcbiAgICAgICAgW1wiZGF0YS1heGlzXCIsIGF4aXNdLFxuICAgICAgICBbXCJkYXRhLXhcIiwgY29vcmRzWzBdLnRvU3RyaW5nKCldLFxuICAgICAgICBbXCJkYXRhLXlcIiwgY29vcmRzWzFdLnRvU3RyaW5nKCldLFxuICAgICAgXSxcbiAgICAgIFtcbiAgICAgICAgW1wiZHJhZ3N0YXJ0XCIsIGRyYWdTdGFydF0sXG4gICAgICAgIFtcImRyYWdlbmRcIiwgZHJhZ0VuZF0sXG4gICAgICAgIFtcImNsaWNrXCIsIGNoYW5nZUF4aXNdLFxuICAgICAgXVxuICAgICksXG4gIF0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsImltcG9ydCBzaGlwSGl0IGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc2hpcEhpdC1uZXcubXAzXCI7XG5pbXBvcnQgc2hpcEhpdDIgZnJvbSBcIi4uLy4uL2Fzc2V0cy9hdWRpby9zaGlwSGl0LW5ldy5vZ2dcIjtcbmltcG9ydCB7IGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4uL3B1YnN1YlwiO1xuXG5jb25zdCBzaGlwSGl0QXVkaW8gPSAoKSA9PiB7XG4gIGNvbnN0IHBsYXlTb3VuZCA9ICgpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZvbHVtZS1kaXYtMlwiKTtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcEhpdFwiKTtcbiAgICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICBpZiAoZGl2LmNsYXNzTGlzdC5jb250YWlucyhcInBsYXlcIikpIHtcbiAgICAgICAgYXVkaW9cbiAgICAgICAgICAucGxheSgpXG4gICAgICAgICAgLnRoZW4oKVxuICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdWRpbyBmYWlsZWQgdG8gcGxheVwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgc3Vic2NyaWJlKFwic2hpcEhpdFwiLCBwbGF5U291bmQpO1xuXG4gIHJldHVybiBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJzb3VyY2VcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgICBbXCJzcmNcIiwgc2hpcEhpdF0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9tcGVnXCJdLFxuICAgICAgXSksXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNoaXBIaXQyXSxcbiAgICAgICAgW1widHlwZVwiLCBcImF1ZGlvL29nZ1wiXSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImF1ZGlvXCIsIFtcInNoaXBIaXRcIl0sIG51bGwsIG51bGwpLFxuICBdKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNoaXBIaXRBdWRpbztcbiIsImltcG9ydCBzcGxvb3NoIGZyb20gXCIuLi8uLi9hc3NldHMvYXVkaW8vc3Bsb29zaC5tcDNcIjtcbmltcG9ydCBzcGxvb3NoMiBmcm9tIFwiLi4vLi4vYXNzZXRzL2F1ZGlvL3NwbG9vc2gub2dnXCI7XG5pbXBvcnQgeyBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vZG9tTWFuaXB1bGF0b3JcIjtcbmltcG9ydCB7IHN1YnNjcmliZSB9IGZyb20gXCIuLi9wdWJzdWJcIjtcblxuY29uc3Qgc3Bsb29zaEF1ZGlvID0gKCkgPT4ge1xuICBjb25zdCBwbGF5U291bmQgPSAoKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNwbG9vc2hcIik7XG4gICAgaWYgKGF1ZGlvIGluc3RhbmNlb2YgSFRNTEF1ZGlvRWxlbWVudCAmJiBkaXYgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF5XCIpKSB7XG4gICAgICAgIGF1ZGlvXG4gICAgICAgICAgLnBsYXkoKVxuICAgICAgICAgIC50aGVuKClcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXVkaW8gZmFpbGVkIHRvIHBsYXlcIik7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHN1YnNjcmliZShcInNwbG9vc2hcIiwgcGxheVNvdW5kKTtcblxuICByZXR1cm4gY29tcG9zZUVsZW1lbnRzKFtcbiAgICBbXG4gICAgICBjcmVhdGVFbGVtZW50KFwic291cmNlXCIsIG51bGwsIG51bGwsIG51bGwsIFtcbiAgICAgICAgW1wic3JjXCIsIHNwbG9vc2hdLFxuICAgICAgICBbXCJ0eXBlXCIsIFwiYXVkaW8vbXBlZ1wiXSxcbiAgICAgIF0pLFxuICAgICAgY3JlYXRlRWxlbWVudChcInNvdXJjZVwiLCBudWxsLCBudWxsLCBudWxsLCBbXG4gICAgICAgIFtcInNyY1wiLCBzcGxvb3NoMl0sXG4gICAgICAgIFtcInR5cGVcIiwgXCJhdWRpby9vZ2dcIl0sXG4gICAgICBdKSxcbiAgICBdLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJhdWRpb1wiLCBbXCJzcGxvb3NoXCJdLCBudWxsLCBudWxsKSxcbiAgXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzcGxvb3NoQXVkaW87XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi9kb21NYW5pcHVsYXRvclwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhaW5lciBmcm9tIFwiLi9jb21wb25lbnRzL2dhbWVDb250YWluZXJcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgZGlzcGxheUdhbWUgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgY29uc3Qgdm9sdW1lRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudm9sdW1lLWRpdi0yXCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUNvbnRhaW5lcihwbGF5ZXIxLCBwbGF5ZXIyKV0pO1xuICAgIGlmICh2b2x1bWVEaXYyICYmIHZvbHVtZURpdjIuY2xhc3NMaXN0LmNvbnRhaW5zKFwicGxheVwiKSkge1xuICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52b2x1bWUtZGl2LTJcIik7XG4gICAgICBpZiAoZGl2IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgICBjb21wb3NlRWxlbWVudHMoW2NyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIl0pXSk7XG4gICAgICAgIGRpdi5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgICAgICAgZml4RWxlbWVudChkaXYsIFtjcmVhdGVWb2x1bWUoKV0pO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChcInBsYXlcIik7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QucmVtb3ZlKFwibm90LXBsYXlcIik7XG4gICAgICAgIHB1Ymxpc2goXCJzYWlsaW5nLXBsYXlcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkaXNwbGF5R2FtZTtcbiJdLCJuYW1lcyI6WyJjb21wb3NlRWxlbWVudHMiLCJjcmVhdGVFbGVtZW50IiwicmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIiLCJBSXN0YXJ0Iiwic3Vic2NyaWJlIiwicHVibGlzaCIsImNyZWF0ZUJlZ2luR2FtZUJ1dHRvbiIsInBsYXllclBvcyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY2VsbEV2ZW50IiwiZSIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvYmoiLCJ0YXJnZXQiLCJIVE1MRWxlbWVudCIsIngiLCJnZXRBdHRyaWJ1dGUiLCJ5IiwicGFyc2VJbnQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0YWNoRXZlbnRzIiwic2hpcHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInNoaXAiLCJwbGF5ZXJCb2FyZCIsImNlbGxzIiwiY2VsbCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uQmVnaW5HYW1lIiwiZXZlbnQiLCJidXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicmVtb3ZlIiwidHlwZSIsImNyZWF0ZVNoaXAiLCJjcmVhdGVDZWxsIiwibmR4VG9MZXR0ZXIiLCJuZHgiLCJudW0iLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJjcmVhdGVTaGlwbGVzc0NlbGwiLCJjb29yZHMiLCJjcmVhdGVCb2FyZERpc3BsYXkiLCJwbGF5ZXIiLCJlbGVtZW50cyIsInB1c2giLCJpIiwidG9TdHJpbmciLCJib2FyZE9iaiIsImJvYXJkIiwidmFsdWUiLCJjZWxsRnVuYyIsInBvc2l0aW9uIiwiZ2V0Iiwic2hpcE5hbWUiLCJuYW1lIiwic2hpcExlbmd0aCIsImxlbmd0aCIsInNoaXBBeGlzIiwiYXhpcyIsImlzU3VuayIsImZ1bmMiLCJwbGF5ZXJOdW0iLCJjcmVhdGVib2FyZEhlYWRlciIsImNyZWF0ZUJvYXJkSGVhZGVyIiwiY3JlYXRlTWFpbiIsImV4cGxvc2lvbiIsImV4cGxvc2lvbjIiLCJleHBsb3Npb25BdWRpbyIsInBsYXlTb3VuZCIsImNhbGxiYWNrIiwiZGl2IiwiYXVkaW8iLCJIVE1MQXVkaW9FbGVtZW50IiwicGxheUF1ZCIsInBsYXkiLCJ0aGVuIiwiRXJyb3IiLCJhcmciLCJmbiIsImNyZWF0ZUhlYWRlciIsImNyZWF0ZUZvb3RlciIsInNhaWxpbmdBdWRpbyIsInNwbG9vc2hBdWRpbyIsInNoaXBIaXRBdWRpbyIsImNyZWF0ZUNvbnRhaW5lciIsImNyZWF0ZVZvbHVtZURpdiIsImNyZWF0ZVBpcmF0ZUJvYXJkIiwiZml4RWxlbWVudCIsImNyZWF0ZUJvYXJkU2VjdGlvbiIsImJlZ2luR2FtZUJ1dHRvbiIsImJvYXJkU2VjdGlvbnMiLCJyZURpc3BsYXlCb2FyZCIsImNvbXBvbmVudCIsInNlY3Rpb24iLCJpc0F4aXMiLCJpc1NoaXBOYW1lIiwibmFtZXMiLCJpbmNsdWRlcyIsImRyYWdFbnRlciIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0Q2VsbCIsIkRyYWdFdmVudCIsImlkIiwiZGF0YVRyYW5zZmVyIiwiZ2V0RGF0YSIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNvbWUiLCJkcmFnT3ZlciIsImRyYWdMZWF2ZSIsImRyb3AiLCJwbGFjZVNoaXAiLCJ1bmlxaWQiLCJzaGlwRnVuYyIsImNoYW5nZUF4aXMiLCJyZW1vdmVTaGlwIiwiY29vcmRpbmF0ZXMiLCJzZXRUaW1lb3V0IiwiZHJhZ1N0YXJ0Iiwic2V0RGF0YSIsImRyYWdFbmQiLCJzaGlwSGl0Iiwic2hpcEhpdDIiLCJzcGxvb3NoIiwic3Bsb29zaDIiLCJkaXNwbGF5R2FtZSIsImJvZHkiLCJ2b2x1bWVEaXYyIiwiY3JlYXRlVm9sdW1lIiwicmVwbGFjZUNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==