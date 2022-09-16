"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameboard_ts"],{

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
    if (shipStore.find(function (ship) {
      return ship.name === shipName;
    })) {
      return;
    }

    var ship = shipFactory(shipName, axis);

    if (!checkIfShipNotInCells(coords, axis, shipName)) {
      return;
    }

    if (axis === "horizontal") {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[1] === coords[1]) {
          if (cell.coords[0] >= coords[0] && cell.coords[0] < coords[0] + shipLengths[shipName] && coords[0] + shipLengths[shipName] <= 10) {
            cell.value = ship;

            if (!shipStore.find(function (ship2) {
              return ship2.name === shipName;
            })) {
              shipStore.push(ship);
            }

            cell.position = cell.coords[0] - coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[0] === coords[0]) {
          if (cell.coords[1] >= coords[1] && cell.coords[1] < coords[1] + shipLengths[shipName] && coords[1] + shipLengths[shipName] <= 10) {
            cell.value = ship;

            if (!shipStore.find(function (ship2) {
              return ship2.name === shipName;
            })) {
              shipStore.push(ship);
            }

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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0IsSUFBaEI7UUFDRDtNQUNGO0lBQ0YsQ0FQRDtFQVFELENBZEQ7O0VBZ0JBLE9BQU87SUFDTE8sS0FBSyxFQUFFUyxZQURGO0lBRUxzQixTQUFTLEVBQVRBLFNBRks7SUFHTE0sYUFBYSxFQUFiQSxhQUhLO0lBSUxFLFVBQVUsRUFBVkEsVUFKSztJQUtMRSxrQkFBa0IsRUFBbEJBLGtCQUxLO0lBTUxJLG9CQUFvQixFQUFwQkEsb0JBTks7SUFPTEMsVUFBVSxFQUFWQTtFQVBLLENBQVA7QUFTRCxDQTdQRDs7QUFnUUEsaUVBQWUvQyxlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NlbGwudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2dhbWVib2FyZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgQm9hcmRWYWx1ZXMgPSBTaGlwIHwgXCJlbXB0eVwiIHwgXCJoaXRcIjtcblxuaW50ZXJmYWNlIENlbGwge1xuICByZWFkb25seSBjb29yZHM6IFtudW1iZXIsIG51bWJlcl07XG4gIHZhbHVlOiBCb2FyZFZhbHVlcztcbiAgLypcbiAgUG9zaXRpb24gZGVub3RlcyB3aGF0IGFyZWEgb2Ygc2hpcCBpcyBsb2NhdGVkIG9uIGNlbGwuIFxuICBOdWxsIG1lYW5zIG5vIHNoaXA7XG4gIDAgbWVhbnMgZnJvbnQgb2Ygc2hpcDtcbiAgKi9cbiAgcG9zaXRpb246IG51bGwgfCBudW1iZXI7XG4gIHRvcDogQ2VsbCB8IG51bGw7XG4gIHJpZ2h0OiBDZWxsIHwgbnVsbDtcbiAgYm90dG9tOiBDZWxsIHwgbnVsbDtcbiAgbGVmdDogQ2VsbCB8IG51bGw7XG59XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLCB2YWx1ZTogXCJlbXB0eVwiKTogQ2VsbCA9PiAoe1xuICBjb29yZHMsXG4gIHZhbHVlLFxuICBwb3NpdGlvbjogbnVsbCxcbiAgdG9wOiBudWxsLFxuICByaWdodDogbnVsbCxcbiAgYm90dG9tOiBudWxsLFxuICBsZWZ0OiBudWxsLFxufSk7XG5cbmV4cG9ydCB0eXBlIHsgQ2VsbCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsImltcG9ydCB7IGNsb25lRGVlcCB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcE5hbWVzLCBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IGNyZWF0ZUNlbGwgZnJvbSBcIi4vY2VsbFwiO1xuXG50eXBlIEF4aXMgPSBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcblxuaW50ZXJmYWNlIEdhbWVib2FyZCB7XG4gIGJvYXJkOiBDZWxsW107XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGYWN0b3J5OiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICByZWNlaXZlQXR0YWNrOiAoY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB2b2lkO1xuICBhcmVBbGxTdW5rOiAoKSA9PiB2b2lkO1xuICBnZXRBdmFpbGFibGVDb29yZHM6IChcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXMsXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXBcbiAgKSA9PiBbbnVtYmVyLCBudW1iZXJdW107XG4gIGdldEFJQXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICByZW1vdmVTaGlwOiAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKGJvYXJkPzogQ2VsbFtdKTogR2FtZWJvYXJkID0+IHtcbiAgY29uc3Qgc2hpcFN0b3JlOiBTaGlwW10gPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgIHRvcDogWzAsIC0xXSxcbiAgICByaWdodDogWzEsIDBdLFxuICAgIGJvdHRvbTogWzAsIDFdLFxuICAgIGxlZnQ6IFstMSwgMF0sXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb2VzTW92ZUV4aXN0ID0gKFxuICAgICAgdmFsdWU6IENlbGwsXG4gICAgICBudW06IG51bWJlcixcbiAgICAgIGRpcmVjdGlvbnNPYmo6IHR5cGVvZiBkaXJlY3Rpb25zLFxuICAgICAga2V5OiBrZXlvZiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gWy4uLmdhbWVCb2FyZEFycltudW1dLmNvb3Jkc107XG4gICAgICBjb29yZHNbMF0gKz0gZGlyZWN0aW9uc09ialtrZXldWzBdO1xuICAgICAgY29vcmRzWzFdICs9IGRpcmVjdGlvbnNPYmpba2V5XVsxXTtcbiAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tJZktleSA9IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICk6IGtleSBpcyBrZXlvZiB0eXBlb2YgZGlyZWN0aW9ucyA9PiBrZXkgaW4gb2JqO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVCb2FyZEFyci5maW5kKCh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRvZXNNb3ZlRXhpc3QodmFsdWUsIGksIGRpcmVjdGlvbnMsIGtleSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQXJyID0gY2xvbmVEZWVwKGJvYXJkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZTaGlwTm90SW5DZWxscyA9IChcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW3NoaXBOYW1lXTtcbiAgICBsZXQgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKFxuICAgICAgKG9iaikgPT4gb2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICk7XG4gICAgY29uc3QgYXJyOiBDZWxsW10gPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLnJpZ2h0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgY2VsbCA9IGNlbGwuYm90dG9tIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuZXZlcnkoKG9iaikgPT4gb2JqLnZhbHVlID09PSBcImVtcHR5XCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGlmIChzaGlwU3RvcmUuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBOYW1lLCBheGlzKTtcbiAgICBpZiAoIWNoZWNrSWZTaGlwTm90SW5DZWxscyhjb29yZHMsIGF4aXMsIHNoaXBOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChjZWxsLmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPj0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA8IGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSAmJlxuICAgICAgICAgICAgY29vcmRzWzBdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdIDw9IDEwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxsLnZhbHVlID0gc2hpcDtcbiAgICAgICAgICAgIGlmICghc2hpcFN0b3JlLmZpbmQoKHNoaXAyKSA9PiBzaGlwMi5uYW1lID09PSBzaGlwTmFtZSkpIHtcbiAgICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMF0gLSBjb29yZHNbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzBdID09PSBjb29yZHNbMF0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA+PSBjb29yZHNbMV0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdIDwgY29vcmRzWzFdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgaWYgKCFzaGlwU3RvcmUuZmluZCgoc2hpcDIpID0+IHNoaXAyLm5hbWUgPT09IHNoaXBOYW1lKSkge1xuICAgICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1sxXSAtIGNvb3Jkc1sxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChjZWxsPy52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjZWxsLnZhbHVlID0gXCJoaXRcIjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbD8ucG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNlbGw/LnZhbHVlLmhpdChjZWxsPy5wb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiBzaGlwU3RvcmUuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUNvb3JkcyA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCh0aGlzLmJvYXJkKTtcbiAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNlbGwuY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBwbGFjZWQgPSBnYW1lYm9hcmQuYm9hcmQuZmluZChcbiAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICBvYmouY29vcmRzWzBdID09PSBjZWxsLmNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjZWxsLmNvb3Jkc1sxXVxuICAgICAgKTtcblxuICAgICAgaWYgKFxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImhpdFwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBpZiAocGxhY2VkPy52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwuY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgZ2V0QUlBdmFpbGFibGVDb29yZHMgPSBmdW5jdGlvbiBnZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIGNlbGwubGVmdD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwucmlnaHQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwudG9wPy5yaWdodD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwudG9wPy5sZWZ0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LnJpZ2h0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LmxlZnQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLmJvdHRvbT8ucG9zaXRpb24gPT09IFwibnVtYmVyXCJcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjZWxsLmNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgcGxhY2VkID0gZ2FtZWJvYXJkLmJvYXJkLmZpbmQoXG4gICAgICAgIChvYmopID0+XG4gICAgICAgICAgb2JqLmNvb3Jkc1swXSA9PT0gY2VsbC5jb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY2VsbC5jb29yZHNbMV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlZD8udmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsLmNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIHNoaXBTdG9yZS5mb3JFYWNoKChzaGlwLCBuZHgpID0+IHtcbiAgICAgIGlmIChzaGlwLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgIHNoaXBTdG9yZS5zcGxpY2UobmR4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwudmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbC52YWx1ZSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIGlmIChjZWxsLnZhbHVlLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgY2VsbC52YWx1ZSA9IFwiZW1wdHlcIjtcbiAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGdhbWVCb2FyZEFycixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTdW5rLFxuICAgIGdldEF2YWlsYWJsZUNvb3JkcyxcbiAgICBnZXRBSUF2YWlsYWJsZUNvb3JkcyxcbiAgICByZW1vdmVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDZWxsIiwiY29vcmRzIiwidmFsdWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNsb25lRGVlcCIsImNyZWF0ZUdhbWVib2FyZCIsImJvYXJkIiwic2hpcFN0b3JlIiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJkaXJlY3Rpb25zIiwiZ2FtZUJvYXJkQXJyIiwiaSIsImoiLCJwdXNoIiwidW5kZWZpbmVkIiwiZG9lc01vdmVFeGlzdCIsIm51bSIsImRpcmVjdGlvbnNPYmoiLCJrZXkiLCJjaGVja0lmS2V5Iiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm1vdmUiLCJmaW5kIiwibGVuZ3RoIiwiY2hlY2tJZlNoaXBOb3RJbkNlbGxzIiwiYXhpcyIsInNoaXBOYW1lIiwiY2VsbCIsImFyciIsImV2ZXJ5IiwicGxhY2VTaGlwIiwic2hpcEZhY3RvcnkiLCJzaGlwIiwibmFtZSIsImZvckVhY2giLCJzaGlwMiIsInJlY2VpdmVBdHRhY2siLCJoaXQiLCJhcmVBbGxTdW5rIiwiaXNTdW5rIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwic2hpcEZ1bmMiLCJnYW1lYm9hcmQiLCJwbGFjZWQiLCJnZXRBSUF2YWlsYWJsZUNvb3JkcyIsInJlbW92ZVNoaXAiLCJuZHgiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9