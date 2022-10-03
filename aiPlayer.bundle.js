/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/scripts/aiPlayer.ts ***!
  \*********************************/
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wbGF5ZXIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiSHVtYW5cIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBwbGF5ZXJOdW0sXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBCb2FyZEZ1bmMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmludGVyZmFjZSBBSVBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJBSVwiO1xuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCI7XG4gIGJvYXJkT2JqOiBHYW1lYm9hcmQ7XG4gIGF0dGFja0VuZW15OiAoZW5lbXk6IEdhbWVib2FyZCkgPT4gdm9pZDtcbiAgaW5pdGlhbFBsYWNlOiAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUFJID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pOiBBSVBsYXllciA9PiB7XG4gIGxldCBsYXN0SGl0OiBbQ2VsbCB8IG51bGwsIFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJib3RoXCJdID0gW1xuICAgIG51bGwsXG4gICAgXCJib3RoXCIsXG4gIF07XG4gIGxldCBkaXJlY3Rpb246IFwidmVydGljYWxcIiB8IFwiaG9yaXpvbnRhbFwiIHwgXCJib3RoXCIgPSBcImJvdGhcIjtcbiAgbGV0IGNsb3NlQ2VsbHM6IFtDZWxsLCBcInZlcnRpY2FsXCIgfCBcImhvcml6b250YWxcIiB8IFwiYm90aFwiXVtdID0gW107XG5cbiAgbGV0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMsIFwiQUlcIiwgcGxheWVyTnVtKTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZE9iai5nZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBpZiAoXG4gICAgICBsYXN0SGl0WzBdICYmXG4gICAgICBsYXN0SGl0WzBdPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgbGFzdEhpdFswXT8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgbGFzdEhpdFswXT8udmFsdWUuZ2V0KGxhc3RIaXRbMF0ucG9zaXRpb24pID09PSBcImhpdFwiXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXRbMF0ubGVmdCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdFswXT8ubGVmdD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXRbMF0/LmxlZnQ/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICkgJiZcbiAgICAgICAgKGxhc3RIaXRbMV0gPT09IFwiYm90aFwiIHx8IGxhc3RIaXRbMV0gPT09IFwiaG9yaXpvbnRhbFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChbbGFzdEhpdFswXS5sZWZ0LCBcImhvcml6b250YWxcIl0pO1xuICAgICAgfVxuICAgICAgaWYgKFxuICAgICAgICBsYXN0SGl0WzBdLnJpZ2h0ICYmXG4gICAgICAgIGNvb3Jkc0Fyci5zb21lKFxuICAgICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgICBsYXN0SGl0WzBdPy5yaWdodD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXRbMF0/LnJpZ2h0Py5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICApICYmXG4gICAgICAgIChsYXN0SGl0WzFdID09PSBcImJvdGhcIiB8fCBsYXN0SGl0WzFdID09PSBcImhvcml6b250YWxcIilcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2goW2xhc3RIaXRbMF0ucmlnaHQsIFwiaG9yaXpvbnRhbFwiXSk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXRbMF0udG9wICYmXG4gICAgICAgIGNvb3Jkc0Fyci5zb21lKFxuICAgICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgICBsYXN0SGl0WzBdPy50b3A/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0WzBdPy50b3A/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICkgJiZcbiAgICAgICAgKGxhc3RIaXRbMV0gPT09IFwiYm90aFwiIHx8IGxhc3RIaXRbMV0gPT09IFwidmVydGljYWxcIilcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2goW2xhc3RIaXRbMF0udG9wLCBcInZlcnRpY2FsXCJdKTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdFswXS5ib3R0b20gJiZcbiAgICAgICAgY29vcmRzQXJyLnNvbWUoXG4gICAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAgIGxhc3RIaXRbMF0/LmJvdHRvbT8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXRbMF0/LmJvdHRvbT8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKSAmJlxuICAgICAgICAobGFzdEhpdFsxXSA9PT0gXCJib3RoXCIgfHwgbGFzdEhpdFsxXSA9PT0gXCJ2ZXJ0aWNhbFwiKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChbbGFzdEhpdFswXS5ib3R0b20sIFwidmVydGljYWxcIl0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2xvc2VDZWxscy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAobGFzdEhpdFsxXSA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMgPSBjbG9zZUNlbGxzLmZpbHRlcigodmFsKSA9PiB2YWxbMV0gIT09IFwiaG9yaXpvbnRhbFwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChsYXN0SGl0WzFdID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBjbG9zZUNlbGxzID0gY2xvc2VDZWxscy5maWx0ZXIoKHZhbCkgPT4gdmFsWzFdICE9PSBcInZlcnRpY2FsXCIpO1xuICAgICAgfVxuICAgICAgYXR0YWNrKGVuZW15LCBjbG9zZUNlbGxzWzBdWzBdLmNvb3Jkcyk7XG4gICAgICBsZXQgY2VsbFRvSGl0OiBDZWxsO1xuICAgICAgY29uc3QgW2Fycl0gPSBjbG9zZUNlbGxzO1xuICAgICAgW2NlbGxUb0hpdCwgZGlyZWN0aW9uXSA9IGFycjtcbiAgICAgIGNvbnN0IGhpdENlbGwgPVxuICAgICAgICBlbmVteS5ib2FyZC5maW5kKFxuICAgICAgICAgIChjZWxsKSA9PlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPT09IGNsb3NlQ2VsbHNbMF1bMF0uY29vcmRzWzBdICYmXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA9PT0gY2xvc2VDZWxsc1swXVswXS5jb29yZHNbMV1cbiAgICAgICAgKSB8fCBudWxsO1xuICAgICAgaWYgKFxuICAgICAgICBoaXRDZWxsICYmXG4gICAgICAgIGhpdENlbGw/LnZhbHVlICE9PSBcImhpdFwiICYmXG4gICAgICAgIGhpdENlbGw/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgaGl0Q2VsbD8udmFsdWUuZ2V0KGhpdENlbGwucG9zaXRpb24pID09PSBcImhpdFwiXG4gICAgICApIHtcbiAgICAgICAgbGFzdEhpdCA9IFtoaXRDZWxsLCBkaXJlY3Rpb25dO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGFzdEhpdCA9IFtoaXRDZWxsLCBcImJvdGhcIl07XG4gICAgICB9XG4gICAgICBjb29yZHNBcnIgPSBjb29yZHNBcnIuZmlsdGVyKFxuICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICEoXG4gICAgICAgICAgICBjbG9zZUNlbGxzWzBdWzBdLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBjbG9zZUNlbGxzWzBdWzBdLmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgICAgKVxuICAgICAgKTtcbiAgICAgIGNsb3NlQ2VsbHMuc2hpZnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29vcmRzQXJyLmxlbmd0aCk7XG4gICAgY29uc3QgY29vcmRzID0gY29vcmRzQXJyLnNwbGljZShyYW5kb20sIDEpO1xuICAgIGF0dGFjayhlbmVteSwgY29vcmRzWzBdKTtcbiAgICBjb25zdCBoaXRDZWxsID1cbiAgICAgIGVuZW15LmJvYXJkLmZpbmQoXG4gICAgICAgIChjZWxsKSA9PlxuICAgICAgICAgIGNlbGwuY29vcmRzWzBdID09PSBjb29yZHNbMF1bMF0gJiYgY2VsbC5jb29yZHNbMV0gPT09IGNvb3Jkc1swXVsxXVxuICAgICAgKSB8fCBudWxsO1xuICAgIGxhc3RIaXQgPSBbaGl0Q2VsbCwgXCJib3RoXCJdO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIHBsYXllck51bSwgdHlwZTogXCJBSVwiLCBib2FyZE9iaiwgYXR0YWNrRW5lbXksIGluaXRpYWxQbGFjZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBBSVBsYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUk7XG4iXSwibmFtZXMiOlsiY3JlYXRlUGxheWVyIiwiYm9hcmRGdW5jIiwicGxheWVyTmFtZSIsInBsYXllck51bSIsImJvYXJkIiwiYXR0YWNrRW5lbXkiLCJlbmVteSIsImNvb3JkcyIsInJlY2VpdmVBdHRhY2siLCJwbGFjZVNoaXAiLCJzaGlwRnVuYyIsImF4aXMiLCJzaGlwTmFtZSIsInJlbW92ZVNoaXAiLCJuYW1lIiwiaW5pdGlhbFBsYWNlIiwic2hpcHMiLCJmb3JFYWNoIiwiTWF0aCIsInJhbmRvbSIsImF2YWlsYWJsZUNvb3JkcyIsImdldEF2YWlsYWJsZUNvb3JkcyIsInJhbmRvbUNvb3JkIiwiZmxvb3IiLCJsZW5ndGgiLCJ0eXBlIiwiYm9hcmRPYmoiLCJjcmVhdGVBSSIsImxhc3RIaXQiLCJkaXJlY3Rpb24iLCJjbG9zZUNlbGxzIiwiY29vcmRzQXJyIiwiaSIsImoiLCJwdXNoIiwiYXR0YWNrIiwiZ2V0QUlBdmFpbGFibGVDb29yZHMiLCJ2YWx1ZSIsImdldCIsInBvc2l0aW9uIiwibGVmdCIsInNvbWUiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImZpbHRlciIsInZhbCIsImNlbGxUb0hpdCIsImFyciIsImhpdENlbGwiLCJmaW5kIiwiY2VsbCIsInNoaWZ0Iiwic3BsaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==