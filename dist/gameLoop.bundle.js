/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/aiPlayer.ts":
/*!*********************************!*\
  !*** ./src/scripts/aiPlayer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");


var createAI = function createAI(boardFunc, playerNum) {
  var coordsArr = [];

  for (var i = 0; i < 10; i += 1) {
    for (var j = 0; j < 10; j += 1) {
      coordsArr.push([i, j]);
    }
  }

  var _createPlayer = (0,_player__WEBPACK_IMPORTED_MODULE_0__["default"])(boardFunc, "AI", playerNum),
      name = _createPlayer.name,
      boardObj = _createPlayer.boardObj,
      attack = _createPlayer.attackEnemy;

  var initialPlace = function initialPlace(shipFunc) {
    var ships = ["cruiser", "battleship", "carrier", "submarine", "destroyer"];
    ships.forEach(function (shipName) {
      var axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      var availableCoords = boardObj.getAIAvailableCoords(axis, shipName, shipFunc);
      var randomCoord = availableCoords[Math.floor(Math.random() * availableCoords.length)];
      boardObj.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  var attackEnemy = function attackEnemy(enemy) {
    var random = Math.floor(Math.random() * coordsArr.length);
    var coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
  };

  return {
    name: name,
    playerNum: playerNum,
    type: "AI",
    boardObj: boardObj,
    attackEnemy: attackEnemy,
    initialPlace: initialPlace
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAI);

/***/ }),

/***/ "./src/scripts/gameLoop.ts":
/*!*********************************!*\
  !*** ./src/scripts/gameLoop.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "receiveAttackCoords1AI1Player": () => (/* binding */ receiveAttackCoords1AI1Player),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _aiPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aiPlayer */ "./src/scripts/aiPlayer.ts");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/scripts/player.ts");
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameboard */ "./src/scripts/gameboard.ts");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ "./src/scripts/ship.ts");
/* harmony import */ var _pubsub__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");






var startGame = function startGame(player1Name, player2Name) {
  var player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player1Name, "player1");
  var player2 = (0,_player__WEBPACK_IMPORTED_MODULE_1__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], player2Name, "player2");

  if (player1Name === "") {
    player1 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], "player1");
  }

  if (player2Name === "") {
    player2 = (0,_aiPlayer__WEBPACK_IMPORTED_MODULE_0__["default"])(_gameboard__WEBPACK_IMPORTED_MODULE_2__["default"], "player2");
  }

  player1.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);
  player2.initialPlace(_ship__WEBPACK_IMPORTED_MODULE_3__["default"]);

  if (player1.type === "AI" && player2.type === "Human" || player1.type === "Human" && player2.type === "AI") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("display-boards", player1, player2);
  }
};

var receiveAttackCoords1AI1Player = function receiveAttackCoords1AI1Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    setTimeout(function () {
      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }

  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    setTimeout(function () {
      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        main.classList.remove("unclickable");
      }
    }, 1000);
  }
};



/***/ }),

/***/ "./src/scripts/player.ts":
/*!*******************************!*\
  !*** ./src/scripts/player.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createPlayer = function createPlayer(boardFunc, playerName, playerNum) {
  var board = boardFunc();

  var attackEnemy = function attackEnemy(enemy, coords) {
    enemy.receiveAttack(coords);
  };

  var placeShip = function placeShip(shipFunc, coords, axis, shipName) {
    board.placeShip(shipFunc, coords, axis, shipName);
  };

  var removeShip = function removeShip(name) {
    board.removeShip(name);
  };

  var initialPlace = function initialPlace(shipFunc) {
    var ships = ["cruiser", "battleship", "carrier", "submarine", "destroyer"];
    ships.forEach(function (shipName) {
      var axis = Math.random() > 0.5 ? "vertical" : "horizontal";
      var availableCoords = board.getAvailableCoords(axis, shipName, shipFunc);
      var randomCoord = availableCoords[Math.floor(Math.random() * availableCoords.length)];
      board.placeShip(shipFunc, randomCoord, axis, shipName);
    });
  };

  return {
    name: playerName,
    type: "Human",
    playerNum: playerNum,
    boardObj: board,
    attackEnemy: attackEnemy,
    placeShip: placeShip,
    initialPlace: initialPlace,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);

/***/ }),

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



/***/ }),

