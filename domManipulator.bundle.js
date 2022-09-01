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

var createElement = function createElement(elementName, classNames, textContent, id, attributes, eventListeners, uniqueScriptName, scripts) {
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
      var eventWrapper = function eventWrapper(event) {
        event.preventDefault();
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
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
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
  child.forEach(function (func) {
    func.forEach(function (element) {
      body.appendChild(element()());
    });
  });
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TjtRQUFBLENBQU47TUFBQSxDQUFQO0lBQ0QsQ0FKTSxDQUFQO0VBS0Q7O0VBRUQsSUFBTUEsU0FBUyxHQUFHK0IsZUFBZSxFQUFqQztFQUNBLE9BQU8sQ0FBQztJQUFBLE9BQU07TUFBQSxPQUFNL0IsU0FBTjtJQUFBLENBQU47RUFBQSxDQUFELENBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTXNDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBb0JsQixLQUFwQixFQUE4QztFQUMvREEsS0FBSyxDQUFDaEMsT0FBTixDQUFjLFVBQUNaLElBQUQsRUFBVTtJQUN0QkEsSUFBSSxDQUFDWSxPQUFMLENBQWEsVUFBQ2tDLE9BQUQsRUFBYTtNQUN4QmdCLElBQUksQ0FBQ2pCLFdBQUwsQ0FBaUJDLE9BQU8sSUFBeEI7SUFDRCxDQUZEO0VBR0QsQ0FKRDtBQUtELENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZG9tTWFuaXB1bGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBBbnlmdW5jdGlvbnMgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgRXZlbnRzIHtcbiAgW2luZGV4OiBzdHJpbmddOiBBbnlmdW5jdGlvbnNbXTtcbn1cblxuY29uc3QgZXZlbnRzOiBFdmVudHMgPSB7XG4gIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogW2Z1bmNzXVxufTtcblxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmdW5jKTtcbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbnR5cGUgSFRNTEZ1bmMgPSAoKSA9PiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChjb250YWluZXI6IEhUTUxFbGVtZW50KSA9PiB2b2lkXVtdIHwgbnVsbCxcbiAgdW5pcXVlU2NyaXB0TmFtZT86IHN0cmluZyB8IG51bGwsXG4gIHNjcmlwdHM/OiBbc3RyaW5nLCAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnROYW1lKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50V3JhcHBlciA9IChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnRMaXN0ZW5lclsxXShjb250YWluZXIpO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRXcmFwcGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1bmlxdWVTY3JpcHROYW1lKSB7XG4gICAgY29uc3QgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHVua25vd24sIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGV4dCA9ICh0ZXh0OiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LWFkZENsYXNzYCwgYWRkQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1yZW1vdmVDbGFzc2AsIHJlbW92ZUNsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0QXR0cmlidXRlYCwgc2V0QXR0cmlidXRlKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0VGV4dGAsIHNldFRleHQpO1xuXG4gICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdFdyYXBwZXIgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgc2NyaXB0WzFdKGNvbnRhaW5lciwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS0ke3NjcmlwdFswXX1gLCBzY3JpcHRXcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVNWRyA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChjb250YWluZXI6IFNWR0VsZW1lbnQpID0+IHZvaWRdW10gfCBudWxsLFxuICB1bmlxdWVTY3JpcHROYW1lPzogc3RyaW5nIHwgbnVsbCxcbiAgc2NyaXB0cz86IFtzdHJpbmcsICguLi5hcmdzOiB1bmtub3duW10pID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBTVkdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFxuICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBlbGVtZW50TmFtZVxuICApO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29uc3QgZXZlbnRXcmFwcGVyID0gKCkgPT4ge1xuICAgICAgICBldmVudExpc3RlbmVyWzFdKGNvbnRhaW5lcik7XG4gICAgICB9O1xuXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyWzBdLCBldmVudFdyYXBwZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKHVuaXF1ZVNjcmlwdE5hbWUpIHtcbiAgICBjb25zdCBhZGRDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZUNsYXNzID0gKGNsYXNzTmFtZTogdW5rbm93bikgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0QXR0cmlidXRlID0gKGF0dHJpYnV0ZTogdW5rbm93biwgdmFsdWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgYXR0cmlidXRlID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAodmFsdWUgPT09IFwiXCIpIHtcbiAgICAgICAgICBjb250YWluZXIucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZXRUZXh0ID0gKHRleHQ6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgdGV4dCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tYWRkQ2xhc3NgLCBhZGRDbGFzcyk7XG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LXJlbW92ZUNsYXNzYCwgcmVtb3ZlQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRBdHRyaWJ1dGVgLCBzZXRBdHRyaWJ1dGUpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1zZXRUZXh0YCwgc2V0VGV4dCk7XG5cbiAgICBpZiAoc2NyaXB0cykge1xuICAgICAgc2NyaXB0cy5mb3JFYWNoKChzY3JpcHQpID0+IHtcbiAgICAgICAgY29uc3Qgc2NyaXB0V3JhcHBlciA9ICguLi5hcmdzOiB1bmtub3duW10pID0+IHtcbiAgICAgICAgICBzY3JpcHRbMV0oY29udGFpbmVyLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LSR7c2NyaXB0WzBdfWAsIHNjcmlwdFdyYXBwZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEVsZW1lbnQsIGNoaWxkOiBDaGlsZEZ1bmNBcnJbXSkgPT4ge1xuICBjaGlsZC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgZnVuYy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQoKSgpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQsIGNyZWF0ZVNWRyB9O1xuIl0sIm5hbWVzIjpbImV2ZW50cyIsInN1YnNjcmliZSIsImV2ZW50TmFtZSIsImZ1bmMiLCJwdXNoIiwidW5zdWJzY3JpYmUiLCJpIiwibGVuZ3RoIiwidG9TdHJpbmciLCJzcGxpY2UiLCJwdWJsaXNoIiwiYXJncyIsImZ1bmNzIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsImNoZWNrSWZGdW5jQ29udGFpbnNGYWtlIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY2xhc3NOYW1lcyIsInRleHRDb250ZW50IiwiaWQiLCJhdHRyaWJ1dGVzIiwiZXZlbnRMaXN0ZW5lcnMiLCJ1bmlxdWVTY3JpcHROYW1lIiwic2NyaXB0cyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnRMaXN0ZW5lciIsImV2ZW50V3JhcHBlciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0VGV4dCIsInRleHQiLCJzY3JpcHQiLCJzY3JpcHRXcmFwcGVyIiwiY2hpbGQiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjcmVhdGVTVkciLCJjcmVhdGVFbGVtZW50TlMiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImNvbXBvc2VFbGVtZW50cyIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiZml4RWxlbWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9