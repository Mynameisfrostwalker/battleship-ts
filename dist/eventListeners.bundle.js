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

  if (elementName === "svg") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  }

  if (elementName === "path") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "path");
  }

  if (elementName === "g") {
    container = document.createElementNS("http://www.w3.org/2000/svg", "g");
  }

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
/*!***************************************!*\
  !*** ./src/scripts/eventListeners.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "onCheckboxChange": () => (/* binding */ onCheckboxChange),
/* harmony export */   "onFormSubmit": () => (/* binding */ onFormSubmit),
/* harmony export */   "onNameInput": () => (/* binding */ onNameInput),
/* harmony export */   "onVolumeChange": () => (/* binding */ onVolumeChange)
/* harmony export */ });
/* harmony import */ var _domManipulator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManipulator */ "./src/scripts/domManipulator.ts");


var showError = function showError(input) {
  var _input$parentElement, _input$parentElement$;

  var span = (_input$parentElement = input.parentElement) === null || _input$parentElement === void 0 ? void 0 : (_input$parentElement$ = _input$parentElement.nextElementSibling) === null || _input$parentElement$ === void 0 ? void 0 : _input$parentElement$.nextElementSibling;

  if (span) {
    if (input.validity.valueMissing) {
      span.textContent = "Input must not be left blank!";
    }

    if (input.value.trim() === "") {
      var error = "Input is blank.";
      span.textContent = "Input must not be left blank!";
      input.setCustomValidity(error);
    } else {
      span.textContent = "";
      input.setCustomValidity("");
    }
  }
};

