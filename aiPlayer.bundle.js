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
var createPlayer = function createPlayer(boardFunc) {
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
    board: board,
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


var createAI = function createAI(boardFunc) {
  var coordsArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }

  var _createPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardFunc),
      board = _createPlayer.board,
      attack = _createPlayer.attackEnemy,
      initialPlace = _createPlayer.initialPlace;

  var attackEnemy = function attackEnemy(enemy) {
    var random = Math.floor(Math.random() * coordsArr.length);
    var coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
  };

  return {
    board: board,
    attackEnemy: attackEnemy,
    initialPlace: initialPlace
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAI);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixDQUFmO0lBQ0Q7RUFDRjs7RUFDRCxvQkFBcUQxQixtREFBWSxDQUFDQyxTQUFELENBQWpFO0VBQUEsSUFBUUMsS0FBUixpQkFBUUEsS0FBUjtFQUFBLElBQTRCMEIsTUFBNUIsaUJBQWV6QixXQUFmO0VBQUEsSUFBb0NVLFlBQXBDLGlCQUFvQ0EsWUFBcEM7O0VBRUEsSUFBTVYsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFzQjtJQUN4QyxJQUFNYSxNQUFNLEdBQUdELElBQUksQ0FBQ0ssS0FBTCxDQUFXTCxJQUFJLENBQUNDLE1BQUwsS0FBZ0JPLFNBQVMsQ0FBQ0YsTUFBckMsQ0FBZjtJQUNBLElBQU1qQixNQUFNLEdBQUdtQixTQUFTLENBQUNLLE1BQVYsQ0FBaUJaLE1BQWpCLEVBQXlCLENBQXpCLENBQWY7SUFDQVcsTUFBTSxDQUFDeEIsS0FBRCxFQUFRQyxNQUFNLENBQUMsQ0FBRCxDQUFkLENBQU47RUFDRCxDQUpEOztFQU1BLE9BQU87SUFBRUgsS0FBSyxFQUFMQSxLQUFGO0lBQVNDLFdBQVcsRUFBWEEsV0FBVDtJQUFzQlUsWUFBWSxFQUFaQTtFQUF0QixDQUFQO0FBQ0QsQ0FoQkQ7O0FBa0JBLGlFQUFlVSxRQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvYWlQbGF5ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgQ2VsbCB9IGZyb20gXCIuL2NlbGxcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5pbnRlcmZhY2UgUGxheWVyIHtcbiAgYm9hcmQ6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG4gIHBsYWNlU2hpcDogKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcykgPT4gU2hpcCkgPT4gdm9pZDtcbiAgcmVtb3ZlU2hpcDogKG5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxudHlwZSBCb2FyZEZ1bmMgPSAoYm9hcmQ/OiBDZWxsW10pID0+IEdhbWVib2FyZDtcblxuY29uc3QgY3JlYXRlUGxheWVyID0gKGJvYXJkRnVuYzogQm9hcmRGdW5jKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQsIGF0dGFja0VuZW15LCBwbGFjZVNoaXAsIGluaXRpYWxQbGFjZSwgcmVtb3ZlU2hpcCB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBQbGF5ZXIsIEJvYXJkRnVuYyB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGxheWVyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IFBsYXllciwgQm9hcmRGdW5jIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgY3JlYXRlQUkgPSAoYm9hcmRGdW5jOiBCb2FyZEZ1bmMpID0+IHtcbiAgY29uc3QgY29vcmRzQXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBjb29yZHNBcnIucHVzaChbaSwgal0pO1xuICAgIH1cbiAgfVxuICBjb25zdCB7IGJvYXJkLCBhdHRhY2tFbmVteTogYXR0YWNrLCBpbml0aWFsUGxhY2UgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMpO1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yZHNBcnIubGVuZ3RoKTtcbiAgICBjb25zdCBjb29yZHMgPSBjb29yZHNBcnIuc3BsaWNlKHJhbmRvbSwgMSk7XG4gICAgYXR0YWNrKGVuZW15LCBjb29yZHNbMF0pO1xuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkLCBhdHRhY2tFbmVteSwgaW5pdGlhbFBsYWNlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBSTtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJib2FyZEZ1bmMiLCJib2FyZCIsImF0dGFja0VuZW15IiwiZW5lbXkiLCJjb29yZHMiLCJyZWNlaXZlQXR0YWNrIiwicGxhY2VTaGlwIiwic2hpcEZ1bmMiLCJheGlzIiwic2hpcE5hbWUiLCJyZW1vdmVTaGlwIiwibmFtZSIsImluaXRpYWxQbGFjZSIsInNoaXBzIiwiZm9yRWFjaCIsIk1hdGgiLCJyYW5kb20iLCJhdmFpbGFibGVDb29yZHMiLCJnZXRBdmFpbGFibGVDb29yZHMiLCJyYW5kb21Db29yZCIsImZsb29yIiwibGVuZ3RoIiwiY3JlYXRlQUkiLCJjb29yZHNBcnIiLCJpIiwiaiIsInB1c2giLCJhdHRhY2siLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9