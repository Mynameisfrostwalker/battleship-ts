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
      attack = _createPlayer.attackEnemy,
      initialPlace = _createPlayer.initialPlace;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBLENBQVo7O0VBS0EsSUFBTWIsR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ3BCLEdBQUQsRUFBaUI7SUFDM0IsSUFBSUEsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxHQUFHVixXQUFXLENBQUMvQixJQUFELENBQWpDLEVBQXlDO01BQ3ZDMEUsU0FBUyxDQUFDakMsR0FBRCxDQUFULEdBQWlCLEtBQWpCO0lBQ0Q7RUFDRixDQUpEOztFQU1BLElBQU1zQixNQUFNLEdBQUcsU0FBVEEsTUFBUztJQUFBLE9BQU1XLFNBQVMsQ0FBQ25CLEtBQVYsQ0FBZ0IsVUFBQ3pDLEtBQUQ7TUFBQSxPQUFXQSxLQUFLLEtBQUssS0FBckI7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBZjs7RUFFQSxPQUFPO0lBQUVkLElBQUksRUFBSkEsSUFBRjtJQUFRbUQsSUFBSSxFQUFKQSxJQUFSO0lBQWMxQyxNQUFNLEVBQUVzQixXQUFXLENBQUMvQixJQUFELENBQWpDO0lBQXlDMkUsR0FBRyxFQUFIQSxHQUF6QztJQUE4Q2QsR0FBRyxFQUFIQSxHQUE5QztJQUFtREUsTUFBTSxFQUFOQTtFQUFuRCxDQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBLGlFQUFlMUMsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY2VsbC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZUxvb3AudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm9hcmRGdW5jIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5pbnRlcmZhY2UgQUlQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiQUlcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlQUkgPSAoYm9hcmRGdW5jOiBCb2FyZEZ1bmMpOiBBSVBsYXllciA9PiB7XG4gIGNvbnN0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgICBpbml0aWFsUGxhY2UsXG4gIH0gPSBjcmVhdGVQbGF5ZXIoYm9hcmRGdW5jLCBcIkFJXCIpO1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yZHNBcnIubGVuZ3RoKTtcbiAgICBjb25zdCBjb29yZHMgPSBjb29yZHNBcnIuc3BsaWNlKHJhbmRvbSwgMSk7XG4gICAgYXR0YWNrKGVuZW15LCBjb29yZHNbMF0pO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIHR5cGU6IFwiQUlcIiwgYm9hcmRPYmosIGF0dGFja0VuZW15LCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQUlQbGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJO1xuIiwiaW1wb3J0IHR5cGUgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIEJvYXJkVmFsdWVzID0gU2hpcCB8IFwiZW1wdHlcIiB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIC8qXG4gIFBvc2l0aW9uIGRlbm90ZXMgd2hhdCBhcmVhIG9mIHNoaXAgaXMgbG9jYXRlZCBvbiBjZWxsLiBcbiAgTnVsbCBtZWFucyBubyBzaGlwO1xuICAwIG1lYW5zIGZyb250IG9mIHNoaXA7XG4gICovXG4gIHBvc2l0aW9uOiBudWxsIHwgbnVtYmVyO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSwgdmFsdWU6IFwiZW1wdHlcIik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgcG9zaXRpb246IG51bGwsXG4gIHRvcDogbnVsbCxcbiAgcmlnaHQ6IG51bGwsXG4gIGJvdHRvbTogbnVsbCxcbiAgbGVmdDogbnVsbCxcbn0pO1xuXG5leHBvcnQgdHlwZSB7IENlbGwgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlQUkgZnJvbSBcIi4vYWlQbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgcHVibGlzaCB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyMU5hbWU6IHN0cmluZywgcGxheWVyMk5hbWU6IHN0cmluZykgPT4ge1xuICBsZXQgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoY3JlYXRlR2FtZWJvYXJkLCBwbGF5ZXIxTmFtZSk7XG4gIGxldCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllciA9IGNyZWF0ZVBsYXllcihjcmVhdGVHYW1lYm9hcmQsIHBsYXllcjJOYW1lKTtcbiAgaWYgKHBsYXllcjFOYW1lID09PSBcIlwiKSB7XG4gICAgcGxheWVyMSA9IGNyZWF0ZUFJKGNyZWF0ZUdhbWVib2FyZCk7XG4gIH1cbiAgaWYgKHBsYXllcjJOYW1lID09PSBcIlwiKSB7XG4gICAgcGxheWVyMiA9IGNyZWF0ZUFJKGNyZWF0ZUdhbWVib2FyZCk7XG4gIH1cbiAgcGxheWVyMS5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIHBsYXllcjIuaW5pdGlhbFBsYWNlKGNyZWF0ZVNoaXApO1xuICBpZiAoXG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJIdW1hblwiKSB8fFxuICAgIChwbGF5ZXIxLnR5cGUgPT09IFwiSHVtYW5cIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIilcbiAgKSB7XG4gICAgcHVibGlzaChcImRpc3BsYXktYm9hcmRzXCIsIHBsYXllcjEsIHBsYXllcjIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzdGFydEdhbWU7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcywgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVDZWxsIGZyb20gXCIuL2NlbGxcIjtcblxudHlwZSBBeGlzID0gXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG5cbmludGVyZmFjZSBHYW1lYm9hcmQge1xuICBib2FyZDogQ2VsbFtdO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgcmVjZWl2ZUF0dGFjazogKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgYXJlQWxsU3VuazogKCkgPT4gdm9pZDtcbiAgZ2V0QXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICByZW1vdmVTaGlwOiAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKGJvYXJkPzogQ2VsbFtdKTogR2FtZWJvYXJkID0+IHtcbiAgY29uc3Qgc2hpcFN0b3JlOiBTaGlwW10gPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgIHRvcDogWzAsIC0xXSxcbiAgICByaWdodDogWzEsIDBdLFxuICAgIGJvdHRvbTogWzAsIDFdLFxuICAgIGxlZnQ6IFstMSwgMF0sXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb2VzTW92ZUV4aXN0ID0gKFxuICAgICAgdmFsdWU6IENlbGwsXG4gICAgICBudW06IG51bWJlcixcbiAgICAgIGRpcmVjdGlvbnNPYmo6IHR5cGVvZiBkaXJlY3Rpb25zLFxuICAgICAga2V5OiBrZXlvZiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gWy4uLmdhbWVCb2FyZEFycltudW1dLmNvb3Jkc107XG4gICAgICBjb29yZHNbMF0gKz0gZGlyZWN0aW9uc09ialtrZXldWzBdO1xuICAgICAgY29vcmRzWzFdICs9IGRpcmVjdGlvbnNPYmpba2V5XVsxXTtcbiAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tJZktleSA9IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICk6IGtleSBpcyBrZXlvZiB0eXBlb2YgZGlyZWN0aW9ucyA9PiBrZXkgaW4gb2JqO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVCb2FyZEFyci5maW5kKCh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRvZXNNb3ZlRXhpc3QodmFsdWUsIGksIGRpcmVjdGlvbnMsIGtleSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQXJyID0gY2xvbmVEZWVwKGJvYXJkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZTaGlwTm90SW5DZWxscyA9IChcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW3NoaXBOYW1lXTtcbiAgICBsZXQgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKFxuICAgICAgKG9iaikgPT4gb2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICk7XG4gICAgY29uc3QgYXJyOiBDZWxsW10gPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLnJpZ2h0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgY2VsbCA9IGNlbGwuYm90dG9tIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuZXZlcnkoKG9iaikgPT4gb2JqLnZhbHVlID09PSBcImVtcHR5XCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwTmFtZSwgYXhpcyk7XG4gICAgaWYgKCFjaGVja0lmU2hpcE5vdEluQ2VsbHMoY29vcmRzLCBheGlzLCBzaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID49IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPCBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1swXSAtIGNvb3Jkc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdID49IGNvb3Jkc1sxXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPCBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1sxXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1sxXSAtIGNvb3Jkc1sxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChjZWxsPy52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjZWxsLnZhbHVlID0gXCJoaXRcIjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbD8ucG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNlbGw/LnZhbHVlLmhpdChjZWxsPy5wb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiBzaGlwU3RvcmUuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUNvb3JkcyA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCh0aGlzLmJvYXJkKTtcbiAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNlbGwuY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBwbGFjZWQgPSBnYW1lYm9hcmQuYm9hcmQuZmluZChcbiAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICBvYmouY29vcmRzWzBdID09PSBjZWxsLmNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjZWxsLmNvb3Jkc1sxXVxuICAgICAgKTtcblxuICAgICAgaWYgKFxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImhpdFwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBpZiAocGxhY2VkPy52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwuY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChzaGlwTmFtZTogU2hpcE5hbWVzKSA9PiB7XG4gICAgc2hpcFN0b3JlLmZvckVhY2goKHNoaXAsIG5keCkgPT4ge1xuICAgICAgaWYgKHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgc2hpcFN0b3JlLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbC52YWx1ZSAhPT0gXCJoaXRcIiAmJiBjZWxsLnZhbHVlICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgaWYgKGNlbGwudmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBjZWxsLnZhbHVlID0gXCJlbXB0eVwiO1xuICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZDogZ2FtZUJvYXJkQXJyLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFN1bmssXG4gICAgZ2V0QXZhaWxhYmxlQ29vcmRzLFxuICAgIHJlbW92ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZWJvYXJkO1xuIiwiaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkh1bWFuXCI7XG4gIGJvYXJkT2JqOiBHYW1lYm9hcmQ7XG4gIGF0dGFja0VuZW15OiAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB2b2lkO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgaW5pdGlhbFBsYWNlOiAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHZvaWQ7XG4gIHJlbW92ZVNoaXA6IChuYW1lOiBTaGlwTmFtZXMpID0+IHZvaWQ7XG59XG5cbnR5cGUgQm9hcmRGdW5jID0gKGJvYXJkPzogQ2VsbFtdKSA9PiBHYW1lYm9hcmQ7XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IChib2FyZEZ1bmM6IEJvYXJkRnVuYywgcGxheWVyTmFtZTogc3RyaW5nKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBib2FyZE9iajogYm9hcmQsXG4gICAgYXR0YWNrRW5lbXksXG4gICAgcGxhY2VTaGlwLFxuICAgIGluaXRpYWxQbGFjZSxcbiAgICByZW1vdmVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBQbGF5ZXIsIEJvYXJkRnVuYyB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwidHlwZSBTaGlwTmFtZXMgPVxuICB8IFwiY2FycmllclwiXG4gIHwgXCJiYXR0bGVzaGlwXCJcbiAgfCBcImNydWlzZXJcIlxuICB8IFwic3VibWFyaW5lXCJcbiAgfCBcImRlc3Ryb3llclwiO1xuXG50eXBlIFNoaXBWYWx1ZXMgPSBTaGlwTmFtZXMgfCBcImhpdFwiO1xuXG5pbnRlcmZhY2UgU2hpcCB7XG4gIG5hbWU6IFNoaXBOYW1lcztcbiAgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBnZXQobnVtPzogbnVtYmVyKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgbnVtID49IDAgJiYgbnVtIDwgc2hpcExlbmd0aHNbbmFtZV1cbiAgICAgID8gc2hpcEFycmF5W251bV1cbiAgICAgIDogc2hpcEFycmF5O1xuXG4gIGNvbnN0IGhpdCA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXSkge1xuICAgICAgc2hpcEFycmF5W251bV0gPSBcImhpdFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSA9PT0gXCJoaXRcIik7XG5cbiAgcmV0dXJuIHsgbmFtZSwgYXhpcywgbGVuZ3RoOiBzaGlwTGVuZ3Roc1tuYW1lXSwgZ2V0LCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBTaGlwVmFsdWVzLCBTaGlwTmFtZXMsIFNoaXAgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iXSwibmFtZXMiOlsiY3JlYXRlUGxheWVyIiwiY3JlYXRlQUkiLCJib2FyZEZ1bmMiLCJjb29yZHNBcnIiLCJpIiwiaiIsInB1c2giLCJuYW1lIiwiYm9hcmRPYmoiLCJhdHRhY2siLCJhdHRhY2tFbmVteSIsImluaXRpYWxQbGFjZSIsImVuZW15IiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwibGVuZ3RoIiwiY29vcmRzIiwic3BsaWNlIiwidHlwZSIsImNyZWF0ZUNlbGwiLCJ2YWx1ZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiY3JlYXRlR2FtZWJvYXJkIiwiY3JlYXRlU2hpcCIsInB1Ymxpc2giLCJzdGFydEdhbWUiLCJwbGF5ZXIxTmFtZSIsInBsYXllcjJOYW1lIiwicGxheWVyMSIsInBsYXllcjIiLCJjbG9uZURlZXAiLCJib2FyZCIsInNoaXBTdG9yZSIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiZGlyZWN0aW9ucyIsImdhbWVCb2FyZEFyciIsInVuZGVmaW5lZCIsImRvZXNNb3ZlRXhpc3QiLCJudW0iLCJkaXJlY3Rpb25zT2JqIiwia2V5IiwiY2hlY2tJZktleSIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJtb3ZlIiwiZmluZCIsImNoZWNrSWZTaGlwTm90SW5DZWxscyIsImF4aXMiLCJzaGlwTmFtZSIsImNlbGwiLCJhcnIiLCJldmVyeSIsInBsYWNlU2hpcCIsInNoaXBGYWN0b3J5Iiwic2hpcCIsImZvckVhY2giLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiYXJlQWxsU3VuayIsImlzU3VuayIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNoaXBGdW5jIiwiZ2FtZWJvYXJkIiwicGxhY2VkIiwicmVtb3ZlU2hpcCIsIm5keCIsInBsYXllck5hbWUiLCJzaGlwcyIsImF2YWlsYWJsZUNvb3JkcyIsInJhbmRvbUNvb3JkIiwic2hpcEFycmF5IiwiZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==