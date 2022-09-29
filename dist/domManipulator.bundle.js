/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/pubsub.ts":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/*!***************************************!*\
  !*** ./src/scripts/domManipulator.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "composeElements": () => (/* binding */ composeElements),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createSVG": () => (/* binding */ createSVG),
/* harmony export */   "fixElement": () => (/* binding */ fixElement)
/* harmony export */ });
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");


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

var createSVG = function createSVG(elementName, classNames, textContent, id, attributes, eventListeners, uniqueScriptName, scripts) {
  var container = document.createElementNS("http://www.w3.org/2000/svg", elementName);

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
      var eventWrapper = function eventWrapper() {
        eventListener[1](container);
      };

      container.addEventListener(eventListener[0], eventWrapper);
    });
  }

  if (uniqueScriptName) {
    var addClass = function addClass(className) {
      if (typeof className === "string") {
        container.classList.add(className);
      }
    };

    var removeClass = function removeClass(className) {
      if (typeof className === "string") {
        container.classList.remove(className);
      }
    };

    var setAttribute = function setAttribute(attribute, value) {
      if (typeof attribute === "string" && typeof value === "string") {
        if (value === "") {
          container.removeAttribute(attribute);
        } else {
          container.setAttribute(attribute, value);
        }
      }
    };

    var setText = function setText(text) {
      if (typeof text === "string") {
        container.textContent = text;
      }
    };

    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-addClass"), addClass);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-removeClass"), removeClass);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-setAttribute"), setAttribute);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-setText"), setText);

    if (scripts) {
      scripts.forEach(function (script) {
        var scriptWrapper = function scriptWrapper() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          script[1].apply(script, [container].concat(args));
        };

        (0,_pubsub__WEBPACK_IMPORTED_MODULE_0__.subscribe)("".concat(uniqueScriptName, "-").concat(script[0]), scriptWrapper);
      });
    }
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
  body.replaceChildren();
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3B1YnN1Yi50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2RvbU1hbmlwdWxhdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmxldCBldmVudHM6IEV2ZW50cyA9IHtcbiAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBldmVudHNbZXZlbnROYW1lXSA9IGV2ZW50c1tldmVudE5hbWVdIHx8IFtdO1xuICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xufTtcblxuY29uc3QgdW5zdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2ZW50c1tldmVudE5hbWVdLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoZXZlbnRzW2V2ZW50TmFtZV1baV0udG9TdHJpbmcoKSA9PT0gZnVuYy50b1N0cmluZygpKSB7XG4gICAgICAgIGV2ZW50c1tldmVudE5hbWVdLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBwdWJsaXNoID0gKGV2ZW50TmFtZTogc3RyaW5nLCAuLi5hcmdzOiB1bmtub3duW10pOiB2b2lkID0+IHtcbiAgY29uc3QgZnVuY3MgPSBldmVudHNbZXZlbnROYW1lXTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoZnVuY3MpKSB7XG4gICAgZnVuY3MuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgY2xlYXIgPSAoKSA9PiB7XG4gIGV2ZW50cyA9IHt9O1xufTtcblxuZXhwb3J0IHsgcHVibGlzaCwgc3Vic2NyaWJlLCB1bnN1YnNjcmliZSwgY2xlYXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbnR5cGUgSFRNTEZ1bmMgPSAoKSA9PiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKGNoaWxkPzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGVja0lmRnVuY0NvbnRhaW5zRmFrZShjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVTVkcgPSAoXG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IG51bGwsXG4gIHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCxcbiAgaWQ/OiBzdHJpbmcgfCBudWxsLFxuICBhdHRyaWJ1dGVzPzogW3N0cmluZywgc3RyaW5nXVtdIHwgbnVsbCxcbiAgZXZlbnRMaXN0ZW5lcnM/OiBbc3RyaW5nLCAoY29udGFpbmVyOiBTVkdFbGVtZW50KSA9PiB2b2lkXVtdIHwgbnVsbCxcbiAgdW5pcXVlU2NyaXB0TmFtZT86IHN0cmluZyB8IG51bGwsXG4gIHNjcmlwdHM/OiBbc3RyaW5nLCAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogU1ZHRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZWxlbWVudE5hbWVcbiAgKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lclsxXShjb250YWluZXIpO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRXcmFwcGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1bmlxdWVTY3JpcHROYW1lKSB7XG4gICAgY29uc3QgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHVua25vd24sIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGV4dCA9ICh0ZXh0OiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LWFkZENsYXNzYCwgYWRkQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1yZW1vdmVDbGFzc2AsIHJlbW92ZUNsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0QXR0cmlidXRlYCwgc2V0QXR0cmlidXRlKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0VGV4dGAsIHNldFRleHQpO1xuXG4gICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdFdyYXBwZXIgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgc2NyaXB0WzFdKGNvbnRhaW5lciwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS0ke3NjcmlwdFswXX1gLCBzY3JpcHRXcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyID0gKFxuICBhcnI6IENoaWxkRnVuYyB8IENoaWxkRnVuY0FyclxuKTogYXJyIGlzIENoaWxkRnVuY0FyciA9PiBBcnJheS5pc0FycmF5KGFycik7XG5cbmNvbnN0IGNvbXBvc2VFbGVtZW50cyA9IChhcnI6IChDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnIpW10pOiBDaGlsZEZ1bmNBcnIgPT4ge1xuICBjb25zdCBmYWtlRGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmFrZURpdi5mYWtlID0gdHJ1ZTtcblxuICBjb25zdCByZXR1cm5Db250YWluZXIgPSBhcnIucmVkdWNlPENoaWxkPigoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyKGN1cnIpKSB7XG4gICAgICByZXR1cm4gY3Vyci5tYXAoKGZ1bmMpID0+IGZ1bmModW5kZWZpbmVkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnIoYWNjKTtcbiAgfSwgZmFrZURpdik7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmV0dXJuQ29udGFpbmVyKSkge1xuICAgIHJldHVybiByZXR1cm5Db250YWluZXIubWFwKChodG1sRnVuYykgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaHRtbEZ1bmMoKTtcblxuICAgICAgcmV0dXJuICgpID0+ICgpID0+IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJldHVybkNvbnRhaW5lcigpO1xuICByZXR1cm4gWygpID0+ICgpID0+IGNvbnRhaW5lcl07XG59O1xuXG5jb25zdCBmaXhFbGVtZW50ID0gKGJvZHk6IEhUTUxFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfTtcbmV4cG9ydCB7IGZpeEVsZW1lbnQsIGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH07XG4iXSwibmFtZXMiOlsiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiZnVuYyIsInB1c2giLCJ1bnN1YnNjcmliZSIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInNwbGljZSIsInB1Ymxpc2giLCJhcmdzIiwiZnVuY3MiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2xlYXIiLCJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImNyZWF0ZUVsZW1lbnQiLCJlbGVtZW50TmFtZSIsImNsYXNzTmFtZXMiLCJ0ZXh0Q29udGVudCIsImlkIiwiYXR0cmlidXRlcyIsImV2ZW50TGlzdGVuZXJzIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY3JlYXRlU1ZHIiwidW5pcXVlU2NyaXB0TmFtZSIsInNjcmlwdHMiLCJjcmVhdGVFbGVtZW50TlMiLCJldmVudFdyYXBwZXIiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwidmFsdWUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRUZXh0IiwidGV4dCIsInNjcmlwdCIsInNjcmlwdFdyYXBwZXIiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImNvbXBvc2VFbGVtZW50cyIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiZml4RWxlbWVudCIsImJvZHkiLCJyZXBsYWNlQ2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9