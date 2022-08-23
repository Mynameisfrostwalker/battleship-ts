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
    position: null,
    top: null,
    right: null,
    bottom: null,
    left: null
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCell);

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
var createShip = function createShip(name) {
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
    length: shipLengths[name],
    get: get,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createGameboard = function createGameboard() {
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };
  var directions = {
    top: [0, 1],
    right: [1, 0],
    bottom: [0, -1],
    left: [-1, 0]
  };
  var gameBoardArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      gameBoardArr.push((0,_cell__WEBPACK_IMPORTED_MODULE_0__["default"])([i, j], "empty"));
    }
  }

  var checkIfKey = function checkIfKey(key, obj) {
    return key in obj;
  };

  var _loop = function _loop(_i) {
    var keys = Object.keys(directions);

    var _loop2 = function _loop2(_j) {
      var key = keys[_j];

      if (checkIfKey(key, directions)) {
        var move = gameBoardArr.find(function (value) {
          var coords = _toConsumableArray(gameBoardArr[_i].coords);

          coords[0] += directions[key][0];
          coords[1] += directions[key][1];

          if (value.coords[0] === coords[0] && value.coords[1] === coords[1]) {
            return true;
          }

          return false;
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

  var placeShip = function placeShip(shipFactory, coords, axis, shipName) {
    var ship = shipFactory(shipName);

    if (axis === "horizontal") {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[1] === coords[1]) {
          if (cell.coords[0] >= coords[0] && cell.coords[0] < coords[0] + shipLengths[shipName] && coords[0] + shipLengths[shipName] < 10) {
            cell.value = ship;
            cell.position = cell.coords[0] - coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[0] === coords[0]) {
          if (cell.coords[1] >= coords[1] && cell.coords[1] < coords[1] + shipLengths[shipName] && coords[1] + shipLengths[shipName] < 10) {
            cell.value = ship;
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

    if ((cell === null || cell === void 0 ? void 0 : cell.value) !== "empty" && (cell === null || cell === void 0 ? void 0 : cell.position) !== null) {
      cell === null || cell === void 0 ? void 0 : cell.value.hit(cell === null || cell === void 0 ? void 0 : cell.position);
    }
  };

  return {
    board: gameBoardArr,
    placeShip: placeShip,
    receiveAttack: receiveAttack
  };
};

var gameboard = createGameboard();
gameboard.placeShip(_ship__WEBPACK_IMPORTED_MODULE_1__["default"], [1, 1], "horizontal", "battleship");
console.log(gameboard);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFoQyxFQUF3QyxZQUF4QyxFQUFzRCxZQUF0RDtBQUNBdUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7QUFFQSxpRUFBZXBCLGVBQWYsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBCb2FyZFZhbHVlcyA9IFNoaXAgfCBcImVtcHR5XCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIC8qXG4gIFBvc2l0aW9uIGRlbm90ZXMgd2hhdCBhcmVhIG9mIHNoaXAgaXMgbG9jYXRlZCBvbiBjZWxsLiBcbiAgTnVsbCBtZWFucyBubyBzaGlwO1xuICAwIG1lYW5zIGZyb250IG9mIHNoaXA7XG4gICovXG4gIHBvc2l0aW9uOiBudWxsIHwgbnVtYmVyO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSwgdmFsdWU6IFwiZW1wdHlcIik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgcG9zaXRpb246IG51bGwsXG4gIHRvcDogbnVsbCxcbiAgcmlnaHQ6IG51bGwsXG4gIGJvdHRvbTogbnVsbCxcbiAgbGVmdDogbnVsbCxcbn0pO1xuXG5leHBvcnQgdHlwZSB7IENlbGwgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgZ2V0KG51bT86IG51bWJlcik6IFNoaXBWYWx1ZXNbXSB8IFNoaXBWYWx1ZXM7XG4gIGhpdChudW06IG51bWJlcik6IHZvaWQ7XG4gIGlzU3VuaygpOiBib29sZWFuO1xufVxuXG5jb25zdCBjcmVhdGVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcyk6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuXG4gIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDIsXG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aHNbbmFtZV07IGkgKz0gMSkge1xuICAgIHNoaXBBcnJheS5wdXNoKG5hbWUpO1xuICB9XG5cbiAgY29uc3QgZ2V0ID0gKG51bT86IG51bWJlcikgPT5cbiAgICBudW0gIT09IHVuZGVmaW5lZCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMsIFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlQ2VsbCBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgY3JlYXRlU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgQXhpcyA9IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuXG5pbnRlcmZhY2UgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IENlbGxbXTtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZhY3Rvcnk6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIHJlY2VpdmVBdHRhY2s6IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9ICgpOiBHYW1lYm9hcmQgPT4ge1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGNvbnN0IGRpcmVjdGlvbnMgPSB7XG4gICAgdG9wOiBbMCwgMV0sXG4gICAgcmlnaHQ6IFsxLCAwXSxcbiAgICBib3R0b206IFswLCAtMV0sXG4gICAgbGVmdDogWy0xLCAwXSxcbiAgfTtcblxuICBjb25zdCBnYW1lQm9hcmRBcnI6IENlbGxbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgZ2FtZUJvYXJkQXJyLnB1c2goY3JlYXRlQ2VsbChbaSwgal0sIFwiZW1wdHlcIikpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZLZXkgPSAoXG4gICAga2V5OiBzdHJpbmcsXG4gICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICApOiBrZXkgaXMga2V5b2YgdHlwZW9mIGRpcmVjdGlvbnMgPT4ga2V5IGluIG9iajtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVCb2FyZEFyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleSA9IGtleXNbal07XG4gICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgIGNvbnN0IG1vdmUgPSBnYW1lQm9hcmRBcnIuZmluZCgodmFsdWUpID0+IHtcbiAgICAgICAgICBjb25zdCBjb29yZHMgPSBbLi4uZ2FtZUJvYXJkQXJyW2ldLmNvb3Jkc107XG4gICAgICAgICAgY29vcmRzWzBdICs9IGRpcmVjdGlvbnNba2V5XVswXTtcbiAgICAgICAgICBjb29yZHNbMV0gKz0gZGlyZWN0aW9uc1trZXldWzFdO1xuICAgICAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGYWN0b3J5OiAobmFtZTogU2hpcE5hbWVzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBOYW1lKTtcbiAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChjZWxsLmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPj0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA8IGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSAmJlxuICAgICAgICAgICAgY29vcmRzWzBdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdIDwgMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgY2VsbC5wb3NpdGlvbiA9IGNlbGwuY29vcmRzWzBdIC0gY29vcmRzWzBdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGlmIChjZWxsLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdKSB7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPj0gY29vcmRzWzFdICYmXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA8IGNvb3Jkc1sxXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSAmJlxuICAgICAgICAgICAgY29vcmRzWzFdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdIDwgMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgY2VsbC5wb3NpdGlvbiA9IGNlbGwuY29vcmRzWzFdIC0gY29vcmRzWzFdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlY2VpdmVBdHRhY2sgPSAoY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdKSA9PiB7XG4gICAgY29uc3QgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKChvYmopID0+IHtcbiAgICAgIGlmIChvYmouY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuXG4gICAgaWYgKGNlbGw/LnZhbHVlICE9PSBcImVtcHR5XCIgJiYgY2VsbD8ucG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNlbGw/LnZhbHVlLmhpdChjZWxsPy5wb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkOiBnYW1lQm9hcmRBcnIsIHBsYWNlU2hpcCwgcmVjZWl2ZUF0dGFjayB9O1xufTtcblxuY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKCk7XG5nYW1lYm9hcmQucGxhY2VTaGlwKGNyZWF0ZVNoaXAsIFsxLCAxXSwgXCJob3Jpem9udGFsXCIsIFwiYmF0dGxlc2hpcFwiKTtcbmNvbnNvbGUubG9nKGdhbWVib2FyZCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDZWxsIiwiY29vcmRzIiwidmFsdWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNyZWF0ZVNoaXAiLCJuYW1lIiwic2hpcEFycmF5Iiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJpIiwicHVzaCIsImdldCIsIm51bSIsInVuZGVmaW5lZCIsImhpdCIsImlzU3VuayIsImV2ZXJ5IiwibGVuZ3RoIiwiY3JlYXRlR2FtZWJvYXJkIiwiZGlyZWN0aW9ucyIsImdhbWVCb2FyZEFyciIsImoiLCJjaGVja0lmS2V5Iiwia2V5Iiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm1vdmUiLCJmaW5kIiwicGxhY2VTaGlwIiwic2hpcEZhY3RvcnkiLCJheGlzIiwic2hpcE5hbWUiLCJzaGlwIiwiZm9yRWFjaCIsImNlbGwiLCJyZWNlaXZlQXR0YWNrIiwiYm9hcmQiLCJnYW1lYm9hcmQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==