var onVolumeChange = function onVolumeChange(event) {
  var audio = document.querySelector(".ship-sailing");
  var div = event.target;

  if (audio instanceof HTMLAudioElement && div instanceof HTMLElement) {
    if (div.classList.contains("not-play")) {
      audio.play().then(function () {
        var createVolume = function createVolume() {
          return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-high"])]);
        };

        div.replaceChildren();
        (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
        div.classList.remove("not-play");
      })["catch"](function () {
        throw new Error("Audio failed to play");
      });
    } else {
      audio.pause();

      var createVolume = function createVolume() {
        return (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.composeElements)([(0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.createElement)("i", ["fa-solid", "fa-volume-xmark"])]);
      };

      div.replaceChildren();
      (0,_domManipulator__WEBPACK_IMPORTED_MODULE_0__.fixElement)(div, [createVolume()]);
      div.classList.add("not-play");
    }
  }
};

var onCheckboxChange = function onCheckboxChange(event) {
  var check = event.target;

  if (check instanceof HTMLInputElement) {
    var _check$parentElement, _check$parentElement2;

    var div = (_check$parentElement = check.parentElement) === null || _check$parentElement === void 0 ? void 0 : _check$parentElement.previousElementSibling;
    var span = (_check$parentElement2 = check.parentElement) === null || _check$parentElement2 === void 0 ? void 0 : _check$parentElement2.nextElementSibling;
    var input = div === null || div === void 0 ? void 0 : div.querySelector("input");

    if (input && div && span) {
      if (check.checked) {
        div.classList.add("invisible");
        span.classList.add("invisible");
        span.textContent = "";
        input.disabled = true;
      } else {
        div.classList.remove("invisible");
        span.classList.remove("invisible");
        input.disabled = false;
      }
    }
  }
};

var onNameInput = function onNameInput(event) {
  var input = event.target;

  if (input instanceof HTMLInputElement) {
    showError(input);
  }
};

var onFormSubmit = function onFormSubmit(event) {
  event.preventDefault();
  var form = event.target;

  if (form instanceof HTMLFormElement) {
    for (var i = 0; i < form.length; i += 1) {
      var input = form[i];

      if (input instanceof HTMLInputElement) {
        if (!input.disabled) {
          showError(input);
        }
      }
    }
  }
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQ0MsS0FBRCxDQUFUO0VBQ0Q7QUFDRixDQUxEOztBQU9BLElBQU1pQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDdEIsS0FBRCxFQUFrQjtFQUNyQ0EsS0FBSyxDQUFDdUIsY0FBTjtFQUNBLElBQU1DLElBQUksR0FBR3hCLEtBQUssQ0FBQ0ksTUFBbkI7O0VBQ0EsSUFBSW9CLElBQUksWUFBWUMsZUFBcEIsRUFBcUM7SUFDbkMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNHLE1BQXpCLEVBQWlDRCxDQUFDLElBQUksQ0FBdEMsRUFBeUM7TUFDdkMsSUFBTXJDLEtBQUssR0FBR21DLElBQUksQ0FBQ0UsQ0FBRCxDQUFsQjs7TUFDQSxJQUFJckMsS0FBSyxZQUFZNEIsZ0JBQXJCLEVBQXVDO1FBQ3JDLElBQUksQ0FBQzVCLEtBQUssQ0FBQytCLFFBQVgsRUFBcUI7VUFDbkJoQyxTQUFTLENBQUNDLEtBQUQsQ0FBVDtRQUNEO01BQ0Y7SUFDRjtFQUNGO0FBQ0YsQ0FiRCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9kb21NYW5pcHVsYXRvci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2V2ZW50TGlzdGVuZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbInR5cGUgSFRNTEZ1bmMgPSAoKSA9PlxuICB8IEhUTUxFbGVtZW50XG4gIHwgU1ZHU1ZHRWxlbWVudFxuICB8IFNWR1BhdGhFbGVtZW50XG4gIHwgU1ZHR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBTVkdTVkdFbGVtZW50IHwgU1ZHUGF0aEVsZW1lbnQgfCBTVkdHRWxlbWVudCA9XG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gIGlmIChlbGVtZW50TmFtZSA9PT0gXCJzdmdcIikge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICB9XG4gIGlmIChlbGVtZW50TmFtZSA9PT0gXCJwYXRoXCIpIHtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gIH1cbiAgaWYgKGVsZW1lbnROYW1lID09PSBcImdcIikge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgfVxuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEVsZW1lbnQsIGNoaWxkOiBDaGlsZEZ1bmNBcnJbXSkgPT4ge1xuICBjaGlsZC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgZnVuYy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQoKSgpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH0gZnJvbSBcIi4vZG9tTWFuaXB1bGF0b3JcIjtcblxuY29uc3Qgc2hvd0Vycm9yID0gKGlucHV0OiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gIGNvbnN0IHNwYW4gPSBpbnB1dC5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc/Lm5leHRFbGVtZW50U2libGluZztcbiAgaWYgKHNwYW4pIHtcbiAgICBpZiAoaW5wdXQudmFsaWRpdHkudmFsdWVNaXNzaW5nKSB7XG4gICAgICBzcGFuLnRleHRDb250ZW50ID0gXCJJbnB1dCBtdXN0IG5vdCBiZSBsZWZ0IGJsYW5rIVwiO1xuICAgIH1cblxuICAgIGlmIChpbnB1dC52YWx1ZS50cmltKCkgPT09IFwiXCIpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gXCJJbnB1dCBpcyBibGFuay5cIjtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIklucHV0IG11c3Qgbm90IGJlIGxlZnQgYmxhbmshXCI7XG4gICAgICBpbnB1dC5zZXRDdXN0b21WYWxpZGl0eShlcnJvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgaW5wdXQuc2V0Q3VzdG9tVmFsaWRpdHkoXCJcIik7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBvblZvbHVtZUNoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtc2FpbGluZ1wiKTtcbiAgY29uc3QgZGl2ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoYXVkaW8gaW5zdGFuY2VvZiBIVE1MQXVkaW9FbGVtZW50ICYmIGRpdiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgaWYgKGRpdi5jbGFzc0xpc3QuY29udGFpbnMoXCJub3QtcGxheVwiKSkge1xuICAgICAgYXVkaW9cbiAgICAgICAgLnBsYXkoKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgY29uc3QgY3JlYXRlVm9sdW1lID0gKCkgPT5cbiAgICAgICAgICAgIGNvbXBvc2VFbGVtZW50cyhbXG4gICAgICAgICAgICAgIGNyZWF0ZUVsZW1lbnQoXCJpXCIsIFtcImZhLXNvbGlkXCIsIFwiZmEtdm9sdW1lLWhpZ2hcIl0pLFxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgZGl2LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgICAgICAgIGZpeEVsZW1lbnQoZGl2LCBbY3JlYXRlVm9sdW1lKCldKTtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcIm5vdC1wbGF5XCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF1ZGlvIGZhaWxlZCB0byBwbGF5XCIpO1xuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXVkaW8ucGF1c2UoKTtcbiAgICAgIGNvbnN0IGNyZWF0ZVZvbHVtZSA9ICgpID0+XG4gICAgICAgIGNvbXBvc2VFbGVtZW50cyhbY3JlYXRlRWxlbWVudChcImlcIiwgW1wiZmEtc29saWRcIiwgXCJmYS12b2x1bWUteG1hcmtcIl0pXSk7XG4gICAgICBkaXYucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgICBmaXhFbGVtZW50KGRpdiwgW2NyZWF0ZVZvbHVtZSgpXSk7XG4gICAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm5vdC1wbGF5XCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb25DaGVja2JveENoYW5nZSA9IChldmVudDogRXZlbnQpID0+IHtcbiAgY29uc3QgY2hlY2sgPSBldmVudC50YXJnZXQ7XG4gIGlmIChjaGVjayBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICBjb25zdCBkaXYgPSBjaGVjay5wYXJlbnRFbGVtZW50Py5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgIGNvbnN0IHNwYW4gPSBjaGVjay5wYXJlbnRFbGVtZW50Py5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgY29uc3QgaW5wdXQgPSBkaXY/LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgICBpZiAoaW5wdXQgJiYgZGl2ICYmIHNwYW4pIHtcbiAgICAgIGlmIChjaGVjay5jaGVja2VkKSB7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICBpbnB1dC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb25OYW1lSW5wdXQgPSAoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgc2hvd0Vycm9yKGlucHV0KTtcbiAgfVxufTtcblxuY29uc3Qgb25Gb3JtU3VibWl0ID0gKGV2ZW50OiBFdmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCBmb3JtID0gZXZlbnQudGFyZ2V0O1xuICBpZiAoZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaW5wdXQgPSBmb3JtW2ldO1xuICAgICAgaWYgKGlucHV0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCkge1xuICAgICAgICBpZiAoIWlucHV0LmRpc2FibGVkKSB7XG4gICAgICAgICAgc2hvd0Vycm9yKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgb25DaGVja2JveENoYW5nZSwgb25Wb2x1bWVDaGFuZ2UsIG9uTmFtZUlucHV0LCBvbkZvcm1TdWJtaXQgfTtcbiJdLCJuYW1lcyI6WyJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWVzIiwidGV4dENvbnRlbnQiLCJpZCIsImF0dHJpYnV0ZXMiLCJldmVudExpc3RlbmVycyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImNvbXBvc2VFbGVtZW50cyIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiZml4RWxlbWVudCIsImJvZHkiLCJzaG93RXJyb3IiLCJpbnB1dCIsInNwYW4iLCJwYXJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnRTaWJsaW5nIiwidmFsaWRpdHkiLCJ2YWx1ZU1pc3NpbmciLCJ2YWx1ZSIsInRyaW0iLCJlcnJvciIsInNldEN1c3RvbVZhbGlkaXR5Iiwib25Wb2x1bWVDaGFuZ2UiLCJldmVudCIsImF1ZGlvIiwicXVlcnlTZWxlY3RvciIsImRpdiIsInRhcmdldCIsIkhUTUxBdWRpb0VsZW1lbnQiLCJIVE1MRWxlbWVudCIsImNvbnRhaW5zIiwicGxheSIsInRoZW4iLCJjcmVhdGVWb2x1bWUiLCJyZXBsYWNlQ2hpbGRyZW4iLCJyZW1vdmUiLCJFcnJvciIsInBhdXNlIiwib25DaGVja2JveENoYW5nZSIsImNoZWNrIiwiSFRNTElucHV0RWxlbWVudCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbk5hbWVJbnB1dCIsIm9uRm9ybVN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsIkhUTUxGb3JtRWxlbWVudCIsImkiLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9