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
    position: null,
    top: null,
    right: null,
    bottom: null,
    left: null
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCell);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VsbC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNhQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQTJCQyxLQUEzQjtFQUFBLE9BQXFEO0lBQ3RFRCxNQUFNLEVBQU5BLE1BRHNFO0lBRXRFQyxLQUFLLEVBQUxBLEtBRnNFO0lBR3RFQyxRQUFRLEVBQUUsSUFINEQ7SUFJdEVDLEdBQUcsRUFBRSxJQUppRTtJQUt0RUMsS0FBSyxFQUFFLElBTCtEO0lBTXRFQyxNQUFNLEVBQUUsSUFOOEQ7SUFPdEVDLElBQUksRUFBRTtFQVBnRSxDQUFyRDtBQUFBLENBQW5COztBQVdBLGlFQUFlUCxVQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2NlbGwudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbnR5cGUgQm9hcmRWYWx1ZXMgPSBTaGlwIHwgXCJlbXB0eVwiO1xuXG5pbnRlcmZhY2UgQ2VsbCB7XG4gIHJlYWRvbmx5IGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdmFsdWU6IEJvYXJkVmFsdWVzO1xuICAvKlxuICBQb3NpdGlvbiBkZW5vdGVzIHdoYXQgYXJlYSBvZiBzaGlwIGlzIGxvY2F0ZWQgb24gY2VsbC4gXG4gIE51bGwgbWVhbnMgbm8gc2hpcDtcbiAgMCBtZWFucyBmcm9udCBvZiBzaGlwO1xuICAqL1xuICBwb3NpdGlvbjogbnVsbCB8IG51bWJlcjtcbiAgdG9wOiBDZWxsIHwgbnVsbDtcbiAgcmlnaHQ6IENlbGwgfCBudWxsO1xuICBib3R0b206IENlbGwgfCBudWxsO1xuICBsZWZ0OiBDZWxsIHwgbnVsbDtcbn1cblxuY29uc3QgY3JlYXRlQ2VsbCA9IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sIHZhbHVlOiBcImVtcHR5XCIpOiBDZWxsID0+ICh7XG4gIGNvb3JkcyxcbiAgdmFsdWUsXG4gIHBvc2l0aW9uOiBudWxsLFxuICB0b3A6IG51bGwsXG4gIHJpZ2h0OiBudWxsLFxuICBib3R0b206IG51bGwsXG4gIGxlZnQ6IG51bGwsXG59KTtcblxuZXhwb3J0IHR5cGUgeyBDZWxsIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDZWxsO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGwiLCJjb29yZHMiLCJ2YWx1ZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==