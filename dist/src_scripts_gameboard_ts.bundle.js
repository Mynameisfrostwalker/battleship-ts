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
  var lasthit = null;
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
      lasthit = ["unsunk", "miss"];
    }

    if ((cell === null || cell === void 0 ? void 0 : cell.value) !== "hit" && (cell === null || cell === void 0 ? void 0 : cell.position) !== null) {
      cell === null || cell === void 0 ? void 0 : cell.value.hit(cell === null || cell === void 0 ? void 0 : cell.position);

      if (cell !== null && cell !== void 0 && cell.value.name) {
        lasthit = cell.value.isSunk() ? ["sunk", cell.value.name] : ["unsunk", cell.value.name];
      }
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

  var checkLastHit = function checkLastHit() {
    return lasthit;
  };

  return {
    board: gameBoardArr,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    areAllSunk: areAllSunk,
    getAvailableCoords: getAvailableCoords,
    getAIAvailableCoords: getAIAvailableCoords,
    removeShip: removeShip,
    checkLastHit: checkLastHit
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsQ0FBQ2dELE1BQVYsQ0FBaUJELEdBQWpCLEVBQXNCLENBQXRCO01BQ0Q7SUFDRixDQUpEO0lBS0F0QyxZQUFZLENBQUMwQixPQUFiLENBQXFCLFVBQUNQLElBQUQsRUFBVTtNQUM3QixJQUFJQSxJQUFJLENBQUNyQyxLQUFMLEtBQWUsS0FBZixJQUF3QnFDLElBQUksQ0FBQ3JDLEtBQUwsS0FBZSxPQUEzQyxFQUFvRDtRQUNsRCxJQUFJcUMsSUFBSSxDQUFDckMsS0FBTCxDQUFXMkMsSUFBWCxLQUFvQlAsUUFBeEIsRUFBa0M7VUFDaENDLElBQUksQ0FBQ3JDLEtBQUwsR0FBYSxPQUFiO1VBQ0FxQyxJQUFJLENBQUNwQyxRQUFMLEdBQWdCLElBQWhCO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7RUFRRCxDQWREOztFQWdCQSxJQUFNeUQsWUFBWSxHQUFHLFNBQWZBLFlBQWU7SUFBQSxPQUFNekMsT0FBTjtFQUFBLENBQXJCOztFQUVBLE9BQU87SUFDTFQsS0FBSyxFQUFFVSxZQURGO0lBRUxzQixTQUFTLEVBQVRBLFNBRks7SUFHTE0sYUFBYSxFQUFiQSxhQUhLO0lBSUxHLFVBQVUsRUFBVkEsVUFKSztJQUtMQyxrQkFBa0IsRUFBbEJBLGtCQUxLO0lBTUxJLG9CQUFvQixFQUFwQkEsb0JBTks7SUFPTEMsVUFBVSxFQUFWQSxVQVBLO0lBUUxHLFlBQVksRUFBWkE7RUFSSyxDQUFQO0FBVUQsQ0F4UUQ7O0FBMlFBLGlFQUFlbkQsZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIEJvYXJkVmFsdWVzID0gU2hpcCB8IFwiZW1wdHlcIiB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIC8qXG4gIFBvc2l0aW9uIGRlbm90ZXMgd2hhdCBhcmVhIG9mIHNoaXAgaXMgbG9jYXRlZCBvbiBjZWxsLiBcbiAgTnVsbCBtZWFucyBubyBzaGlwO1xuICAwIG1lYW5zIGZyb250IG9mIHNoaXA7XG4gICovXG4gIHBvc2l0aW9uOiBudWxsIHwgbnVtYmVyO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSwgdmFsdWU6IFwiZW1wdHlcIik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgcG9zaXRpb246IG51bGwsXG4gIHRvcDogbnVsbCxcbiAgcmlnaHQ6IG51bGwsXG4gIGJvdHRvbTogbnVsbCxcbiAgbGVmdDogbnVsbCxcbn0pO1xuXG5leHBvcnQgdHlwZSB7IENlbGwgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcywgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVDZWxsIGZyb20gXCIuL2NlbGxcIjtcblxudHlwZSBBeGlzID0gXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG5cbmludGVyZmFjZSBHYW1lYm9hcmQge1xuICBib2FyZDogQ2VsbFtdO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgcmVjZWl2ZUF0dGFjazogKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgYXJlQWxsU3VuazogKCkgPT4gYm9vbGVhbjtcbiAgZ2V0QXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICBnZXRBSUF2YWlsYWJsZUNvb3JkczogKFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApID0+IFtudW1iZXIsIG51bWJlcl1bXTtcbiAgcmVtb3ZlU2hpcDogKHNoaXBOYW1lOiBTaGlwTmFtZXMpID0+IHZvaWQ7XG4gIGNoZWNrTGFzdEhpdDogKCkgPT4gW3N0cmluZywgc3RyaW5nXSB8IG51bGw7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChib2FyZD86IENlbGxbXSk6IEdhbWVib2FyZCA9PiB7XG4gIGNvbnN0IHNoaXBTdG9yZTogU2hpcFtdID0gW107XG4gIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDIsXG4gIH07XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IHtcbiAgICB0b3A6IFswLCAtMV0sXG4gICAgcmlnaHQ6IFsxLCAwXSxcbiAgICBib3R0b206IFswLCAxXSxcbiAgICBsZWZ0OiBbLTEsIDBdLFxuICB9O1xuXG4gIGxldCBsYXN0aGl0OiBbc3RyaW5nLCBzdHJpbmddIHwgbnVsbCA9IG51bGw7XG5cbiAgbGV0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb2VzTW92ZUV4aXN0ID0gKFxuICAgICAgdmFsdWU6IENlbGwsXG4gICAgICBudW06IG51bWJlcixcbiAgICAgIGRpcmVjdGlvbnNPYmo6IHR5cGVvZiBkaXJlY3Rpb25zLFxuICAgICAga2V5OiBrZXlvZiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gWy4uLmdhbWVCb2FyZEFycltudW1dLmNvb3Jkc107XG4gICAgICBjb29yZHNbMF0gKz0gZGlyZWN0aW9uc09ialtrZXldWzBdO1xuICAgICAgY29vcmRzWzFdICs9IGRpcmVjdGlvbnNPYmpba2V5XVsxXTtcbiAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tJZktleSA9IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICk6IGtleSBpcyBrZXlvZiB0eXBlb2YgZGlyZWN0aW9ucyA9PiBrZXkgaW4gb2JqO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVCb2FyZEFyci5maW5kKCh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRvZXNNb3ZlRXhpc3QodmFsdWUsIGksIGRpcmVjdGlvbnMsIGtleSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQXJyID0gY2xvbmVEZWVwKGJvYXJkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZTaGlwTm90SW5DZWxscyA9IChcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW3NoaXBOYW1lXTtcbiAgICBsZXQgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKFxuICAgICAgKG9iaikgPT4gb2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICk7XG4gICAgY29uc3QgYXJyOiBDZWxsW10gPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLnJpZ2h0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgY2VsbCA9IGNlbGwuYm90dG9tIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuZXZlcnkoKG9iaikgPT4gb2JqLnZhbHVlID09PSBcImVtcHR5XCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGlmIChzaGlwU3RvcmUuZmluZCgoc2hpcCkgPT4gc2hpcC5uYW1lID09PSBzaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBOYW1lLCBheGlzKTtcbiAgICBpZiAoIWNoZWNrSWZTaGlwTm90SW5DZWxscyhjb29yZHMsIGF4aXMsIHNoaXBOYW1lKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChjZWxsLmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPj0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA8IGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSAmJlxuICAgICAgICAgICAgY29vcmRzWzBdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdIDw9IDEwXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjZWxsLnZhbHVlID0gc2hpcDtcbiAgICAgICAgICAgIGlmICghc2hpcFN0b3JlLmZpbmQoKHNoaXAyKSA9PiBzaGlwMi5uYW1lID09PSBzaGlwTmFtZSkpIHtcbiAgICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMF0gLSBjb29yZHNbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzBdID09PSBjb29yZHNbMF0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA+PSBjb29yZHNbMV0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdIDwgY29vcmRzWzFdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgaWYgKCFzaGlwU3RvcmUuZmluZCgoc2hpcDIpID0+IHNoaXAyLm5hbWUgPT09IHNoaXBOYW1lKSkge1xuICAgICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1sxXSAtIGNvb3Jkc1sxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChjZWxsPy52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjZWxsLnZhbHVlID0gXCJoaXRcIjtcbiAgICAgIGxhc3RoaXQgPSBbXCJ1bnN1bmtcIiwgXCJtaXNzXCJdO1xuICAgIH1cblxuICAgIGlmIChjZWxsPy52YWx1ZSAhPT0gXCJoaXRcIiAmJiBjZWxsPy5wb3NpdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY2VsbD8udmFsdWUuaGl0KGNlbGw/LnBvc2l0aW9uKTtcbiAgICAgIGlmIChjZWxsPy52YWx1ZS5uYW1lKSB7XG4gICAgICAgIGxhc3RoaXQgPSBjZWxsLnZhbHVlLmlzU3VuaygpXG4gICAgICAgICAgPyBbXCJzdW5rXCIsIGNlbGwudmFsdWUubmFtZV1cbiAgICAgICAgICA6IFtcInVuc3Vua1wiLCBjZWxsLnZhbHVlLm5hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT4gc2hpcFN0b3JlLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCBnZXRBdmFpbGFibGVDb29yZHMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVDb29yZHMoXG4gICAgdGhpczogR2FtZWJvYXJkLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgIGNvbnN0IGFycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjZWxsLmNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgcGxhY2VkID0gZ2FtZWJvYXJkLmJvYXJkLmZpbmQoXG4gICAgICAgIChvYmopID0+XG4gICAgICAgICAgb2JqLmNvb3Jkc1swXSA9PT0gY2VsbC5jb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY2VsbC5jb29yZHNbMV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlZD8udmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsLmNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlQ29vcmRzID0gZnVuY3Rpb24gZ2V0QUlBdmFpbGFibGVDb29yZHMoXG4gICAgdGhpczogR2FtZWJvYXJkLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgIGNvbnN0IGFycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBjZWxsLmxlZnQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnJpZ2h0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC50b3A/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ucmlnaHQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ubGVmdD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwuYm90dG9tPy5yaWdodD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwuYm90dG9tPy5sZWZ0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LnBvc2l0aW9uID09PSBcIm51bWJlclwiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHRoaXMuYm9hcmQpO1xuICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY2VsbC5jb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICAgIGNvbnN0IHBsYWNlZCA9IGdhbWVib2FyZC5ib2FyZC5maW5kKFxuICAgICAgICAob2JqKSA9PlxuICAgICAgICAgIG9iai5jb29yZHNbMF0gPT09IGNlbGwuY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNlbGwuY29vcmRzWzFdXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiaGl0XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJlbXB0eVwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGFjZWQ/LnZhbHVlLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbC5jb29yZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKHNoaXBOYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBzaGlwU3RvcmUuZm9yRWFjaCgoc2hpcCwgbmR4KSA9PiB7XG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICBzaGlwU3RvcmUuc3BsaWNlKG5keCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLnZhbHVlICE9PSBcImhpdFwiICYmIGNlbGwudmFsdWUgIT09IFwiZW1wdHlcIikge1xuICAgICAgICBpZiAoY2VsbC52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGNlbGwudmFsdWUgPSBcImVtcHR5XCI7XG4gICAgICAgICAgY2VsbC5wb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBjaGVja0xhc3RIaXQgPSAoKSA9PiBsYXN0aGl0O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGdhbWVCb2FyZEFycixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTdW5rLFxuICAgIGdldEF2YWlsYWJsZUNvb3JkcyxcbiAgICBnZXRBSUF2YWlsYWJsZUNvb3JkcyxcbiAgICByZW1vdmVTaGlwLFxuICAgIGNoZWNrTGFzdEhpdCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lYm9hcmQ7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ2VsbCIsImNvb3JkcyIsInZhbHVlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJjbG9uZURlZXAiLCJjcmVhdGVHYW1lYm9hcmQiLCJib2FyZCIsInNoaXBTdG9yZSIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiZGlyZWN0aW9ucyIsImxhc3RoaXQiLCJnYW1lQm9hcmRBcnIiLCJpIiwiaiIsInB1c2giLCJ1bmRlZmluZWQiLCJkb2VzTW92ZUV4aXN0IiwibnVtIiwiZGlyZWN0aW9uc09iaiIsImtleSIsImNoZWNrSWZLZXkiLCJvYmoiLCJrZXlzIiwiT2JqZWN0IiwibW92ZSIsImZpbmQiLCJsZW5ndGgiLCJjaGVja0lmU2hpcE5vdEluQ2VsbHMiLCJheGlzIiwic2hpcE5hbWUiLCJjZWxsIiwiYXJyIiwiZXZlcnkiLCJwbGFjZVNoaXAiLCJzaGlwRmFjdG9yeSIsInNoaXAiLCJuYW1lIiwiZm9yRWFjaCIsInNoaXAyIiwicmVjZWl2ZUF0dGFjayIsImhpdCIsImlzU3VuayIsImFyZUFsbFN1bmsiLCJnZXRBdmFpbGFibGVDb29yZHMiLCJzaGlwRnVuYyIsImdhbWVib2FyZCIsInBsYWNlZCIsImdldEFJQXZhaWxhYmxlQ29vcmRzIiwicmVtb3ZlU2hpcCIsIm5keCIsInNwbGljZSIsImNoZWNrTGFzdEhpdCJdLCJzb3VyY2VSb290IjoiIn0=