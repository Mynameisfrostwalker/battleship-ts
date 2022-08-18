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
  !*** ./src/scripts/cell.ts ***!
  \*****************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNNQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUNqQkMsTUFEaUIsRUFFakJDLEtBRmlCO0VBQUEsT0FHUDtJQUNWRCxNQUFNLEVBQU5BLE1BRFU7SUFFVkMsS0FBSyxFQUFMQSxLQUZVO0lBR1ZDLEdBQUcsRUFBRSxJQUhLO0lBSVZDLEtBQUssRUFBRSxJQUpHO0lBS1ZDLE1BQU0sRUFBRSxJQUxFO0lBTVZDLElBQUksRUFBRTtFQU5JLENBSE87QUFBQSxDQUFuQjs7QUFZQSxpRUFBZU4sVUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgdHlwZSB7IEJvYXJkVmFsdWVzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIHRvcDogQ2VsbCB8IG51bGw7XG4gIHJpZ2h0OiBDZWxsIHwgbnVsbDtcbiAgYm90dG9tOiBDZWxsIHwgbnVsbDtcbiAgbGVmdDogQ2VsbCB8IG51bGw7XG59XG5cbmNvbnN0IGNyZWF0ZUNlbGwgPSAoXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgdmFsdWU6IFNoaXBOYW1lcyB8IFwiZW1wdHlcIlxuKTogQ2VsbCA9PiAoe1xuICBjb29yZHMsXG4gIHZhbHVlLFxuICB0b3A6IG51bGwsXG4gIHJpZ2h0OiBudWxsLFxuICBib3R0b206IG51bGwsXG4gIGxlZnQ6IG51bGwsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ2VsbDtcbiJdLCJuYW1lcyI6WyJjcmVhdGVDZWxsIiwiY29vcmRzIiwidmFsdWUiLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiXSwic291cmNlUm9vdCI6IiJ9