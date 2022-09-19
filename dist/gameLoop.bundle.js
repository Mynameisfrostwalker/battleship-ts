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

var attackEvents = function attackEvents(player, lasthit) {
  if (player === "Human") {
    if (lasthit && lasthit[1] === "miss") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Damn to the depths, we missed by a mile");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
      });
    } else if (lasthit && lasthit[0] === "unsunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Jolly 'eavens, we've 'it their ship!");
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    } else if (lasthit && lasthit[0] === "sunk") {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Amazin' Cap'n, their ".concat(lasthit[1], " been down to Davy Jones' Locker!"));
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
      });
    }
  } else if (lasthit && lasthit[1] === "miss") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Fortune be smilin' upon us, they've missed our ships.");
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("sploosh");
    });
  } else if (lasthit && lasthit[0] === "unsunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Damn to the depths, they've 'it our ".concat(lasthit[1]));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  } else if (lasthit && lasthit[0] === "sunk") {
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Shiver me timbers, our ".concat(lasthit[1], " gone down under"));
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("explosion", function () {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("shipHit");
    });
  }
};

var receiveAttackCoords1AI1Player = function receiveAttackCoords1AI1Player(coords, player1, player2, playerPos) {
  var main = document.querySelector("main");

  if (player1.boardObj.areAllSunk()) {
    console.log("Player2 won!");
    return;
  }

  if (player2.boardObj.areAllSunk()) {
    console.log("Player1 won!");
    return;
  }

  if (playerPos === "player1") {
    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());
    setTimeout(function () {
      if (player2.boardObj.areAllSunk()) {
        console.log("Player1 won!");
        return;
      }

      if (player1.type === "AI" && main) {
        player1.attackEnemy(player2.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        attackEvents(player1.type, player2.boardObj.checkLastHit());
        setTimeout(function () {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
  }

  if (playerPos === "player2") {
    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      if (player1.boardObj.areAllSunk()) {
        console.log("Player2 won!");
        return;
      }

      if (player2.type === "AI" && main) {
        player2.attackEnemy(player1.boardObj);
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
        attackEvents(player2.type, player1.boardObj.checkLastHit());
        setTimeout(function () {
          main.classList.remove("unclickable");
        }, 2000);
      }
    }, 3000);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ0pBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZUxvb3AudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9zaGlwLnRzIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQm9hcmRGdW5jIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5pbnRlcmZhY2UgQUlQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiQUlcIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQpID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xufVxuXG5jb25zdCBjcmVhdGVBSSA9IChcbiAgYm9hcmRGdW5jOiBCb2FyZEZ1bmMsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogQUlQbGF5ZXIgPT4ge1xuICBjb25zdCBjb29yZHNBcnI6IFtudW1iZXIsIG51bWJlcl1bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpICs9IDEpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqICs9IDEpIHtcbiAgICAgIGNvb3Jkc0Fyci5wdXNoKFtpLCBqXSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIGJvYXJkT2JqLFxuICAgIGF0dGFja0VuZW15OiBhdHRhY2ssXG4gIH0gPSBjcmVhdGVQbGF5ZXIoYm9hcmRGdW5jLCBcIkFJXCIsIHBsYXllck51bSk7XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmRPYmouZ2V0QUlBdmFpbGFibGVDb29yZHMoXG4gICAgICAgIGF4aXMsXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBzaGlwRnVuY1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID1cbiAgICAgICAgYXZhaWxhYmxlQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3Jkcy5sZW5ndGgpXTtcbiAgICAgIGJvYXJkT2JqLnBsYWNlU2hpcChzaGlwRnVuYywgcmFuZG9tQ29vcmQsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkKSA9PiB7XG4gICAgY29uc3QgcmFuZG9tID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY29vcmRzQXJyLmxlbmd0aCk7XG4gICAgY29uc3QgY29vcmRzID0gY29vcmRzQXJyLnNwbGljZShyYW5kb20sIDEpO1xuICAgIGF0dGFjayhlbmVteSwgY29vcmRzWzBdKTtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBwbGF5ZXJOdW0sIHR5cGU6IFwiQUlcIiwgYm9hcmRPYmosIGF0dGFja0VuZW15LCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQUlQbGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJO1xuIiwiaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUFJIGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSB9IGZyb20gXCIuL3B1YnN1YlwiO1xuXG5jb25zdCBzdGFydEdhbWUgPSAocGxheWVyMU5hbWU6IHN0cmluZywgcGxheWVyMk5hbWU6IHN0cmluZykgPT4ge1xuICBsZXQgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIHBsYXllcjFOYW1lLFxuICAgIFwicGxheWVyMVwiXG4gICk7XG4gIGxldCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllciA9IGNyZWF0ZVBsYXllcihcbiAgICBjcmVhdGVHYW1lYm9hcmQsXG4gICAgcGxheWVyMk5hbWUsXG4gICAgXCJwbGF5ZXIyXCJcbiAgKTtcbiAgaWYgKHBsYXllcjFOYW1lID09PSBcIlwiKSB7XG4gICAgcGxheWVyMSA9IGNyZWF0ZUFJKGNyZWF0ZUdhbWVib2FyZCwgXCJwbGF5ZXIxXCIpO1xuICB9XG4gIGlmIChwbGF5ZXIyTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllcjIgPSBjcmVhdGVBSShjcmVhdGVHYW1lYm9hcmQsIFwicGxheWVyMlwiKTtcbiAgfVxuICBwbGF5ZXIxLmluaXRpYWxQbGFjZShjcmVhdGVTaGlwKTtcbiAgcGxheWVyMi5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIGlmIChcbiAgICAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgcGxheWVyMi50eXBlID09PSBcIkh1bWFuXCIpIHx8XG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJIdW1hblwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJBSVwiKVxuICApIHtcbiAgICBwdWJsaXNoKFwiZGlzcGxheS1ib2FyZHNcIiwgcGxheWVyMSwgcGxheWVyMik7XG4gIH1cbn07XG5cbmNvbnN0IGF0dGFja0V2ZW50cyA9IChcbiAgcGxheWVyOiBcIkFJXCIgfCBcIkh1bWFuXCIsXG4gIGxhc3RoaXQ6IFtzdHJpbmcsIHN0cmluZ10gfCBudWxsXG4pID0+IHtcbiAgaWYgKHBsYXllciA9PT0gXCJIdW1hblwiKSB7XG4gICAgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFsxXSA9PT0gXCJtaXNzXCIpIHtcbiAgICAgIHB1Ymxpc2goXCJwaXJhdGUtdGV4dFwiLCBcIkRhbW4gdG8gdGhlIGRlcHRocywgd2UgbWlzc2VkIGJ5IGEgbWlsZVwiKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic3Bsb29zaFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInVuc3Vua1wiKSB7XG4gICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgYEpvbGx5ICdlYXZlbnMsIHdlJ3ZlICdpdCB0aGVpciBzaGlwIWApO1xuICAgICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICAgIHB1Ymxpc2goXCJzaGlwSGl0XCIpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMF0gPT09IFwic3Vua1wiKSB7XG4gICAgICBwdWJsaXNoKFxuICAgICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICAgIGBBbWF6aW4nIENhcCduLCB0aGVpciAke2xhc3RoaXRbMV19IGJlZW4gZG93biB0byBEYXZ5IEpvbmVzJyBMb2NrZXIhYFxuICAgICAgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMV0gPT09IFwibWlzc1wiKSB7XG4gICAgcHVibGlzaChcbiAgICAgIFwicGlyYXRlLXRleHRcIixcbiAgICAgIFwiRm9ydHVuZSBiZSBzbWlsaW4nIHVwb24gdXMsIHRoZXkndmUgbWlzc2VkIG91ciBzaGlwcy5cIlxuICAgICk7XG4gICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICBwdWJsaXNoKFwic3Bsb29zaFwiKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMF0gPT09IFwidW5zdW5rXCIpIHtcbiAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgYERhbW4gdG8gdGhlIGRlcHRocywgdGhleSd2ZSAnaXQgb3VyICR7bGFzdGhpdFsxXX1gKTtcbiAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgIHB1Ymxpc2goXCJzaGlwSGl0XCIpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFswXSA9PT0gXCJzdW5rXCIpIHtcbiAgICBwdWJsaXNoKFxuICAgICAgXCJwaXJhdGUtdGV4dFwiLFxuICAgICAgYFNoaXZlciBtZSB0aW1iZXJzLCBvdXIgJHtsYXN0aGl0WzFdfSBnb25lIGRvd24gdW5kZXJgXG4gICAgKTtcbiAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgIHB1Ymxpc2goXCJzaGlwSGl0XCIpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByZWNlaXZlQXR0YWNrQ29vcmRzMUFJMVBsYXllciA9IChcbiAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICBwbGF5ZXIxOiBQbGF5ZXIgfCBBSVBsYXllcixcbiAgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllclBvczogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKSA9PiB7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbiAgaWYgKHBsYXllcjEuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgY29uc29sZS5sb2coXCJQbGF5ZXIyIHdvbiFcIik7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmIChwbGF5ZXIyLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgIGNvbnNvbGUubG9nKFwiUGxheWVyMSB3b24hXCIpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocGxheWVyUG9zID09PSBcInBsYXllcjFcIikge1xuICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaiwgY29vcmRzKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMi50eXBlLCBwbGF5ZXIxLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHBsYXllcjIuYm9hcmRPYmouYXJlQWxsU3VuaygpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUGxheWVyMSB3b24hXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocGxheWVyMS50eXBlID09PSBcIkFJXCIgJiYgbWFpbikge1xuICAgICAgICBwbGF5ZXIxLmF0dGFja0VuZW15KHBsYXllcjIuYm9hcmRPYmopO1xuICAgICAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICAgICAgYXR0YWNrRXZlbnRzKHBsYXllcjEudHlwZSwgcGxheWVyMi5ib2FyZE9iai5jaGVja0xhc3RIaXQoKSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICAgIH1cbiAgICB9LCAzMDAwKTtcbiAgfVxuXG4gIGlmIChwbGF5ZXJQb3MgPT09IFwicGxheWVyMlwiKSB7XG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJQbGF5ZXIyIHdvbiFcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaik7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgICAgICBhdHRhY2tFdmVudHMocGxheWVyMi50eXBlLCBwbGF5ZXIxLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0sIDMwMDApO1xuICB9XG59O1xuXG5leHBvcnQgeyBzdGFydEdhbWUsIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIH07XG4iLCJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiSHVtYW5cIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBwbGF5ZXJOdW0sXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsInR5cGUgQW55ZnVuY3Rpb25zID0gKC4uLmFyZ3M6IHVua25vd25bXSkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGV2ZW50c1tldmVudE5hbWVdID0gZXZlbnRzW2V2ZW50TmFtZV0gfHwgW107XG4gIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXS50b1N0cmluZygpID09PSBmdW5jLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG4iLCJ0eXBlIFNoaXBOYW1lcyA9XG4gIHwgXCJjYXJyaWVyXCJcbiAgfCBcImJhdHRsZXNoaXBcIlxuICB8IFwiY3J1aXNlclwiXG4gIHwgXCJzdWJtYXJpbmVcIlxuICB8IFwiZGVzdHJveWVyXCI7XG5cbnR5cGUgU2hpcFZhbHVlcyA9IFNoaXBOYW1lcyB8IFwiaGl0XCI7XG5cbmludGVyZmFjZSBTaGlwIHtcbiAgbmFtZTogU2hpcE5hbWVzO1xuICBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgbGVuZ3RoOiBudW1iZXI7XG4gIGdldChudW0/OiBudW1iZXIgfCBudWxsKTogU2hpcFZhbHVlc1tdIHwgU2hpcFZhbHVlcztcbiAgaGl0KG51bTogbnVtYmVyKTogdm9pZDtcbiAgaXNTdW5rKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGNyZWF0ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIik6IFNoaXAgPT4ge1xuICBjb25zdCBzaGlwQXJyYXk6IFNoaXBWYWx1ZXNbXSA9IFtdO1xuICBjb25zdCBzaGlwTGVuZ3RocyA9IHtcbiAgICBjYXJyaWVyOiA1LFxuICAgIGJhdHRsZXNoaXA6IDQsXG4gICAgY3J1aXNlcjogMyxcbiAgICBzdWJtYXJpbmU6IDMsXG4gICAgZGVzdHJveWVyOiAyLFxuICB9O1xuXG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHNoaXBMZW5ndGhzW25hbWVdOyBpICs9IDEpIHtcbiAgICBzaGlwQXJyYXkucHVzaChuYW1lKTtcbiAgfVxuXG4gIGNvbnN0IGdldCA9IChudW0/OiBudW1iZXIgfCBudWxsKSA9PlxuICAgIG51bSAhPT0gdW5kZWZpbmVkICYmIG51bSAhPT0gbnVsbCAmJiBudW0gPj0gMCAmJiBudW0gPCBzaGlwTGVuZ3Roc1tuYW1lXVxuICAgICAgPyBzaGlwQXJyYXlbbnVtXVxuICAgICAgOiBzaGlwQXJyYXk7XG5cbiAgY29uc3QgaGl0ID0gKG51bTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdKSB7XG4gICAgICBzaGlwQXJyYXlbbnVtXSA9IFwiaGl0XCI7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGlzU3VuayA9ICgpID0+IHNoaXBBcnJheS5ldmVyeSgodmFsdWUpID0+IHZhbHVlID09PSBcImhpdFwiKTtcblxuICByZXR1cm4geyBuYW1lLCBheGlzLCBsZW5ndGg6IHNoaXBMZW5ndGhzW25hbWVdLCBnZXQsIGhpdCwgaXNTdW5rIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFNoaXBWYWx1ZXMsIFNoaXBOYW1lcywgU2hpcCB9O1xuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU2hpcDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJnYW1lTG9vcFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtiYXR0bGVzaGlwX3RzXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JhdHRsZXNoaXBfdHNcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2xvZGFzaF9sb2Rhc2hfanNcIixcInNyY19zY3JpcHRzX2dhbWVib2FyZF90c1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9zY3JpcHRzL2dhbWVMb29wLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiY3JlYXRlUGxheWVyIiwiY3JlYXRlQUkiLCJib2FyZEZ1bmMiLCJwbGF5ZXJOdW0iLCJjb29yZHNBcnIiLCJpIiwiaiIsInB1c2giLCJuYW1lIiwiYm9hcmRPYmoiLCJhdHRhY2siLCJhdHRhY2tFbmVteSIsImluaXRpYWxQbGFjZSIsInNoaXBGdW5jIiwic2hpcHMiLCJmb3JFYWNoIiwic2hpcE5hbWUiLCJheGlzIiwiTWF0aCIsInJhbmRvbSIsImF2YWlsYWJsZUNvb3JkcyIsImdldEFJQXZhaWxhYmxlQ29vcmRzIiwicmFuZG9tQ29vcmQiLCJmbG9vciIsImxlbmd0aCIsInBsYWNlU2hpcCIsImVuZW15IiwiY29vcmRzIiwic3BsaWNlIiwidHlwZSIsImNyZWF0ZUdhbWVib2FyZCIsImNyZWF0ZVNoaXAiLCJwdWJsaXNoIiwic3RhcnRHYW1lIiwicGxheWVyMU5hbWUiLCJwbGF5ZXIyTmFtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYXR0YWNrRXZlbnRzIiwicGxheWVyIiwibGFzdGhpdCIsInJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIiwicGxheWVyUG9zIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFyZUFsbFN1bmsiLCJjb25zb2xlIiwibG9nIiwiY2hlY2tMYXN0SGl0Iiwic2V0VGltZW91dCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInBsYXllck5hbWUiLCJib2FyZCIsInJlY2VpdmVBdHRhY2siLCJyZW1vdmVTaGlwIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwiZXZlbnRzIiwic3Vic2NyaWJlIiwiZXZlbnROYW1lIiwiZnVuYyIsInVuc3Vic2NyaWJlIiwidG9TdHJpbmciLCJhcmdzIiwiZnVuY3MiLCJBcnJheSIsImlzQXJyYXkiLCJzaGlwQXJyYXkiLCJzaGlwTGVuZ3RocyIsImNhcnJpZXIiLCJiYXR0bGVzaGlwIiwiY3J1aXNlciIsInN1Ym1hcmluZSIsImRlc3Ryb3llciIsImdldCIsIm51bSIsInVuZGVmaW5lZCIsImhpdCIsImlzU3VuayIsImV2ZXJ5IiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9