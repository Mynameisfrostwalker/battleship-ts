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
/*!***************************************!*\
  !*** ./src/scripts/domManipulator.ts ***!
  \***************************************/
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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBRCxFQUFvQmxCLEtBQXBCLEVBQThDO0VBQy9EQSxLQUFLLENBQUNSLE9BQU4sQ0FBYyxVQUFDWCxJQUFELEVBQVU7SUFDdEJBLElBQUksQ0FBQ1csT0FBTCxDQUFhLFVBQUNZLE9BQUQsRUFBYTtNQUN4QmMsSUFBSSxDQUFDZixXQUFMLENBQWlCQyxPQUFPLElBQXhCO0lBQ0QsQ0FGRDtFQUdELENBSkQ7QUFLRCxDQU5EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9kb21NYW5pcHVsYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInR5cGUgSFRNTEZ1bmMgPSAoKSA9PlxuICB8IEhUTUxFbGVtZW50XG4gIHwgU1ZHU1ZHRWxlbWVudFxuICB8IFNWR1BhdGhFbGVtZW50XG4gIHwgU1ZHR0VsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgbGV0IGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBTVkdTVkdFbGVtZW50IHwgU1ZHUGF0aEVsZW1lbnQgfCBTVkdHRWxlbWVudCA9XG4gICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gIGlmIChlbGVtZW50TmFtZSA9PT0gXCJzdmdcIikge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICB9XG4gIGlmIChlbGVtZW50TmFtZSA9PT0gXCJwYXRoXCIpIHtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInBhdGhcIik7XG4gIH1cbiAgaWYgKGVsZW1lbnROYW1lID09PSBcImdcIikge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwiZ1wiKTtcbiAgfVxuXG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEVsZW1lbnQsIGNoaWxkOiBDaGlsZEZ1bmNBcnJbXSkgPT4ge1xuICBjaGlsZC5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgZnVuYy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQoKSgpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmaXhFbGVtZW50LCBjb21wb3NlRWxlbWVudHMsIGNyZWF0ZUVsZW1lbnQgfTtcbiJdLCJuYW1lcyI6WyJjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSIsImZ1bmMiLCJjcmVhdGVFbGVtZW50IiwiZWxlbWVudE5hbWUiLCJjbGFzc05hbWVzIiwidGV4dENvbnRlbnQiLCJpZCIsImF0dHJpYnV0ZXMiLCJldmVudExpc3RlbmVycyIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiZm9yRWFjaCIsImNsYXNzTmFtZSIsImNsYXNzTGlzdCIsImFkZCIsImF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImV2ZW50TGlzdGVuZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmRDaGlsZCIsImVsZW1lbnQiLCJjaGVja0lmVHlwZUNoaWxkRnVuY0FyciIsImFyciIsImNvbXBvc2VFbGVtZW50cyIsImZha2VEaXYiLCJmYWtlIiwicmV0dXJuQ29udGFpbmVyIiwicmVkdWNlIiwiYWNjIiwiY3VyciIsIm1hcCIsInVuZGVmaW5lZCIsImh0bWxGdW5jIiwiZml4RWxlbWVudCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9