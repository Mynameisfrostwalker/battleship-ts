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
    var ship = shipFactory(shipName, axis);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQTJCQyxLQUEzQjtFQUFBLE9BQXFEO0lBQ3RFRCxNQUFNLEVBQU5BLE1BRHNFO0lBRXRFQyxLQUFLLEVBQUxBLEtBRnNFO0lBR3RFQyxRQUFRLEVBQUUsSUFINEQ7SUFJdEVDLEdBQUcsRUFBRSxJQUppRTtJQUt0RUMsS0FBSyxFQUFFLElBTCtEO0lBTXRFQyxNQUFNLEVBQUUsSUFOOEQ7SUFPdEVDLElBQUksRUFBRTtFQVBnRSxDQUFyRDtBQUFBLENBQW5COztBQVdBLGlFQUFlUCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUdBOztBQXNCQSxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBK0I7RUFDckQsSUFBTUMsU0FBaUIsR0FBRyxFQUExQjtFQUNBLElBQU1DLFdBQVcsR0FBRztJQUNsQkMsT0FBTyxFQUFFLENBRFM7SUFFbEJDLFVBQVUsRUFBRSxDQUZNO0lBR2xCQyxPQUFPLEVBQUUsQ0FIUztJQUlsQkMsU0FBUyxFQUFFLENBSk87SUFLbEJDLFNBQVMsRUFBRTtFQUxPLENBQXBCO0VBUUEsSUFBTUMsVUFBVSxHQUFHO0lBQ2pCZCxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBRFk7SUFFakJDLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRlU7SUFHakJDLE1BQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSFM7SUFJakJDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUw7RUFKVyxDQUFuQjtFQU9BLElBQUlZLFlBQW9CLEdBQUcsRUFBM0I7O0VBRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7SUFDOUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7TUFDOUJGLFlBQVksQ0FBQ0csSUFBYixDQUFrQnRCLGlEQUFVLENBQUMsQ0FBQ29CLENBQUQsRUFBSUMsQ0FBSixDQUFELEVBQVMsT0FBVCxDQUE1QjtJQUNEO0VBQ0Y7O0VBRUQsSUFBSVgsS0FBSyxLQUFLYSxTQUFkLEVBQXlCO0lBQUE7TUFDdkIsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQnRCLEtBRG9CLEVBRXBCdUIsR0FGb0IsRUFHcEJDLGFBSG9CLEVBSXBCQyxHQUpvQixFQUtqQjtRQUNILElBQU0xQixNQUFNLHNCQUFPa0IsWUFBWSxDQUFDTSxHQUFELENBQVosQ0FBa0J4QixNQUF6QixDQUFaOztRQUNBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWF5QixhQUFhLENBQUNDLEdBQUQsQ0FBYixDQUFtQixDQUFuQixDQUFiO1FBQ0ExQixNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWF5QixhQUFhLENBQUNDLEdBQUQsQ0FBYixDQUFtQixDQUFuQixDQUFiOztRQUNBLElBQUl6QixLQUFLLENBQUNELE1BQU4sQ0FBYSxDQUFiLE1BQW9CQSxNQUFNLENBQUMsQ0FBRCxDQUExQixJQUFpQ0MsS0FBSyxDQUFDRCxNQUFOLENBQWEsQ0FBYixNQUFvQkEsTUFBTSxDQUFDLENBQUQsQ0FBL0QsRUFBb0U7VUFDbEUsT0FBTyxJQUFQO1FBQ0Q7O1FBQ0QsT0FBTyxLQUFQO01BQ0QsQ0FiRDs7TUFlQSxJQUFNMkIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FDakJELEdBRGlCLEVBRWpCRSxHQUZpQjtRQUFBLE9BR2tCRixHQUFHLElBQUlFLEdBSHpCO01BQUEsQ0FBbkI7O01BaEJ1QiwyQkFxQmRULEVBckJjO1FBc0JyQixJQUFNVSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZWixVQUFaLENBQWI7O1FBdEJxQiw2QkF1QlpHLEVBdkJZO1VBd0JuQixJQUFNTSxHQUFHLEdBQUdHLElBQUksQ0FBQ1QsRUFBRCxDQUFoQjs7VUFDQSxJQUFJTyxVQUFVLENBQUNELEdBQUQsRUFBTVQsVUFBTixDQUFkLEVBQWlDO1lBQy9CLElBQU1jLElBQUksR0FBR2IsWUFBWSxDQUFDYyxJQUFiLENBQWtCLFVBQUMvQixLQUFEO2NBQUEsT0FDN0JzQixhQUFhLENBQUN0QixLQUFELEVBQVFrQixFQUFSLEVBQVdGLFVBQVgsRUFBdUJTLEdBQXZCLENBRGdCO1lBQUEsQ0FBbEIsQ0FBYjtZQUlBUixZQUFZLENBQUNDLEVBQUQsQ0FBWixDQUFnQk8sR0FBaEIsSUFBdUJLLElBQUksSUFBSSxJQUEvQjtVQUNEO1FBL0JrQjs7UUF1QnJCLEtBQUssSUFBSVgsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR1MsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ2IsRUFBQyxJQUFJLENBQXRDLEVBQXlDO1VBQUEsT0FBaENBLEVBQWdDO1FBU3hDO01BaENvQjs7TUFxQnZCLEtBQUssSUFBSUQsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0QsWUFBWSxDQUFDZSxNQUFqQyxFQUF5Q2QsRUFBQyxJQUFJLENBQTlDLEVBQWlEO1FBQUEsTUFBeENBLEVBQXdDO01BWWhEO0lBakNzQjtFQWtDeEIsQ0FsQ0QsTUFrQ087SUFDTEQsWUFBWSxHQUFHWCxpREFBUyxDQUFDRSxLQUFELENBQXhCO0VBQ0Q7O0VBRUQsSUFBTXlCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FDNUJsQyxNQUQ0QixFQUU1Qm1DLElBRjRCLEVBRzVCQyxRQUg0QixFQUl6QjtJQUNILElBQU1ILE1BQU0sR0FBR3RCLFdBQVcsQ0FBQ3lCLFFBQUQsQ0FBMUI7SUFDQSxJQUFJQyxJQUFJLEdBQUduQixZQUFZLENBQUNjLElBQWIsQ0FDVCxVQUFDSixHQUFEO01BQUEsT0FBU0EsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JBLE1BQU0sQ0FBQyxDQUFELENBQXhCLElBQStCNEIsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JBLE1BQU0sQ0FBQyxDQUFELENBQWhFO0lBQUEsQ0FEUyxDQUFYO0lBR0EsSUFBTXNDLEdBQVcsR0FBRyxFQUFwQjs7SUFFQSxJQUFJSCxJQUFJLEtBQUssWUFBYixFQUEyQjtNQUN6QixLQUFLLElBQUloQixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHYyxNQUFwQixFQUE0QmQsR0FBQyxJQUFJLENBQWpDLEVBQW9DO1FBQ2xDLElBQUlrQixJQUFKLEVBQVU7VUFDUkMsR0FBRyxDQUFDakIsSUFBSixDQUFTZ0IsSUFBVDtVQUNBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2pDLEtBQUwsSUFBY2tCLFNBQXJCO1FBQ0Q7TUFDRjtJQUNGLENBUEQsTUFPTyxJQUFJYSxJQUFJLEtBQUssVUFBYixFQUF5QjtNQUM5QixLQUFLLElBQUloQixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHYyxNQUFwQixFQUE0QmQsR0FBQyxJQUFJLENBQWpDLEVBQW9DO1FBQ2xDLElBQUlrQixJQUFKLEVBQVU7VUFDUkMsR0FBRyxDQUFDakIsSUFBSixDQUFTZ0IsSUFBVDtVQUNBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2hDLE1BQUwsSUFBZWlCLFNBQXRCO1FBQ0Q7TUFDRjtJQUNGOztJQUVELE9BQU9nQixHQUFHLENBQUNDLEtBQUosQ0FBVSxVQUFDWCxHQUFEO01BQUEsT0FBU0EsR0FBRyxDQUFDM0IsS0FBSixLQUFjLE9BQXZCO0lBQUEsQ0FBVixDQUFQO0VBQ0QsQ0E1QkQ7O0VBOEJBLElBQU11QyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUNoQkMsV0FEZ0IsRUFFaEJ6QyxNQUZnQixFQUdoQm1DLElBSGdCLEVBSWhCQyxRQUpnQixFQUtiO0lBQ0gsSUFBTU0sSUFBSSxHQUFHRCxXQUFXLENBQUNMLFFBQUQsRUFBV0QsSUFBWCxDQUF4Qjs7SUFDQSxJQUFJLENBQUNELHFCQUFxQixDQUFDbEMsTUFBRCxFQUFTbUMsSUFBVCxFQUFlQyxRQUFmLENBQTFCLEVBQW9EO01BQ2xEO0lBQ0Q7O0lBQ0QsSUFBSUQsSUFBSSxLQUFLLFlBQWIsRUFBMkI7TUFDekJqQixZQUFZLENBQUN5QixPQUFiLENBQXFCLFVBQUNOLElBQUQsRUFBVTtRQUM3QixJQUFJQSxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixNQUFtQkEsTUFBTSxDQUFDLENBQUQsQ0FBN0IsRUFBa0M7VUFDaEMsSUFDRXFDLElBQUksQ0FBQ3JDLE1BQUwsQ0FBWSxDQUFaLEtBQWtCQSxNQUFNLENBQUMsQ0FBRCxDQUF4QixJQUNBcUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosSUFBaUJBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVcsV0FBVyxDQUFDeUIsUUFBRCxDQUR4QyxJQUVBcEMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVyxXQUFXLENBQUN5QixRQUFELENBQXZCLElBQXFDLEVBSHZDLEVBSUU7WUFDQUMsSUFBSSxDQUFDcEMsS0FBTCxHQUFheUMsSUFBYjtZQUNBaEMsU0FBUyxDQUFDVyxJQUFWLENBQWVxQixJQUFmO1lBQ0FMLElBQUksQ0FBQ25DLFFBQUwsR0FBZ0JtQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixJQUFpQkEsTUFBTSxDQUFDLENBQUQsQ0FBdkM7VUFDRDtRQUNGO01BQ0YsQ0FaRDtJQWFELENBZEQsTUFjTztNQUNMa0IsWUFBWSxDQUFDeUIsT0FBYixDQUFxQixVQUFDTixJQUFELEVBQVU7UUFDN0IsSUFBSUEsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosTUFBbUJBLE1BQU0sQ0FBQyxDQUFELENBQTdCLEVBQWtDO1VBQ2hDLElBQ0VxQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixLQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBeEIsSUFDQXFDLElBQUksQ0FBQ3JDLE1BQUwsQ0FBWSxDQUFaLElBQWlCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlXLFdBQVcsQ0FBQ3lCLFFBQUQsQ0FEeEMsSUFFQXBDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVcsV0FBVyxDQUFDeUIsUUFBRCxDQUF2QixJQUFxQyxFQUh2QyxFQUlFO1lBQ0FDLElBQUksQ0FBQ3BDLEtBQUwsR0FBYXlDLElBQWI7WUFDQWhDLFNBQVMsQ0FBQ1csSUFBVixDQUFlcUIsSUFBZjtZQUNBTCxJQUFJLENBQUNuQyxRQUFMLEdBQWdCbUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosSUFBaUJBLE1BQU0sQ0FBQyxDQUFELENBQXZDO1VBQ0Q7UUFDRjtNQUNGLENBWkQ7SUFhRDtFQUNGLENBdkNEOztFQXlDQSxJQUFNNEMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDNUMsTUFBRCxFQUE4QjtJQUNsRCxJQUFNcUMsSUFBSSxHQUFHbkIsWUFBWSxDQUFDYyxJQUFiLENBQWtCLFVBQUNKLEdBQUQsRUFBUztNQUN0QyxJQUFJQSxHQUFHLENBQUM1QixNQUFKLENBQVcsQ0FBWCxNQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBeEIsSUFBK0I0QixHQUFHLENBQUM1QixNQUFKLENBQVcsQ0FBWCxNQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBM0QsRUFBZ0U7UUFDOUQsT0FBTyxJQUFQO01BQ0Q7O01BQ0QsT0FBTyxLQUFQO0lBQ0QsQ0FMWSxDQUFiOztJQU9BLElBQUksQ0FBQXFDLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFcEMsS0FBTixNQUFnQixPQUFwQixFQUE2QjtNQUMzQm9DLElBQUksQ0FBQ3BDLEtBQUwsR0FBYSxLQUFiO0lBQ0Q7O0lBRUQsSUFBSSxDQUFBb0MsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVwQyxLQUFOLE1BQWdCLEtBQWhCLElBQXlCLENBQUFvQyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRW5DLFFBQU4sTUFBbUIsSUFBaEQsRUFBc0Q7TUFDcERtQyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRXBDLEtBQU4sQ0FBWTRDLEdBQVosQ0FBZ0JSLElBQWhCLGFBQWdCQSxJQUFoQix1QkFBZ0JBLElBQUksQ0FBRW5DLFFBQXRCO0lBQ0Q7RUFDRixDQWZEOztFQWlCQSxJQUFNNEMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7SUFBQSxPQUFNcEMsU0FBUyxDQUFDNkIsS0FBVixDQUFnQixVQUFDRyxJQUFEO01BQUEsT0FBVUEsSUFBSSxDQUFDSyxNQUFMLEVBQVY7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBbkI7O0VBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQVQsQ0FFekJiLElBRnlCLEVBR3pCQyxRQUh5QixFQUl6QmEsUUFKeUIsRUFLTDtJQUFBOztJQUNwQixJQUFNWCxHQUF1QixHQUFHLEVBQWhDO0lBQ0EsS0FBSzdCLEtBQUwsQ0FBV2tDLE9BQVgsQ0FBbUIsVUFBQ04sSUFBRCxFQUFVO01BQzNCLElBQU1hLFNBQVMsR0FBRzFDLGVBQWUsQ0FBQyxLQUFJLENBQUNDLEtBQU4sQ0FBakM7TUFDQXlDLFNBQVMsQ0FBQ1YsU0FBVixDQUFvQlMsUUFBcEIsRUFBOEJaLElBQUksQ0FBQ3JDLE1BQW5DLEVBQTJDbUMsSUFBM0MsRUFBaURDLFFBQWpEO01BQ0EsSUFBTWUsTUFBTSxHQUFHRCxTQUFTLENBQUN6QyxLQUFWLENBQWdCdUIsSUFBaEIsQ0FDYixVQUFDSixHQUFEO1FBQUEsT0FDRUEsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JxQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixDQUFsQixJQUFvQzRCLEdBQUcsQ0FBQzVCLE1BQUosQ0FBVyxDQUFYLE1BQWtCcUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosQ0FEeEQ7TUFBQSxDQURhLENBQWY7O01BS0EsSUFDRSxDQUFBbUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLE1BQWtCLEtBQWxCLElBQ0EsQ0FBQWtELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFbEQsS0FBUixNQUFrQixPQURsQixJQUVBLENBQUFrRCxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRWxELEtBQVIsTUFBa0JxQixTQUhwQixFQUlFO1FBQ0EsSUFBSSxDQUFBNkIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLENBQWNtRCxJQUFkLE1BQXVCaEIsUUFBM0IsRUFBcUM7VUFDbkNFLEdBQUcsQ0FBQ2pCLElBQUosQ0FBU2dCLElBQUksQ0FBQ3JDLE1BQWQ7UUFDRDtNQUNGO0lBQ0YsQ0FqQkQ7SUFrQkEsT0FBT3NDLEdBQVA7RUFDRCxDQTFCRDs7RUE0QkEsSUFBTWUsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ2pCLFFBQUQsRUFBeUI7SUFDMUMxQixTQUFTLENBQUNpQyxPQUFWLENBQWtCLFVBQUNELElBQUQsRUFBT1ksR0FBUCxFQUFlO01BQy9CLElBQUlaLElBQUksQ0FBQ1UsSUFBTCxLQUFjaEIsUUFBbEIsRUFBNEI7UUFDMUIxQixTQUFTLENBQUM2QyxNQUFWLENBQWlCRCxHQUFqQixFQUFzQixDQUF0QjtNQUNEO0lBQ0YsQ0FKRDtJQUtBcEMsWUFBWSxDQUFDeUIsT0FBYixDQUFxQixVQUFDTixJQUFELEVBQVU7TUFDN0IsSUFBSUEsSUFBSSxDQUFDcEMsS0FBTCxLQUFlLEtBQWYsSUFBd0JvQyxJQUFJLENBQUNwQyxLQUFMLEtBQWUsT0FBM0MsRUFBb0Q7UUFDbEQsSUFBSW9DLElBQUksQ0FBQ3BDLEtBQUwsQ0FBV21ELElBQVgsS0FBb0JoQixRQUF4QixFQUFrQztVQUNoQ0MsSUFBSSxDQUFDcEMsS0FBTCxHQUFhLE9BQWI7VUFDQW9DLElBQUksQ0FBQ25DLFFBQUwsR0FBZ0IsSUFBaEI7UUFDRDtNQUNGO0lBQ0YsQ0FQRDtFQVFELENBZEQ7O0VBZ0JBLE9BQU87SUFDTE8sS0FBSyxFQUFFUyxZQURGO0lBRUxzQixTQUFTLEVBQVRBLFNBRks7SUFHTEksYUFBYSxFQUFiQSxhQUhLO0lBSUxFLFVBQVUsRUFBVkEsVUFKSztJQUtMRSxrQkFBa0IsRUFBbEJBLGtCQUxLO0lBTUxLLFVBQVUsRUFBVkE7RUFOSyxDQUFQO0FBUUQsQ0E3TUQ7O0FBZ05BLGlFQUFlN0MsZUFBZjs7Ozs7O1VDek9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIEJvYXJkVmFsdWVzID0gU2hpcCB8IFwiZW1wdHlcIiB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIC8qXG4gIFBvc2l0aW9uIGRlbm90ZXMgd2hhdCBhcmVhIG9mIHNoaXAgaXMgbG9jYXRlZCBvbiBjZWxsLiBcbiAgTnVsbCBtZWFucyBubyBzaGlwO1xuICAwIG1lYW5zIGZyb250IG9mIHNoaXA7XG4gICovXG4gIHBvc2l0aW9uOiBudWxsIHwgbnVtYmVyO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSwgdmFsdWU6IFwiZW1wdHlcIik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgcG9zaXRpb246IG51bGwsXG4gIHRvcDogbnVsbCxcbiAgcmlnaHQ6IG51bGwsXG4gIGJvdHRvbTogbnVsbCxcbiAgbGVmdDogbnVsbCxcbn0pO1xuXG5leHBvcnQgdHlwZSB7IENlbGwgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcywgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVDZWxsIGZyb20gXCIuL2NlbGxcIjtcblxudHlwZSBBeGlzID0gXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG5cbmludGVyZmFjZSBHYW1lYm9hcmQge1xuICBib2FyZDogQ2VsbFtdO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgcmVjZWl2ZUF0dGFjazogKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgYXJlQWxsU3VuazogKCkgPT4gdm9pZDtcbiAgZ2V0QXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICByZW1vdmVTaGlwOiAoc2hpcE5hbWU6IFNoaXBOYW1lcykgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlR2FtZWJvYXJkID0gKGJvYXJkPzogQ2VsbFtdKTogR2FtZWJvYXJkID0+IHtcbiAgY29uc3Qgc2hpcFN0b3JlOiBTaGlwW10gPSBbXTtcbiAgY29uc3Qgc2hpcExlbmd0aHMgPSB7XG4gICAgY2FycmllcjogNSxcbiAgICBiYXR0bGVzaGlwOiA0LFxuICAgIGNydWlzZXI6IDMsXG4gICAgc3VibWFyaW5lOiAzLFxuICAgIGRlc3Ryb3llcjogMixcbiAgfTtcblxuICBjb25zdCBkaXJlY3Rpb25zID0ge1xuICAgIHRvcDogWzAsIC0xXSxcbiAgICByaWdodDogWzEsIDBdLFxuICAgIGJvdHRvbTogWzAsIDFdLFxuICAgIGxlZnQ6IFstMSwgMF0sXG4gIH07XG5cbiAgbGV0IGdhbWVCb2FyZEFycjogQ2VsbFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSArPSAxKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaiArPSAxKSB7XG4gICAgICBnYW1lQm9hcmRBcnIucHVzaChjcmVhdGVDZWxsKFtpLCBqXSwgXCJlbXB0eVwiKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGJvYXJkID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBkb2VzTW92ZUV4aXN0ID0gKFxuICAgICAgdmFsdWU6IENlbGwsXG4gICAgICBudW06IG51bWJlcixcbiAgICAgIGRpcmVjdGlvbnNPYmo6IHR5cGVvZiBkaXJlY3Rpb25zLFxuICAgICAga2V5OiBrZXlvZiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICkgPT4ge1xuICAgICAgY29uc3QgY29vcmRzID0gWy4uLmdhbWVCb2FyZEFycltudW1dLmNvb3Jkc107XG4gICAgICBjb29yZHNbMF0gKz0gZGlyZWN0aW9uc09ialtrZXldWzBdO1xuICAgICAgY29vcmRzWzFdICs9IGRpcmVjdGlvbnNPYmpba2V5XVsxXTtcbiAgICAgIGlmICh2YWx1ZS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiB2YWx1ZS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hlY2tJZktleSA9IChcbiAgICAgIGtleTogc3RyaW5nLFxuICAgICAgb2JqOiB0eXBlb2YgZGlyZWN0aW9uc1xuICAgICk6IGtleSBpcyBrZXlvZiB0eXBlb2YgZGlyZWN0aW9ucyA9PiBrZXkgaW4gb2JqO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lQm9hcmRBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhkaXJlY3Rpb25zKTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5cy5sZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBrZXkgPSBrZXlzW2pdO1xuICAgICAgICBpZiAoY2hlY2tJZktleShrZXksIGRpcmVjdGlvbnMpKSB7XG4gICAgICAgICAgY29uc3QgbW92ZSA9IGdhbWVCb2FyZEFyci5maW5kKCh2YWx1ZSkgPT5cbiAgICAgICAgICAgIGRvZXNNb3ZlRXhpc3QodmFsdWUsIGksIGRpcmVjdGlvbnMsIGtleSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgZ2FtZUJvYXJkQXJyW2ldW2tleV0gPSBtb3ZlIHx8IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQXJyID0gY2xvbmVEZWVwKGJvYXJkKTtcbiAgfVxuXG4gIGNvbnN0IGNoZWNrSWZTaGlwTm90SW5DZWxscyA9IChcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBMZW5ndGhzW3NoaXBOYW1lXTtcbiAgICBsZXQgY2VsbCA9IGdhbWVCb2FyZEFyci5maW5kKFxuICAgICAgKG9iaikgPT4gb2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICk7XG4gICAgY29uc3QgYXJyOiBDZWxsW10gPSBbXTtcblxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLnJpZ2h0IHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXhpcyA9PT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjZWxsKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbCk7XG4gICAgICAgICAgY2VsbCA9IGNlbGwuYm90dG9tIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhcnIuZXZlcnkoKG9iaikgPT4gb2JqLnZhbHVlID09PSBcImVtcHR5XCIpO1xuICB9O1xuXG4gIGNvbnN0IHBsYWNlU2hpcCA9IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4ge1xuICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwTmFtZSwgYXhpcyk7XG4gICAgaWYgKCFjaGVja0lmU2hpcE5vdEluQ2VsbHMoY29vcmRzLCBheGlzLCBzaGlwTmFtZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGF4aXMgPT09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID49IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMF0gPCBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1swXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1swXSAtIGNvb3Jkc1swXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnYW1lQm9hcmRBcnIuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBpZiAoY2VsbC5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSkge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdID49IGNvb3Jkc1sxXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPCBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gJiZcbiAgICAgICAgICAgIGNvb3Jkc1sxXSArIHNoaXBMZW5ndGhzW3NoaXBOYW1lXSA8PSAxMFxuICAgICAgICAgICkge1xuICAgICAgICAgICAgY2VsbC52YWx1ZSA9IHNoaXA7XG4gICAgICAgICAgICBzaGlwU3RvcmUucHVzaChzaGlwKTtcbiAgICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBjZWxsLmNvb3Jkc1sxXSAtIGNvb3Jkc1sxXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGNvbnN0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZCgob2JqKSA9PiB7XG4gICAgICBpZiAob2JqLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIGlmIChjZWxsPy52YWx1ZSA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICBjZWxsLnZhbHVlID0gXCJoaXRcIjtcbiAgICB9XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgIT09IFwiaGl0XCIgJiYgY2VsbD8ucG9zaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNlbGw/LnZhbHVlLmhpdChjZWxsPy5wb3NpdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGFyZUFsbFN1bmsgPSAoKSA9PiBzaGlwU3RvcmUuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpO1xuXG4gIGNvbnN0IGdldEF2YWlsYWJsZUNvb3JkcyA9IGZ1bmN0aW9uIGdldEF2YWlsYWJsZUNvb3JkcyhcbiAgICB0aGlzOiBHYW1lYm9hcmQsXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICk6IFtudW1iZXIsIG51bWJlcl1bXSB7XG4gICAgY29uc3QgYXJyOiBbbnVtYmVyLCBudW1iZXJdW10gPSBbXTtcbiAgICB0aGlzLmJvYXJkLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCh0aGlzLmJvYXJkKTtcbiAgICAgIGdhbWVib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNlbGwuY29vcmRzLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBwbGFjZWQgPSBnYW1lYm9hcmQuYm9hcmQuZmluZChcbiAgICAgICAgKG9iaikgPT5cbiAgICAgICAgICBvYmouY29vcmRzWzBdID09PSBjZWxsLmNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjZWxsLmNvb3Jkc1sxXVxuICAgICAgKTtcblxuICAgICAgaWYgKFxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImhpdFwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSB1bmRlZmluZWRcbiAgICAgICkge1xuICAgICAgICBpZiAocGxhY2VkPy52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwuY29vcmRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlU2hpcCA9IChzaGlwTmFtZTogU2hpcE5hbWVzKSA9PiB7XG4gICAgc2hpcFN0b3JlLmZvckVhY2goKHNoaXAsIG5keCkgPT4ge1xuICAgICAgaWYgKHNoaXAubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgc2hpcFN0b3JlLnNwbGljZShuZHgsIDEpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGdhbWVCb2FyZEFyci5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoY2VsbC52YWx1ZSAhPT0gXCJoaXRcIiAmJiBjZWxsLnZhbHVlICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgaWYgKGNlbGwudmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBjZWxsLnZhbHVlID0gXCJlbXB0eVwiO1xuICAgICAgICAgIGNlbGwucG9zaXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZDogZ2FtZUJvYXJkQXJyLFxuICAgIHBsYWNlU2hpcCxcbiAgICByZWNlaXZlQXR0YWNrLFxuICAgIGFyZUFsbFN1bmssXG4gICAgZ2V0QXZhaWxhYmxlQ29vcmRzLFxuICAgIHJlbW92ZVNoaXAsXG4gIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlR2FtZWJvYXJkO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImdhbWVib2FyZFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXR0bGVzaGlwX3RzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBfdHNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6WyJjcmVhdGVDZWxsIiwiY29vcmRzIiwidmFsdWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsImNsb25lRGVlcCIsImNyZWF0ZUdhbWVib2FyZCIsImJvYXJkIiwic2hpcFN0b3JlIiwic2hpcExlbmd0aHMiLCJjYXJyaWVyIiwiYmF0dGxlc2hpcCIsImNydWlzZXIiLCJzdWJtYXJpbmUiLCJkZXN0cm95ZXIiLCJkaXJlY3Rpb25zIiwiZ2FtZUJvYXJkQXJyIiwiaSIsImoiLCJwdXNoIiwidW5kZWZpbmVkIiwiZG9lc01vdmVFeGlzdCIsIm51bSIsImRpcmVjdGlvbnNPYmoiLCJrZXkiLCJjaGVja0lmS2V5Iiwib2JqIiwia2V5cyIsIk9iamVjdCIsIm1vdmUiLCJmaW5kIiwibGVuZ3RoIiwiY2hlY2tJZlNoaXBOb3RJbkNlbGxzIiwiYXhpcyIsInNoaXBOYW1lIiwiY2VsbCIsImFyciIsImV2ZXJ5IiwicGxhY2VTaGlwIiwic2hpcEZhY3RvcnkiLCJzaGlwIiwiZm9yRWFjaCIsInJlY2VpdmVBdHRhY2siLCJoaXQiLCJhcmVBbGxTdW5rIiwiaXNTdW5rIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwic2hpcEZ1bmMiLCJnYW1lYm9hcmQiLCJwbGFjZWQiLCJuYW1lIiwicmVtb3ZlU2hpcCIsIm5keCIsInNwbGljZSJdLCJzb3VyY2VSb290IjoiIn0=