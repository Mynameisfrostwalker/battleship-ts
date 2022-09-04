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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNZQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQWtCQyxJQUFsQixFQUE0RDtFQUM3RSxJQUFNQyxTQUF1QixHQUFHLEVBQWhDO0VBQ0EsSUFBTUMsV0FBVyxHQUFHO0lBQ2xCQyxPQUFPLEVBQUUsQ0FEUztJQUVsQkMsVUFBVSxFQUFFLENBRk07SUFHbEJDLE9BQU8sRUFBRSxDQUhTO0lBSWxCQyxTQUFTLEVBQUUsQ0FKTztJQUtsQkMsU0FBUyxFQUFFO0VBTE8sQ0FBcEI7O0VBUUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJTixXQUFXLENBQUNILElBQUQsQ0FBaEMsRUFBd0NTLENBQUMsSUFBSSxDQUE3QyxFQUFnRDtJQUM5Q1AsU0FBUyxDQUFDUSxJQUFWLENBQWVWLElBQWY7RUFDRDs7RUFFRCxJQUFNVyxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFEO0lBQUEsT0FDVkEsR0FBRyxLQUFLQyxTQUFSLElBQXFCRCxHQUFHLElBQUksQ0FBNUIsSUFBaUNBLEdBQUcsR0FBR1QsV0FBVyxDQUFDSCxJQUFELENBQWxELEdBQ0lFLFNBQVMsQ0FBQ1UsR0FBRCxDQURiLEdBRUlWLFNBSE07RUFBQSxDQUFaOztFQUtBLElBQU1ZLEdBQUcsR0FBRyxTQUFOQSxHQUFNLENBQUNGLEdBQUQsRUFBaUI7SUFDM0IsSUFBSUEsR0FBRyxJQUFJLENBQVAsSUFBWUEsR0FBRyxHQUFHVCxXQUFXLENBQUNILElBQUQsQ0FBakMsRUFBeUM7TUFDdkNFLFNBQVMsQ0FBQ1UsR0FBRCxDQUFULEdBQWlCLEtBQWpCO0lBQ0Q7RUFDRixDQUpEOztFQU1BLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0lBQUEsT0FBTWIsU0FBUyxDQUFDYyxLQUFWLENBQWdCLFVBQUNDLEtBQUQ7TUFBQSxPQUFXQSxLQUFLLEtBQUssS0FBckI7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBZjs7RUFFQSxPQUFPO0lBQUVqQixJQUFJLEVBQUpBLElBQUY7SUFBUUMsSUFBSSxFQUFKQSxJQUFSO0lBQWNpQixNQUFNLEVBQUVmLFdBQVcsQ0FBQ0gsSUFBRCxDQUFqQztJQUF5Q1csR0FBRyxFQUFIQSxHQUF6QztJQUE4Q0csR0FBRyxFQUFIQSxHQUE5QztJQUFtREMsTUFBTSxFQUFOQTtFQUFuRCxDQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBLGlFQUFlaEIsVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidHlwZSBTaGlwTmFtZXMgPVxuICB8IFwiY2FycmllclwiXG4gIHwgXCJiYXR0bGVzaGlwXCJcbiAgfCBcImNydWlzZXJcIlxuICB8IFwic3VibWFyaW5lXCJcbiAgfCBcImRlc3Ryb3llclwiO1xuXG50eXBlIFNoaXBWYWx1ZXMgPSBTaGlwTmFtZXMgfCBcImhpdFwiO1xuXG5pbnRlcmZhY2UgU2hpcCB7XG4gIG5hbWU6IFNoaXBOYW1lcztcbiAgYXhpczogXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG4gIGxlbmd0aDogbnVtYmVyO1xuICBnZXQobnVtPzogbnVtYmVyKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgbnVtID49IDAgJiYgbnVtIDwgc2hpcExlbmd0aHNbbmFtZV1cbiAgICAgID8gc2hpcEFycmF5W251bV1cbiAgICAgIDogc2hpcEFycmF5O1xuXG4gIGNvbnN0IGhpdCA9IChudW06IG51bWJlcikgPT4ge1xuICAgIGlmIChudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXSkge1xuICAgICAgc2hpcEFycmF5W251bV0gPSBcImhpdFwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBpc1N1bmsgPSAoKSA9PiBzaGlwQXJyYXkuZXZlcnkoKHZhbHVlKSA9PiB2YWx1ZSA9PT0gXCJoaXRcIik7XG5cbiAgcmV0dXJuIHsgbmFtZSwgYXhpcywgbGVuZ3RoOiBzaGlwTGVuZ3Roc1tuYW1lXSwgZ2V0LCBoaXQsIGlzU3VuayB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBTaGlwVmFsdWVzLCBTaGlwTmFtZXMsIFNoaXAgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVNoaXA7XG4iXSwibmFtZXMiOlsiY3JlYXRlU2hpcCIsIm5hbWUiLCJheGlzIiwic2hpcEFycmF5Iiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJpIiwicHVzaCIsImdldCIsIm51bSIsInVuZGVmaW5lZCIsImhpdCIsImlzU3VuayIsImV2ZXJ5IiwidmFsdWUiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9