/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/cell.ts":
/*!*****************************!*\
  !*** ./src/scripts/cell.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/scripts/gameboard.ts":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cell */ "./src/scripts/cell.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var createGameboard = function createGameboard(board) {
  var shipStore = [];
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };
  var directions = {
    top: [0, -1],
    right: [1, 0],
    bottom: [0, 1],
    left: [-1, 0]
  };
  var gameBoardArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      gameBoardArr.push((0,_cell__WEBPACK_IMPORTED_MODULE_1__["default"])([i, j], "empty"));
    }
  }

  if (board === undefined) {
    (function () {
      var doesMoveExist = function doesMoveExist(value, num, directionsObj, key) {
        var coords = _toConsumableArray(gameBoardArr[num].coords);

        coords[0] += directionsObj[key][0];
        coords[1] += directionsObj[key][1];

        if (value.coords[0] === coords[0] && value.coords[1] === coords[1]) {
          return true;
        }

        return false;
      };

      var checkIfKey = function checkIfKey(key, obj) {
        return key in obj;
      };

      var _loop = function _loop(_i) {
        var keys = Object.keys(directions);

        var _loop2 = function _loop2(_j) {
          var key = keys[_j];

          if (checkIfKey(key, directions)) {
            var move = gameBoardArr.find(function (value) {
              return doesMoveExist(value, _i, directions, key);
            });
            gameBoardArr[_i][key] = move || null;
          }
        };

        for (var _j = 0; _j < keys.length; _j += 1) {
          _loop2(_j);
        }
      };

      for (var _i = 0; _i < gameBoardArr.length; _i += 1) {
        _loop(_i);
      }
    })();
  } else {
    gameBoardArr = (0,lodash__WEBPACK_IMPORTED_MODULE_0__.cloneDeep)(board);
  }

  var checkIfShipNotInCells = function checkIfShipNotInCells(coords, axis, shipName) {
    var length = shipLengths[shipName];
    var cell = gameBoardArr.find(function (obj) {
      return obj.coords[0] === coords[0] && obj.coords[1] === coords[1];
    });
    var arr = [];

    if (axis === "horizontal") {
      for (var _i2 = 0; _i2 < length; _i2 += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.right || undefined;
        }
      }
    } else if (axis === "vertical") {
      for (var _i3 = 0; _i3 < length; _i3 += 1) {
        if (cell) {
          arr.push(cell);
          cell = cell.bottom || undefined;
        }
      }
    }

    return arr.every(function (obj) {
      return obj.value === "empty";
    });
  };

  var placeShip = function placeShip(shipFactory, coords, axis, shipName) {
    var ship = shipFactory(shipName);

    if (!checkIfShipNotInCells(coords, axis, shipName)) {
      return;
    }

    if (axis === "horizontal") {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[1] === coords[1]) {
          if (cell.coords[0] >= coords[0] && cell.coords[0] < coords[0] + shipLengths[shipName] && coords[0] + shipLengths[shipName] <= 10) {
            cell.value = ship;
            shipStore.push(ship);
            cell.position = cell.coords[0] - coords[0];
          }
        }
      });
    } else {
      gameBoardArr.forEach(function (cell) {
        if (cell.coords[0] === coords[0]) {
          if (cell.coords[1] >= coords[1] && cell.coords[1] < coords[1] + shipLengths[shipName] && coords[1] + shipLengths[shipName] <= 10) {
            cell.value = ship;
            shipStore.push(ship);
            cell.position = cell.coords[1] - coords[1];
          }
        }
      });
    }
  };

  var receiveAttack = function receiveAttack(coords) {
    var cell = gameBoardArr.find(function (obj) {
      if (obj.coords[0] === coords[0] && obj.coords[1] === coords[1]) {
        return true;
      }

      return false;
    });

    if ((cell === null || cell === void 0 ? void 0 : cell.value) === "empty") {
      cell.value = "hit";
    }

    if ((cell === null || cell === void 0 ? void 0 : cell.value) !== "hit" && (cell === null || cell === void 0 ? void 0 : cell.position) !== null) {
      cell === null || cell === void 0 ? void 0 : cell.value.hit(cell === null || cell === void 0 ? void 0 : cell.position);
    }
  };

  var areAllSunk = function areAllSunk() {
    return shipStore.every(function (ship) {
      return ship.isSunk();
    });
  };

  var getAvailableCoords = function getAvailableCoords(axis, shipName, shipFunc) {
    var _this = this;

    var arr = [];
    this.board.forEach(function (cell) {
      var gameboard = createGameboard(_this.board);
      gameboard.placeShip(shipFunc, cell.coords, axis, shipName);
      var placed = gameboard.board.find(function (obj) {
        return obj.coords[0] === cell.coords[0] && obj.coords[1] === cell.coords[1];
      });

      if ((placed === null || placed === void 0 ? void 0 : placed.value) !== "hit" && (placed === null || placed === void 0 ? void 0 : placed.value) !== "empty" && (placed === null || placed === void 0 ? void 0 : placed.value) !== undefined) {
        if ((placed === null || placed === void 0 ? void 0 : placed.value.name) === shipName) {
          arr.push(cell.coords);
        }
      }
    });
    return arr;
  };

  var removeShip = function removeShip(shipName) {
    shipStore.forEach(function (ship, ndx) {
      if (ship.name === shipName) {
        shipStore.splice(ndx, 1);
      }
    });
    gameBoardArr.forEach(function (cell) {
      if (cell.value !== "hit" && cell.value !== "empty") {
        if (cell.value.name === shipName) {
          cell.value = "empty";
          cell.position = null;
        }
      }
    });
  };

  return {
    board: gameBoardArr,
    placeShip: placeShip,
    receiveAttack: receiveAttack,
    areAllSunk: areAllSunk,
    getAvailableCoords: getAvailableCoords,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createGameboard);

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gameboard": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_lodash_js"], () => (__webpack_require__("./src/scripts/gameboard.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvY2VsbC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxudHlwZSBCb2FyZFZhbHVlcyA9IFNoaXAgfCBcImVtcHR5XCIgfCBcImhpdFwiO1xuXG5pbnRlcmZhY2UgQ2VsbCB7XG4gIHJlYWRvbmx5IGNvb3JkczogW251bWJlciwgbnVtYmVyXTtcbiAgdmFsdWU6IEJvYXJkVmFsdWVzO1xuICAvKlxuICBQb3NpdGlvbiBkZW5vdGVzIHdoYXQgYXJlYSBvZiBzaGlwIGlzIGxvY2F0ZWQgb24gY2VsbC4gXG4gIE51bGwgbWVhbnMgbm8gc2hpcDtcbiAgMCBtZWFucyBmcm9udCBvZiBzaGlwO1xuICAqL1xuICBwb3NpdGlvbjogbnVsbCB8IG51bWJlcjtcbiAgdG9wOiBDZWxsIHwgbnVsbDtcbiAgcmlnaHQ6IENlbGwgfCBudWxsO1xuICBib3R0b206IENlbGwgfCBudWxsO1xuICBsZWZ0OiBDZWxsIHwgbnVsbDtcbn1cblxuY29uc3QgY3JlYXRlQ2VsbCA9IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sIHZhbHVlOiBcImVtcHR5XCIpOiBDZWxsID0+ICh7XG4gIGNvb3JkcyxcbiAgdmFsdWUsXG4gIHBvc2l0aW9uOiBudWxsLFxuICB0b3A6IG51bGwsXG4gIHJpZ2h0OiBudWxsLFxuICBib3R0b206IG51bGwsXG4gIGxlZnQ6IG51bGwsXG59KTtcblxuZXhwb3J0IHR5cGUgeyBDZWxsIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDZWxsO1xuIiwiaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwTmFtZXMsIFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlQ2VsbCBmcm9tIFwiLi9jZWxsXCI7XG5cbnR5cGUgQXhpcyA9IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuXG5pbnRlcmZhY2UgR2FtZWJvYXJkIHtcbiAgYm9hcmQ6IENlbGxbXTtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZhY3Rvcnk6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIHJlY2VpdmVBdHRhY2s6IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHZvaWQ7XG4gIGFyZUFsbFN1bms6ICgpID0+IHZvaWQ7XG4gIGdldEF2YWlsYWJsZUNvb3JkczogKFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcykgPT4gU2hpcFxuICApID0+IFtudW1iZXIsIG51bWJlcl1bXTtcbiAgcmVtb3ZlU2hpcDogKHNoaXBOYW1lOiBTaGlwTmFtZXMpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChib2FyZD86IENlbGxbXSk6IEdhbWVib2FyZCA9PiB7XG4gIGNvbnN0IHNoaXBTdG9yZTogU2hpcFtdID0gW107XG4gIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDIsXG4gIH07XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IHtcbiAgICB0b3A6IFswLCAtMV0sXG4gICAgcmlnaHQ6IFsxLCAwXSxcbiAgICBib3R0b206IFswLCAxXSxcbiAgICBsZWZ0OiBbLTEsIDBdLFxuICB9O1xuXG4gIGxldCBnYW1lQm9hcmRBcnI6IENlbGxbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgZ2FtZUJvYXJkQXJyLnB1c2goY3JlYXRlQ2VsbChbaSwgal0sIFwiZW1wdHlcIikpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG9lc01vdmVFeGlzdCA9IChcbiAgICAgIHZhbHVlOiBDZWxsLFxuICAgICAgbnVtOiBudW1iZXIsXG4gICAgICBkaXJlY3Rpb25zT2JqOiB0eXBlb2YgZGlyZWN0aW9ucyxcbiAgICAgIGtleToga2V5b2YgdHlwZW9mIGRpcmVjdGlvbnNcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IFsuLi5nYW1lQm9hcmRBcnJbbnVtXS5jb29yZHNdO1xuICAgICAgY29vcmRzWzBdICs9IGRpcmVjdGlvbnNPYmpba2V5XVswXTtcbiAgICAgIGNvb3Jkc1sxXSArPSBkaXJlY3Rpb25zT2JqW2tleV1bMV07XG4gICAgICBpZiAodmFsdWUuY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWUuY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrSWZLZXkgPSAoXG4gICAgICBrZXk6IHN0cmluZyxcbiAgICAgIG9iajogdHlwZW9mIGRpcmVjdGlvbnNcbiAgICApOiBrZXkgaXMga2V5b2YgdHlwZW9mIGRpcmVjdGlvbnMgPT4ga2V5IGluIG9iajtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGlyZWN0aW9ucyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgaWYgKGNoZWNrSWZLZXkoa2V5LCBkaXJlY3Rpb25zKSkge1xuICAgICAgICAgIGNvbnN0IG1vdmUgPSBnYW1lQm9hcmRBcnIuZmluZCgodmFsdWUpID0+XG4gICAgICAgICAgICBkb2VzTW92ZUV4aXN0KHZhbHVlLCBpLCBkaXJlY3Rpb25zLCBrZXkpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGdhbWVCb2FyZEFycltpXVtrZXldID0gbW92ZSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdhbWVCb2FyZEFyciA9IGNsb25lRGVlcChib2FyZCk7XG4gIH1cblxuICBjb25zdCBjaGVja0lmU2hpcE5vdEluQ2VsbHMgPSAoXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwTGVuZ3Roc1tzaGlwTmFtZV07XG4gICAgbGV0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZChcbiAgICAgIChvYmopID0+IG9iai5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICApO1xuICAgIGNvbnN0IGFycjogQ2VsbFtdID0gW107XG5cbiAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsKTtcbiAgICAgICAgICBjZWxsID0gY2VsbC5yaWdodCB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLmJvdHRvbSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmV2ZXJ5KChvYmopID0+IG9iai52YWx1ZSA9PT0gXCJlbXB0eVwiKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcEZhY3Rvcnk6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcE5hbWUpO1xuICAgIGlmICghY2hlY2tJZlNoaXBOb3RJbkNlbGxzKGNvb3JkcywgYXhpcywgc2hpcE5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA+PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdIDwgY29vcmRzWzBdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMF0gLSBjb29yZHNbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzBdID09PSBjb29yZHNbMF0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA+PSBjb29yZHNbMV0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdIDwgY29vcmRzWzFdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMV0gLSBjb29yZHNbMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBjb25zdCBjZWxsID0gZ2FtZUJvYXJkQXJyLmZpbmQoKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgPT09IFwiZW1wdHlcIikge1xuICAgICAgY2VsbC52YWx1ZSA9IFwiaGl0XCI7XG4gICAgfVxuXG4gICAgaWYgKGNlbGw/LnZhbHVlICE9PSBcImhpdFwiICYmIGNlbGw/LnBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICBjZWxsPy52YWx1ZS5oaXQoY2VsbD8ucG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT4gc2hpcFN0b3JlLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCBnZXRBdmFpbGFibGVDb29yZHMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVDb29yZHMoXG4gICAgdGhpczogR2FtZWJvYXJkLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcykgPT4gU2hpcFxuICApOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgIGNvbnN0IGFycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjZWxsLmNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgcGxhY2VkID0gZ2FtZWJvYXJkLmJvYXJkLmZpbmQoXG4gICAgICAgIChvYmopID0+XG4gICAgICAgICAgb2JqLmNvb3Jkc1swXSA9PT0gY2VsbC5jb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY2VsbC5jb29yZHNbMV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlZD8udmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsLmNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIHNoaXBTdG9yZS5mb3JFYWNoKChzaGlwLCBuZHgpID0+IHtcbiAgICAgIGlmIChzaGlwLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgIHNoaXBTdG9yZS5zcGxpY2UobmR4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgaWYgKGNlbGwudmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbC52YWx1ZSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIGlmIChjZWxsLnZhbHVlLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgY2VsbC52YWx1ZSA9IFwiZW1wdHlcIjtcbiAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGdhbWVCb2FyZEFycixcbiAgICBwbGFjZVNoaXAsXG4gICAgcmVjZWl2ZUF0dGFjayxcbiAgICBhcmVBbGxTdW5rLFxuICAgIGdldEF2YWlsYWJsZUNvb3JkcyxcbiAgICByZW1vdmVTaGlwLFxuICB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUdhbWVib2FyZDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJnYW1lYm9hcmRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rYmF0dGxlc2hpcF90c1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXR0bGVzaGlwX3RzXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19sb2Rhc2hfbG9kYXNoX2pzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3NjcmlwdHMvZ2FtZWJvYXJkLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY3JlYXRlQ2VsbCIsImNvb3JkcyIsInZhbHVlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJjbG9uZURlZXAiLCJjcmVhdGVHYW1lYm9hcmQiLCJib2FyZCIsInNoaXBTdG9yZSIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwiZGlyZWN0aW9ucyIsImdhbWVCb2FyZEFyciIsImkiLCJqIiwicHVzaCIsInVuZGVmaW5lZCIsImRvZXNNb3ZlRXhpc3QiLCJudW0iLCJkaXJlY3Rpb25zT2JqIiwia2V5IiwiY2hlY2tJZktleSIsIm9iaiIsImtleXMiLCJPYmplY3QiLCJtb3ZlIiwiZmluZCIsImxlbmd0aCIsImNoZWNrSWZTaGlwTm90SW5DZWxscyIsImF4aXMiLCJzaGlwTmFtZSIsImNlbGwiLCJhcnIiLCJldmVyeSIsInBsYWNlU2hpcCIsInNoaXBGYWN0b3J5Iiwic2hpcCIsImZvckVhY2giLCJyZWNlaXZlQXR0YWNrIiwiaGl0IiwiYXJlQWxsU3VuayIsImlzU3VuayIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNoaXBGdW5jIiwiZ2FtZWJvYXJkIiwicGxhY2VkIiwibmFtZSIsInJlbW92ZVNoaXAiLCJuZHgiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9