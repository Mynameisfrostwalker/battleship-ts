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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxFQUFNQyxJQUFOLEVBQWU7SUFDdkQsSUFBSVIsdUJBQXVCLENBQUNRLElBQUQsQ0FBM0IsRUFBbUM7TUFDakMsT0FBT0EsSUFBSSxDQUFDQyxHQUFMLENBQVMsVUFBQ2hDLElBQUQ7UUFBQSxPQUFVQSxJQUFJLENBQUNpQyxTQUFELENBQWQ7TUFBQSxDQUFULENBQVA7SUFDRDs7SUFFRCxPQUFPRixJQUFJLENBQUNELEdBQUQsQ0FBWDtFQUNELENBTnVCLEVBTXJCSixPQU5xQixDQUF4Qjs7RUFRQSxJQUFJUCxLQUFLLENBQUNDLE9BQU4sQ0FBY1EsZUFBZCxDQUFKLEVBQW9DO0lBQ2xDLE9BQU9BLGVBQWUsQ0FBQ0ksR0FBaEIsQ0FBb0IsVUFBQ0UsUUFBRCxFQUFjO01BQ3ZDLElBQU0xQixTQUFTLEdBQUcwQixRQUFRLEVBQTFCO01BRUEsT0FBTztRQUFBLE9BQU07VUFBQSxPQUFNMUIsU0FBTjtRQUFBLENBQU47TUFBQSxDQUFQO0lBQ0QsQ0FKTSxDQUFQO0VBS0Q7O0VBRUQsSUFBTUEsU0FBUyxHQUFHb0IsZUFBZSxFQUFqQztFQUNBLE9BQU8sQ0FBQztJQUFBLE9BQU07TUFBQSxPQUFNcEIsU0FBTjtJQUFBLENBQU47RUFBQSxDQUFELENBQVA7QUFDRCxDQXRCRDs7QUF3QkEsSUFBTTJCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLElBQUQsRUFBd0JsQixLQUF4QixFQUFrRDtFQUNuRUEsS0FBSyxDQUFDUixPQUFOLENBQWMsVUFBQ1YsSUFBRCxFQUFVO0lBQ3RCQSxJQUFJLENBQUNVLE9BQUwsQ0FBYSxVQUFDWSxPQUFELEVBQWE7TUFDeEJjLElBQUksQ0FBQ2YsV0FBTCxDQUFpQkMsT0FBTyxJQUF4QjtJQUNELENBRkQ7RUFHRCxDQUpEO0FBS0QsQ0FORCIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZG9tTWFuaXB1bGF0b3IudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ0eXBlIEhUTUxGdW5jID0gKCkgPT4gSFRNTEVsZW1lbnQ7XG50eXBlIENoaWxkID0gSFRNTEZ1bmMgfCBIVE1MRnVuY1tdO1xudHlwZSBDaGlsZEZ1bmMgPSAoY2hpbGQ/OiBDaGlsZCkgPT4gSFRNTEZ1bmM7XG50eXBlIENoaWxkRnVuY0FyciA9IENoaWxkRnVuY1tdO1xuXG5jb25zdCBjaGVja0lmRnVuY0NvbnRhaW5zRmFrZSA9IChcbiAgZnVuYzogQ2hpbGQgfCB7ICgpOiBIVE1MRGl2RWxlbWVudDsgZmFrZTogYm9vbGVhbiB9XG4pOiBmdW5jIGlzIHsgKCk6IEhUTUxEaXZFbGVtZW50OyBmYWtlOiBib29sZWFuIH0gPT4gXCJmYWtlXCIgaW4gZnVuYztcblxuY29uc3QgY3JlYXRlRWxlbWVudCA9IChcbiAgZWxlbWVudE5hbWU6IHN0cmluZyxcbiAgY2xhc3NOYW1lcz86IHN0cmluZ1tdIHwgbnVsbCxcbiAgdGV4dENvbnRlbnQ/OiBzdHJpbmcgfCBudWxsLFxuICBpZD86IHN0cmluZyB8IG51bGwsXG4gIGF0dHJpYnV0ZXM/OiBbc3RyaW5nLCBzdHJpbmddW10gfCBudWxsLFxuICBldmVudExpc3RlbmVycz86IFtzdHJpbmcsIChldmVudDogRXZlbnQpID0+IHZvaWRdW10gfCBudWxsXG4pID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50TmFtZSk7XG4gIGlmIChjbGFzc05hbWVzKSB7XG4gICAgY2xhc3NOYW1lcy5mb3JFYWNoKChjbGFzc05hbWUpID0+IHtcbiAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgY29udGFpbmVyLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gIH1cbiAgaWYgKGlkKSB7XG4gICAgY29udGFpbmVyLmlkID0gaWQ7XG4gIH1cbiAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICBhdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShhdHRyaWJ1dGVbMF0sIGF0dHJpYnV0ZVsxXSk7XG4gICAgfSk7XG4gIH1cbiAgaWYgKGV2ZW50TGlzdGVuZXJzKSB7XG4gICAgZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaCgoZXZlbnRMaXN0ZW5lcikgPT4ge1xuICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRMaXN0ZW5lclswXSwgZXZlbnRMaXN0ZW5lclsxXSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIChjaGlsZD86IENoaWxkIHwgeyAoKTogSFRNTERpdkVsZW1lbnQ7IGZha2U6IGJvb2xlYW4gfSkgPT4ge1xuICAgIGlmIChjaGlsZCkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgICBpZiAoY2hlY2tJZkZ1bmNDb250YWluc0Zha2UoY2hpbGQpKSB7XG4gICAgICAgICAgcmV0dXJuICgpID0+IGNvbnRhaW5lcjtcbiAgICAgICAgfVxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjaGlsZC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGVsZW1lbnQoKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gY29udGFpbmVyO1xuICB9O1xufTtcblxuY29uc3QgY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIgPSAoXG4gIGFycjogQ2hpbGRGdW5jIHwgQ2hpbGRGdW5jQXJyXG4pOiBhcnIgaXMgQ2hpbGRGdW5jQXJyID0+IEFycmF5LmlzQXJyYXkoYXJyKTtcblxuY29uc3QgY29tcG9zZUVsZW1lbnRzID0gKGFycjogKENoaWxkRnVuYyB8IENoaWxkRnVuY0FycilbXSk6IENoaWxkRnVuY0FyciA9PiB7XG4gIGNvbnN0IGZha2VEaXYgPSAoKSA9PiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmYWtlRGl2LmZha2UgPSB0cnVlO1xuXG4gIGNvbnN0IHJldHVybkNvbnRhaW5lciA9IGFyci5yZWR1Y2U8Q2hpbGQ+KChhY2MsIGN1cnIpID0+IHtcbiAgICBpZiAoY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIoY3VycikpIHtcbiAgICAgIHJldHVybiBjdXJyLm1hcCgoZnVuYykgPT4gZnVuYyh1bmRlZmluZWQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycihhY2MpO1xuICB9LCBmYWtlRGl2KTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShyZXR1cm5Db250YWluZXIpKSB7XG4gICAgcmV0dXJuIHJldHVybkNvbnRhaW5lci5tYXAoKGh0bWxGdW5jKSA9PiB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBodG1sRnVuYygpO1xuXG4gICAgICByZXR1cm4gKCkgPT4gKCkgPT4gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY29udGFpbmVyID0gcmV0dXJuQ29udGFpbmVyKCk7XG4gIHJldHVybiBbKCkgPT4gKCkgPT4gY29udGFpbmVyXTtcbn07XG5cbmNvbnN0IGZpeEVsZW1lbnQgPSAoYm9keTogSFRNTEJvZHlFbGVtZW50LCBjaGlsZDogQ2hpbGRGdW5jQXJyW10pID0+IHtcbiAgY2hpbGQuZm9yRWFjaCgoZnVuYykgPT4ge1xuICAgIGZ1bmMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KCkoKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZml4RWxlbWVudCwgY29tcG9zZUVsZW1lbnRzLCBjcmVhdGVFbGVtZW50IH07XG4iXSwibmFtZXMiOlsiY2hlY2tJZkZ1bmNDb250YWluc0Zha2UiLCJmdW5jIiwiY3JlYXRlRWxlbWVudCIsImVsZW1lbnROYW1lIiwiY2xhc3NOYW1lcyIsInRleHRDb250ZW50IiwiaWQiLCJhdHRyaWJ1dGVzIiwiZXZlbnRMaXN0ZW5lcnMiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImZvckVhY2giLCJjbGFzc05hbWUiLCJjbGFzc0xpc3QiLCJhZGQiLCJhdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJldmVudExpc3RlbmVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kQ2hpbGQiLCJlbGVtZW50IiwiY2hlY2tJZlR5cGVDaGlsZEZ1bmNBcnIiLCJhcnIiLCJjb21wb3NlRWxlbWVudHMiLCJmYWtlRGl2IiwiZmFrZSIsInJldHVybkNvbnRhaW5lciIsInJlZHVjZSIsImFjYyIsImN1cnIiLCJtYXAiLCJ1bmRlZmluZWQiLCJodG1sRnVuYyIsImZpeEVsZW1lbnQiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==