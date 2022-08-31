/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/domManipulator.ts":
/*!***************************************!*\
  !*** ./src/scripts/domManipulator.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeElements": () => (/* binding */ composeElements),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "fixElement": () => (/* binding */ fixElement)
/* harmony export */ });
var checkIfFuncContainsFake = function checkIfFuncContainsFake(func) {
  return "fake" in func;
};

var createElement = function createElement(elementName, classNames, textContent, id, attributes, eventListeners) {
  var container = document.createElement(elementName);

  if (classNames) {
    classNames.forEach(function (className) {
      container.classList.add(className);
    });
  }

  if (textContent) {
    container.textContent = textContent;
  }

  if (id) {
    container.id = id;
  }

  if (attributes) {
    attributes.forEach(function (attribute) {
      container.setAttribute(attribute[0], attribute[1]);
    });
  }

  if (eventListeners) {
    eventListeners.forEach(function (eventListener) {
      container.addEventListener(eventListener[0], eventListener[1]);
    });
  }

  return function (child) {
    if (child) {
      if (!Array.isArray(child)) {
        if (checkIfFuncContainsFake(child)) {
          return function () {
            return container;
          };
        }

        container.appendChild(child());
      } else {
        child.forEach(function (element) {
          container.appendChild(element());
        });
      }
    }

    return function () {
      return container;
    };
  };
};

var checkIfTypeChildFuncArr = function checkIfTypeChildFuncArr(arr) {
  return Array.isArray(arr);
};

var composeElements = function composeElements(arr) {
  var fakeDiv = function fakeDiv() {
    return document.createElement("div");
  };

  fakeDiv.fake = true;
  var returnContainer = arr.reduce(function (acc, curr) {
    if (checkIfTypeChildFuncArr(curr)) {
      return curr.map(function (func) {
        return func(undefined);
      });
    }

    return curr(acc);
  }, fakeDiv);

  if (Array.isArray(returnContainer)) {
    return returnContainer.map(function (htmlFunc) {
      var container = htmlFunc();
      return function () {
        return function () {
          return container;
        };
      };
    });
  }

  var container = returnContainer();
  return [function () {
    return function () {
      return container;
    };
  }];
};

var fixElement = function fixElement(body, child) {
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
};



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
/*!************************************!*\
  !*** ./src/scripts/initDisplay.ts ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var createHeader = function createHeader() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("h1", ["battleshipHeader"], "Battleship"), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("header", ["headerDiv"])]);
};

var githubIcon = function githubIcon() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-brands", "fa-github"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["githubIcon"])]);
};

var createFooter = function createFooter() {
  return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([[(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["githubName"], "Mynameisfrostwalker")].concat(_toConsumableArray(githubIcon())), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", null, null, null, [["href", "https://github.com/Mynameisfrostwalker"]]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", ["githubDiv"]), (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("footer", ["footer"])]);
};

var initDisplay = function initDisplay() {
  var body = document.querySelector("body");

  if (body) {
    (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(body, [createHeader(), createFooter()]);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDisplay);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVksRUFBN0IsQ0FBUCxDQUFWO0VBQ0Q7QUFDRixDQUxEOztBQU9BLGlFQUFlQyxXQUFmLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZG9tTWFuaXB1bGF0b3IudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9pbml0RGlzcGxheS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEhUTUxGdW5jID0gKCkgPT4gSFRNTEVsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEJvZHlFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGZpeEVsZW1lbnQsIGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL2RvbU1hbmlwdWxhdG9yXCI7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9ICgpID0+XG4gIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgY3JlYXRlRWxlbWVudChcImgxXCIsIFtcImJhdHRsZXNoaXBIZWFkZXJcIl0sIFwiQmF0dGxlc2hpcFwiKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIsIFtcImhlYWRlckRpdlwiXSksXG4gIF0pO1xuXG5jb25zdCBnaXRodWJJY29uID0gKCkgPT5cbiAgY29tcG9zZUVsZW1lbnRzKFtcbiAgICBjcmVhdGVFbGVtZW50KFwiaVwiLCBbXCJmYS1icmFuZHNcIiwgXCJmYS1naXRodWJcIl0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViSWNvblwiXSksXG4gIF0pO1xuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PlxuICBjb21wb3NlRWxlbWVudHMoW1xuICAgIFtcbiAgICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViTmFtZVwiXSwgXCJNeW5hbWVpc2Zyb3N0d2Fsa2VyXCIpLFxuICAgICAgLi4uZ2l0aHViSWNvbigpLFxuICAgIF0sXG4gICAgY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgbnVsbCwgbnVsbCwgW1xuICAgICAgW1wiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9NeW5hbWVpc2Zyb3N0d2Fsa2VyXCJdLFxuICAgIF0pLFxuICAgIGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wiZ2l0aHViRGl2XCJdKSxcbiAgICBjcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIsIFtcImZvb3RlclwiXSksXG4gIF0pO1xuXG5jb25zdCBpbml0RGlzcGxheSA9ICgpID0+IHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBpZiAoYm9keSkge1xuICAgIGZpeEVsZW1lbnQoYm9keSwgW2NyZWF0ZUhlYWRlcigpLCBjcmVhdGVGb290ZXIoKV0pO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBpbml0RGlzcGxheTtcbiJdLCJuYW1lcyI6WyJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWVzIiwidGV4dENvbnRlbnQiLCJpZCIsImF0dHJpYnV0ZXMiLCJldmVudExpc3RlbmVycyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImNvbXBvc2VFbGVtZW50cyIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiZml4RWxlbWVudCIsImJvZHkiLCJjcmVhdGVIZWFkZXIiLCJnaXRodWJJY29uIiwiY3JlYXRlRm9vdGVyIiwiaW5pdERpc3BsYXkiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==