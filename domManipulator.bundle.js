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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUQsRUFBTUMsSUFBTixFQUFlO0lBQ3ZELElBQUlSLHVCQUF1QixDQUFDUSxJQUFELENBQTNCLEVBQW1DO01BQ2pDLE9BQU9BLElBQUksQ0FBQ0MsR0FBTCxDQUFTLFVBQUN4RCxJQUFEO1FBQUEsT0FBVUEsSUFBSSxDQUFDeUQsU0FBRCxDQUFkO01BQUEsQ0FBVCxDQUFQO0lBQ0Q7O0lBRUQsT0FBT0YsSUFBSSxDQUFDRCxHQUFELENBQVg7RUFDRCxDQU51QixFQU1yQkosT0FOcUIsQ0FBeEI7O0VBUUEsSUFBSXhDLEtBQUssQ0FBQ0MsT0FBTixDQUFjeUMsZUFBZCxDQUFKLEVBQW9DO0lBQ2xDLE9BQU9BLGVBQWUsQ0FBQ0ksR0FBaEIsQ0FBb0IsVUFBQ0UsUUFBRCxFQUFjO01BQ3ZDLElBQU1yQyxTQUFTLEdBQUdxQyxRQUFRLEVBQTFCO01BRUEsT0FBTztRQUFBLE9BQU07VUFBQSxPQUFNckMsU0FBTjtRQUFBLENBQU47TUFBQSxDQUFQO0lBQ0QsQ0FKTSxDQUFQO0VBS0Q7O0VBRUQsSUFBTUEsU0FBUyxHQUFHK0IsZUFBZSxFQUFqQztFQUNBLE9BQU8sQ0FBQztJQUFBLE9BQU07TUFBQSxPQUFNL0IsU0FBTjtJQUFBLENBQU47RUFBQSxDQUFELENBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTXNDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBb0I5QixLQUFwQixFQUE4QztFQUMvRDhCLElBQUksQ0FBQ0MsZUFBTDtFQUNBL0IsS0FBSyxDQUFDbEIsT0FBTixDQUFjLFVBQUNaLElBQUQsRUFBVTtJQUN0QkEsSUFBSSxDQUFDWSxPQUFMLENBQWEsVUFBQ29CLE9BQUQsRUFBYTtNQUN4QjRCLElBQUksQ0FBQzdCLFdBQUwsQ0FBaUJDLE9BQU8sSUFBeEI7SUFDRCxDQUZEO0VBR0QsQ0FKRDtBQUtELENBUEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZG9tTWFuaXB1bGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsidHlwZSBBbnlmdW5jdGlvbnMgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkO1xuXG5pbnRlcmZhY2UgRXZlbnRzIHtcbiAgW2luZGV4OiBzdHJpbmddOiBBbnlmdW5jdGlvbnNbXTtcbn1cblxuY29uc3QgZXZlbnRzOiBFdmVudHMgPSB7XG4gIC8vIGtleTogZXZlbnRuYW1lLCB2YWx1ZTogW2Z1bmNzXVxufTtcblxuY29uc3Qgc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgZXZlbnRzW2V2ZW50TmFtZV0gPSBldmVudHNbZXZlbnROYW1lXSB8fCBbXTtcbiAgZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChmdW5jKTtcbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbnR5cGUgSFRNTEZ1bmMgPSAoKSA9PiBIVE1MRWxlbWVudCB8IFNWR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudE5hbWUpO1xuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKGNoaWxkPzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9KSA9PiB7XG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgIGlmIChjaGVja0lmRnVuY0NvbnRhaW5zRmFrZShjaGlsZCkpIHtcbiAgICAgICAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZWxlbWVudCgpKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gIH07XG59O1xuXG5jb25zdCBjcmVhdGVTVkcgPSAoXG4gIGVsZW1lbnROYW1lOiBzdHJpbmcsXG4gIGNsYXNzTmFtZXM/OiBzdHJpbmdbXSB8IG51bGwsXG4gIHRleHRDb250ZW50Pzogc3RyaW5nIHwgbnVsbCxcbiAgaWQ/OiBzdHJpbmcgfCBudWxsLFxuICBhdHRyaWJ1dGVzPzogW3N0cmluZywgc3RyaW5nXVtdIHwgbnVsbCxcbiAgZXZlbnRMaXN0ZW5lcnM/OiBbc3RyaW5nLCAoY29udGFpbmVyOiBTVkdFbGVtZW50KSA9PiB2b2lkXVtdIHwgbnVsbCxcbiAgdW5pcXVlU2NyaXB0TmFtZT86IHN0cmluZyB8IG51bGwsXG4gIHNjcmlwdHM/OiBbc3RyaW5nLCAoLi4uYXJnczogdW5rbm93bltdKSA9PiB2b2lkXVtdIHwgbnVsbFxuKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lcjogU1ZHRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgZWxlbWVudE5hbWVcbiAgKTtcblxuICBpZiAoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG4gIGlmICh0ZXh0Q29udGVudCkge1xuICAgIGNvbnRhaW5lci50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICB9XG4gIGlmIChpZCkge1xuICAgIGNvbnRhaW5lci5pZCA9IGlkO1xuICB9XG4gIGlmIChhdHRyaWJ1dGVzKSB7XG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlWzBdLCBhdHRyaWJ1dGVbMV0pO1xuICAgIH0pO1xuICB9XG4gIGlmIChldmVudExpc3RlbmVycykge1xuICAgIGV2ZW50TGlzdGVuZXJzLmZvckVhY2goKGV2ZW50TGlzdGVuZXIpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgZXZlbnRMaXN0ZW5lclsxXShjb250YWluZXIpO1xuICAgICAgfTtcblxuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRXcmFwcGVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICh1bmlxdWVTY3JpcHROYW1lKSB7XG4gICAgY29uc3QgYWRkQ2xhc3MgPSAoY2xhc3NOYW1lOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmVDbGFzcyA9IChjbGFzc05hbWU6IHVua25vd24pID0+IHtcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NOYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IHNldEF0dHJpYnV0ZSA9IChhdHRyaWJ1dGU6IHVua25vd24sIHZhbHVlOiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIGF0dHJpYnV0ZSA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBcIlwiKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoYXR0cmlidXRlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0VGV4dCA9ICh0ZXh0OiB1bmtub3duKSA9PiB7XG4gICAgICBpZiAodHlwZW9mIHRleHQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgc3Vic2NyaWJlKGAke3VuaXF1ZVNjcmlwdE5hbWV9LWFkZENsYXNzYCwgYWRkQ2xhc3MpO1xuICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS1yZW1vdmVDbGFzc2AsIHJlbW92ZUNsYXNzKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0QXR0cmlidXRlYCwgc2V0QXR0cmlidXRlKTtcbiAgICBzdWJzY3JpYmUoYCR7dW5pcXVlU2NyaXB0TmFtZX0tc2V0VGV4dGAsIHNldFRleHQpO1xuXG4gICAgaWYgKHNjcmlwdHMpIHtcbiAgICAgIHNjcmlwdHMuZm9yRWFjaCgoc2NyaXB0KSA9PiB7XG4gICAgICAgIGNvbnN0IHNjcmlwdFdyYXBwZXIgPSAoLi4uYXJnczogdW5rbm93bltdKSA9PiB7XG4gICAgICAgICAgc2NyaXB0WzFdKGNvbnRhaW5lciwgLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgICAgIHN1YnNjcmliZShgJHt1bmlxdWVTY3JpcHROYW1lfS0ke3NjcmlwdFswXX1gLCBzY3JpcHRXcmFwcGVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoY2hpbGQ/OiBDaGlsZCB8IHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0pID0+IHtcbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcbiAgICAgICAgaWYgKGNoZWNrSWZGdW5jQ29udGFpbnNGYWtlKGNoaWxkKSkge1xuICAgICAgICAgIHJldHVybiAoKSA9PiBjb250YWluZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChlbGVtZW50KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgfTtcbn07XG5cbmNvbnN0IGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyID0gKFxuICBhcnI6IENoaWxkRnVuYyB8IENoaWxkRnVuY0FyclxuKTogYXJyIGlzIENoaWxkRnVuY0FyciA9PiBBcnJheS5pc0FycmF5KGFycik7XG5cbmNvbnN0IGNvbXBvc2VFbGVtZW50cyA9IChhcnI6IChDaGlsZEZ1bmMgfCBDaGlsZEZ1bmNBcnIpW10pOiBDaGlsZEZ1bmNBcnIgPT4ge1xuICBjb25zdCBmYWtlRGl2ID0gKCkgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmFrZURpdi5mYWtlID0gdHJ1ZTtcblxuICBjb25zdCByZXR1cm5Db250YWluZXIgPSBhcnIucmVkdWNlPENoaWxkPigoYWNjLCBjdXJyKSA9PiB7XG4gICAgaWYgKGNoZWNrSWZUeXBlQ2hpbGRGdW5jQXJyKGN1cnIpKSB7XG4gICAgICByZXR1cm4gY3Vyci5tYXAoKGZ1bmMpID0+IGZ1bmModW5kZWZpbmVkKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1cnIoYWNjKTtcbiAgfSwgZmFrZURpdik7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocmV0dXJuQ29udGFpbmVyKSkge1xuICAgIHJldHVybiByZXR1cm5Db250YWluZXIubWFwKChodG1sRnVuYykgPT4ge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gaHRtbEZ1bmMoKTtcblxuICAgICAgcmV0dXJuICgpID0+ICgpID0+IGNvbnRhaW5lcjtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lciA9IHJldHVybkNvbnRhaW5lcigpO1xuICByZXR1cm4gWygpID0+ICgpID0+IGNvbnRhaW5lcl07XG59O1xuXG5jb25zdCBmaXhFbGVtZW50ID0gKGJvZHk6IEhUTUxFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgYm9keS5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHR5cGUgeyBDaGlsZEZ1bmMgfTtcbmV4cG9ydCB7IGZpeEVsZW1lbnQsIGNvbXBvc2VFbGVtZW50cywgY3JlYXRlRWxlbWVudCwgY3JlYXRlU1ZHIH07XG4iXSwibmFtZXMiOlsiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiZnVuYyIsInB1c2giLCJ1bnN1YnNjcmliZSIsImkiLCJsZW5ndGgiLCJ0b1N0cmluZyIsInNwbGljZSIsInB1Ymxpc2giLCJhcmdzIiwiZnVuY3MiLCJBcnJheSIsImlzQXJyYXkiLCJmb3JFYWNoIiwiY2hlY2tJZkZ1bmNDb250YWluc0Zha2UiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWVzIiwidGV4dENvbnRlbnQiLCJpZCIsImF0dHJpYnV0ZXMiLCJldmVudExpc3RlbmVycyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY2xhc3NOYW1lIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiZXZlbnRMaXN0ZW5lciIsImFkZEV2ZW50TGlzdGVuZXIiLCJjaGlsZCIsImFwcGVuZENoaWxkIiwiZWxlbWVudCIsImNyZWF0ZVNWRyIsInVuaXF1ZVNjcmlwdE5hbWUiLCJzY3JpcHRzIiwiY3JlYXRlRWxlbWVudE5TIiwiZXZlbnRXcmFwcGVyIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsInZhbHVlIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0VGV4dCIsInRleHQiLCJzY3JpcHQiLCJzY3JpcHRXcmFwcGVyIiwiY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIiLCJhcnIiLCJjb21wb3NlRWxlbWVudHMiLCJmYWtlRGl2IiwiZmFrZSIsInJldHVybkNvbnRhaW5lciIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJtYXAiLCJ1bmRlZmluZWQiLCJodG1sRnVuYyIsImZpeEVsZW1lbnQiLCJib2R5IiwicmVwbGFjZUNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==