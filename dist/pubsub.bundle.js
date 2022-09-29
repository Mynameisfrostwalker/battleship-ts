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
/* harmony export */   "clear": () => (/* binding */ clear),
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

var clear = function clear() {
  events = {};
};


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVic3ViLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQUlBLE1BQWMsR0FBRyxDQUNuQjtBQURtQixDQUFyQjs7QUFJQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxTQUFELEVBQW9CQyxJQUFwQixFQUEyQztFQUMzREgsTUFBTSxDQUFDRSxTQUFELENBQU4sR0FBb0JGLE1BQU0sQ0FBQ0UsU0FBRCxDQUFOLElBQXFCLEVBQXpDO0VBQ0FGLE1BQU0sQ0FBQ0UsU0FBRCxDQUFOLENBQWtCRSxJQUFsQixDQUF1QkQsSUFBdkI7QUFDRCxDQUhEOztBQUtBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNILFNBQUQsRUFBb0JDLElBQXBCLEVBQTJDO0VBQzdELElBQUlILE1BQU0sQ0FBQ0UsU0FBRCxDQUFWLEVBQXVCO0lBQ3JCLEtBQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR04sTUFBTSxDQUFDRSxTQUFELENBQU4sQ0FBa0JLLE1BQXRDLEVBQThDRCxDQUFDLElBQUksQ0FBbkQsRUFBc0Q7TUFDcEQsSUFBSU4sTUFBTSxDQUFDRSxTQUFELENBQU4sQ0FBa0JJLENBQWxCLEVBQXFCRSxRQUFyQixPQUFvQ0wsSUFBSSxDQUFDSyxRQUFMLEVBQXhDLEVBQXlEO1FBQ3ZEUixNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQk8sTUFBbEIsQ0FBeUJILENBQXpCLEVBQTRCLENBQTVCO1FBQ0E7TUFDRDtJQUNGO0VBQ0Y7QUFDRixDQVREOztBQVdBLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNSLFNBQUQsRUFBaUQ7RUFBQSxrQ0FBMUJTLElBQTBCO0lBQTFCQSxJQUEwQjtFQUFBOztFQUMvRCxJQUFNQyxLQUFLLEdBQUdaLE1BQU0sQ0FBQ0UsU0FBRCxDQUFwQjs7RUFDQSxJQUFJVyxLQUFLLENBQUNDLE9BQU4sQ0FBY0YsS0FBZCxDQUFKLEVBQTBCO0lBQ3hCQSxLQUFLLENBQUNHLE9BQU4sQ0FBYyxVQUFDWixJQUFELEVBQVU7TUFDdEJBLElBQUksTUFBSixTQUFRUSxJQUFSO0lBQ0QsQ0FGRDtFQUdEO0FBQ0YsQ0FQRDs7QUFTQSxJQUFNSyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0VBQ2xCaEIsTUFBTSxHQUFHLEVBQVQ7QUFDRCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWQ7XG5cbmludGVyZmFjZSBFdmVudHMge1xuICBbaW5kZXg6IHN0cmluZ106IEFueWZ1bmN0aW9uc1tdO1xufVxuXG5sZXQgZXZlbnRzOiBFdmVudHMgPSB7XG4gIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogW2Z1bmNzXVxufTtcblxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmdW5jKTtcbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyID0gKCkgPT4ge1xuICBldmVudHMgPSB7fTtcbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUsIGNsZWFyIH07XG4iXSwibmFtZXMiOlsiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiZnVuYyIsInB1c2giLCJ1bnN1YnNjcmliZSIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInNwbGljZSIsInB1Ymxpc2giLCJhcmdzIiwiZnVuY3MiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2xlYXIiXSwic291cmNlUm9vdCI6IiJ9