/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*****************************!*\
  !*** ./src/scripts/ship.ts ***!
  \*****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNXQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQTJCO0VBQzVDLElBQU1DLFNBQXVCLEdBQUcsRUFBaEM7RUFFQSxJQUFNQyxXQUFXLEdBQUc7SUFDbEJDLE9BQU8sRUFBRSxDQURTO0lBRWxCQyxVQUFVLEVBQUUsQ0FGTTtJQUdsQkMsT0FBTyxFQUFFLENBSFM7SUFJbEJDLFNBQVMsRUFBRSxDQUpPO0lBS2xCQyxTQUFTLEVBQUU7RUFMTyxDQUFwQjs7RUFRQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUlOLFdBQVcsQ0FBQ0YsSUFBRCxDQUFoQyxFQUF3Q1EsQ0FBQyxJQUFJLENBQTdDLEVBQWdEO0lBQzlDUCxTQUFTLENBQUNRLElBQVYsQ0FBZVQsSUFBZjtFQUNEOztFQUVELElBQU1VLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNDLEdBQUQ7SUFBQSxPQUNWQSxHQUFHLEtBQUtDLFNBQVIsSUFBcUJELEdBQUcsSUFBSSxDQUE1QixJQUFpQ0EsR0FBRyxHQUFHVCxXQUFXLENBQUNGLElBQUQsQ0FBbEQsR0FDSUMsU0FBUyxDQUFDVSxHQUFELENBRGIsR0FFSVYsU0FITTtFQUFBLENBQVo7O0VBS0EsSUFBTVksR0FBRyxHQUFHLFNBQU5BLEdBQU0sQ0FBQ0YsR0FBRCxFQUFpQjtJQUMzQixJQUFJQSxHQUFHLElBQUksQ0FBUCxJQUFZQSxHQUFHLEdBQUdULFdBQVcsQ0FBQ0YsSUFBRCxDQUFqQyxFQUF5QztNQUN2Q0MsU0FBUyxDQUFDVSxHQUFELENBQVQsR0FBaUIsS0FBakI7SUFDRDtFQUNGLENBSkQ7O0VBTUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVM7SUFBQSxPQUFNYixTQUFTLENBQUNjLEtBQVYsQ0FBZ0IsVUFBQ0MsS0FBRDtNQUFBLE9BQVdBLEtBQUssS0FBSyxLQUFyQjtJQUFBLENBQWhCLENBQU47RUFBQSxDQUFmOztFQUVBLE9BQU87SUFBRWhCLElBQUksRUFBSkEsSUFBRjtJQUFRaUIsTUFBTSxFQUFFZixXQUFXLENBQUNGLElBQUQsQ0FBM0I7SUFBbUNVLEdBQUcsRUFBSEEsR0FBbkM7SUFBd0NHLEdBQUcsRUFBSEEsR0FBeEM7SUFBNkNDLE1BQU0sRUFBTkE7RUFBN0MsQ0FBUDtBQUNELENBN0JEOztBQWdDQSxpRUFBZWYsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidHlwZSBTaGlwTmFtZXMgPVxuICB8IFwiY2FycmllclwiXG4gIHwgXCJiYXR0bGVzaGlwXCJcbiAgfCBcImNydWlzZXJcIlxuICB8IFwic3VibWFyaW5lXCJcbiAgfCBcImRlc3Ryb3llclwiO1xuXG50eXBlIFNoaXBWYWx1ZXMgPSBTaGlwTmFtZXMgfCBcImhpdFwiO1xuXG5pbnRlcmZhY2UgU2hpcCB7XG4gIG5hbWU6IFNoaXBOYW1lcztcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIpOiBTaGlwVmFsdWVzW10gfCBTaGlwVmFsdWVzO1xuICBoaXQobnVtOiBudW1iZXIpOiB2b2lkO1xuICBpc1N1bmsoKTogYm9vbGVhbjtcbn1cblxuY29uc3QgY3JlYXRlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMpOiBTaGlwID0+IHtcbiAgY29uc3Qgc2hpcEFycmF5OiBTaGlwVmFsdWVzW10gPSBbXTtcblxuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgbnVtID49IDAgJiYgbnVtIDwgc2hpcExlbmd0aHNbbmFtZV1cbiAgICAgID8gc2hpcEFycmF5W251bV1cbiAgICAgIDogc2hpcEFycmF5O1xuXG4gIGNvbnN0IGhpdCA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXSkge1xuICAgICAgc2hpcEFycmF5W251bV0gPSBcImhpdFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSA9PT0gXCJoaXRcIik7XG5cbiAgcmV0dXJuIHsgbmFtZSwgbGVuZ3RoOiBzaGlwTGVuZ3Roc1tuYW1lXSwgZ2V0LCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBTaGlwVmFsdWVzLCBTaGlwTmFtZXMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2hpcCIsIm5hbWUiLCJzaGlwQXJyYXkiLCJzaGlwTGVuZ3RocyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImkiLCJwdXNoIiwiZ2V0IiwibnVtIiwidW5kZWZpbmVkIiwiaGl0IiwiaXNTdW5rIiwiZXZlcnkiLCJ2YWx1ZSIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=