/***/ "./src/scripts/ship.ts":
/*!*****************************!*\
  !*** ./src/scripts/ship.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var createShip = function createShip(name, axis) {
  var shipArray = [];
  var shipLengths = {
    carrier: 5,
    battleship: 4,
    cruiser: 3,
    submarine: 3,
    destroyer: 2
  };

  for (var i = 1; i <= shipLengths[name]; i += 1) {
    shipArray.push(name);
  }

  var get = function get(num) {
    return num !== undefined && num !== null && num >= 0 && num < shipLengths[name] ? shipArray[num] : shipArray;
  };

  var hit = function hit(num) {
    if (num >= 0 && num < shipLengths[name]) {
      shipArray[num] = "hit";
    }
  };

  var isSunk = function isSunk() {
    return shipArray.every(function (value) {
      return value === "hit";
    });
  };

  return {
    name: name,
    axis: axis,
    length: shipLengths[name],
    get: get,
    hit: hit,
    isSunk: isSunk
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createShip);

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
/******/ 			"gameLoop": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_lodash_lodash_js","src_scripts_gameboard_ts"], () => (__webpack_require__("./src/scripts/gameLoop.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUxvb3AuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQVdBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQ2ZDLFNBRGUsRUFFZkMsU0FGZSxFQUdGO0VBQ2IsSUFBTUMsU0FBNkIsR0FBRyxFQUF0Qzs7RUFDQSxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztJQUM5QixLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsSUFBSSxDQUE3QixFQUFnQztNQUM5QkYsU0FBUyxDQUFDRyxJQUFWLENBQWUsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLENBQWY7SUFDRDtFQUNGOztFQUNELG9CQUlJTixtREFBWSxDQUFDRSxTQUFELEVBQVksSUFBWixFQUFrQkMsU0FBbEIsQ0FKaEI7RUFBQSxJQUNFSyxJQURGLGlCQUNFQSxJQURGO0VBQUEsSUFFRUMsUUFGRixpQkFFRUEsUUFGRjtFQUFBLElBR2VDLE1BSGYsaUJBR0VDLFdBSEY7O0VBTUEsSUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFxRDtJQUN4RSxJQUFNQyxLQUFrQixHQUFHLENBQ3pCLFNBRHlCLEVBRXpCLFlBRnlCLEVBR3pCLFNBSHlCLEVBSXpCLFdBSnlCLEVBS3pCLFdBTHlCLENBQTNCO0lBUUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLFFBQUQsRUFBYztNQUMxQixJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixVQUF0QixHQUFtQyxZQUFoRDtNQUNBLElBQU1DLGVBQWUsR0FBR1gsUUFBUSxDQUFDWSxvQkFBVCxDQUN0QkosSUFEc0IsRUFFdEJELFFBRnNCLEVBR3RCSCxRQUhzQixDQUF4QjtNQUtBLElBQU1TLFdBQVcsR0FDZkYsZUFBZSxDQUFDRixJQUFJLENBQUNLLEtBQUwsQ0FBV0wsSUFBSSxDQUFDQyxNQUFMLEtBQWdCQyxlQUFlLENBQUNJLE1BQTNDLENBQUQsQ0FEakI7TUFFQWYsUUFBUSxDQUFDZ0IsU0FBVCxDQUFtQlosUUFBbkIsRUFBNkJTLFdBQTdCLEVBQTBDTCxJQUExQyxFQUFnREQsUUFBaEQ7SUFDRCxDQVZEO0VBV0QsQ0FwQkQ7O0VBc0JBLElBQU1MLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNlLEtBQUQsRUFBc0I7SUFDeEMsSUFBTVAsTUFBTSxHQUFHRCxJQUFJLENBQUNLLEtBQUwsQ0FBV0wsSUFBSSxDQUFDQyxNQUFMLEtBQWdCZixTQUFTLENBQUNvQixNQUFyQyxDQUFmO0lBQ0EsSUFBTUcsTUFBTSxHQUFHdkIsU0FBUyxDQUFDd0IsTUFBVixDQUFpQlQsTUFBakIsRUFBeUIsQ0FBekIsQ0FBZjtJQUNBVCxNQUFNLENBQUNnQixLQUFELEVBQVFDLE1BQU0sQ0FBQyxDQUFELENBQWQsQ0FBTjtFQUNELENBSkQ7O0VBTUEsT0FBTztJQUFFbkIsSUFBSSxFQUFKQSxJQUFGO0lBQVFMLFNBQVMsRUFBVEEsU0FBUjtJQUFtQjBCLElBQUksRUFBRSxJQUF6QjtJQUErQnBCLFFBQVEsRUFBUkEsUUFBL0I7SUFBeUNFLFdBQVcsRUFBWEEsV0FBekM7SUFBc0RDLFlBQVksRUFBWkE7RUFBdEQsQ0FBUDtBQUNELENBN0NEOztBQWdEQSxpRUFBZVgsUUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNZ0MsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsV0FBRCxFQUFzQkMsV0FBdEIsRUFBOEM7RUFDOUQsSUFBSUMsT0FBMEIsR0FBR3BDLG1EQUFZLENBQzNDOEIsa0RBRDJDLEVBRTNDSSxXQUYyQyxFQUczQyxTQUgyQyxDQUE3QztFQUtBLElBQUlHLE9BQTBCLEdBQUdyQyxtREFBWSxDQUMzQzhCLGtEQUQyQyxFQUUzQ0ssV0FGMkMsRUFHM0MsU0FIMkMsQ0FBN0M7O0VBS0EsSUFBSUQsV0FBVyxLQUFLLEVBQXBCLEVBQXdCO0lBQ3RCRSxPQUFPLEdBQUduQyxxREFBUSxDQUFDNkIsa0RBQUQsRUFBa0IsU0FBbEIsQ0FBbEI7RUFDRDs7RUFDRCxJQUFJSyxXQUFXLEtBQUssRUFBcEIsRUFBd0I7SUFDdEJFLE9BQU8sR0FBR3BDLHFEQUFRLENBQUM2QixrREFBRCxFQUFrQixTQUFsQixDQUFsQjtFQUNEOztFQUNETSxPQUFPLENBQUN4QixZQUFSLENBQXFCbUIsNkNBQXJCO0VBQ0FNLE9BQU8sQ0FBQ3pCLFlBQVIsQ0FBcUJtQiw2Q0FBckI7O0VBQ0EsSUFDR0ssT0FBTyxDQUFDUCxJQUFSLEtBQWlCLElBQWpCLElBQXlCUSxPQUFPLENBQUNSLElBQVIsS0FBaUIsT0FBM0MsSUFDQ08sT0FBTyxDQUFDUCxJQUFSLEtBQWlCLE9BQWpCLElBQTRCUSxPQUFPLENBQUNSLElBQVIsS0FBaUIsSUFGaEQsRUFHRTtJQUNBRyxnREFBTyxDQUFDLGdCQUFELEVBQW1CSSxPQUFuQixFQUE0QkMsT0FBNUIsQ0FBUDtFQUNEO0FBQ0YsQ0F6QkQ7O0FBMkJBLElBQU1DLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FDcENYLE1BRG9DLEVBRXBDUyxPQUZvQyxFQUdwQ0MsT0FIb0MsRUFJcENFLFNBSm9DLEVBS2pDO0VBQ0gsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjs7RUFDQSxJQUFJSCxTQUFTLEtBQUssU0FBbEIsRUFBNkI7SUFDM0JGLE9BQU8sQ0FBQzFCLFdBQVIsQ0FBb0J5QixPQUFPLENBQUMzQixRQUE1QixFQUFzQ2tCLE1BQXRDO0lBQ0FLLGdEQUFPLENBQUMscUJBQUQsQ0FBUDtJQUNBVyxVQUFVLENBQUMsWUFBTTtNQUNmLElBQUlQLE9BQU8sQ0FBQ1AsSUFBUixLQUFpQixJQUFqQixJQUF5QlcsSUFBN0IsRUFBbUM7UUFDakNKLE9BQU8sQ0FBQ3pCLFdBQVIsQ0FBb0IwQixPQUFPLENBQUM1QixRQUE1QjtRQUNBdUIsZ0RBQU8sQ0FBQyxxQkFBRCxDQUFQO1FBQ0FRLElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxNQUFmLENBQXNCLGFBQXRCO01BQ0Q7SUFDRixDQU5TLEVBTVAsSUFOTyxDQUFWO0VBT0Q7O0VBQ0QsSUFBSU4sU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0lBQzNCSCxPQUFPLENBQUN6QixXQUFSLENBQW9CMEIsT0FBTyxDQUFDNUIsUUFBNUIsRUFBc0NrQixNQUF0QztJQUNBSyxnREFBTyxDQUFDLHFCQUFELENBQVA7SUFDQVcsVUFBVSxDQUFDLFlBQU07TUFDZixJQUFJTixPQUFPLENBQUNSLElBQVIsS0FBaUIsSUFBakIsSUFBeUJXLElBQTdCLEVBQW1DO1FBQ2pDSCxPQUFPLENBQUMxQixXQUFSLENBQW9CeUIsT0FBTyxDQUFDM0IsUUFBNUI7UUFDQXVCLGdEQUFPLENBQUMscUJBQUQsQ0FBUDtRQUNBUSxJQUFJLENBQUNJLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixhQUF0QjtNQUNEO0lBQ0YsQ0FOUyxFQU1QLElBTk8sQ0FBVjtFQU9EO0FBQ0YsQ0E3QkQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxJQUFNN0MsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FDbkJFLFNBRG1CLEVBRW5CNEMsVUFGbUIsRUFHbkIzQyxTQUhtQixFQUlSO0VBQ1gsSUFBTTRDLEtBQUssR0FBRzdDLFNBQVMsRUFBdkI7O0VBRUEsSUFBTVMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ2UsS0FBRCxFQUFtQkMsTUFBbkIsRUFBZ0Q7SUFDbEVELEtBQUssQ0FBQ3NCLGFBQU4sQ0FBb0JyQixNQUFwQjtFQUNELENBRkQ7O0VBSUEsSUFBTUYsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FDaEJaLFFBRGdCLEVBRWhCYyxNQUZnQixFQUdoQlYsSUFIZ0IsRUFJaEJELFFBSmdCLEVBS2I7SUFDSCtCLEtBQUssQ0FBQ3RCLFNBQU4sQ0FBZ0JaLFFBQWhCLEVBQTBCYyxNQUExQixFQUFrQ1YsSUFBbEMsRUFBd0NELFFBQXhDO0VBQ0QsQ0FQRDs7RUFTQSxJQUFNaUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3pDLElBQUQsRUFBcUI7SUFDdEN1QyxLQUFLLENBQUNFLFVBQU4sQ0FBaUJ6QyxJQUFqQjtFQUNELENBRkQ7O0VBSUEsSUFBTUksWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsUUFBRCxFQUFxRDtJQUN4RSxJQUFNQyxLQUFrQixHQUFHLENBQ3pCLFNBRHlCLEVBRXpCLFlBRnlCLEVBR3pCLFNBSHlCLEVBSXpCLFdBSnlCLEVBS3pCLFdBTHlCLENBQTNCO0lBUUFBLEtBQUssQ0FBQ0MsT0FBTixDQUFjLFVBQUNDLFFBQUQsRUFBYztNQUMxQixJQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUFoQixHQUFzQixVQUF0QixHQUFtQyxZQUFoRDtNQUNBLElBQU1DLGVBQWUsR0FBRzJCLEtBQUssQ0FBQ0csa0JBQU4sQ0FDdEJqQyxJQURzQixFQUV0QkQsUUFGc0IsRUFHdEJILFFBSHNCLENBQXhCO01BS0EsSUFBTVMsV0FBVyxHQUNmRixlQUFlLENBQUNGLElBQUksQ0FBQ0ssS0FBTCxDQUFXTCxJQUFJLENBQUNDLE1BQUwsS0FBZ0JDLGVBQWUsQ0FBQ0ksTUFBM0MsQ0FBRCxDQURqQjtNQUVBdUIsS0FBSyxDQUFDdEIsU0FBTixDQUFnQlosUUFBaEIsRUFBMEJTLFdBQTFCLEVBQXVDTCxJQUF2QyxFQUE2Q0QsUUFBN0M7SUFDRCxDQVZEO0VBV0QsQ0FwQkQ7O0VBc0JBLE9BQU87SUFDTFIsSUFBSSxFQUFFc0MsVUFERDtJQUVMakIsSUFBSSxFQUFFLE9BRkQ7SUFHTDFCLFNBQVMsRUFBVEEsU0FISztJQUlMTSxRQUFRLEVBQUVzQyxLQUpMO0lBS0xwQyxXQUFXLEVBQVhBLFdBTEs7SUFNTGMsU0FBUyxFQUFUQSxTQU5LO0lBT0xiLFlBQVksRUFBWkEsWUFQSztJQVFMcUMsVUFBVSxFQUFWQTtFQVJLLENBQVA7QUFVRCxDQXhERDs7QUEyREEsaUVBQWVqRCxZQUFmOzs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBLElBQU1tRCxNQUFjLEdBQUcsQ0FDckI7QUFEcUIsQ0FBdkI7O0FBSUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsU0FBRCxFQUFvQkMsSUFBcEIsRUFBMkM7RUFDM0RILE1BQU0sQ0FBQ0UsU0FBRCxDQUFOLEdBQW9CRixNQUFNLENBQUNFLFNBQUQsQ0FBTixJQUFxQixFQUF6QztFQUNBRixNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQjlDLElBQWxCLENBQXVCK0MsSUFBdkI7QUFDRCxDQUhEOztBQUtBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNGLFNBQUQsRUFBb0JDLElBQXBCLEVBQTJDO0VBQzdELElBQUlILE1BQU0sQ0FBQ0UsU0FBRCxDQUFWLEVBQXVCO0lBQ3JCLEtBQUssSUFBSWhELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4QyxNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQjdCLE1BQXRDLEVBQThDbkIsQ0FBQyxJQUFJLENBQW5ELEVBQXNEO01BQ3BELElBQUk4QyxNQUFNLENBQUNFLFNBQUQsQ0FBTixDQUFrQmhELENBQWxCLEVBQXFCbUQsUUFBckIsT0FBb0NGLElBQUksQ0FBQ0UsUUFBTCxFQUF4QyxFQUF5RDtRQUN2REwsTUFBTSxDQUFDRSxTQUFELENBQU4sQ0FBa0J6QixNQUFsQixDQUF5QnZCLENBQXpCLEVBQTRCLENBQTVCO1FBQ0E7TUFDRDtJQUNGO0VBQ0Y7QUFDRixDQVREOztBQVdBLElBQU0yQixPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDcUIsU0FBRCxFQUFpRDtFQUFBLGtDQUExQkksSUFBMEI7SUFBMUJBLElBQTBCO0VBQUE7O0VBQy9ELElBQU1DLEtBQUssR0FBR1AsTUFBTSxDQUFDRSxTQUFELENBQXBCOztFQUNBLElBQUlNLEtBQUssQ0FBQ0MsT0FBTixDQUFjRixLQUFkLENBQUosRUFBMEI7SUFDeEJBLEtBQUssQ0FBQzNDLE9BQU4sQ0FBYyxVQUFDdUMsSUFBRCxFQUFVO01BQ3RCQSxJQUFJLE1BQUosU0FBUUcsSUFBUjtJQUNELENBRkQ7RUFHRDtBQUNGLENBUEQ7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQSxJQUFNMUIsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ3ZCLElBQUQsRUFBa0JTLElBQWxCLEVBQTREO0VBQzdFLElBQU00QyxTQUF1QixHQUFHLEVBQWhDO0VBQ0EsSUFBTUMsV0FBVyxHQUFHO0lBQ2xCQyxPQUFPLEVBQUUsQ0FEUztJQUVsQkMsVUFBVSxFQUFFLENBRk07SUFHbEJDLE9BQU8sRUFBRSxDQUhTO0lBSWxCQyxTQUFTLEVBQUUsQ0FKTztJQUtsQkMsU0FBUyxFQUFFO0VBTE8sQ0FBcEI7O0VBUUEsS0FBSyxJQUFJOUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSXlELFdBQVcsQ0FBQ3RELElBQUQsQ0FBaEMsRUFBd0NILENBQUMsSUFBSSxDQUE3QyxFQUFnRDtJQUM5Q3dELFNBQVMsQ0FBQ3RELElBQVYsQ0FBZUMsSUFBZjtFQUNEOztFQUVELElBQU00RCxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxHQUFEO0lBQUEsT0FDVkEsR0FBRyxLQUFLQyxTQUFSLElBQXFCRCxHQUFHLEtBQUssSUFBN0IsSUFBcUNBLEdBQUcsSUFBSSxDQUE1QyxJQUFpREEsR0FBRyxHQUFHUCxXQUFXLENBQUN0RCxJQUFELENBQWxFLEdBQ0lxRCxTQUFTLENBQUNRLEdBQUQsQ0FEYixHQUVJUixTQUhNO0VBQUEsQ0FBWjs7RUFLQSxJQUFNVSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDRixHQUFELEVBQWlCO0lBQzNCLElBQUlBLEdBQUcsSUFBSSxDQUFQLElBQVlBLEdBQUcsR0FBR1AsV0FBVyxDQUFDdEQsSUFBRCxDQUFqQyxFQUF5QztNQUN2Q3FELFNBQVMsQ0FBQ1EsR0FBRCxDQUFULEdBQWlCLEtBQWpCO0lBQ0Q7RUFDRixDQUpEOztFQU1BLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0lBQUEsT0FBTVgsU0FBUyxDQUFDWSxLQUFWLENBQWdCLFVBQUNDLEtBQUQ7TUFBQSxPQUFXQSxLQUFLLEtBQUssS0FBckI7SUFBQSxDQUFoQixDQUFOO0VBQUEsQ0FBZjs7RUFFQSxPQUFPO0lBQUVsRSxJQUFJLEVBQUpBLElBQUY7SUFBUVMsSUFBSSxFQUFKQSxJQUFSO0lBQWNPLE1BQU0sRUFBRXNDLFdBQVcsQ0FBQ3RELElBQUQsQ0FBakM7SUFBeUM0RCxHQUFHLEVBQUhBLEdBQXpDO0lBQThDRyxHQUFHLEVBQUhBLEdBQTlDO0lBQW1EQyxNQUFNLEVBQU5BO0VBQW5ELENBQVA7QUFDRCxDQTVCRDs7QUErQkEsaUVBQWV6QyxVQUFmOzs7Ozs7VUNqREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDNUJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL2FpUGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9nYW1lTG9vcC50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcGxheWVyLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3NoaXAudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBCb2FyZEZ1bmMgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgR2FtZWJvYXJkLCBBeGlzIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5pbXBvcnQgdHlwZSB7IFNoaXAsIFNoaXBOYW1lcyB9IGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmludGVyZmFjZSBBSVBsYXllciB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogXCJBSVwiO1xuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCI7XG4gIGJvYXJkT2JqOiBHYW1lYm9hcmQ7XG4gIGF0dGFja0VuZW15OiAoZW5lbXk6IEdhbWVib2FyZCkgPT4gdm9pZDtcbiAgaW5pdGlhbFBsYWNlOiAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHZvaWQ7XG59XG5cbmNvbnN0IGNyZWF0ZUFJID0gKFxuICBib2FyZEZ1bmM6IEJvYXJkRnVuYyxcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiXG4pOiBBSVBsYXllciA9PiB7XG4gIGNvbnN0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMsIFwiQUlcIiwgcGxheWVyTnVtKTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZE9iai5nZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjb29yZHNBcnIubGVuZ3RoKTtcbiAgICBjb25zdCBjb29yZHMgPSBjb29yZHNBcnIuc3BsaWNlKHJhbmRvbSwgMSk7XG4gICAgYXR0YWNrKGVuZW15LCBjb29yZHNbMF0pO1xuICB9O1xuXG4gIHJldHVybiB7IG5hbWUsIHBsYXllck51bSwgdHlwZTogXCJBSVwiLCBib2FyZE9iaiwgYXR0YWNrRW5lbXksIGluaXRpYWxQbGFjZSB9O1xufTtcblxuZXhwb3J0IHR5cGUgeyBBSVBsYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQUk7XG4iLCJpbXBvcnQgdHlwZSB7IEFJUGxheWVyIH0gZnJvbSBcIi4vYWlQbGF5ZXJcIjtcbmltcG9ydCB0eXBlIHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlQUkgZnJvbSBcIi4vYWlQbGF5ZXJcIjtcbmltcG9ydCBjcmVhdGVQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlR2FtZWJvYXJkIGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IGNyZWF0ZVNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHsgcHVibGlzaCwgc3Vic2NyaWJlIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IHN0YXJ0R2FtZSA9IChwbGF5ZXIxTmFtZTogc3RyaW5nLCBwbGF5ZXIyTmFtZTogc3RyaW5nKSA9PiB7XG4gIGxldCBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllciA9IGNyZWF0ZVBsYXllcihcbiAgICBjcmVhdGVHYW1lYm9hcmQsXG4gICAgcGxheWVyMU5hbWUsXG4gICAgXCJwbGF5ZXIxXCJcbiAgKTtcbiAgbGV0IHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyID0gY3JlYXRlUGxheWVyKFxuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBwbGF5ZXIyTmFtZSxcbiAgICBcInBsYXllcjJcIlxuICApO1xuICBpZiAocGxheWVyMU5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIxID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkLCBcInBsYXllcjFcIik7XG4gIH1cbiAgaWYgKHBsYXllcjJOYW1lID09PSBcIlwiKSB7XG4gICAgcGxheWVyMiA9IGNyZWF0ZUFJKGNyZWF0ZUdhbWVib2FyZCwgXCJwbGF5ZXIyXCIpO1xuICB9XG4gIHBsYXllcjEuaW5pdGlhbFBsYWNlKGNyZWF0ZVNoaXApO1xuICBwbGF5ZXIyLmluaXRpYWxQbGFjZShjcmVhdGVTaGlwKTtcbiAgaWYgKFxuICAgIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiSHVtYW5cIikgfHxcbiAgICAocGxheWVyMS50eXBlID09PSBcIkh1bWFuXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkFJXCIpXG4gICkge1xuICAgIHB1Ymxpc2goXCJkaXNwbGF5LWJvYXJkc1wiLCBwbGF5ZXIxLCBwbGF5ZXIyKTtcbiAgfVxufTtcblxuY29uc3QgcmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIgPSAoXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXJQb3M6IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGlmIChwbGF5ZXJQb3MgPT09IFwicGxheWVyMVwiKSB7XG4gICAgcGxheWVyMi5hdHRhY2tFbmVteShwbGF5ZXIxLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIG1haW4pIHtcbiAgICAgICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqKTtcbiAgICAgICAgcHVibGlzaChcInJlZGlzcGxheUFmdGVyQmVnaW5cIik7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG4gIGlmIChwbGF5ZXJQb3MgPT09IFwicGxheWVyMlwiKSB7XG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjIudHlwZSA9PT0gXCJBSVwiICYmIG1haW4pIHtcbiAgICAgICAgcGxheWVyMi5hdHRhY2tFbmVteShwbGF5ZXIxLmJvYXJkT2JqKTtcbiAgICAgICAgcHVibGlzaChcInJlZGlzcGxheUFmdGVyQmVnaW5cIik7XG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG59O1xuXG5leHBvcnQgeyBzdGFydEdhbWUsIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIH07XG4iLCJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiSHVtYW5cIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBwbGF5ZXJOdW0sXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXS50b1N0cmluZygpID09PSBmdW5jLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIgfCBudWxsKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIgfCBudWxsKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gbnVsbCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBheGlzLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJnYW1lTG9vcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXR0bGVzaGlwX3RzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBfdHNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIixcInNyY19zY3JpcHRzX2dhbWVib2FyZF90c1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2dhbWVMb29wLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY3JlYXRlUGxheWVyIiwiY3JlYXRlQUkiLCJib2FyZEZ1bmMiLCJwbGF5ZXJOdW0iLCJjb29yZHNBcnIiLCJpIiwiaiIsInB1c2giLCJuYW1lIiwiYm9hcmRPYmoiLCJhdHRhY2siLCJhdHRhY2tFbmVteSIsImluaXRpYWxQbGFjZSIsInNoaXBGdW5jIiwic2hpcHMiLCJmb3JFYWNoIiwic2hpcE5hbWUiLCJheGlzIiwiTWF0aCIsInJhbmRvbSIsImF2YWlsYWJsZUNvb3JkcyIsImdldEFJQXZhaWxhYmxlQ29vcmRzIiwicmFuZG9tQ29vcmQiLCJmbG9vciIsImxlbmd0aCIsInBsYWNlU2hpcCIsImVuZW15IiwiY29vcmRzIiwic3BsaWNlIiwidHlwZSIsImNyZWF0ZUdhbWVib2FyZCIsImNyZWF0ZVNoaXAiLCJwdWJsaXNoIiwic3RhcnRHYW1lIiwicGxheWVyMU5hbWUiLCJwbGF5ZXIyTmFtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwicmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIiLCJwbGF5ZXJQb3MiLCJtYWluIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBsYXllck5hbWUiLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJyZW1vdmVTaGlwIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiZnVuYyIsInVuc3Vic2NyaWJlIiwidG9TdHJpbmciLCJhcmdzIiwiZnVuY3MiLCJBcnJheSIsImlzQXJyYXkiLCJzaGlwQXJyYXkiLCJzaGlwTGVuZ3RocyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImdldCIsIm51bSIsInVuZGVmaW5lZCIsImhpdCIsImlzU3VuayIsImV2ZXJ5IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9