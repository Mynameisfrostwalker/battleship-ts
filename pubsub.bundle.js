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
/*!*******************************!*\
  !*** ./src/scripts/pubsub.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "publish": () => (/* binding */ publish),
/* harmony export */   "subscribe": () => (/* binding */ subscribe),
/* harmony export */   "unsubscribe": () => (/* binding */ unsubscribe)
/* harmony export */ });
var events = {// key: eventname, value: [funcs]
};

var subscribe = function subscribe(eventName, func) {
  events[eventName] = events[eventName] || [];
  events[eventName].push(func);
};

var unsubscribe = function unsubscribe(eventName, func) {
  if (events[eventName]) {
    for (var i = 0; i < events[eventName].length; i += 1) {
      if (events[eventName][i].toString() === func.toString()) {
        events[eventName].splice(i, 1);
        break;
      }
    }
  }
};

var publish = function publish(eventName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var funcs = events[eventName];

  if (Array.isArray(funcs)) {
    funcs.forEach(function (func) {
      func.apply(void 0, args);
    });
  }
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVic3ViLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsTUFBYyxHQUFHLENBQ3JCO0FBRHFCLENBQXZCOztBQUlBLElBQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLFNBQUQsRUFBb0JDLElBQXBCLEVBQTJDO0VBQzNESCxNQUFNLENBQUNFLFNBQUQsQ0FBTixHQUFvQkYsTUFBTSxDQUFDRSxTQUFELENBQU4sSUFBcUIsRUFBekM7RUFDQUYsTUFBTSxDQUFDRSxTQUFELENBQU4sQ0FBa0JFLElBQWxCLENBQXVCRCxJQUF2QjtBQUNELENBSEQ7O0FBS0EsSUFBTUUsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0gsU0FBRCxFQUFvQkMsSUFBcEIsRUFBMkM7RUFDN0QsSUFBSUgsTUFBTSxDQUFDRSxTQUFELENBQVYsRUFBdUI7SUFDckIsS0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQkssTUFBdEMsRUFBOENELENBQUMsSUFBSSxDQUFuRCxFQUFzRDtNQUNwRCxJQUFJTixNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQkksQ0FBbEIsRUFBcUJFLFFBQXJCLE9BQW9DTCxJQUFJLENBQUNLLFFBQUwsRUFBeEMsRUFBeUQ7UUFDdkRSLE1BQU0sQ0FBQ0UsU0FBRCxDQUFOLENBQWtCTyxNQUFsQixDQUF5QkgsQ0FBekIsRUFBNEIsQ0FBNUI7UUFDQTtNQUNEO0lBQ0Y7RUFDRjtBQUNGLENBVEQ7O0FBV0EsSUFBTUksT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ1IsU0FBRCxFQUFpRDtFQUFBLGtDQUExQlMsSUFBMEI7SUFBMUJBLElBQTBCO0VBQUE7O0VBQy9ELElBQU1DLEtBQUssR0FBR1osTUFBTSxDQUFDRSxTQUFELENBQXBCOztFQUNBLElBQUlXLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUosRUFBMEI7SUFDeEJBLEtBQUssQ0FBQ0csT0FBTixDQUFjLFVBQUNaLElBQUQsRUFBVTtNQUN0QkEsSUFBSSxNQUFKLFNBQVFRLElBQVI7SUFDRCxDQUZEO0VBR0Q7QUFDRixDQVBEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBFdmVudHMge1xuICBbaW5kZXg6IHN0cmluZ106IEFueWZ1bmN0aW9uc1tdO1xufVxuXG5jb25zdCBldmVudHM6IEV2ZW50cyA9IHtcbiAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xufTtcblxuY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0udG9TdHJpbmcoKSA9PT0gZnVuYy50b1N0cmluZygpKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkID0+IHtcbiAgY29uc3QgZnVuY3MgPSBldmVudHNbZXZlbnROYW1lXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgZnVuY3MuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcHVibGlzaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSB9O1xuIl0sIm5hbWVzIjpbImV2ZW50cyIsInN1YnNjcmliZSIsImV2ZW50TmFtZSIsImZ1bmMiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJpIiwibGVuZ3RoIiwidG9TdHJpbmciLCJzcGxpY2UiLCJwdWJsaXNoIiwiYXJncyIsImZ1bmNzIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCJdLCJzb3VyY2VSb290IjoiIn0=