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


var createAI = function createAI(boardFunc, playerNum) {
  var lastHit = null;
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
    var _lastHit, _lastHit2, _lastHit3;

    if (lastHit && ((_lastHit = lastHit) === null || _lastHit === void 0 ? void 0 : _lastHit.value) !== "hit" && ((_lastHit2 = lastHit) === null || _lastHit2 === void 0 ? void 0 : _lastHit2.value) !== "empty" && ((_lastHit3 = lastHit) === null || _lastHit3 === void 0 ? void 0 : _lastHit3.value.get(lastHit.position)) === "hit") {
      if (lastHit.left && coordsArr.some(function (coords) {
        var _lastHit4, _lastHit4$left, _lastHit5, _lastHit5$left;

        return ((_lastHit4 = lastHit) === null || _lastHit4 === void 0 ? void 0 : (_lastHit4$left = _lastHit4.left) === null || _lastHit4$left === void 0 ? void 0 : _lastHit4$left.coords[0]) === coords[0] && ((_lastHit5 = lastHit) === null || _lastHit5 === void 0 ? void 0 : (_lastHit5$left = _lastHit5.left) === null || _lastHit5$left === void 0 ? void 0 : _lastHit5$left.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.left);
      }

      if (lastHit.right && coordsArr.some(function (coords) {
        var _lastHit6, _lastHit6$right, _lastHit7, _lastHit7$right;

        return ((_lastHit6 = lastHit) === null || _lastHit6 === void 0 ? void 0 : (_lastHit6$right = _lastHit6.right) === null || _lastHit6$right === void 0 ? void 0 : _lastHit6$right.coords[0]) === coords[0] && ((_lastHit7 = lastHit) === null || _lastHit7 === void 0 ? void 0 : (_lastHit7$right = _lastHit7.right) === null || _lastHit7$right === void 0 ? void 0 : _lastHit7$right.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.right);
      }

      if (lastHit.top && coordsArr.some(function (coords) {
        var _lastHit8, _lastHit8$top, _lastHit9, _lastHit9$top;

        return ((_lastHit8 = lastHit) === null || _lastHit8 === void 0 ? void 0 : (_lastHit8$top = _lastHit8.top) === null || _lastHit8$top === void 0 ? void 0 : _lastHit8$top.coords[0]) === coords[0] && ((_lastHit9 = lastHit) === null || _lastHit9 === void 0 ? void 0 : (_lastHit9$top = _lastHit9.top) === null || _lastHit9$top === void 0 ? void 0 : _lastHit9$top.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.top);
      }

      if (lastHit.bottom && coordsArr.some(function (coords) {
        var _lastHit10, _lastHit10$bottom, _lastHit11, _lastHit11$bottom;

        return ((_lastHit10 = lastHit) === null || _lastHit10 === void 0 ? void 0 : (_lastHit10$bottom = _lastHit10.bottom) === null || _lastHit10$bottom === void 0 ? void 0 : _lastHit10$bottom.coords[0]) === coords[0] && ((_lastHit11 = lastHit) === null || _lastHit11 === void 0 ? void 0 : (_lastHit11$bottom = _lastHit11.bottom) === null || _lastHit11$bottom === void 0 ? void 0 : _lastHit11$bottom.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.bottom);
      }

      lastHit = null;
    }

    if (closeCells.length > 0) {
      attack(enemy, closeCells[0].coords);

      var _hitCell = enemy.board.find(function (cell) {
        return cell.coords[0] === closeCells[0].coords[0] && cell.coords[1] === closeCells[0].coords[1];
      }) || null;

      lastHit = _hitCell;
      coordsArr = coordsArr.filter(function (coords) {
        return !(closeCells[0].coords[0] === coords[0] && closeCells[0].coords[1] === coords[1]);
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
    lastHit = hitCell;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sR0FBR2dCLE9BQVY7RUFDRCxDQTlFRDs7RUFnRkEsT0FBTztJQUFFOUIsSUFBSSxFQUFKQSxJQUFGO0lBQVFYLFNBQVMsRUFBVEEsU0FBUjtJQUFtQnNCLElBQUksRUFBRSxJQUF6QjtJQUErQkMsUUFBUSxFQUFSQSxRQUEvQjtJQUF5Q3JCLFdBQVcsRUFBWEEsV0FBekM7SUFBc0RVLFlBQVksRUFBWkE7RUFBdEQsQ0FBUDtBQUNELENBMUhEOztBQTZIQSxpRUFBZVksUUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2FpUGxheWVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcblxuaW50ZXJmYWNlIFBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJIdW1hblwiO1xuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCI7XG4gIGJvYXJkT2JqOiBHYW1lYm9hcmQ7XG4gIGF0dGFja0VuZW15OiAoZW5lbXk6IEdhbWVib2FyZCwgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB2b2lkO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgaW5pdGlhbFBsYWNlOiAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHZvaWQ7XG4gIHJlbW92ZVNoaXA6IChuYW1lOiBTaGlwTmFtZXMpID0+IHZvaWQ7XG59XG5cbnR5cGUgQm9hcmRGdW5jID0gKGJvYXJkPzogQ2VsbFtdKSA9PiBHYW1lYm9hcmQ7XG5cbmNvbnN0IGNyZWF0ZVBsYXllciA9IChcbiAgYm9hcmRGdW5jOiBCb2FyZEZ1bmMsXG4gIHBsYXllck5hbWU6IHN0cmluZyxcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pOiBQbGF5ZXIgPT4ge1xuICBjb25zdCBib2FyZCA9IGJvYXJkRnVuYygpO1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGVuZW15LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzKSA9PiB7XG4gICAgYm9hcmQucmVtb3ZlU2hpcChuYW1lKTtcbiAgfTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZC5nZXRBdmFpbGFibGVDb29yZHMoXG4gICAgICAgIGF4aXMsXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBzaGlwRnVuY1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID1cbiAgICAgICAgYXZhaWxhYmxlQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3Jkcy5sZW5ndGgpXTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgcmFuZG9tQ29vcmQsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IHBsYXllck5hbWUsXG4gICAgdHlwZTogXCJIdW1hblwiLFxuICAgIHBsYXllck51bSxcbiAgICBib2FyZE9iajogYm9hcmQsXG4gICAgYXR0YWNrRW5lbXksXG4gICAgcGxhY2VTaGlwLFxuICAgIGluaXRpYWxQbGFjZSxcbiAgICByZW1vdmVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBQbGF5ZXIsIEJvYXJkRnVuYyB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IEJvYXJkRnVuYyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuaW50ZXJmYWNlIEFJUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkFJXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlQUkgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IEFJUGxheWVyID0+IHtcbiAgbGV0IGxhc3RIaXQ6IENlbGwgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2xvc2VDZWxsczogQ2VsbFtdID0gW107XG5cbiAgbGV0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMsIFwiQUlcIiwgcGxheWVyTnVtKTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZE9iai5nZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBpZiAoXG4gICAgICBsYXN0SGl0ICYmXG4gICAgICBsYXN0SGl0Py52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgbGFzdEhpdD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgbGFzdEhpdD8udmFsdWUuZ2V0KGxhc3RIaXQucG9zaXRpb24pID09PSBcImhpdFwiXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXQubGVmdCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdD8ubGVmdD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXQ/LmxlZnQ/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2gobGFzdEhpdC5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdC5yaWdodCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdD8ucmlnaHQ/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0Py5yaWdodD8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChsYXN0SGl0LnJpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdC50b3AgJiZcbiAgICAgICAgY29vcmRzQXJyLnNvbWUoXG4gICAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAgIGxhc3RIaXQ/LnRvcD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXQ/LnRvcD8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChsYXN0SGl0LnRvcCk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXQuYm90dG9tICYmXG4gICAgICAgIGNvb3Jkc0Fyci5zb21lKFxuICAgICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgICBsYXN0SGl0Py5ib3R0b20/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0Py5ib3R0b20/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2gobGFzdEhpdC5ib3R0b20pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNsb3NlQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgYXR0YWNrKGVuZW15LCBjbG9zZUNlbGxzWzBdLmNvb3Jkcyk7XG4gICAgICBjb25zdCBoaXRDZWxsID1cbiAgICAgICAgZW5lbXkuYm9hcmQuZmluZChcbiAgICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID09PSBjbG9zZUNlbGxzWzBdLmNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPT09IGNsb3NlQ2VsbHNbMF0uY29vcmRzWzFdXG4gICAgICAgICkgfHwgbnVsbDtcbiAgICAgIGxhc3RIaXQgPSBoaXRDZWxsO1xuICAgICAgY29vcmRzQXJyID0gY29vcmRzQXJyLmZpbHRlcihcbiAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAhKFxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgICBjbG9zZUNlbGxzLnNoaWZ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3Jkc0Fyci5sZW5ndGgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNvb3Jkc0Fyci5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICBhdHRhY2soZW5lbXksIGNvb3Jkc1swXSk7XG4gICAgY29uc3QgaGl0Q2VsbCA9XG4gICAgICBlbmVteS5ib2FyZC5maW5kKFxuICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdWzBdICYmIGNlbGwuY29vcmRzWzFdID09PSBjb29yZHNbMF1bMV1cbiAgICAgICkgfHwgbnVsbDtcbiAgICBsYXN0SGl0ID0gaGl0Q2VsbDtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBwbGF5ZXJOdW0sIHR5cGU6IFwiQUlcIiwgYm9hcmRPYmosIGF0dGFja0VuZW15LCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQUlQbGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVBsYXllciIsImJvYXJkRnVuYyIsInBsYXllck5hbWUiLCJwbGF5ZXJOdW0iLCJib2FyZCIsImF0dGFja0VuZW15IiwiZW5lbXkiLCJjb29yZHMiLCJyZWNlaXZlQXR0YWNrIiwicGxhY2VTaGlwIiwic2hpcEZ1bmMiLCJheGlzIiwic2hpcE5hbWUiLCJyZW1vdmVTaGlwIiwibmFtZSIsImluaXRpYWxQbGFjZSIsInNoaXBzIiwiZm9yRWFjaCIsIk1hdGgiLCJyYW5kb20iLCJhdmFpbGFibGVDb29yZHMiLCJnZXRBdmFpbGFibGVDb29yZHMiLCJyYW5kb21Db29yZCIsImZsb29yIiwibGVuZ3RoIiwidHlwZSIsImJvYXJkT2JqIiwiY3JlYXRlQUkiLCJsYXN0SGl0IiwiY2xvc2VDZWxscyIsImNvb3Jkc0FyciIsImkiLCJqIiwicHVzaCIsImF0dGFjayIsImdldEFJQXZhaWxhYmxlQ29vcmRzIiwidmFsdWUiLCJnZXQiLCJwb3NpdGlvbiIsImxlZnQiLCJzb21lIiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJoaXRDZWxsIiwiZmluZCIsImNlbGwiLCJmaWx0ZXIiLCJzaGlmdCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=