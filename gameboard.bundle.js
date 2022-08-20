/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    top: null,
    right: null,
    bottom: null,
    left: null
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCell);

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
/*!**********************************!*\
  !*** ./src/scripts/gameboard.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ "./src/scripts/cell.ts");


var createGameboard = function createGameboard() {
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };
  var gameBoardArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      gameBoardArr.push((0,_cell__WEBPACK_IMPORTED_MODULE_0__["default"])([i, j], "empty"));
    }
  }

  var placeShip = function placeShip(ship, coords, axis) {
    if (axis === "horizontal") {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[1] === coords[1]) {
          if (cell.coords[0] >= coords[0] && cell.coords[0] < coords[0] + shipLengths[ship]) {
            cell.value = ship;
          }
        }
      });
    }
  };

  return {
    board: gameBoardArr,
    placeShip: placeShip
  };
};

var beep = createGameboard();
beep.placeShip("carrier", [1, 1], "horizontal");
console.log(beep.board);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMsIFNoaXBWYWx1ZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgQm9hcmRWYWx1ZXMgPSBTaGlwVmFsdWVzIHwgXCJlbXB0eVwiO1xuXG5pbnRlcmZhY2UgQ2VsbCB7XG4gIHJlYWRvbmx5IGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdmFsdWU6IEJvYXJkVmFsdWVzO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKFxuICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gIHZhbHVlOiBTaGlwTmFtZXMgfCBcImVtcHR5XCJcbik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgdG9wOiBudWxsLFxuICByaWdodDogbnVsbCxcbiAgYm90dG9tOiBudWxsLFxuICBsZWZ0OiBudWxsLFxufSk7XG5cbmV4cG9ydCB0eXBlIHsgQ2VsbCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlQ2VsbCBmcm9tIFwiLi9jZWxsXCI7XG5cbnR5cGUgQXhpcyA9IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuXG5pbnRlcmZhY2UgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IENlbGxbXTtcbiAgcGxhY2VTaGlwOiAoc2hpcDogU2hpcE5hbWVzLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sIGF4aXM6IEF4aXMpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9ICgpOiBHYW1lYm9hcmQgPT4ge1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGNvbnN0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKHNoaXA6IFNoaXBOYW1lcywgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLCBheGlzOiBBeGlzKSA9PiB7XG4gICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID49IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPCBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwXVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHsgYm9hcmQ6IGdhbWVCb2FyZEFyciwgcGxhY2VTaGlwIH07XG59O1xuXG5jb25zdCBiZWVwID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5iZWVwLnBsYWNlU2hpcChcImNhcnJpZXJcIiwgWzEsIDFdLCBcImhvcml6b250YWxcIik7XG5jb25zb2xlLmxvZyhiZWVwLmJvYXJkKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZWJvYXJkO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGwiLCJjb29yZHMiLCJ2YWx1ZSIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNyZWF0ZUdhbWVib2FyZCIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiZ2FtZUJvYXJkQXJyIiwiaSIsImoiLCJwdXNoIiwicGxhY2VTaGlwIiwic2hpcCIsImF4aXMiLCJmb3JFYWNoIiwiY2VsbCIsImJvYXJkIiwiYmVlcCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9