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


var createAI = function createAI(boardFunc) {
  var coordsArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }

  var _createPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardFunc, "AI"),
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
    type: "AI",
    boardObj: boardObj,
    attackEnemy: attackEnemy,
    initialPlace: initialPlace
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAI);

/***/ }),

/***/ "./src/scripts/cell.ts":
/*!*****************************!*\
  !*** ./src/scripts/cell.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createCell = function createCell(coords, value) {
  return {
    coords: coords,
    value: value,
    position: null,
    top: null,
    right: null,
    bottom: null,
    left: null
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCell);

/***/ }),

/***/ "./src/scripts/gameLoop.ts":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _aiPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiPlayer */ "./src/scripts/aiPlayer.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");






var startGame = function startGame(player1Name, player2Name) {
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player1Name);
  var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player2Name);

  if (player1Name === "") {
    player1 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  if (player2Name === "") {
    player2 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  player1.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);
  player2.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (player1.type === "AI" && player2.type === "Human" || player1.type === "Human" && player2.type === "AI") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("display-boards", player1, player2);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startGame);

/***/ }),

/***/ "./src/scripts/gameboard.ts":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/scripts/cell.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createGameboard = function createGameboard(board) {
  var shipStore = [];
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };
  var directions = {
    top: [0, -1],
    right: [1, 0],
    bottom: [0, 1],
    left: [-1, 0]
  };
  var gameBoardArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      gameBoardArr.push((0,_cell__WEBPACK_IMPORTED_MODULE_1__["default"])([i, j], "empty"));
    }
  }

  if (board === undefined) {
    (function () {
      var doesMoveExist = function doesMoveExist(value, num, directionsObj, key) {
        var coords = _toConsumableArray(gameBoardArr[num].coords);

        coords[0] += directionsObj[key][0];
        coords[1] += directionsObj[key][1];

        if (value.coords[0] === coords[0] && value.coords[1] === coords[1]) {
          return true;
        }

        return false;
      };

      var checkIfKey = function checkIfKey(key, obj) {
        return key in obj;
      };

      var _loop = function _loop(_i) {
        var keys = Object.keys(directions);

        var _loop2 = function _loop2(_j) {
          var key = keys[_j];

          if (checkIfKey(key, directions)) {
            var move = gameBoardArr.find(function (value) {
              return doesMoveExist(value, _i, directions, key);
            });
            gameBoardArr[_i][key] = move || null;
          }
        };

        for (var _j = 0; _j < keys.length; _j += 1) {
          _loop2(_j);
        }
      };

      for (var _i = 0; _i < gameBoardArr.length; _i += 1) {
        _loop(_i);
      }
    })();
  } else {
    gameBoardArr = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(board);
  }

  var checkIfShipNotInCells = function checkIfShipNotInCells(coords, axis, shipName) {
    var length = shipLengths[shipName];
    var cell = gameBoardArr.find(function (obj) {
      return obj.coords[0] === coords[0] && obj.coords[1] === coords[1];
    });
    var arr = [];

    if (axis === "horizontal") {
      for (var _i2 = 0; _i2 < length; _i2 += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.right || undefined;
        }
      }
    } else if (axis === "vertical") {
      for (var _i3 = 0; _i3 < length; _i3 += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.bottom || undefined;
        }
      }
    }

    return arr.every(function (obj) {
      return obj.value === "empty";
    });
  };

  var placeShip = function placeShip(shipFactory, coords, axis, shipName) {
    var ship = shipFactory(shipName, axis);

    if (!checkIfShipNotInCells(coords, axis, shipName)) {
      return;
    }

    if (axis === "horizontal") {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[1] === coords[1]) {
          if (cell.coords[0] >= coords[0] && cell.coords[0] < coords[0] + shipLengths[shipName] && coords[0] + shipLengths[shipName] <= 10) {
            cell.value = ship;
            shipStore.push(ship);
            cell.position = cell.coords[0] - coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[0] === coords[0]) {
          if (cell.coords[1] >= coords[1] && cell.coords[1] < coords[1] + shipLengths[shipName] && coords[1] + shipLengths[shipName] <= 10) {
            cell.value = ship;
            shipStore.push(ship);
            cell.position = cell.coords[1] - coords[1];
          }
        }
      });
    }
  };

  var receiveAttack = function receiveAttack(coords) {
    var cell = gameBoardArr.find(function (obj) {
      if (obj.coords[0] === coords[0] && obj.coords[1] === coords[1]) {
        return true;
      }

      return false;
    });

    if ((cell === null || cell === void 0 ? void 0 : cell.value) === "empty") {
      cell.value = "hit";
    }

    if ((cell === null || cell === void 0 ? void 0 : cell.value) !== "hit" && (cell === null || cell === void 0 ? void 0 : cell.position) !== null) {
      cell === null || cell === void 0 ? void 0 : cell.value.hit(cell === null || cell === void 0 ? void 0 : cell.position);
    }
  };

  var areAllSunk = function areAllSunk() {
    return shipStore.every(function (ship) {
      return ship.isSunk();
    });
  };

  var getAvailableCoords = function getAvailableCoords(axis, shipName, shipFunc) {
    var _this = this;

    var arr = [];
    this.board.forEach(function (cell) {
      var gameboard = createGameboard(_this.board);
      gameboard.placeShip(shipFunc, cell.coords, axis, shipName);
      var placed = gameboard.board.find(function (obj) {
        return obj.coords[0] === cell.coords[0] && obj.coords[1] === cell.coords[1];
      });

      if ((placed === null || placed === void 0 ? void 0 : placed.value) !== "hit" && (placed === null || placed === void 0 ? void 0 : placed.value) !== "empty" && (placed === null || placed === void 0 ? void 0 : placed.value) !== undefined) {
        if ((placed === null || placed === void 0 ? void 0 : placed.value.name) === shipName) {
          arr.push(cell.coords);
        }
      }
    });
    return arr;
  };

  var getAIAvailableCoords = function getAIAvailableCoords(axis, shipName, shipFunc) {
    var _this2 = this;

    var arr = [];
    this.board.forEach(function (cell) {
      var _cell$left, _cell$right, _cell$top, _cell$top2, _cell$top2$right, _cell$top3, _cell$top3$left, _cell$bottom, _cell$bottom$right, _cell$bottom2, _cell$bottom2$left, _cell$bottom3;

      if (typeof ((_cell$left = cell.left) === null || _cell$left === void 0 ? void 0 : _cell$left.position) === "number" || typeof ((_cell$right = cell.right) === null || _cell$right === void 0 ? void 0 : _cell$right.position) === "number" || typeof ((_cell$top = cell.top) === null || _cell$top === void 0 ? void 0 : _cell$top.position) === "number" || typeof ((_cell$top2 = cell.top) === null || _cell$top2 === void 0 ? void 0 : (_cell$top2$right = _cell$top2.right) === null || _cell$top2$right === void 0 ? void 0 : _cell$top2$right.position) === "number" || typeof ((_cell$top3 = cell.top) === null || _cell$top3 === void 0 ? void 0 : (_cell$top3$left = _cell$top3.left) === null || _cell$top3$left === void 0 ? void 0 : _cell$top3$left.position) === "number" || typeof ((_cell$bottom = cell.bottom) === null || _cell$bottom === void 0 ? void 0 : (_cell$bottom$right = _cell$bottom.right) === null || _cell$bottom$right === void 0 ? void 0 : _cell$bottom$right.position) === "number" || typeof ((_cell$bottom2 = cell.bottom) === null || _cell$bottom2 === void 0 ? void 0 : (_cell$bottom2$left = _cell$bottom2.left) === null || _cell$bottom2$left === void 0 ? void 0 : _cell$bottom2$left.position) === "number" || typeof ((_cell$bottom3 = cell.bottom) === null || _cell$bottom3 === void 0 ? void 0 : _cell$bottom3.position) === "number") {
        return;
      }

      var gameboard = createGameboard(_this2.board);
      gameboard.placeShip(shipFunc, cell.coords, axis, shipName);
      var placed = gameboard.board.find(function (obj) {
        return obj.coords[0] === cell.coords[0] && obj.coords[1] === cell.coords[1];
      });

      if ((placed === null || placed === void 0 ? void 0 : placed.value) !== "hit" && (placed === null || placed === void 0 ? void 0 : placed.value) !== "empty" && (placed === null || placed === void 0 ? void 0 : placed.value) !== undefined) {
        if ((placed === null || placed === void 0 ? void 0 : placed.value.name) === shipName) {
          arr.push(cell.coords);
        }
      }
    });
    return arr;
  };

  var removeShip = function removeShip(shipName) {
    shipStore.forEach(function (ship, ndx) {
      if (ship.name === shipName) {
        shipStore.splice(ndx, 1);
      }
    });
    gameBoardArr.forEach(function (cell) {
      if (cell.value !== "hit" && cell.value !== "empty") {
        if (cell.value.name === shipName) {
          cell.value = "empty";
          cell.position = null;
        }
      }
    });
  };

  return {
    board: gameBoardArr,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    areAllSunk: areAllSunk,
    getAvailableCoords: getAvailableCoords,
    getAIAvailableCoords: getAIAvailableCoords,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);

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
var createPlayer = function createPlayer(boardFunc, playerName) {
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
    boardObj: board,
    attackEnemy: attackEnemy,
    placeShip: placeShip,
    initialPlace: initialPlace,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RnlCLEVBR3pCLFNBSHlCLEVBSXpCLFdBSnlCLEVBS3pCLFdBTHlCLENBQTNCO0lBUUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLFFBQUQsRUFBYztNQUMxQixJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixVQUF0QixHQUFtQyxZQUFoRDtNQUNBLElBQU1DLGVBQWUsR0FBRzBCLEtBQUssQ0FBQytCLGtCQUFOLENBQ3RCNUQsSUFEc0IsRUFFdEJELFFBRnNCLEVBR3RCSCxRQUhzQixDQUF4QjtNQUtBLElBQU1TLFdBQVcsR0FDZkYsZUFBZSxDQUFDRixJQUFJLENBQUNLLEtBQUwsQ0FBV0wsSUFBSSxDQUFDQyxNQUFMLEtBQWdCQyxlQUFlLENBQUNJLE1BQTNDLENBQUQsQ0FEakI7TUFFQXNCLEtBQUssQ0FBQ3JCLFNBQU4sQ0FBZ0JaLFFBQWhCLEVBQTBCUyxXQUExQixFQUF1Q0wsSUFBdkMsRUFBNkNELFFBQTdDO0lBQ0QsQ0FWRDtFQVdELENBcEJEOztFQXNCQSxPQUFPO0lBQ0xSLElBQUksRUFBRTBFLFVBREQ7SUFFTHJELElBQUksRUFBRSxPQUZEO0lBR0xwQixRQUFRLEVBQUVxQyxLQUhMO0lBSUxuQyxXQUFXLEVBQVhBLFdBSks7SUFLTGMsU0FBUyxFQUFUQSxTQUxLO0lBTUxiLFlBQVksRUFBWkEsWUFOSztJQU9Mb0UsVUFBVSxFQUFWQTtFQVBLLENBQVA7QUFTRCxDQW5ERDs7QUFzREEsaUVBQWUvRSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2FpUGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lTG9vcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wbGF5ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb2FyZEZ1bmMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmludGVyZmFjZSBBSVBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJBSVwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQpID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xufVxuXG5jb25zdCBjcmVhdGVBSSA9IChib2FyZEZ1bmM6IEJvYXJkRnVuYyk6IEFJUGxheWVyID0+IHtcbiAgY29uc3QgY29vcmRzQXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb29yZHNBcnIucHVzaChbaSwgal0pO1xuICAgIH1cbiAgfVxuICBjb25zdCB7IG5hbWUsIGJvYXJkT2JqLCBhdHRhY2tFbmVteTogYXR0YWNrIH0gPSBjcmVhdGVQbGF5ZXIoYm9hcmRGdW5jLCBcIkFJXCIpO1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkT2JqLmdldEFJQXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZE9iai5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCkgPT4ge1xuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3Jkc0Fyci5sZW5ndGgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNvb3Jkc0Fyci5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICBhdHRhY2soZW5lbXksIGNvb3Jkc1swXSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgbmFtZSwgdHlwZTogXCJBSVwiLCBib2FyZE9iaiwgYXR0YWNrRW5lbXksIGluaXRpYWxQbGFjZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBBSVBsYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUk7XG4iLCJpbXBvcnQgdHlwZSB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgQm9hcmRWYWx1ZXMgPSBTaGlwIHwgXCJlbXB0eVwiIHwgXCJoaXRcIjtcblxuaW50ZXJmYWNlIENlbGwge1xuICByZWFkb25seSBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XG4gIHZhbHVlOiBCb2FyZFZhbHVlcztcbiAgLypcbiAgUG9zaXRpb24gZGVub3RlcyB3aGF0IGFyZWEgb2Ygc2hpcCBpcyBsb2NhdGVkIG9uIGNlbGwuIFxuICBOdWxsIG1lYW5zIG5vIHNoaXA7XG4gIDAgbWVhbnMgZnJvbnQgb2Ygc2hpcDtcbiAgKi9cbiAgcG9zaXRpb246IG51bGwgfCBudW1iZXI7XG4gIHRvcDogQ2VsbCB8IG51bGw7XG4gIHJpZ2h0OiBDZWxsIHwgbnVsbDtcbiAgYm90dG9tOiBDZWxsIHwgbnVsbDtcbiAgbGVmdDogQ2VsbCB8IG51bGw7XG59XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLCB2YWx1ZTogXCJlbXB0eVwiKTogQ2VsbCA9PiAoe1xuICBjb29yZHMsXG4gIHZhbHVlLFxuICBwb3NpdGlvbjogbnVsbCxcbiAgdG9wOiBudWxsLFxuICByaWdodDogbnVsbCxcbiAgYm90dG9tOiBudWxsLFxuICBsZWZ0OiBudWxsLFxufSk7XG5cbmV4cG9ydCB0eXBlIHsgQ2VsbCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsImltcG9ydCB0eXBlIHsgQUlQbGF5ZXIgfSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVBSSBmcm9tIFwiLi9haVBsYXllclwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVHYW1lYm9hcmQgZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxTmFtZTogc3RyaW5nLCBwbGF5ZXIyTmFtZTogc3RyaW5nKSA9PiB7XG4gIGxldCBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllciA9IGNyZWF0ZVBsYXllcihjcmVhdGVHYW1lYm9hcmQsIHBsYXllcjFOYW1lKTtcbiAgbGV0IHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyID0gY3JlYXRlUGxheWVyKGNyZWF0ZUdhbWVib2FyZCwgcGxheWVyMk5hbWUpO1xuICBpZiAocGxheWVyMU5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIxID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkKTtcbiAgfVxuICBpZiAocGxheWVyMk5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIyID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkKTtcbiAgfVxuICBwbGF5ZXIxLmluaXRpYWxQbGFjZShjcmVhdGVTaGlwKTtcbiAgcGxheWVyMi5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIGlmIChcbiAgICAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHx8XG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJIdW1hblwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiKVxuICApIHtcbiAgICBwdWJsaXNoKFwiZGlzcGxheS1ib2FyZHNcIiwgcGxheWVyMSwgcGxheWVyMik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHN0YXJ0R2FtZTtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcE5hbWVzLCBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vY2VsbFwiO1xuXG50eXBlIEF4aXMgPSBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcblxuaW50ZXJmYWNlIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBDZWxsW107XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGYWN0b3J5OiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICByZWNlaXZlQXR0YWNrOiAoY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB2b2lkO1xuICBhcmVBbGxTdW5rOiAoKSA9PiB2b2lkO1xuICBnZXRBdmFpbGFibGVDb29yZHM6IChcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXMsXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXBcbiAgKSA9PiBbbnVtYmVyLCBudW1iZXJdW107XG4gIGdldEFJQXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICByZW1vdmVTaGlwOiAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKGJvYXJkPzogQ2VsbFtdKTogR2FtZWJvYXJkID0+IHtcbiAgY29uc3Qgc2hpcFN0b3JlOiBTaGlwW10gPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgIHRvcDogWzAsIC0xXSxcbiAgICByaWdodDogWzEsIDBdLFxuICAgIGJvdHRvbTogWzAsIDFdLFxuICAgIGxlZnQ6IFstMSwgMF0sXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb2VzTW92ZUV4aXN0ID0gKFxuICAgICAgdmFsdWU6IENlbGwsXG4gICAgICBudW06IG51bWJlcixcbiAgICAgIGRpcmVjdGlvbnNPYmo6IHR5cGVvZiBkaXJlY3Rpb25zLFxuICAgICAga2V5OiBrZXlvZiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gWy4uLmdhbWVCb2FyZEFycltudW1dLmNvb3Jkc107XG4gICAgICBjb29yZHNbMF0gKz0gZGlyZWN0aW9uc09ialtrZXldWzBdO1xuICAgICAgY29vcmRzWzFdICs9IGRpcmVjdGlvbnNPYmpba2V5XVsxXTtcbiAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tJZktleSA9IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICk6IGtleSBpcyBrZXlvZiB0eXBlb2YgZGlyZWN0aW9ucyA9PiBrZXkgaW4gb2JqO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVCb2FyZEFyci5maW5kKCh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRvZXNNb3ZlRXhpc3QodmFsdWUsIGksIGRpcmVjdGlvbnMsIGtleSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQXJyID0gY2xvbmVEZWVwKGJvYXJkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZTaGlwTm90SW5DZWxscyA9IChcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW3NoaXBOYW1lXTtcbiAgICBsZXQgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKFxuICAgICAgKG9iaikgPT4gb2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICk7XG4gICAgY29uc3QgYXJyOiBDZWxsW10gPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLnJpZ2h0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgY2VsbCA9IGNlbGwuYm90dG9tIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuZXZlcnkoKG9iaikgPT4gb2JqLnZhbHVlID09PSBcImVtcHR5XCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwTmFtZSwgYXhpcyk7XG4gICAgaWYgKCFjaGVja0lmU2hpcE5vdEluQ2VsbHMoY29vcmRzLCBheGlzLCBzaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID49IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPCBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1swXSAtIGNvb3Jkc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdID49IGNvb3Jkc1sxXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPCBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1sxXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1sxXSAtIGNvb3Jkc1sxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChjZWxsPy52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjZWxsLnZhbHVlID0gXCJoaXRcIjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbD8ucG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNlbGw/LnZhbHVlLmhpdChjZWxsPy5wb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiBzaGlwU3RvcmUuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUNvb3JkcyA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCh0aGlzLmJvYXJkKTtcbiAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNlbGwuY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBwbGFjZWQgPSBnYW1lYm9hcmQuYm9hcmQuZmluZChcbiAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICBvYmouY29vcmRzWzBdID09PSBjZWxsLmNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjZWxsLmNvb3Jkc1sxXVxuICAgICAgKTtcblxuICAgICAgaWYgKFxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImhpdFwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBpZiAocGxhY2VkPy52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwuY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgZ2V0QUlBdmFpbGFibGVDb29yZHMgPSBmdW5jdGlvbiBnZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGNlbGwubGVmdD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwucmlnaHQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwudG9wPy5yaWdodD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwudG9wPy5sZWZ0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LnJpZ2h0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LmxlZnQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLmJvdHRvbT8ucG9zaXRpb24gPT09IFwibnVtYmVyXCJcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjZWxsLmNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgcGxhY2VkID0gZ2FtZWJvYXJkLmJvYXJkLmZpbmQoXG4gICAgICAgIChvYmopID0+XG4gICAgICAgICAgb2JqLmNvb3Jkc1swXSA9PT0gY2VsbC5jb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY2VsbC5jb29yZHNbMV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlZD8udmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsLmNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIHNoaXBTdG9yZS5mb3JFYWNoKChzaGlwLCBuZHgpID0+IHtcbiAgICAgIGlmIChzaGlwLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgIHNoaXBTdG9yZS5zcGxpY2UobmR4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwudmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbC52YWx1ZSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIGlmIChjZWxsLnZhbHVlLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgY2VsbC52YWx1ZSA9IFwiZW1wdHlcIjtcbiAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGdhbWVCb2FyZEFycixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTdW5rLFxuICAgIGdldEF2YWlsYWJsZUNvb3JkcyxcbiAgICBnZXRBSUF2YWlsYWJsZUNvb3JkcyxcbiAgICByZW1vdmVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiIsImltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW50ZXJmYWNlIFBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJIdW1hblwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoYm9hcmRGdW5jOiBCb2FyZEZ1bmMsIHBsYXllck5hbWU6IHN0cmluZyk6IFBsYXllciA9PiB7XG4gIGNvbnN0IGJvYXJkID0gYm9hcmRGdW5jKCk7XG5cbiAgY29uc3QgYXR0YWNrRW5lbXkgPSAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgZW5lbXkucmVjZWl2ZUF0dGFjayhjb29yZHMpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBib2FyZC5yZW1vdmVTaGlwKG5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgbmFtZTogcGxheWVyTmFtZSxcbiAgICB0eXBlOiBcIkh1bWFuXCIsXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJjcmVhdGVBSSIsImJvYXJkRnVuYyIsImNvb3Jkc0FyciIsImkiLCJqIiwicHVzaCIsIm5hbWUiLCJib2FyZE9iaiIsImF0dGFjayIsImF0dGFja0VuZW15IiwiaW5pdGlhbFBsYWNlIiwic2hpcEZ1bmMiLCJzaGlwcyIsImZvckVhY2giLCJzaGlwTmFtZSIsImF4aXMiLCJNYXRoIiwicmFuZG9tIiwiYXZhaWxhYmxlQ29vcmRzIiwiZ2V0QUlBdmFpbGFibGVDb29yZHMiLCJyYW5kb21Db29yZCIsImZsb29yIiwibGVuZ3RoIiwicGxhY2VTaGlwIiwiZW5lbXkiLCJjb29yZHMiLCJzcGxpY2UiLCJ0eXBlIiwiY3JlYXRlQ2VsbCIsInZhbHVlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJjcmVhdGVHYW1lYm9hcmQiLCJjcmVhdGVTaGlwIiwicHVibGlzaCIsInN0YXJ0R2FtZSIsInBsYXllcjFOYW1lIiwicGxheWVyMk5hbWUiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNsb25lRGVlcCIsImJvYXJkIiwic2hpcFN0b3JlIiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJkaXJlY3Rpb25zIiwiZ2FtZUJvYXJkQXJyIiwidW5kZWZpbmVkIiwiZG9lc01vdmVFeGlzdCIsIm51bSIsImRpcmVjdGlvbnNPYmoiLCJrZXkiLCJjaGVja0lmS2V5Iiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm1vdmUiLCJmaW5kIiwiY2hlY2tJZlNoaXBOb3RJbkNlbGxzIiwiY2VsbCIsImFyciIsImV2ZXJ5Iiwic2hpcEZhY3RvcnkiLCJzaGlwIiwicmVjZWl2ZUF0dGFjayIsImhpdCIsImFyZUFsbFN1bmsiLCJpc1N1bmsiLCJnZXRBdmFpbGFibGVDb29yZHMiLCJnYW1lYm9hcmQiLCJwbGFjZWQiLCJyZW1vdmVTaGlwIiwibmR4IiwicGxheWVyTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=