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
/*!******************************!*\
  !*** ./src/scripts/human.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createHuman = function createHuman(boardFunc) {
  var board = boardFunc();

  var attackEnemy = function attackEnemy(enemy, coords) {
    enemy.receiveAttack(coords);
  };

  var placeShip = function placeShip(shipFunc, coords, axis, shipName) {
    board.placeShip(shipFunc, coords, axis, shipName);
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
    initialPlace: initialPlace
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHuman);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVtYW4uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDRkEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUE4QztFQUNoRSxJQUFNQyxLQUFLLEdBQUdELFNBQVMsRUFBdkI7O0VBRUEsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFtQkMsTUFBbkIsRUFBZ0Q7SUFDbEVELEtBQUssQ0FBQ0UsYUFBTixDQUFvQkQsTUFBcEI7RUFDRCxDQUZEOztFQUlBLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQ2hCQyxRQURnQixFQUVoQkgsTUFGZ0IsRUFHaEJJLElBSGdCLEVBSWhCQyxRQUpnQixFQUtiO0lBQ0hSLEtBQUssQ0FBQ0ssU0FBTixDQUFnQkMsUUFBaEIsRUFBMEJILE1BQTFCLEVBQWtDSSxJQUFsQyxFQUF3Q0MsUUFBeEM7RUFDRCxDQVBEOztFQVNBLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILFFBQUQsRUFBeUM7SUFDNUQsSUFBTUksS0FBa0IsR0FBRyxDQUN6QixTQUR5QixFQUV6QixZQUZ5QixFQUd6QixTQUh5QixFQUl6QixXQUp5QixFQUt6QixXQUx5QixDQUEzQjtJQVFBQSxLQUFLLENBQUNDLE9BQU4sQ0FBYyxVQUFDSCxRQUFELEVBQWM7TUFDMUIsSUFBTUQsSUFBSSxHQUFHSyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBaEIsR0FBc0IsVUFBdEIsR0FBbUMsWUFBaEQ7TUFDQSxJQUFNQyxlQUFlLEdBQUdkLEtBQUssQ0FBQ2Usa0JBQU4sQ0FDdEJSLElBRHNCLEVBRXRCQyxRQUZzQixFQUd0QkYsUUFIc0IsQ0FBeEI7TUFLQSxJQUFNVSxXQUFXLEdBQ2ZGLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDSyxLQUFMLENBQVdMLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkMsZUFBZSxDQUFDSSxNQUEzQyxDQUFELENBRGpCO01BRUFsQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQTBCVSxXQUExQixFQUF1Q1QsSUFBdkMsRUFBNkNDLFFBQTdDO0lBQ0QsQ0FWRDtFQVdELENBcEJEOztFQXNCQSxPQUFPO0lBQUVSLEtBQUssRUFBTEEsS0FBRjtJQUFTQyxXQUFXLEVBQVhBLFdBQVQ7SUFBc0JJLFNBQVMsRUFBVEEsU0FBdEI7SUFBaUNJLFlBQVksRUFBWkE7RUFBakMsQ0FBUDtBQUNELENBdkNEOztBQXlDQSxpRUFBZVgsV0FBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9odW1hbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgY3JlYXRlSHVtYW4gPSAoYm9hcmRGdW5jOiAoYm9hcmQ/OiBDZWxsW10pID0+IEdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGJvYXJkRnVuYygpO1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGVuZW15LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IGluaXRpYWxQbGFjZSA9IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcykgPT4gU2hpcCkgPT4ge1xuICAgIGNvbnN0IHNoaXBzOiBTaGlwTmFtZXNbXSA9IFtcbiAgICAgIFwiY3J1aXNlclwiLFxuICAgICAgXCJiYXR0bGVzaGlwXCIsXG4gICAgICBcImNhcnJpZXJcIixcbiAgICAgIFwic3VibWFyaW5lXCIsXG4gICAgICBcImRlc3Ryb3llclwiLFxuICAgIF07XG5cbiAgICBzaGlwcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3QgYXhpcyA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIjtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZUNvb3JkcyA9IGJvYXJkLmdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7IGJvYXJkLCBhdHRhY2tFbmVteSwgcGxhY2VTaGlwLCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUh1bWFuO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUh1bWFuIiwiYm9hcmRGdW5jIiwiYm9hcmQiLCJhdHRhY2tFbmVteSIsImVuZW15IiwiY29vcmRzIiwicmVjZWl2ZUF0dGFjayIsInBsYWNlU2hpcCIsInNoaXBGdW5jIiwiYXhpcyIsInNoaXBOYW1lIiwiaW5pdGlhbFBsYWNlIiwic2hpcHMiLCJmb3JFYWNoIiwiTWF0aCIsInJhbmRvbSIsImF2YWlsYWJsZUNvb3JkcyIsImdldEF2YWlsYWJsZUNvb3JkcyIsInJhbmRvbUNvb3JkIiwiZmxvb3IiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9