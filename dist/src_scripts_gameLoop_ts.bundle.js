"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameLoop_ts"],{

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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var createAI = function createAI(boardFunc, playerNum) {
  var lastHit = [null, "both"];
  var direction = "both";
  var closeCells = [];
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
    var _lastHit$, _lastHit$2, _lastHit$3;

    if (lastHit[0] && ((_lastHit$ = lastHit[0]) === null || _lastHit$ === void 0 ? void 0 : _lastHit$.value) !== "hit" && ((_lastHit$2 = lastHit[0]) === null || _lastHit$2 === void 0 ? void 0 : _lastHit$2.value) !== "empty" && ((_lastHit$3 = lastHit[0]) === null || _lastHit$3 === void 0 ? void 0 : _lastHit$3.value.get(lastHit[0].position)) === "hit") {
      if (lastHit[0].left && coordsArr.some(function (coords) {
        var _lastHit$4, _lastHit$4$left, _lastHit$5, _lastHit$5$left;

        return ((_lastHit$4 = lastHit[0]) === null || _lastHit$4 === void 0 ? void 0 : (_lastHit$4$left = _lastHit$4.left) === null || _lastHit$4$left === void 0 ? void 0 : _lastHit$4$left.coords[0]) === coords[0] && ((_lastHit$5 = lastHit[0]) === null || _lastHit$5 === void 0 ? void 0 : (_lastHit$5$left = _lastHit$5.left) === null || _lastHit$5$left === void 0 ? void 0 : _lastHit$5$left.coords[1]) === coords[1];
      }) && (lastHit[1] === "both" || lastHit[1] === "horizontal")) {
        closeCells.push([lastHit[0].left, "horizontal"]);
      }

      if (lastHit[0].right && coordsArr.some(function (coords) {
        var _lastHit$6, _lastHit$6$right, _lastHit$7, _lastHit$7$right;

        return ((_lastHit$6 = lastHit[0]) === null || _lastHit$6 === void 0 ? void 0 : (_lastHit$6$right = _lastHit$6.right) === null || _lastHit$6$right === void 0 ? void 0 : _lastHit$6$right.coords[0]) === coords[0] && ((_lastHit$7 = lastHit[0]) === null || _lastHit$7 === void 0 ? void 0 : (_lastHit$7$right = _lastHit$7.right) === null || _lastHit$7$right === void 0 ? void 0 : _lastHit$7$right.coords[1]) === coords[1];
      }) && (lastHit[1] === "both" || lastHit[1] === "horizontal")) {
        closeCells.push([lastHit[0].right, "horizontal"]);
      }

      if (lastHit[0].top && coordsArr.some(function (coords) {
        var _lastHit$8, _lastHit$8$top, _lastHit$9, _lastHit$9$top;

        return ((_lastHit$8 = lastHit[0]) === null || _lastHit$8 === void 0 ? void 0 : (_lastHit$8$top = _lastHit$8.top) === null || _lastHit$8$top === void 0 ? void 0 : _lastHit$8$top.coords[0]) === coords[0] && ((_lastHit$9 = lastHit[0]) === null || _lastHit$9 === void 0 ? void 0 : (_lastHit$9$top = _lastHit$9.top) === null || _lastHit$9$top === void 0 ? void 0 : _lastHit$9$top.coords[1]) === coords[1];
      }) && (lastHit[1] === "both" || lastHit[1] === "vertical")) {
        closeCells.push([lastHit[0].top, "vertical"]);
      }

      if (lastHit[0].bottom && coordsArr.some(function (coords) {
        var _lastHit$10, _lastHit$10$bottom, _lastHit$11, _lastHit$11$bottom;

        return ((_lastHit$10 = lastHit[0]) === null || _lastHit$10 === void 0 ? void 0 : (_lastHit$10$bottom = _lastHit$10.bottom) === null || _lastHit$10$bottom === void 0 ? void 0 : _lastHit$10$bottom.coords[0]) === coords[0] && ((_lastHit$11 = lastHit[0]) === null || _lastHit$11 === void 0 ? void 0 : (_lastHit$11$bottom = _lastHit$11.bottom) === null || _lastHit$11$bottom === void 0 ? void 0 : _lastHit$11$bottom.coords[1]) === coords[1];
      }) && (lastHit[1] === "both" || lastHit[1] === "vertical")) {
        closeCells.push([lastHit[0].bottom, "vertical"]);
      }
    }

    if (closeCells.length > 0) {
      if (lastHit[1] === "vertical") {
        closeCells = closeCells.filter(function (val) {
          return val[1] !== "horizontal";
        });
      }

      if (lastHit[1] === "horizontal") {
        closeCells = closeCells.filter(function (val) {
          return val[1] !== "vertical";
        });
      }

      attack(enemy, closeCells[0][0].coords);
      var cellToHit;

      var _closeCells = closeCells,
          _closeCells2 = _slicedToArray(_closeCells, 1),
          arr = _closeCells2[0];

      var _arr2 = _slicedToArray(arr, 2);

      cellToHit = _arr2[0];
      direction = _arr2[1];

      var _hitCell = enemy.board.find(function (cell) {
        return cell.coords[0] === closeCells[0][0].coords[0] && cell.coords[1] === closeCells[0][0].coords[1];
      }) || null;

      if (_hitCell && (_hitCell === null || _hitCell === void 0 ? void 0 : _hitCell.value) !== "hit" && (_hitCell === null || _hitCell === void 0 ? void 0 : _hitCell.value) !== "empty" && (_hitCell === null || _hitCell === void 0 ? void 0 : _hitCell.value.get(_hitCell.position)) === "hit") {
        lastHit = [_hitCell, direction];
      } else {
        lastHit = [_hitCell, "both"];
      }

      coordsArr = coordsArr.filter(function (coords) {
        return !(closeCells[0][0].coords[0] === coords[0] && closeCells[0][0].coords[1] === coords[1]);
      });
      closeCells.shift();
      return;
    }

    var random = Math.floor(Math.random() * coordsArr.length);
    var coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
    var hitCell = enemy.board.find(function (cell) {
      return cell.coords[0] === coords[0][0] && cell.coords[1] === coords[0][1];
    }) || null;
    lastHit = [hitCell, "both"];
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

/***/ "./src/scripts/gameLoop.ts":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AIstart": () => (/* binding */ AIstart),
/* harmony export */   "receiveAttackCoords1AI1Player": () => (/* binding */ receiveAttackCoords1AI1Player),
/* harmony export */   "receiveAttackCoords2Player": () => (/* binding */ receiveAttackCoords2Player),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _aiPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiPlayer */ "./src/scripts/aiPlayer.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");






var attackEvents = function attackEvents(player, lasthit) {
  var mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "1AI";

  if (player === "Human") {
    if (lasthit && lasthit[1] === "miss") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Damn to the depths, we missed by a mile" : "They've missed by a mile");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
      });
    } else if (lasthit && lasthit[0] === "unsunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Jolly 'eavens, we've 'it their ship!" : "Jolly, their ships been hit.");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    } else if (lasthit && lasthit[0] === "sunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Amazin' Cap'n, their ".concat(lasthit[1], " been down to Davy Jones' Locker!") : "Amazin', their ".concat(lasthit[1], " been down to Davy Jones' Locker!"));
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    }
  } else if (lasthit && lasthit[1] === "miss") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Fortune be smilin' upon us, they've missed our ships." : "Unlucky, they missed!");
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
    });
  } else if (lasthit && lasthit[0] === "unsunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Damn to the depths, they've 'it our ".concat(lasthit[1]) : "Their ".concat(lasthit[1], "'s been hit"));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  } else if (lasthit && lasthit[0] === "sunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", mode === "1AI" ? "Shiver me timbers, our ".concat(lasthit[1], " gone down under") : "Shiver me timbers, their ".concat(lasthit[1], " gone down under"));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  }
};

