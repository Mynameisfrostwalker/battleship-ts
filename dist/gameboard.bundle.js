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

  var getAIAvailableCoords = function getAIAvailableCoords(axis, shipName, shipFunc) {
    var _this2 = this;

    var arr = [];
    this.board.forEach(function (cell) {
      var _cell$left, _cell$right, _cell$top, _cell$top2, _cell$top2$right, _cell$top3, _cell$top3$left, _cell$bottom, _cell$bottom$right, _cell$bottom2, _cell$bottom2$left, _cell$bottom3;

      if (typeof ((_cell$left = cell.left) === null || _cell$left === void 0 ? void 0 : _cell$left.position) === "number" || typeof ((_cell$right = cell.right) === null || _cell$right === void 0 ? void 0 : _cell$right.position) === "number" || typeof ((_cell$top = cell.top) === null || _cell$top === void 0 ? void 0 : _cell$top.position) === "number" || typeof ((_cell$top2 = cell.top) === null || _cell$top2 === void 0 ? void 0 : (_cell$top2$right = _cell$top2.right) === null || _cell$top2$right === void 0 ? void 0 : _cell$top2$right.position) === "number" || typeof ((_cell$top3 = cell.top) === null || _cell$top3 === void 0 ? void 0 : (_cell$top3$left = _cell$top3.left) === null || _cell$top3$left === void 0 ? void 0 : _cell$top3$left.position) === "number" || typeof ((_cell$bottom = cell.bottom) === null || _cell$bottom === void 0 ? void 0 : (_cell$bottom$right = _cell$bottom.right) === null || _cell$bottom$right === void 0 ? void 0 : _cell$bottom$right.position) === "number" || typeof ((_cell$bottom2 = cell.bottom) === null || _cell$bottom2 === void 0 ? void 0 : (_cell$bottom2$left = _cell$bottom2.left) === null || _cell$bottom2$left === void 0 ? void 0 : _cell$bottom2$left.position) === "number" || typeof ((_cell$bottom3 = cell.bottom) === null || _cell$bottom3 === void 0 ? void 0 : _cell$bottom3.position) === "number") {
        return;
      }

      var gameboard = createGameboard(_this2.board);
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
    getAIAvailableCoords: getAIAvailableCoords,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQW1CQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxNQUFELEVBQTJCQyxLQUEzQjtFQUFBLE9BQXFEO0lBQ3RFRCxNQUFNLEVBQU5BLE1BRHNFO0lBRXRFQyxLQUFLLEVBQUxBLEtBRnNFO0lBR3RFQyxRQUFRLEVBQUUsSUFINEQ7SUFJdEVDLEdBQUcsRUFBRSxJQUppRTtJQUt0RUMsS0FBSyxFQUFFLElBTCtEO0lBTXRFQyxNQUFNLEVBQUUsSUFOOEQ7SUFPdEVDLElBQUksRUFBRTtFQVBnRSxDQUFyRDtBQUFBLENBQW5COztBQVdBLGlFQUFlUCxVQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUdBOztBQTJCQSxJQUFNUyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUNDLEtBQUQsRUFBK0I7RUFDckQsSUFBTUMsU0FBaUIsR0FBRyxFQUExQjtFQUNBLElBQU1DLFdBQVcsR0FBRztJQUNsQkMsT0FBTyxFQUFFLENBRFM7SUFFbEJDLFVBQVUsRUFBRSxDQUZNO0lBR2xCQyxPQUFPLEVBQUUsQ0FIUztJQUlsQkMsU0FBUyxFQUFFLENBSk87SUFLbEJDLFNBQVMsRUFBRTtFQUxPLENBQXBCO0VBUUEsSUFBTUMsVUFBVSxHQUFHO0lBQ2pCZCxHQUFHLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBQyxDQUFMLENBRFk7SUFFakJDLEtBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRlU7SUFHakJDLE1BQU0sRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBSFM7SUFJakJDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBRixFQUFLLENBQUw7RUFKVyxDQUFuQjtFQU9BLElBQUlZLFlBQW9CLEdBQUcsRUFBM0I7O0VBRUEsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7SUFDOUIsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEVBQXBCLEVBQXdCQSxDQUFDLElBQUksQ0FBN0IsRUFBZ0M7TUFDOUJGLFlBQVksQ0FBQ0csSUFBYixDQUFrQnRCLGlEQUFVLENBQUMsQ0FBQ29CLENBQUQsRUFBSUMsQ0FBSixDQUFELEVBQVMsT0FBVCxDQUE1QjtJQUNEO0VBQ0Y7O0VBRUQsSUFBSVgsS0FBSyxLQUFLYSxTQUFkLEVBQXlCO0lBQUE7TUFDdkIsSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQnRCLEtBRG9CLEVBRXBCdUIsR0FGb0IsRUFHcEJDLGFBSG9CLEVBSXBCQyxHQUpvQixFQUtqQjtRQUNILElBQU0xQixNQUFNLHNCQUFPa0IsWUFBWSxDQUFDTSxHQUFELENBQVosQ0FBa0J4QixNQUF6QixDQUFaOztRQUNBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWF5QixhQUFhLENBQUNDLEdBQUQsQ0FBYixDQUFtQixDQUFuQixDQUFiO1FBQ0ExQixNQUFNLENBQUMsQ0FBRCxDQUFOLElBQWF5QixhQUFhLENBQUNDLEdBQUQsQ0FBYixDQUFtQixDQUFuQixDQUFiOztRQUNBLElBQUl6QixLQUFLLENBQUNELE1BQU4sQ0FBYSxDQUFiLE1BQW9CQSxNQUFNLENBQUMsQ0FBRCxDQUExQixJQUFpQ0MsS0FBSyxDQUFDRCxNQUFOLENBQWEsQ0FBYixNQUFvQkEsTUFBTSxDQUFDLENBQUQsQ0FBL0QsRUFBb0U7VUFDbEUsT0FBTyxJQUFQO1FBQ0Q7O1FBQ0QsT0FBTyxLQUFQO01BQ0QsQ0FiRDs7TUFlQSxJQUFNMkIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FDakJELEdBRGlCLEVBRWpCRSxHQUZpQjtRQUFBLE9BR2tCRixHQUFHLElBQUlFLEdBSHpCO01BQUEsQ0FBbkI7O01BaEJ1QiwyQkFxQmRULEVBckJjO1FBc0JyQixJQUFNVSxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0QsSUFBUCxDQUFZWixVQUFaLENBQWI7O1FBdEJxQiw2QkF1QlpHLEVBdkJZO1VBd0JuQixJQUFNTSxHQUFHLEdBQUdHLElBQUksQ0FBQ1QsRUFBRCxDQUFoQjs7VUFDQSxJQUFJTyxVQUFVLENBQUNELEdBQUQsRUFBTVQsVUFBTixDQUFkLEVBQWlDO1lBQy9CLElBQU1jLElBQUksR0FBR2IsWUFBWSxDQUFDYyxJQUFiLENBQWtCLFVBQUMvQixLQUFEO2NBQUEsT0FDN0JzQixhQUFhLENBQUN0QixLQUFELEVBQVFrQixFQUFSLEVBQVdGLFVBQVgsRUFBdUJTLEdBQXZCLENBRGdCO1lBQUEsQ0FBbEIsQ0FBYjtZQUlBUixZQUFZLENBQUNDLEVBQUQsQ0FBWixDQUFnQk8sR0FBaEIsSUFBdUJLLElBQUksSUFBSSxJQUEvQjtVQUNEO1FBL0JrQjs7UUF1QnJCLEtBQUssSUFBSVgsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR1MsSUFBSSxDQUFDSSxNQUF6QixFQUFpQ2IsRUFBQyxJQUFJLENBQXRDLEVBQXlDO1VBQUEsT0FBaENBLEVBQWdDO1FBU3hDO01BaENvQjs7TUFxQnZCLEtBQUssSUFBSUQsRUFBQyxHQUFHLENBQWIsRUFBZ0JBLEVBQUMsR0FBR0QsWUFBWSxDQUFDZSxNQUFqQyxFQUF5Q2QsRUFBQyxJQUFJLENBQTlDLEVBQWlEO1FBQUEsTUFBeENBLEVBQXdDO01BWWhEO0lBakNzQjtFQWtDeEIsQ0FsQ0QsTUFrQ087SUFDTEQsWUFBWSxHQUFHWCxpREFBUyxDQUFDRSxLQUFELENBQXhCO0VBQ0Q7O0VBRUQsSUFBTXlCLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FDNUJsQyxNQUQ0QixFQUU1Qm1DLElBRjRCLEVBRzVCQyxRQUg0QixFQUl6QjtJQUNILElBQU1ILE1BQU0sR0FBR3RCLFdBQVcsQ0FBQ3lCLFFBQUQsQ0FBMUI7SUFDQSxJQUFJQyxJQUFJLEdBQUduQixZQUFZLENBQUNjLElBQWIsQ0FDVCxVQUFDSixHQUFEO01BQUEsT0FBU0EsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JBLE1BQU0sQ0FBQyxDQUFELENBQXhCLElBQStCNEIsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JBLE1BQU0sQ0FBQyxDQUFELENBQWhFO0lBQUEsQ0FEUyxDQUFYO0lBR0EsSUFBTXNDLEdBQVcsR0FBRyxFQUFwQjs7SUFFQSxJQUFJSCxJQUFJLEtBQUssWUFBYixFQUEyQjtNQUN6QixLQUFLLElBQUloQixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHYyxNQUFwQixFQUE0QmQsR0FBQyxJQUFJLENBQWpDLEVBQW9DO1FBQ2xDLElBQUlrQixJQUFKLEVBQVU7VUFDUkMsR0FBRyxDQUFDakIsSUFBSixDQUFTZ0IsSUFBVDtVQUNBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2pDLEtBQUwsSUFBY2tCLFNBQXJCO1FBQ0Q7TUFDRjtJQUNGLENBUEQsTUFPTyxJQUFJYSxJQUFJLEtBQUssVUFBYixFQUF5QjtNQUM5QixLQUFLLElBQUloQixHQUFDLEdBQUcsQ0FBYixFQUFnQkEsR0FBQyxHQUFHYyxNQUFwQixFQUE0QmQsR0FBQyxJQUFJLENBQWpDLEVBQW9DO1FBQ2xDLElBQUlrQixJQUFKLEVBQVU7VUFDUkMsR0FBRyxDQUFDakIsSUFBSixDQUFTZ0IsSUFBVDtVQUNBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ2hDLE1BQUwsSUFBZWlCLFNBQXRCO1FBQ0Q7TUFDRjtJQUNGOztJQUVELE9BQU9nQixHQUFHLENBQUNDLEtBQUosQ0FBVSxVQUFDWCxHQUFEO01BQUEsT0FBU0EsR0FBRyxDQUFDM0IsS0FBSixLQUFjLE9BQXZCO0lBQUEsQ0FBVixDQUFQO0VBQ0QsQ0E1QkQ7O0VBOEJBLElBQU11QyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUNoQkMsV0FEZ0IsRUFFaEJ6QyxNQUZnQixFQUdoQm1DLElBSGdCLEVBSWhCQyxRQUpnQixFQUtiO0lBQ0gsSUFBTU0sSUFBSSxHQUFHRCxXQUFXLENBQUNMLFFBQUQsRUFBV0QsSUFBWCxDQUF4Qjs7SUFDQSxJQUFJLENBQUNELHFCQUFxQixDQUFDbEMsTUFBRCxFQUFTbUMsSUFBVCxFQUFlQyxRQUFmLENBQTFCLEVBQW9EO01BQ2xEO0lBQ0Q7O0lBQ0QsSUFBSUQsSUFBSSxLQUFLLFlBQWIsRUFBMkI7TUFDekJqQixZQUFZLENBQUN5QixPQUFiLENBQXFCLFVBQUNOLElBQUQsRUFBVTtRQUM3QixJQUFJQSxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixNQUFtQkEsTUFBTSxDQUFDLENBQUQsQ0FBN0IsRUFBa0M7VUFDaEMsSUFDRXFDLElBQUksQ0FBQ3JDLE1BQUwsQ0FBWSxDQUFaLEtBQWtCQSxNQUFNLENBQUMsQ0FBRCxDQUF4QixJQUNBcUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosSUFBaUJBLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVcsV0FBVyxDQUFDeUIsUUFBRCxDQUR4QyxJQUVBcEMsTUFBTSxDQUFDLENBQUQsQ0FBTixHQUFZVyxXQUFXLENBQUN5QixRQUFELENBQXZCLElBQXFDLEVBSHZDLEVBSUU7WUFDQUMsSUFBSSxDQUFDcEMsS0FBTCxHQUFheUMsSUFBYjtZQUNBaEMsU0FBUyxDQUFDVyxJQUFWLENBQWVxQixJQUFmO1lBQ0FMLElBQUksQ0FBQ25DLFFBQUwsR0FBZ0JtQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixJQUFpQkEsTUFBTSxDQUFDLENBQUQsQ0FBdkM7VUFDRDtRQUNGO01BQ0YsQ0FaRDtJQWFELENBZEQsTUFjTztNQUNMa0IsWUFBWSxDQUFDeUIsT0FBYixDQUFxQixVQUFDTixJQUFELEVBQVU7UUFDN0IsSUFBSUEsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosTUFBbUJBLE1BQU0sQ0FBQyxDQUFELENBQTdCLEVBQWtDO1VBQ2hDLElBQ0VxQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixLQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBeEIsSUFDQXFDLElBQUksQ0FBQ3JDLE1BQUwsQ0FBWSxDQUFaLElBQWlCQSxNQUFNLENBQUMsQ0FBRCxDQUFOLEdBQVlXLFdBQVcsQ0FBQ3lCLFFBQUQsQ0FEeEMsSUFFQXBDLE1BQU0sQ0FBQyxDQUFELENBQU4sR0FBWVcsV0FBVyxDQUFDeUIsUUFBRCxDQUF2QixJQUFxQyxFQUh2QyxFQUlFO1lBQ0FDLElBQUksQ0FBQ3BDLEtBQUwsR0FBYXlDLElBQWI7WUFDQWhDLFNBQVMsQ0FBQ1csSUFBVixDQUFlcUIsSUFBZjtZQUNBTCxJQUFJLENBQUNuQyxRQUFMLEdBQWdCbUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosSUFBaUJBLE1BQU0sQ0FBQyxDQUFELENBQXZDO1VBQ0Q7UUFDRjtNQUNGLENBWkQ7SUFhRDtFQUNGLENBdkNEOztFQXlDQSxJQUFNNEMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDNUMsTUFBRCxFQUE4QjtJQUNsRCxJQUFNcUMsSUFBSSxHQUFHbkIsWUFBWSxDQUFDYyxJQUFiLENBQWtCLFVBQUNKLEdBQUQsRUFBUztNQUN0QyxJQUFJQSxHQUFHLENBQUM1QixNQUFKLENBQVcsQ0FBWCxNQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBeEIsSUFBK0I0QixHQUFHLENBQUM1QixNQUFKLENBQVcsQ0FBWCxNQUFrQkEsTUFBTSxDQUFDLENBQUQsQ0FBM0QsRUFBZ0U7UUFDOUQsT0FBTyxJQUFQO01BQ0Q7O01BQ0QsT0FBTyxLQUFQO0lBQ0QsQ0FMWSxDQUFiOztJQU9BLElBQUksQ0FBQXFDLElBQUksU0FBSixJQUFBQSxJQUFJLFdBQUosWUFBQUEsSUFBSSxDQUFFcEMsS0FBTixNQUFnQixPQUFwQixFQUE2QjtNQUMzQm9DLElBQUksQ0FBQ3BDLEtBQUwsR0FBYSxLQUFiO0lBQ0Q7O0lBRUQsSUFBSSxDQUFBb0MsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSixZQUFBQSxJQUFJLENBQUVwQyxLQUFOLE1BQWdCLEtBQWhCLElBQXlCLENBQUFvQyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRW5DLFFBQU4sTUFBbUIsSUFBaEQsRUFBc0Q7TUFDcERtQyxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLFlBQUFBLElBQUksQ0FBRXBDLEtBQU4sQ0FBWTRDLEdBQVosQ0FBZ0JSLElBQWhCLGFBQWdCQSxJQUFoQix1QkFBZ0JBLElBQUksQ0FBRW5DLFFBQXRCO0lBQ0Q7RUFDRixDQWZEOztFQWlCQSxJQUFNNEMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7SUFBQSxPQUFNcEMsU0FBUyxDQUFDNkIsS0FBVixDQUFnQixVQUFDRyxJQUFEO01BQUEsT0FBVUEsSUFBSSxDQUFDSyxNQUFMLEVBQVY7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBbkI7O0VBRUEsSUFBTUMsa0JBQWtCLEdBQUcsU0FBU0Esa0JBQVQsQ0FFekJiLElBRnlCLEVBR3pCQyxRQUh5QixFQUl6QmEsUUFKeUIsRUFLTDtJQUFBOztJQUNwQixJQUFNWCxHQUF1QixHQUFHLEVBQWhDO0lBQ0EsS0FBSzdCLEtBQUwsQ0FBV2tDLE9BQVgsQ0FBbUIsVUFBQ04sSUFBRCxFQUFVO01BQzNCLElBQU1hLFNBQVMsR0FBRzFDLGVBQWUsQ0FBQyxLQUFJLENBQUNDLEtBQU4sQ0FBakM7TUFDQXlDLFNBQVMsQ0FBQ1YsU0FBVixDQUFvQlMsUUFBcEIsRUFBOEJaLElBQUksQ0FBQ3JDLE1BQW5DLEVBQTJDbUMsSUFBM0MsRUFBaURDLFFBQWpEO01BQ0EsSUFBTWUsTUFBTSxHQUFHRCxTQUFTLENBQUN6QyxLQUFWLENBQWdCdUIsSUFBaEIsQ0FDYixVQUFDSixHQUFEO1FBQUEsT0FDRUEsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JxQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixDQUFsQixJQUFvQzRCLEdBQUcsQ0FBQzVCLE1BQUosQ0FBVyxDQUFYLE1BQWtCcUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosQ0FEeEQ7TUFBQSxDQURhLENBQWY7O01BS0EsSUFDRSxDQUFBbUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLE1BQWtCLEtBQWxCLElBQ0EsQ0FBQWtELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFbEQsS0FBUixNQUFrQixPQURsQixJQUVBLENBQUFrRCxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRWxELEtBQVIsTUFBa0JxQixTQUhwQixFQUlFO1FBQ0EsSUFBSSxDQUFBNkIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLENBQWNtRCxJQUFkLE1BQXVCaEIsUUFBM0IsRUFBcUM7VUFDbkNFLEdBQUcsQ0FBQ2pCLElBQUosQ0FBU2dCLElBQUksQ0FBQ3JDLE1BQWQ7UUFDRDtNQUNGO0lBQ0YsQ0FqQkQ7SUFrQkEsT0FBT3NDLEdBQVA7RUFDRCxDQTFCRDs7RUE0QkEsSUFBTWUsb0JBQW9CLEdBQUcsU0FBU0Esb0JBQVQsQ0FFM0JsQixJQUYyQixFQUczQkMsUUFIMkIsRUFJM0JhLFFBSjJCLEVBS1A7SUFBQTs7SUFDcEIsSUFBTVgsR0FBdUIsR0FBRyxFQUFoQztJQUNBLEtBQUs3QixLQUFMLENBQVdrQyxPQUFYLENBQW1CLFVBQUNOLElBQUQsRUFBVTtNQUFBOztNQUMzQixJQUNFLHNCQUFPQSxJQUFJLENBQUMvQixJQUFaLCtDQUFPLFdBQVdKLFFBQWxCLE1BQStCLFFBQS9CLElBQ0EsdUJBQU9tQyxJQUFJLENBQUNqQyxLQUFaLGdEQUFPLFlBQVlGLFFBQW5CLE1BQWdDLFFBRGhDLElBRUEscUJBQU9tQyxJQUFJLENBQUNsQyxHQUFaLDhDQUFPLFVBQVVELFFBQWpCLE1BQThCLFFBRjlCLElBR0Esc0JBQU9tQyxJQUFJLENBQUNsQyxHQUFaLG1FQUFPLFdBQVVDLEtBQWpCLHFEQUFPLGlCQUFpQkYsUUFBeEIsTUFBcUMsUUFIckMsSUFJQSxzQkFBT21DLElBQUksQ0FBQ2xDLEdBQVosa0VBQU8sV0FBVUcsSUFBakIsb0RBQU8sZ0JBQWdCSixRQUF2QixNQUFvQyxRQUpwQyxJQUtBLHdCQUFPbUMsSUFBSSxDQUFDaEMsTUFBWix1RUFBTyxhQUFhRCxLQUFwQix1REFBTyxtQkFBb0JGLFFBQTNCLE1BQXdDLFFBTHhDLElBTUEseUJBQU9tQyxJQUFJLENBQUNoQyxNQUFaLHdFQUFPLGNBQWFDLElBQXBCLHVEQUFPLG1CQUFtQkosUUFBMUIsTUFBdUMsUUFOdkMsSUFPQSx5QkFBT21DLElBQUksQ0FBQ2hDLE1BQVosa0RBQU8sY0FBYUgsUUFBcEIsTUFBaUMsUUFSbkMsRUFTRTtRQUNBO01BQ0Q7O01BQ0QsSUFBTWdELFNBQVMsR0FBRzFDLGVBQWUsQ0FBQyxNQUFJLENBQUNDLEtBQU4sQ0FBakM7TUFDQXlDLFNBQVMsQ0FBQ1YsU0FBVixDQUFvQlMsUUFBcEIsRUFBOEJaLElBQUksQ0FBQ3JDLE1BQW5DLEVBQTJDbUMsSUFBM0MsRUFBaURDLFFBQWpEO01BQ0EsSUFBTWUsTUFBTSxHQUFHRCxTQUFTLENBQUN6QyxLQUFWLENBQWdCdUIsSUFBaEIsQ0FDYixVQUFDSixHQUFEO1FBQUEsT0FDRUEsR0FBRyxDQUFDNUIsTUFBSixDQUFXLENBQVgsTUFBa0JxQyxJQUFJLENBQUNyQyxNQUFMLENBQVksQ0FBWixDQUFsQixJQUFvQzRCLEdBQUcsQ0FBQzVCLE1BQUosQ0FBVyxDQUFYLE1BQWtCcUMsSUFBSSxDQUFDckMsTUFBTCxDQUFZLENBQVosQ0FEeEQ7TUFBQSxDQURhLENBQWY7O01BS0EsSUFDRSxDQUFBbUQsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLE1BQWtCLEtBQWxCLElBQ0EsQ0FBQWtELE1BQU0sU0FBTixJQUFBQSxNQUFNLFdBQU4sWUFBQUEsTUFBTSxDQUFFbEQsS0FBUixNQUFrQixPQURsQixJQUVBLENBQUFrRCxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLFlBQUFBLE1BQU0sQ0FBRWxELEtBQVIsTUFBa0JxQixTQUhwQixFQUlFO1FBQ0EsSUFBSSxDQUFBNkIsTUFBTSxTQUFOLElBQUFBLE1BQU0sV0FBTixZQUFBQSxNQUFNLENBQUVsRCxLQUFSLENBQWNtRCxJQUFkLE1BQXVCaEIsUUFBM0IsRUFBcUM7VUFDbkNFLEdBQUcsQ0FBQ2pCLElBQUosQ0FBU2dCLElBQUksQ0FBQ3JDLE1BQWQ7UUFDRDtNQUNGO0lBQ0YsQ0E3QkQ7SUE4QkEsT0FBT3NDLEdBQVA7RUFDRCxDQXRDRDs7RUF3Q0EsSUFBTWdCLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNsQixRQUFELEVBQXlCO0lBQzFDMUIsU0FBUyxDQUFDaUMsT0FBVixDQUFrQixVQUFDRCxJQUFELEVBQU9hLEdBQVAsRUFBZTtNQUMvQixJQUFJYixJQUFJLENBQUNVLElBQUwsS0FBY2hCLFFBQWxCLEVBQTRCO1FBQzFCMUIsU0FBUyxDQUFDOEMsTUFBVixDQUFpQkQsR0FBakIsRUFBc0IsQ0FBdEI7TUFDRDtJQUNGLENBSkQ7SUFLQXJDLFlBQVksQ0FBQ3lCLE9BQWIsQ0FBcUIsVUFBQ04sSUFBRCxFQUFVO01BQzdCLElBQUlBLElBQUksQ0FBQ3BDLEtBQUwsS0FBZSxLQUFmLElBQXdCb0MsSUFBSSxDQUFDcEMsS0FBTCxLQUFlLE9BQTNDLEVBQW9EO1FBQ2xELElBQUlvQyxJQUFJLENBQUNwQyxLQUFMLENBQVdtRCxJQUFYLEtBQW9CaEIsUUFBeEIsRUFBa0M7VUFDaENDLElBQUksQ0FBQ3BDLEtBQUwsR0FBYSxPQUFiO1VBQ0FvQyxJQUFJLENBQUNuQyxRQUFMLEdBQWdCLElBQWhCO1FBQ0Q7TUFDRjtJQUNGLENBUEQ7RUFRRCxDQWREOztFQWdCQSxPQUFPO0lBQ0xPLEtBQUssRUFBRVMsWUFERjtJQUVMc0IsU0FBUyxFQUFUQSxTQUZLO0lBR0xJLGFBQWEsRUFBYkEsYUFISztJQUlMRSxVQUFVLEVBQVZBLFVBSks7SUFLTEUsa0JBQWtCLEVBQWxCQSxrQkFMSztJQU1MSyxvQkFBb0IsRUFBcEJBLG9CQU5LO0lBT0xDLFVBQVUsRUFBVkE7RUFQSyxDQUFQO0FBU0QsQ0F0UEQ7O0FBeVBBLGlFQUFlOUMsZUFBZjs7Ozs7O1VDdlJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQzVCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9jZWxsLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lYm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG50eXBlIEJvYXJkVmFsdWVzID0gU2hpcCB8IFwiZW1wdHlcIiB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBDZWxsIHtcbiAgcmVhZG9ubHkgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdO1xuICB2YWx1ZTogQm9hcmRWYWx1ZXM7XG4gIC8qXG4gIFBvc2l0aW9uIGRlbm90ZXMgd2hhdCBhcmVhIG9mIHNoaXAgaXMgbG9jYXRlZCBvbiBjZWxsLiBcbiAgTnVsbCBtZWFucyBubyBzaGlwO1xuICAwIG1lYW5zIGZyb250IG9mIHNoaXA7XG4gICovXG4gIHBvc2l0aW9uOiBudWxsIHwgbnVtYmVyO1xuICB0b3A6IENlbGwgfCBudWxsO1xuICByaWdodDogQ2VsbCB8IG51bGw7XG4gIGJvdHRvbTogQ2VsbCB8IG51bGw7XG4gIGxlZnQ6IENlbGwgfCBudWxsO1xufVxuXG5jb25zdCBjcmVhdGVDZWxsID0gKGNvb3JkczogW251bWJlciwgbnVtYmVyXSwgdmFsdWU6IFwiZW1wdHlcIik6IENlbGwgPT4gKHtcbiAgY29vcmRzLFxuICB2YWx1ZSxcbiAgcG9zaXRpb246IG51bGwsXG4gIHRvcDogbnVsbCxcbiAgcmlnaHQ6IG51bGwsXG4gIGJvdHRvbTogbnVsbCxcbiAgbGVmdDogbnVsbCxcbn0pO1xuXG5leHBvcnQgdHlwZSB7IENlbGwgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNlbGw7XG4iLCJpbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgdHlwZSB7IENlbGwgfSBmcm9tIFwiLi9jZWxsXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXBOYW1lcywgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVDZWxsIGZyb20gXCIuL2NlbGxcIjtcblxudHlwZSBBeGlzID0gXCJob3Jpem9udGFsXCIgfCBcInZlcnRpY2FsXCI7XG5cbmludGVyZmFjZSBHYW1lYm9hcmQge1xuICBib2FyZDogQ2VsbFtdO1xuICBwbGFjZVNoaXA6IChcbiAgICBzaGlwRmFjdG9yeTogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCxcbiAgICBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0sXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzXG4gICkgPT4gdm9pZDtcbiAgcmVjZWl2ZUF0dGFjazogKGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgYXJlQWxsU3VuazogKCkgPT4gdm9pZDtcbiAgZ2V0QXZhaWxhYmxlQ29vcmRzOiAoXG4gICAgYXhpczogQXhpcyxcbiAgICBzaGlwTmFtZTogU2hpcE5hbWVzLFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwXG4gICkgPT4gW251bWJlciwgbnVtYmVyXVtdO1xuICBnZXRBSUF2YWlsYWJsZUNvb3JkczogKFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApID0+IFtudW1iZXIsIG51bWJlcl1bXTtcbiAgcmVtb3ZlU2hpcDogKHNoaXBOYW1lOiBTaGlwTmFtZXMpID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVib2FyZCA9IChib2FyZD86IENlbGxbXSk6IEdhbWVib2FyZCA9PiB7XG4gIGNvbnN0IHNoaXBTdG9yZTogU2hpcFtdID0gW107XG4gIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDIsXG4gIH07XG5cbiAgY29uc3QgZGlyZWN0aW9ucyA9IHtcbiAgICB0b3A6IFswLCAtMV0sXG4gICAgcmlnaHQ6IFsxLCAwXSxcbiAgICBib3R0b206IFswLCAxXSxcbiAgICBsZWZ0OiBbLTEsIDBdLFxuICB9O1xuXG4gIGxldCBnYW1lQm9hcmRBcnI6IENlbGxbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgZ2FtZUJvYXJkQXJyLnB1c2goY3JlYXRlQ2VsbChbaSwgal0sIFwiZW1wdHlcIikpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChib2FyZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgZG9lc01vdmVFeGlzdCA9IChcbiAgICAgIHZhbHVlOiBDZWxsLFxuICAgICAgbnVtOiBudW1iZXIsXG4gICAgICBkaXJlY3Rpb25zT2JqOiB0eXBlb2YgZGlyZWN0aW9ucyxcbiAgICAgIGtleToga2V5b2YgdHlwZW9mIGRpcmVjdGlvbnNcbiAgICApID0+IHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IFsuLi5nYW1lQm9hcmRBcnJbbnVtXS5jb29yZHNdO1xuICAgICAgY29vcmRzWzBdICs9IGRpcmVjdGlvbnNPYmpba2V5XVswXTtcbiAgICAgIGNvb3Jkc1sxXSArPSBkaXJlY3Rpb25zT2JqW2tleV1bMV07XG4gICAgICBpZiAodmFsdWUuY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiYgdmFsdWUuY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoZWNrSWZLZXkgPSAoXG4gICAgICBrZXk6IHN0cmluZyxcbiAgICAgIG9iajogdHlwZW9mIGRpcmVjdGlvbnNcbiAgICApOiBrZXkgaXMga2V5b2YgdHlwZW9mIGRpcmVjdGlvbnMgPT4ga2V5IGluIG9iajtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZUJvYXJkQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZGlyZWN0aW9ucyk7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgY29uc3Qga2V5ID0ga2V5c1tqXTtcbiAgICAgICAgaWYgKGNoZWNrSWZLZXkoa2V5LCBkaXJlY3Rpb25zKSkge1xuICAgICAgICAgIGNvbnN0IG1vdmUgPSBnYW1lQm9hcmRBcnIuZmluZCgodmFsdWUpID0+XG4gICAgICAgICAgICBkb2VzTW92ZUV4aXN0KHZhbHVlLCBpLCBkaXJlY3Rpb25zLCBrZXkpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGdhbWVCb2FyZEFycltpXVtrZXldID0gbW92ZSB8fCBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGdhbWVCb2FyZEFyciA9IGNsb25lRGVlcChib2FyZCk7XG4gIH1cblxuICBjb25zdCBjaGVja0lmU2hpcE5vdEluQ2VsbHMgPSAoXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwTGVuZ3Roc1tzaGlwTmFtZV07XG4gICAgbGV0IGNlbGwgPSBnYW1lQm9hcmRBcnIuZmluZChcbiAgICAgIChvYmopID0+IG9iai5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICApO1xuICAgIGNvbnN0IGFycjogQ2VsbFtdID0gW107XG5cbiAgICBpZiAoYXhpcyA9PT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNlbGwpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsKTtcbiAgICAgICAgICBjZWxsID0gY2VsbC5yaWdodCB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF4aXMgPT09IFwidmVydGljYWxcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2VsbCkge1xuICAgICAgICAgIGFyci5wdXNoKGNlbGwpO1xuICAgICAgICAgIGNlbGwgPSBjZWxsLmJvdHRvbSB8fCB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmV2ZXJ5KChvYmopID0+IG9iai52YWx1ZSA9PT0gXCJlbXB0eVwiKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcEZhY3Rvcnk6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcE5hbWUsIGF4aXMpO1xuICAgIGlmICghY2hlY2tJZlNoaXBOb3RJbkNlbGxzKGNvb3JkcywgYXhpcywgc2hpcE5hbWUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChheGlzID09PSBcImhvcml6b250YWxcIikge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA+PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdIDwgY29vcmRzWzBdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMF0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMF0gLSBjb29yZHNbMF07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgaWYgKGNlbGwuY29vcmRzWzBdID09PSBjb29yZHNbMF0pIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjZWxsLmNvb3Jkc1sxXSA+PSBjb29yZHNbMV0gJiZcbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzFdIDwgY29vcmRzWzFdICsgc2hpcExlbmd0aHNbc2hpcE5hbWVdICYmXG4gICAgICAgICAgICBjb29yZHNbMV0gKyBzaGlwTGVuZ3Roc1tzaGlwTmFtZV0gPD0gMTBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPSBzaGlwO1xuICAgICAgICAgICAgc2hpcFN0b3JlLnB1c2goc2hpcCk7XG4gICAgICAgICAgICBjZWxsLnBvc2l0aW9uID0gY2VsbC5jb29yZHNbMV0gLSBjb29yZHNbMV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBjb25zdCBjZWxsID0gZ2FtZUJvYXJkQXJyLmZpbmQoKG9iaikgPT4ge1xuICAgICAgaWYgKG9iai5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJiBvYmouY29vcmRzWzFdID09PSBjb29yZHNbMV0pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBpZiAoY2VsbD8udmFsdWUgPT09IFwiZW1wdHlcIikge1xuICAgICAgY2VsbC52YWx1ZSA9IFwiaGl0XCI7XG4gICAgfVxuXG4gICAgaWYgKGNlbGw/LnZhbHVlICE9PSBcImhpdFwiICYmIGNlbGw/LnBvc2l0aW9uICE9PSBudWxsKSB7XG4gICAgICBjZWxsPy52YWx1ZS5oaXQoY2VsbD8ucG9zaXRpb24pO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhcmVBbGxTdW5rID0gKCkgPT4gc2hpcFN0b3JlLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKTtcblxuICBjb25zdCBnZXRBdmFpbGFibGVDb29yZHMgPSBmdW5jdGlvbiBnZXRBdmFpbGFibGVDb29yZHMoXG4gICAgdGhpczogR2FtZWJvYXJkLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgIGNvbnN0IGFycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBnYW1lYm9hcmQgPSBjcmVhdGVHYW1lYm9hcmQodGhpcy5ib2FyZCk7XG4gICAgICBnYW1lYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjZWxsLmNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgcGxhY2VkID0gZ2FtZWJvYXJkLmJvYXJkLmZpbmQoXG4gICAgICAgIChvYmopID0+XG4gICAgICAgICAgb2JqLmNvb3Jkc1swXSA9PT0gY2VsbC5jb29yZHNbMF0gJiYgb2JqLmNvb3Jkc1sxXSA9PT0gY2VsbC5jb29yZHNbMV1cbiAgICAgICk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgICBwbGFjZWQ/LnZhbHVlICE9PSBcImVtcHR5XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gdW5kZWZpbmVkXG4gICAgICApIHtcbiAgICAgICAgaWYgKHBsYWNlZD8udmFsdWUubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICBhcnIucHVzaChjZWxsLmNvb3Jkcyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xuXG4gIGNvbnN0IGdldEFJQXZhaWxhYmxlQ29vcmRzID0gZnVuY3Rpb24gZ2V0QUlBdmFpbGFibGVDb29yZHMoXG4gICAgdGhpczogR2FtZWJvYXJkLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lcyxcbiAgICBzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcFxuICApOiBbbnVtYmVyLCBudW1iZXJdW10ge1xuICAgIGNvbnN0IGFycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gICAgdGhpcy5ib2FyZC5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBjZWxsLmxlZnQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnJpZ2h0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC50b3A/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ucmlnaHQ/LnBvc2l0aW9uID09PSBcIm51bWJlclwiIHx8XG4gICAgICAgIHR5cGVvZiBjZWxsLnRvcD8ubGVmdD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwuYm90dG9tPy5yaWdodD8ucG9zaXRpb24gPT09IFwibnVtYmVyXCIgfHxcbiAgICAgICAgdHlwZW9mIGNlbGwuYm90dG9tPy5sZWZ0Py5wb3NpdGlvbiA9PT0gXCJudW1iZXJcIiB8fFxuICAgICAgICB0eXBlb2YgY2VsbC5ib3R0b20/LnBvc2l0aW9uID09PSBcIm51bWJlclwiXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgZ2FtZWJvYXJkID0gY3JlYXRlR2FtZWJvYXJkKHRoaXMuYm9hcmQpO1xuICAgICAgZ2FtZWJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgY2VsbC5jb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICAgIGNvbnN0IHBsYWNlZCA9IGdhbWVib2FyZC5ib2FyZC5maW5kKFxuICAgICAgICAob2JqKSA9PlxuICAgICAgICAgIG9iai5jb29yZHNbMF0gPT09IGNlbGwuY29vcmRzWzBdICYmIG9iai5jb29yZHNbMV0gPT09IGNlbGwuY29vcmRzWzFdXG4gICAgICApO1xuXG4gICAgICBpZiAoXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IFwiaGl0XCIgJiZcbiAgICAgICAgcGxhY2VkPy52YWx1ZSAhPT0gXCJlbXB0eVwiICYmXG4gICAgICAgIHBsYWNlZD8udmFsdWUgIT09IHVuZGVmaW5lZFxuICAgICAgKSB7XG4gICAgICAgIGlmIChwbGFjZWQ/LnZhbHVlLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgYXJyLnB1c2goY2VsbC5jb29yZHMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKHNoaXBOYW1lOiBTaGlwTmFtZXMpID0+IHtcbiAgICBzaGlwU3RvcmUuZm9yRWFjaCgoc2hpcCwgbmR4KSA9PiB7XG4gICAgICBpZiAoc2hpcC5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICBzaGlwU3RvcmUuc3BsaWNlKG5keCwgMSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZ2FtZUJvYXJkQXJyLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGlmIChjZWxsLnZhbHVlICE9PSBcImhpdFwiICYmIGNlbGwudmFsdWUgIT09IFwiZW1wdHlcIikge1xuICAgICAgICBpZiAoY2VsbC52YWx1ZS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgIGNlbGwudmFsdWUgPSBcImVtcHR5XCI7XG4gICAgICAgICAgY2VsbC5wb3NpdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBnYW1lQm9hcmRBcnIsXG4gICAgcGxhY2VTaGlwLFxuICAgIHJlY2VpdmVBdHRhY2ssXG4gICAgYXJlQWxsU3VuayxcbiAgICBnZXRBdmFpbGFibGVDb29yZHMsXG4gICAgZ2V0QUlBdmFpbGFibGVDb29yZHMsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVHYW1lYm9hcmQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiZ2FtZWJvYXJkXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBfdHNcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmF0dGxlc2hpcF90c1wiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfbG9kYXNoX2xvZGFzaF9qc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2dhbWVib2FyZC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImNyZWF0ZUNlbGwiLCJjb29yZHMiLCJ2YWx1ZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJib3R0b20iLCJsZWZ0IiwiY2xvbmVEZWVwIiwiY3JlYXRlR2FtZWJvYXJkIiwiYm9hcmQiLCJzaGlwU3RvcmUiLCJzaGlwTGVuZ3RocyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImRpcmVjdGlvbnMiLCJnYW1lQm9hcmRBcnIiLCJpIiwiaiIsInB1c2giLCJ1bmRlZmluZWQiLCJkb2VzTW92ZUV4aXN0IiwibnVtIiwiZGlyZWN0aW9uc09iaiIsImtleSIsImNoZWNrSWZLZXkiLCJvYmoiLCJrZXlzIiwiT2JqZWN0IiwibW92ZSIsImZpbmQiLCJsZW5ndGgiLCJjaGVja0lmU2hpcE5vdEluQ2VsbHMiLCJheGlzIiwic2hpcE5hbWUiLCJjZWxsIiwiYXJyIiwiZXZlcnkiLCJwbGFjZVNoaXAiLCJzaGlwRmFjdG9yeSIsInNoaXAiLCJmb3JFYWNoIiwicmVjZWl2ZUF0dGFjayIsImhpdCIsImFyZUFsbFN1bmsiLCJpc1N1bmsiLCJnZXRBdmFpbGFibGVDb29yZHMiLCJzaGlwRnVuYyIsImdhbWVib2FyZCIsInBsYWNlZCIsIm5hbWUiLCJnZXRBSUF2YWlsYWJsZUNvb3JkcyIsInJlbW92ZVNoaXAiLCJuZHgiLCJzcGxpY2UiXSwic291cmNlUm9vdCI6IiJ9