var receiveAttackCoords1AI1Player = function receiveAttackCoords1AI1Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (playerPos === "player1") {
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "defeat");
      return;
    }

    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());
    setTimeout(function () {
      if (player1.boardObj.areAllSunk()) {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
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
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "defeat");
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
      return;
    }

    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      if (player2.boardObj.areAllSunk()) {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
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

var receiveAttackCoords2AI = function receiveAttackCoords2AI(player1, player2) {
  var main = document.querySelector("main");

  if (player1.type === "Human" || player2.type === "Human") {
    return;
  }

  if (player1.boardObj.areAllSunk()) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "AI2 beat AI!");
    return;
  }

  if (player2.boardObj.areAllSunk()) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "AI beat AI2!");
    return;
  }

  player2.attackEnemy(player1.boardObj);
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplay");
  attackEvents(player2.type, player1.boardObj.checkLastHit(), "2AI");
  setTimeout(function () {
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "AI2 beat AI!");
      return;
    }

    if (player1.type === "AI" && main) {
      player1.attackEnemy(player2.boardObj);
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplay");
      attackEvents(player1.type, player2.boardObj.checkLastHit(), "2AI");
      setTimeout(function () {
        receiveAttackCoords2AI(player1, player2);
      }, 2000);
    }
  }, 3000);
};

var AIstart = function AIstart(player1, player2) {
  var main = document.querySelector("main");

  if (player1.type === "AI" && main) {
    player1.attackEnemy(player2.boardObj);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      main.classList.remove("unclickable");
    }, 2000);
  }

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Fire when ready Cap'n!");
};

var receiveAttackCoords2Player = function receiveAttackCoords2Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (playerPos === "player1") {
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "".concat(player2.name, " beat ").concat(player1.name, ", ").concat(player2.name, " is the king of the carribean sea!"));
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "".concat(player1.name, " beat ").concat(player2.name, ", ").concat(player1.name, " is the king of the carribean sea!"));
      return;
    }

    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());
  }

  if (playerPos === "player2") {
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "defeat");
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
      return;
    }

    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
  }

  if (player1.boardObj.areAllSunk()) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "".concat(player2.name, " beat ").concat(player1.name, ", ").concat(player2.name, " is the king of the carribean sea!"));
  } else if (player2.boardObj.areAllSunk()) {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "".concat(player1.name, " beat ").concat(player2.name, ", ").concat(player1.name, " is the king of the carribean sea!"));
  } else {
    setTimeout(function () {
      if (main) {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pass-screenBegin");
        setTimeout(function () {
          (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
          (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Fire when ready Cap'n!");
          main.classList.remove("unclickable");
        }, 6000);
      }
    }, 2000);
  }
};

var startAIonly = function startAIonly(player1, player2) {
  var ships = document.querySelectorAll(".ship");
  ships.forEach(function (ship) {
    ship.classList.add("unclickable");
  });
  receiveAttackCoords2AI(player1, player2);
};

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
  (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("display-boards", player1, player2);

  if (player1.type === "AI" && player2.type === "AI") {
    startAIonly(player1, player2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxDQUFDekUsSUFBRCxDQUFsRSxHQUNJd0UsU0FBUyxDQUFDTyxHQUFELENBRGIsR0FFSVAsU0FITTtFQUFBLENBQVo7O0VBS0EsSUFBTVMsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0YsR0FBRCxFQUFpQjtJQUMzQixJQUFJQSxHQUFHLElBQUksQ0FBUCxJQUFZQSxHQUFHLEdBQUdOLFdBQVcsQ0FBQ3pFLElBQUQsQ0FBakMsRUFBeUM7TUFDdkN3RSxTQUFTLENBQUNPLEdBQUQsQ0FBVCxHQUFpQixLQUFqQjtJQUNEO0VBQ0YsQ0FKRDs7RUFNQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUztJQUFBLE9BQU1WLFNBQVMsQ0FBQ1csS0FBVixDQUFnQixVQUFDaEUsS0FBRDtNQUFBLE9BQVdBLEtBQUssS0FBSyxLQUFyQjtJQUFBLENBQWhCLENBQU47RUFBQSxDQUFmOztFQUVBLE9BQU87SUFBRW5CLElBQUksRUFBSkEsSUFBRjtJQUFRUyxJQUFJLEVBQUpBLElBQVI7SUFBY08sTUFBTSxFQUFFeUQsV0FBVyxDQUFDekUsSUFBRCxDQUFqQztJQUF5Q29CLEdBQUcsRUFBSEEsR0FBekM7SUFBOEM2RCxHQUFHLEVBQUhBLEdBQTlDO0lBQW1EQyxNQUFNLEVBQU5BO0VBQW5ELENBQVA7QUFDRCxDQTVCRDs7QUErQkEsaUVBQWUxQyxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2FpUGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lTG9vcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm9hcmRGdW5jIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5pbnRlcmZhY2UgQUlQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiQUlcIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQpID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xufVxuXG5jb25zdCBjcmVhdGVBSSA9IChcbiAgYm9hcmRGdW5jOiBCb2FyZEZ1bmMsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogQUlQbGF5ZXIgPT4ge1xuICBsZXQgbGFzdEhpdDogW0NlbGwgfCBudWxsLCBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIiB8IFwiYm90aFwiXSA9IFtcbiAgICBudWxsLFxuICAgIFwiYm90aFwiLFxuICBdO1xuICBsZXQgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIiB8IFwiYm90aFwiID0gXCJib3RoXCI7XG4gIGxldCBjbG9zZUNlbGxzOiBbQ2VsbCwgXCJ2ZXJ0aWNhbFwiIHwgXCJob3Jpem9udGFsXCIgfCBcImJvdGhcIl1bXSA9IFtdO1xuXG4gIGxldCBjb29yZHNBcnI6IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvb3Jkc0Fyci5wdXNoKFtpLCBqXSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGJvYXJkT2JqLFxuICAgIGF0dGFja0VuZW15OiBhdHRhY2ssXG4gIH0gPSBjcmVhdGVQbGF5ZXIoYm9hcmRGdW5jLCBcIkFJXCIsIHBsYXllck51bSk7XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmRPYmouZ2V0QUlBdmFpbGFibGVDb29yZHMoXG4gICAgICAgIGF4aXMsXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBzaGlwRnVuY1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID1cbiAgICAgICAgYXZhaWxhYmxlQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3Jkcy5sZW5ndGgpXTtcbiAgICAgIGJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgcmFuZG9tQ29vcmQsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkKSA9PiB7XG4gICAgaWYgKFxuICAgICAgbGFzdEhpdFswXSAmJlxuICAgICAgbGFzdEhpdFswXT8udmFsdWUgIT09IFwiaGl0XCIgJiZcbiAgICAgIGxhc3RIaXRbMF0/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgIGxhc3RIaXRbMF0/LnZhbHVlLmdldChsYXN0SGl0WzBdLnBvc2l0aW9uKSA9PT0gXCJoaXRcIlxuICAgICkge1xuICAgICAgaWYgKFxuICAgICAgICBsYXN0SGl0WzBdLmxlZnQgJiZcbiAgICAgICAgY29vcmRzQXJyLnNvbWUoXG4gICAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAgIGxhc3RIaXRbMF0/LmxlZnQ/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0WzBdPy5sZWZ0Py5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICApICYmXG4gICAgICAgIChsYXN0SGl0WzFdID09PSBcImJvdGhcIiB8fCBsYXN0SGl0WzFdID09PSBcImhvcml6b250YWxcIilcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2goW2xhc3RIaXRbMF0ubGVmdCwgXCJob3Jpem9udGFsXCJdKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdFswXS5yaWdodCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdFswXT8ucmlnaHQ/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0WzBdPy5yaWdodD8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKSAmJlxuICAgICAgICAobGFzdEhpdFsxXSA9PT0gXCJib3RoXCIgfHwgbGFzdEhpdFsxXSA9PT0gXCJob3Jpem9udGFsXCIpXG4gICAgICApIHtcbiAgICAgICAgY2xvc2VDZWxscy5wdXNoKFtsYXN0SGl0WzBdLnJpZ2h0LCBcImhvcml6b250YWxcIl0pO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBsYXN0SGl0WzBdLnRvcCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdFswXT8udG9wPy5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgbGFzdEhpdFswXT8udG9wPy5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICApICYmXG4gICAgICAgIChsYXN0SGl0WzFdID09PSBcImJvdGhcIiB8fCBsYXN0SGl0WzFdID09PSBcInZlcnRpY2FsXCIpXG4gICAgICApIHtcbiAgICAgICAgY2xvc2VDZWxscy5wdXNoKFtsYXN0SGl0WzBdLnRvcCwgXCJ2ZXJ0aWNhbFwiXSk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXRbMF0uYm90dG9tICYmXG4gICAgICAgIGNvb3Jkc0Fyci5zb21lKFxuICAgICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgICBsYXN0SGl0WzBdPy5ib3R0b20/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0WzBdPy5ib3R0b20/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICkgJiZcbiAgICAgICAgKGxhc3RIaXRbMV0gPT09IFwiYm90aFwiIHx8IGxhc3RIaXRbMV0gPT09IFwidmVydGljYWxcIilcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2goW2xhc3RIaXRbMF0uYm90dG9tLCBcInZlcnRpY2FsXCJdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNsb3NlQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKGxhc3RIaXRbMV0gPT09IFwidmVydGljYWxcIikge1xuICAgICAgICBjbG9zZUNlbGxzID0gY2xvc2VDZWxscy5maWx0ZXIoKHZhbCkgPT4gdmFsWzFdICE9PSBcImhvcml6b250YWxcIik7XG4gICAgICB9XG4gICAgICBpZiAobGFzdEhpdFsxXSA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgY2xvc2VDZWxscyA9IGNsb3NlQ2VsbHMuZmlsdGVyKCh2YWwpID0+IHZhbFsxXSAhPT0gXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgIH1cbiAgICAgIGF0dGFjayhlbmVteSwgY2xvc2VDZWxsc1swXVswXS5jb29yZHMpO1xuICAgICAgbGV0IGNlbGxUb0hpdDogQ2VsbDtcbiAgICAgIGNvbnN0IFthcnJdID0gY2xvc2VDZWxscztcbiAgICAgIFtjZWxsVG9IaXQsIGRpcmVjdGlvbl0gPSBhcnI7XG4gICAgICBjb25zdCBoaXRDZWxsID1cbiAgICAgICAgZW5lbXkuYm9hcmQuZmluZChcbiAgICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID09PSBjbG9zZUNlbGxzWzBdWzBdLmNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPT09IGNsb3NlQ2VsbHNbMF1bMF0uY29vcmRzWzFdXG4gICAgICAgICkgfHwgbnVsbDtcbiAgICAgIGlmIChcbiAgICAgICAgaGl0Q2VsbCAmJlxuICAgICAgICBoaXRDZWxsPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBoaXRDZWxsPy52YWx1ZSAhPT0gXCJlbXB0eVwiICYmXG4gICAgICAgIGhpdENlbGw/LnZhbHVlLmdldChoaXRDZWxsLnBvc2l0aW9uKSA9PT0gXCJoaXRcIlxuICAgICAgKSB7XG4gICAgICAgIGxhc3RIaXQgPSBbaGl0Q2VsbCwgZGlyZWN0aW9uXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxhc3RIaXQgPSBbaGl0Q2VsbCwgXCJib3RoXCJdO1xuICAgICAgfVxuICAgICAgY29vcmRzQXJyID0gY29vcmRzQXJyLmZpbHRlcihcbiAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAhKFxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXVswXS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXVswXS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgICBjbG9zZUNlbGxzLnNoaWZ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3Jkc0Fyci5sZW5ndGgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNvb3Jkc0Fyci5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICBhdHRhY2soZW5lbXksIGNvb3Jkc1swXSk7XG4gICAgY29uc3QgaGl0Q2VsbCA9XG4gICAgICBlbmVteS5ib2FyZC5maW5kKFxuICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdWzBdICYmIGNlbGwuY29vcmRzWzFdID09PSBjb29yZHNbMF1bMV1cbiAgICAgICkgfHwgbnVsbDtcbiAgICBsYXN0SGl0ID0gW2hpdENlbGwsIFwiYm90aFwiXTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBwbGF5ZXJOdW0sIHR5cGU6IFwiQUlcIiwgYm9hcmRPYmosIGF0dGFja0VuZW15LCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQUlQbGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJO1xuIiwiaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUFJIGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgYXR0YWNrRXZlbnRzID0gKFxuICBwbGF5ZXI6IFwiQUlcIiB8IFwiSHVtYW5cIixcbiAgbGFzdGhpdDogW3N0cmluZywgc3RyaW5nXSB8IG51bGwsXG4gIG1vZGUgPSBcIjFBSVwiXG4pID0+IHtcbiAgaWYgKHBsYXllciA9PT0gXCJIdW1hblwiKSB7XG4gICAgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFsxXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHB1Ymxpc2goXG4gICAgICAgIFwicGlyYXRlLXRleHRcIixcbiAgICAgICAgbW9kZSA9PT0gXCIxQUlcIlxuICAgICAgICAgID8gXCJEYW1uIHRvIHRoZSBkZXB0aHMsIHdlIG1pc3NlZCBieSBhIG1pbGVcIlxuICAgICAgICAgIDogXCJUaGV5J3ZlIG1pc3NlZCBieSBhIG1pbGVcIlxuICAgICAgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic3Bsb29zaFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInVuc3Vua1wiKSB7XG4gICAgICBwdWJsaXNoKFxuICAgICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICAgIG1vZGUgPT09IFwiMUFJXCJcbiAgICAgICAgICA/IGBKb2xseSAnZWF2ZW5zLCB3ZSd2ZSAnaXQgdGhlaXIgc2hpcCFgXG4gICAgICAgICAgOiBcIkpvbGx5LCB0aGVpciBzaGlwcyBiZWVuIGhpdC5cIlxuICAgICAgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInN1bmtcIikge1xuICAgICAgcHVibGlzaChcbiAgICAgICAgXCJwaXJhdGUtdGV4dFwiLFxuICAgICAgICBtb2RlID09PSBcIjFBSVwiXG4gICAgICAgICAgPyBgQW1hemluJyBDYXAnbiwgdGhlaXIgJHtsYXN0aGl0WzFdfSBiZWVuIGRvd24gdG8gRGF2eSBKb25lcycgTG9ja2VyIWBcbiAgICAgICAgICA6IGBBbWF6aW4nLCB0aGVpciAke2xhc3RoaXRbMV19IGJlZW4gZG93biB0byBEYXZ5IEpvbmVzJyBMb2NrZXIhYFxuICAgICAgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMV0gPT09IFwibWlzc1wiKSB7XG4gICAgcHVibGlzaChcbiAgICAgIFwicGlyYXRlLXRleHRcIixcbiAgICAgIG1vZGUgPT09IFwiMUFJXCJcbiAgICAgICAgPyBcIkZvcnR1bmUgYmUgc21pbGluJyB1cG9uIHVzLCB0aGV5J3ZlIG1pc3NlZCBvdXIgc2hpcHMuXCJcbiAgICAgICAgOiBcIlVubHVja3ksIHRoZXkgbWlzc2VkIVwiXG4gICAgKTtcbiAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgIHB1Ymxpc2goXCJzcGxvb3NoXCIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFswXSA9PT0gXCJ1bnN1bmtcIikge1xuICAgIHB1Ymxpc2goXG4gICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICBtb2RlID09PSBcIjFBSVwiXG4gICAgICAgID8gYERhbW4gdG8gdGhlIGRlcHRocywgdGhleSd2ZSAnaXQgb3VyICR7bGFzdGhpdFsxXX1gXG4gICAgICAgIDogYFRoZWlyICR7bGFzdGhpdFsxXX0ncyBiZWVuIGhpdGBcbiAgICApO1xuICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgcHVibGlzaChcInNoaXBIaXRcIik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInN1bmtcIikge1xuICAgIHB1Ymxpc2goXG4gICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICBtb2RlID09PSBcIjFBSVwiXG4gICAgICAgID8gYFNoaXZlciBtZSB0aW1iZXJzLCBvdXIgJHtsYXN0aGl0WzFdfSBnb25lIGRvd24gdW5kZXJgXG4gICAgICAgIDogYFNoaXZlciBtZSB0aW1iZXJzLCB0aGVpciAke2xhc3RoaXRbMV19IGdvbmUgZG93biB1bmRlcmBcbiAgICApO1xuICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgcHVibGlzaChcInNoaXBIaXRcIik7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyID0gKFxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyUG9zOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuXG4gIGlmIChwbGF5ZXJQb3MgPT09IFwicGxheWVyMVwiKSB7XG4gICAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICBwdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIFwidmljdG9yeVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBsYXllcjIuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICBwdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIFwiZGVmZWF0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMi50eXBlLCBwbGF5ZXIxLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJ2aWN0b3J5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgbWFpbikge1xuICAgICAgICBwbGF5ZXIxLmF0dGFja0VuZW15KHBsYXllcjIuYm9hcmRPYmopO1xuICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgYXR0YWNrRXZlbnRzKHBsYXllcjEudHlwZSwgcGxheWVyMi5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGlmIChwbGF5ZXJQb3MgPT09IFwicGxheWVyMlwiKSB7XG4gICAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICBwdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIFwiZGVmZWF0XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJ2aWN0b3J5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMS50eXBlLCBwbGF5ZXIyLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjIuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJ2aWN0b3J5XCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyMi50eXBlID09PSBcIkFJXCIgJiYgbWFpbikge1xuICAgICAgICBwbGF5ZXIyLmF0dGFja0VuZW15KHBsYXllcjEuYm9hcmRPYmopO1xuICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgYXR0YWNrRXZlbnRzKHBsYXllcjIudHlwZSwgcGxheWVyMS5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgfVxufTtcblxuY29uc3QgcmVjZWl2ZUF0dGFja0Nvb3JkczJBSSA9IChcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyXG4pID0+IHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuICBpZiAocGxheWVyMS50eXBlID09PSBcIkh1bWFuXCIgfHwgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICBwdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIFwiQUkyIGJlYXQgQUkhXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICBwdWJsaXNoKFwiZ2FtZS1vdmVyXCIsIFwiQUkgYmVhdCBBSTIhXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaik7XG4gIHB1Ymxpc2goXCJyZWRpc3BsYXlcIik7XG4gIGF0dGFja0V2ZW50cyhwbGF5ZXIyLnR5cGUsIHBsYXllcjEuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCksIFwiMkFJXCIpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGlmIChwbGF5ZXIxLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgcHVibGlzaChcImdhbWUtb3ZlclwiLCBcIkFJMiBiZWF0IEFJIVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIG1haW4pIHtcbiAgICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaik7XG4gICAgICBwdWJsaXNoKFwicmVkaXNwbGF5XCIpO1xuICAgICAgYXR0YWNrRXZlbnRzKHBsYXllcjEudHlwZSwgcGxheWVyMi5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSwgXCIyQUlcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcmVjZWl2ZUF0dGFja0Nvb3JkczJBSShwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH1cbiAgfSwgMzAwMCk7XG59O1xuXG5jb25zdCBBSXN0YXJ0ID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMS50eXBlLCBwbGF5ZXIyLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHB1Ymxpc2goXCJwaXJhdGUtdGV4dFwiLCBcIkZpcmUgd2hlbiByZWFkeSBDYXAnbiFcIik7XG59O1xuXG5jb25zdCByZWNlaXZlQXR0YWNrQ29vcmRzMlBsYXllciA9IChcbiAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcblxuICBpZiAocGxheWVyUG9zID09PSBcInBsYXllcjFcIikge1xuICAgIGlmIChwbGF5ZXIxLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgcHVibGlzaChcbiAgICAgICAgXCJnYW1lLW92ZXJcIixcbiAgICAgICAgYCR7cGxheWVyMi5uYW1lfSBiZWF0ICR7cGxheWVyMS5uYW1lfSwgJHtwbGF5ZXIyLm5hbWV9IGlzIHRoZSBraW5nIG9mIHRoZSBjYXJyaWJlYW4gc2VhIWBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwbGF5ZXIyLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgcHVibGlzaChcbiAgICAgICAgXCJnYW1lLW92ZXJcIixcbiAgICAgICAgYCR7cGxheWVyMS5uYW1lfSBiZWF0ICR7cGxheWVyMi5uYW1lfSwgJHtwbGF5ZXIxLm5hbWV9IGlzIHRoZSBraW5nIG9mIHRoZSBjYXJyaWJlYW4gc2VhIWBcbiAgICAgICk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWVyMi5hdHRhY2tFbmVteShwbGF5ZXIxLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIyLnR5cGUsIHBsYXllcjEuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuICB9XG5cbiAgaWYgKHBsYXllclBvcyA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJkZWZlYXRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwbGF5ZXIyLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgcHVibGlzaChcImdhbWUtb3ZlclwiLCBcInZpY3RvcnlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuICB9XG5cbiAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgcHVibGlzaChcbiAgICAgIFwiZ2FtZS1vdmVyXCIsXG4gICAgICBgJHtwbGF5ZXIyLm5hbWV9IGJlYXQgJHtwbGF5ZXIxLm5hbWV9LCAke3BsYXllcjIubmFtZX0gaXMgdGhlIGtpbmcgb2YgdGhlIGNhcnJpYmVhbiBzZWEhYFxuICAgICk7XG4gIH0gZWxzZSBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICBwdWJsaXNoKFxuICAgICAgXCJnYW1lLW92ZXJcIixcbiAgICAgIGAke3BsYXllcjEubmFtZX0gYmVhdCAke3BsYXllcjIubmFtZX0sICR7cGxheWVyMS5uYW1lfSBpcyB0aGUga2luZyBvZiB0aGUgY2FycmliZWFuIHNlYSFgXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmIChtYWluKSB7XG4gICAgICAgIHB1Ymxpc2goXCJwYXNzLXNjcmVlbkJlZ2luXCIpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgXCJGaXJlIHdoZW4gcmVhZHkgQ2FwJ24hXCIpO1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICB9LCA2MDAwKTtcbiAgICAgIH1cbiAgICB9LCAyMDAwKTtcbiAgfVxufTtcblxuY29uc3Qgc3RhcnRBSW9ubHkgPSAoXG4gIHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllclxuKSA9PiB7XG4gIGNvbnN0IHNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwidW5jbGlja2FibGVcIik7XG4gIH0pO1xuICByZWNlaXZlQXR0YWNrQ29vcmRzMkFJKHBsYXllcjEsIHBsYXllcjIpO1xufTtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjFOYW1lOiBzdHJpbmcsIHBsYXllcjJOYW1lOiBzdHJpbmcpID0+IHtcbiAgbGV0IHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyID0gY3JlYXRlUGxheWVyKFxuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBwbGF5ZXIxTmFtZSxcbiAgICBcInBsYXllcjFcIlxuICApO1xuICBsZXQgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIHBsYXllcjJOYW1lLFxuICAgIFwicGxheWVyMlwiXG4gICk7XG4gIGlmIChwbGF5ZXIxTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllcjEgPSBjcmVhdGVBSShjcmVhdGVHYW1lYm9hcmQsIFwicGxheWVyMVwiKTtcbiAgfVxuICBpZiAocGxheWVyMk5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIyID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkLCBcInBsYXllcjJcIik7XG4gIH1cbiAgcGxheWVyMS5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIHBsYXllcjIuaW5pdGlhbFBsYWNlKGNyZWF0ZVNoaXApO1xuXG4gIHB1Ymxpc2goXCJkaXNwbGF5LWJvYXJkc1wiLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcblxuICBpZiAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkFJXCIpIHtcbiAgICBzdGFydEFJb25seShwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfVxufTtcblxuZXhwb3J0IHtcbiAgc3RhcnRHYW1lLFxuICByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllcixcbiAgcmVjZWl2ZUF0dGFja0Nvb3JkczJQbGF5ZXIsXG4gIEFJc3RhcnQsXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkh1bWFuXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbiAgcmVtb3ZlU2hpcDogKG5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxudHlwZSBCb2FyZEZ1bmMgPSAoYm9hcmQ/OiBDZWxsW10pID0+IEdhbWVib2FyZDtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTmFtZTogc3RyaW5nLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IFBsYXllciA9PiB7XG4gIGNvbnN0IGJvYXJkID0gYm9hcmRGdW5jKCk7XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBib2FyZC5yZW1vdmVTaGlwKG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICB0eXBlOiBcIkh1bWFuXCIsXG4gICAgcGxheWVyTnVtLFxuICAgIGJvYXJkT2JqOiBib2FyZCxcbiAgICBhdHRhY2tFbmVteSxcbiAgICBwbGFjZVNoaXAsXG4gICAgaW5pdGlhbFBsYWNlLFxuICAgIHJlbW92ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFBsYXllciwgQm9hcmRGdW5jIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIgfCBudWxsKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIgfCBudWxsKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gbnVsbCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBheGlzLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJjcmVhdGVBSSIsImJvYXJkRnVuYyIsInBsYXllck51bSIsImxhc3RIaXQiLCJkaXJlY3Rpb24iLCJjbG9zZUNlbGxzIiwiY29vcmRzQXJyIiwiaSIsImoiLCJwdXNoIiwibmFtZSIsImJvYXJkT2JqIiwiYXR0YWNrIiwiYXR0YWNrRW5lbXkiLCJpbml0aWFsUGxhY2UiLCJzaGlwRnVuYyIsInNoaXBzIiwiZm9yRWFjaCIsInNoaXBOYW1lIiwiYXhpcyIsIk1hdGgiLCJyYW5kb20iLCJhdmFpbGFibGVDb29yZHMiLCJnZXRBSUF2YWlsYWJsZUNvb3JkcyIsInJhbmRvbUNvb3JkIiwiZmxvb3IiLCJsZW5ndGgiLCJwbGFjZVNoaXAiLCJlbmVteSIsInZhbHVlIiwiZ2V0IiwicG9zaXRpb24iLCJsZWZ0Iiwic29tZSIsImNvb3JkcyIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZmlsdGVyIiwidmFsIiwiY2VsbFRvSGl0IiwiYXJyIiwiaGl0Q2VsbCIsImJvYXJkIiwiZmluZCIsImNlbGwiLCJzaGlmdCIsInNwbGljZSIsInR5cGUiLCJjcmVhdGVHYW1lYm9hcmQiLCJjcmVhdGVTaGlwIiwicHVibGlzaCIsImF0dGFja0V2ZW50cyIsInBsYXllciIsImxhc3RoaXQiLCJtb2RlIiwicmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIiLCJwbGF5ZXIxIiwicGxheWVyMiIsInBsYXllclBvcyIsIm1haW4iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhcmVBbGxTdW5rIiwiY2hlY2tMYXN0SGl0Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInJlY2VpdmVBdHRhY2tDb29yZHMyQUkiLCJBSXN0YXJ0IiwicmVjZWl2ZUF0dGFja0Nvb3JkczJQbGF5ZXIiLCJzdGFydEFJb25seSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJzaGlwIiwiYWRkIiwic3RhcnRHYW1lIiwicGxheWVyMU5hbWUiLCJwbGF5ZXIyTmFtZSIsInBsYXllck5hbWUiLCJyZWNlaXZlQXR0YWNrIiwicmVtb3ZlU2hpcCIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNoaXBBcnJheSIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwibnVtIiwidW5kZWZpbmVkIiwiaGl0IiwiaXNTdW5rIiwiZXZlcnkiXSwic291cmNlUm9vdCI6IiJ9