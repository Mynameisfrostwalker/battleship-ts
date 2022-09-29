"use strict";
(self["webpackChunkbattleship_ts"] = self["webpackChunkbattleship_ts"] || []).push([["src_scripts_gameLoop_ts"],{

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
  var lastHit = null;
  var closeCells = [];
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
    var _lastHit, _lastHit2, _lastHit3;

    if (lastHit && ((_lastHit = lastHit) === null || _lastHit === void 0 ? void 0 : _lastHit.value) !== "hit" && ((_lastHit2 = lastHit) === null || _lastHit2 === void 0 ? void 0 : _lastHit2.value) !== "empty" && ((_lastHit3 = lastHit) === null || _lastHit3 === void 0 ? void 0 : _lastHit3.value.get(lastHit.position)) === "hit") {
      if (lastHit.left && coordsArr.some(function (coords) {
        var _lastHit4, _lastHit4$left, _lastHit5, _lastHit5$left;

        return ((_lastHit4 = lastHit) === null || _lastHit4 === void 0 ? void 0 : (_lastHit4$left = _lastHit4.left) === null || _lastHit4$left === void 0 ? void 0 : _lastHit4$left.coords[0]) === coords[0] && ((_lastHit5 = lastHit) === null || _lastHit5 === void 0 ? void 0 : (_lastHit5$left = _lastHit5.left) === null || _lastHit5$left === void 0 ? void 0 : _lastHit5$left.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.left);
      }

      if (lastHit.right && coordsArr.some(function (coords) {
        var _lastHit6, _lastHit6$right, _lastHit7, _lastHit7$right;

        return ((_lastHit6 = lastHit) === null || _lastHit6 === void 0 ? void 0 : (_lastHit6$right = _lastHit6.right) === null || _lastHit6$right === void 0 ? void 0 : _lastHit6$right.coords[0]) === coords[0] && ((_lastHit7 = lastHit) === null || _lastHit7 === void 0 ? void 0 : (_lastHit7$right = _lastHit7.right) === null || _lastHit7$right === void 0 ? void 0 : _lastHit7$right.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.right);
      }

      if (lastHit.top && coordsArr.some(function (coords) {
        var _lastHit8, _lastHit8$top, _lastHit9, _lastHit9$top;

        return ((_lastHit8 = lastHit) === null || _lastHit8 === void 0 ? void 0 : (_lastHit8$top = _lastHit8.top) === null || _lastHit8$top === void 0 ? void 0 : _lastHit8$top.coords[0]) === coords[0] && ((_lastHit9 = lastHit) === null || _lastHit9 === void 0 ? void 0 : (_lastHit9$top = _lastHit9.top) === null || _lastHit9$top === void 0 ? void 0 : _lastHit9$top.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.top);
      }

      if (lastHit.bottom && coordsArr.some(function (coords) {
        var _lastHit10, _lastHit10$bottom, _lastHit11, _lastHit11$bottom;

        return ((_lastHit10 = lastHit) === null || _lastHit10 === void 0 ? void 0 : (_lastHit10$bottom = _lastHit10.bottom) === null || _lastHit10$bottom === void 0 ? void 0 : _lastHit10$bottom.coords[0]) === coords[0] && ((_lastHit11 = lastHit) === null || _lastHit11 === void 0 ? void 0 : (_lastHit11$bottom = _lastHit11.bottom) === null || _lastHit11$bottom === void 0 ? void 0 : _lastHit11$bottom.coords[1]) === coords[1];
      })) {
        closeCells.push(lastHit.bottom);
      }

      lastHit = null;
    }

    if (closeCells.length > 0) {
      attack(enemy, closeCells[0].coords);

      var _hitCell = enemy.board.find(function (cell) {
        return cell.coords[0] === closeCells[0].coords[0] && cell.coords[1] === closeCells[0].coords[1];
      }) || null;

      lastHit = _hitCell;
      coordsArr = coordsArr.filter(function (coords) {
        return !(closeCells[0].coords[0] === coords[0] && closeCells[0].coords[1] === coords[1]);
      });
      closeCells.shift();
      return;
    }

    var random = Math.floor(Math.random() * coordsArr.length);
    var coords = coordsArr.splice(random, 1);
    attack(enemy, coords[0]);
    var hitCell = enemy.board.find(function (cell) {
      return cell.coords[0] === coords[0][0] && cell.coords[1] === coords[0][1];
    }) || null;
    lastHit = hitCell;
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
/* harmony export */   "AIstart": () => (/* binding */ AIstart),
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

  if (playerPos === "player1") {
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "defeat");
      return;
    }

    player2.attackEnemy(player1.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player2.type, player1.boardObj.checkLastHit());
    setTimeout(function () {
      if (player1.boardObj.areAllSunk()) {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
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
    if (player1.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "defeat");
      return;
    }

    if (player2.boardObj.areAllSunk()) {
      (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
      return;
    }

    player1.attackEnemy(player2.boardObj, coords);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      if (player2.boardObj.areAllSunk()) {
        (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("game-over", "victory");
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

var AIstart = function AIstart(player1, player2) {
  var main = document.querySelector("main");

  if (player1.type === "AI" && main) {
    player1.attackEnemy(player2.boardObj);
    (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("redisplayAfterBegin");
    attackEvents(player1.type, player2.boardObj.checkLastHit());
    setTimeout(function () {
      main.classList.remove("unclickable");
    }, 2000);
  }

  (0,_pubsub__WEBPACK_IMPORTED_MODULE_4__.publish)("pirate-text", "Fire when ready Cap'n!");
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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRStDLFdBQVcsQ0FBQy9ELElBQUQsQ0FBakM7SUFBeUNvQixHQUFHLEVBQUhBLEdBQXpDO0lBQThDbUQsR0FBRyxFQUFIQSxHQUE5QztJQUFtREMsTUFBTSxFQUFOQTtFQUFuRCxDQUFQO0FBQ0QsQ0E1QkQ7O0FBK0JBLGlFQUFlbkMsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9haVBsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvZ2FtZUxvb3AudHMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy8uL3NyYy9zY3JpcHRzL3BsYXllci50cyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzLy4vc3JjL3NjcmlwdHMvc2hpcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IEJvYXJkRnVuYyB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IHR5cGUgeyBHYW1lYm9hcmQsIEF4aXMgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCB0eXBlIHsgU2hpcCwgU2hpcE5hbWVzIH0gZnJvbSBcIi4vc2hpcFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuaW50ZXJmYWNlIEFJUGxheWVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICB0eXBlOiBcIkFJXCI7XG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIjtcbiAgYm9hcmRPYmo6IEdhbWVib2FyZDtcbiAgYXR0YWNrRW5lbXk6IChlbmVteTogR2FtZWJvYXJkKSA9PiB2b2lkO1xuICBpbml0aWFsUGxhY2U6IChzaGlwRnVuYzogKG5hbWU6IFNoaXBOYW1lcywgYXhpczogQXhpcykgPT4gU2hpcCkgPT4gdm9pZDtcbn1cblxuY29uc3QgY3JlYXRlQUkgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOdW06IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbik6IEFJUGxheWVyID0+IHtcbiAgbGV0IGxhc3RIaXQ6IENlbGwgfCBudWxsID0gbnVsbDtcbiAgY29uc3QgY2xvc2VDZWxsczogQ2VsbFtdID0gW107XG5cbiAgbGV0IGNvb3Jkc0FycjogW251bWJlciwgbnVtYmVyXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkgKz0gMSkge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgMTA7IGogKz0gMSkge1xuICAgICAgY29vcmRzQXJyLnB1c2goW2ksIGpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgYm9hcmRPYmosXG4gICAgYXR0YWNrRW5lbXk6IGF0dGFjayxcbiAgfSA9IGNyZWF0ZVBsYXllcihib2FyZEZ1bmMsIFwiQUlcIiwgcGxheWVyTnVtKTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZE9iai5nZXRBSUF2YWlsYWJsZUNvb3JkcyhcbiAgICAgICAgYXhpcyxcbiAgICAgICAgc2hpcE5hbWUsXG4gICAgICAgIHNoaXBGdW5jXG4gICAgICApO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmQgPVxuICAgICAgICBhdmFpbGFibGVDb29yZHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXZhaWxhYmxlQ29vcmRzLmxlbmd0aCldO1xuICAgICAgYm9hcmRPYmoucGxhY2VTaGlwKHNoaXBGdW5jLCByYW5kb21Db29yZCwgYXhpcywgc2hpcE5hbWUpO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQpID0+IHtcbiAgICBpZiAoXG4gICAgICBsYXN0SGl0ICYmXG4gICAgICBsYXN0SGl0Py52YWx1ZSAhPT0gXCJoaXRcIiAmJlxuICAgICAgbGFzdEhpdD8udmFsdWUgIT09IFwiZW1wdHlcIiAmJlxuICAgICAgbGFzdEhpdD8udmFsdWUuZ2V0KGxhc3RIaXQucG9zaXRpb24pID09PSBcImhpdFwiXG4gICAgKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXQubGVmdCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdD8ubGVmdD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXQ/LmxlZnQ/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2gobGFzdEhpdC5sZWZ0KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdC5yaWdodCAmJlxuICAgICAgICBjb29yZHNBcnIuc29tZShcbiAgICAgICAgICAoY29vcmRzKSA9PlxuICAgICAgICAgICAgbGFzdEhpdD8ucmlnaHQ/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0Py5yaWdodD8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChsYXN0SGl0LnJpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChcbiAgICAgICAgbGFzdEhpdC50b3AgJiZcbiAgICAgICAgY29vcmRzQXJyLnNvbWUoXG4gICAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAgIGxhc3RIaXQ/LnRvcD8uY29vcmRzWzBdID09PSBjb29yZHNbMF0gJiZcbiAgICAgICAgICAgIGxhc3RIaXQ/LnRvcD8uY29vcmRzWzFdID09PSBjb29yZHNbMV1cbiAgICAgICAgKVxuICAgICAgKSB7XG4gICAgICAgIGNsb3NlQ2VsbHMucHVzaChsYXN0SGl0LnRvcCk7XG4gICAgICB9XG4gICAgICBpZiAoXG4gICAgICAgIGxhc3RIaXQuYm90dG9tICYmXG4gICAgICAgIGNvb3Jkc0Fyci5zb21lKFxuICAgICAgICAgIChjb29yZHMpID0+XG4gICAgICAgICAgICBsYXN0SGl0Py5ib3R0b20/LmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdICYmXG4gICAgICAgICAgICBsYXN0SGl0Py5ib3R0b20/LmNvb3Jkc1sxXSA9PT0gY29vcmRzWzFdXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBjbG9zZUNlbGxzLnB1c2gobGFzdEhpdC5ib3R0b20pO1xuICAgICAgfVxuXG4gICAgICBsYXN0SGl0ID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNsb3NlQ2VsbHMubGVuZ3RoID4gMCkge1xuICAgICAgYXR0YWNrKGVuZW15LCBjbG9zZUNlbGxzWzBdLmNvb3Jkcyk7XG4gICAgICBjb25zdCBoaXRDZWxsID1cbiAgICAgICAgZW5lbXkuYm9hcmQuZmluZChcbiAgICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICAgIGNlbGwuY29vcmRzWzBdID09PSBjbG9zZUNlbGxzWzBdLmNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2VsbC5jb29yZHNbMV0gPT09IGNsb3NlQ2VsbHNbMF0uY29vcmRzWzFdXG4gICAgICAgICkgfHwgbnVsbDtcbiAgICAgIGxhc3RIaXQgPSBoaXRDZWxsO1xuICAgICAgY29vcmRzQXJyID0gY29vcmRzQXJyLmZpbHRlcihcbiAgICAgICAgKGNvb3JkcykgPT5cbiAgICAgICAgICAhKFxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXS5jb29yZHNbMF0gPT09IGNvb3Jkc1swXSAmJlxuICAgICAgICAgICAgY2xvc2VDZWxsc1swXS5jb29yZHNbMV0gPT09IGNvb3Jkc1sxXVxuICAgICAgICAgIClcbiAgICAgICk7XG4gICAgICBjbG9zZUNlbGxzLnNoaWZ0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNvb3Jkc0Fyci5sZW5ndGgpO1xuICAgIGNvbnN0IGNvb3JkcyA9IGNvb3Jkc0Fyci5zcGxpY2UocmFuZG9tLCAxKTtcbiAgICBhdHRhY2soZW5lbXksIGNvb3Jkc1swXSk7XG4gICAgY29uc3QgaGl0Q2VsbCA9XG4gICAgICBlbmVteS5ib2FyZC5maW5kKFxuICAgICAgICAoY2VsbCkgPT5cbiAgICAgICAgICBjZWxsLmNvb3Jkc1swXSA9PT0gY29vcmRzWzBdWzBdICYmIGNlbGwuY29vcmRzWzFdID09PSBjb29yZHNbMF1bMV1cbiAgICAgICkgfHwgbnVsbDtcbiAgICBsYXN0SGl0ID0gaGl0Q2VsbDtcbiAgfTtcblxuICByZXR1cm4geyBuYW1lLCBwbGF5ZXJOdW0sIHR5cGU6IFwiQUlcIiwgYm9hcmRPYmosIGF0dGFja0VuZW15LCBpbml0aWFsUGxhY2UgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgQUlQbGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFJO1xuIiwiaW1wb3J0IHR5cGUgeyBBSVBsYXllciB9IGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgdHlwZSB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUFJIGZyb20gXCIuL2FpUGxheWVyXCI7XG5pbXBvcnQgY3JlYXRlUGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGNyZWF0ZUdhbWVib2FyZCBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcbmltcG9ydCBjcmVhdGVTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3Qgc3RhcnRHYW1lID0gKHBsYXllcjFOYW1lOiBzdHJpbmcsIHBsYXllcjJOYW1lOiBzdHJpbmcpID0+IHtcbiAgbGV0IHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyID0gY3JlYXRlUGxheWVyKFxuICAgIGNyZWF0ZUdhbWVib2FyZCxcbiAgICBwbGF5ZXIxTmFtZSxcbiAgICBcInBsYXllcjFcIlxuICApO1xuICBsZXQgcGxheWVyMjogUGxheWVyIHwgQUlQbGF5ZXIgPSBjcmVhdGVQbGF5ZXIoXG4gICAgY3JlYXRlR2FtZWJvYXJkLFxuICAgIHBsYXllcjJOYW1lLFxuICAgIFwicGxheWVyMlwiXG4gICk7XG4gIGlmIChwbGF5ZXIxTmFtZSA9PT0gXCJcIikge1xuICAgIHBsYXllcjEgPSBjcmVhdGVBSShjcmVhdGVHYW1lYm9hcmQsIFwicGxheWVyMVwiKTtcbiAgfVxuICBpZiAocGxheWVyMk5hbWUgPT09IFwiXCIpIHtcbiAgICBwbGF5ZXIyID0gY3JlYXRlQUkoY3JlYXRlR2FtZWJvYXJkLCBcInBsYXllcjJcIik7XG4gIH1cbiAgcGxheWVyMS5pbml0aWFsUGxhY2UoY3JlYXRlU2hpcCk7XG4gIHBsYXllcjIuaW5pdGlhbFBsYWNlKGNyZWF0ZVNoaXApO1xuICBpZiAoXG4gICAgKHBsYXllcjEudHlwZSA9PT0gXCJBSVwiICYmIHBsYXllcjIudHlwZSA9PT0gXCJIdW1hblwiKSB8fFxuICAgIChwbGF5ZXIxLnR5cGUgPT09IFwiSHVtYW5cIiAmJiBwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIilcbiAgKSB7XG4gICAgcHVibGlzaChcImRpc3BsYXktYm9hcmRzXCIsIHBsYXllcjEsIHBsYXllcjIpO1xuICB9XG59O1xuXG5jb25zdCBhdHRhY2tFdmVudHMgPSAoXG4gIHBsYXllcjogXCJBSVwiIHwgXCJIdW1hblwiLFxuICBsYXN0aGl0OiBbc3RyaW5nLCBzdHJpbmddIHwgbnVsbFxuKSA9PiB7XG4gIGlmIChwbGF5ZXIgPT09IFwiSHVtYW5cIikge1xuICAgIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMV0gPT09IFwibWlzc1wiKSB7XG4gICAgICBwdWJsaXNoKFwicGlyYXRlLXRleHRcIiwgXCJEYW1uIHRvIHRoZSBkZXB0aHMsIHdlIG1pc3NlZCBieSBhIG1pbGVcIik7XG4gICAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaChcInNwbG9vc2hcIik7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGxhc3RoaXQgJiYgbGFzdGhpdFswXSA9PT0gXCJ1bnN1bmtcIikge1xuICAgICAgcHVibGlzaChcInBpcmF0ZS10ZXh0XCIsIGBKb2xseSAnZWF2ZW5zLCB3ZSd2ZSAnaXQgdGhlaXIgc2hpcCFgKTtcbiAgICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInN1bmtcIikge1xuICAgICAgcHVibGlzaChcbiAgICAgICAgXCJwaXJhdGUtdGV4dFwiLFxuICAgICAgICBgQW1hemluJyBDYXAnbiwgdGhlaXIgJHtsYXN0aGl0WzFdfSBiZWVuIGRvd24gdG8gRGF2eSBKb25lcycgTG9ja2VyIWBcbiAgICAgICk7XG4gICAgICBwdWJsaXNoKFwiZXhwbG9zaW9uXCIsICgpID0+IHtcbiAgICAgICAgcHVibGlzaChcInNoaXBIaXRcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzFdID09PSBcIm1pc3NcIikge1xuICAgIHB1Ymxpc2goXG4gICAgICBcInBpcmF0ZS10ZXh0XCIsXG4gICAgICBcIkZvcnR1bmUgYmUgc21pbGluJyB1cG9uIHVzLCB0aGV5J3ZlIG1pc3NlZCBvdXIgc2hpcHMuXCJcbiAgICApO1xuICAgIHB1Ymxpc2goXCJleHBsb3Npb25cIiwgKCkgPT4ge1xuICAgICAgcHVibGlzaChcInNwbG9vc2hcIik7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAobGFzdGhpdCAmJiBsYXN0aGl0WzBdID09PSBcInVuc3Vua1wiKSB7XG4gICAgcHVibGlzaChcInBpcmF0ZS10ZXh0XCIsIGBEYW1uIHRvIHRoZSBkZXB0aHMsIHRoZXkndmUgJ2l0IG91ciAke2xhc3RoaXRbMV19YCk7XG4gICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChsYXN0aGl0ICYmIGxhc3RoaXRbMF0gPT09IFwic3Vua1wiKSB7XG4gICAgcHVibGlzaChcbiAgICAgIFwicGlyYXRlLXRleHRcIixcbiAgICAgIGBTaGl2ZXIgbWUgdGltYmVycywgb3VyICR7bGFzdGhpdFsxXX0gZ29uZSBkb3duIHVuZGVyYFxuICAgICk7XG4gICAgcHVibGlzaChcImV4cGxvc2lvblwiLCAoKSA9PiB7XG4gICAgICBwdWJsaXNoKFwic2hpcEhpdFwiKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgcmVjZWl2ZUF0dGFja0Nvb3JkczFBSTFQbGF5ZXIgPSAoXG4gIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgcGxheWVyMTogUGxheWVyIHwgQUlQbGF5ZXIsXG4gIHBsYXllcjI6IFBsYXllciB8IEFJUGxheWVyLFxuICBwbGF5ZXJQb3M6IFwicGxheWVyMVwiIHwgXCJwbGF5ZXIyXCJcbikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5cbiAgaWYgKHBsYXllclBvcyA9PT0gXCJwbGF5ZXIxXCIpIHtcbiAgICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJ2aWN0b3J5XCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJkZWZlYXRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWVyMi5hdHRhY2tFbmVteShwbGF5ZXIxLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIyLnR5cGUsIHBsYXllcjEuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgcHVibGlzaChcImdhbWUtb3ZlclwiLCBcInZpY3RvcnlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgICAgIHBsYXllcjEuYXR0YWNrRW5lbXkocGxheWVyMi5ib2FyZE9iaik7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgICAgICBhdHRhY2tFdmVudHMocGxheWVyMS50eXBlLCBwbGF5ZXIyLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0sIDMwMDApO1xuICB9XG5cbiAgaWYgKHBsYXllclBvcyA9PT0gXCJwbGF5ZXIyXCIpIHtcbiAgICBpZiAocGxheWVyMS5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgIHB1Ymxpc2goXCJnYW1lLW92ZXJcIiwgXCJkZWZlYXRcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwbGF5ZXIyLmJvYXJkT2JqLmFyZUFsbFN1bmsoKSkge1xuICAgICAgcHVibGlzaChcImdhbWUtb3ZlclwiLCBcInZpY3RvcnlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqLCBjb29yZHMpO1xuICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgIGF0dGFja0V2ZW50cyhwbGF5ZXIxLnR5cGUsIHBsYXllcjIuYm9hcmRPYmouY2hlY2tMYXN0SGl0KCkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAocGxheWVyMi5ib2FyZE9iai5hcmVBbGxTdW5rKCkpIHtcbiAgICAgICAgcHVibGlzaChcImdhbWUtb3ZlclwiLCBcInZpY3RvcnlcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChwbGF5ZXIyLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgICAgIHBsYXllcjIuYXR0YWNrRW5lbXkocGxheWVyMS5ib2FyZE9iaik7XG4gICAgICAgIHB1Ymxpc2goXCJyZWRpc3BsYXlBZnRlckJlZ2luXCIpO1xuICAgICAgICBhdHRhY2tFdmVudHMocGxheWVyMi50eXBlLCBwbGF5ZXIxLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbWFpbi5jbGFzc0xpc3QucmVtb3ZlKFwidW5jbGlja2FibGVcIik7XG4gICAgICAgIH0sIDIwMDApO1xuICAgICAgfVxuICAgIH0sIDMwMDApO1xuICB9XG59O1xuXG5jb25zdCBBSXN0YXJ0ID0gKHBsYXllcjE6IFBsYXllciB8IEFJUGxheWVyLCBwbGF5ZXIyOiBQbGF5ZXIgfCBBSVBsYXllcikgPT4ge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG4gIGlmIChwbGF5ZXIxLnR5cGUgPT09IFwiQUlcIiAmJiBtYWluKSB7XG4gICAgcGxheWVyMS5hdHRhY2tFbmVteShwbGF5ZXIyLmJvYXJkT2JqKTtcbiAgICBwdWJsaXNoKFwicmVkaXNwbGF5QWZ0ZXJCZWdpblwiKTtcbiAgICBhdHRhY2tFdmVudHMocGxheWVyMS50eXBlLCBwbGF5ZXIyLmJvYXJkT2JqLmNoZWNrTGFzdEhpdCgpKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZShcInVuY2xpY2thYmxlXCIpO1xuICAgIH0sIDIwMDApO1xuICB9XG4gIHB1Ymxpc2goXCJwaXJhdGUtdGV4dFwiLCBcIkZpcmUgd2hlbiByZWFkeSBDYXAnbiFcIik7XG59O1xuXG5leHBvcnQgeyBzdGFydEdhbWUsIHJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyLCBBSXN0YXJ0IH07XG4iLCJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiSHVtYW5cIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBwbGF5ZXJOdW0sXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiIsInR5cGUgU2hpcE5hbWVzID1cbiAgfCBcImNhcnJpZXJcIlxuICB8IFwiYmF0dGxlc2hpcFwiXG4gIHwgXCJjcnVpc2VyXCJcbiAgfCBcInN1Ym1hcmluZVwiXG4gIHwgXCJkZXN0cm95ZXJcIjtcblxudHlwZSBTaGlwVmFsdWVzID0gU2hpcE5hbWVzIHwgXCJoaXRcIjtcblxuaW50ZXJmYWNlIFNoaXAge1xuICBuYW1lOiBTaGlwTmFtZXM7XG4gIGF4aXM6IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiO1xuICBsZW5ndGg6IG51bWJlcjtcbiAgZ2V0KG51bT86IG51bWJlciB8IG51bGwpOiBTaGlwVmFsdWVzW10gfCBTaGlwVmFsdWVzO1xuICBoaXQobnVtOiBudW1iZXIpOiB2b2lkO1xuICBpc1N1bmsoKTogYm9vbGVhbjtcbn1cblxuY29uc3QgY3JlYXRlU2hpcCA9IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IFwiaG9yaXpvbnRhbFwiIHwgXCJ2ZXJ0aWNhbFwiKTogU2hpcCA9PiB7XG4gIGNvbnN0IHNoaXBBcnJheTogU2hpcFZhbHVlc1tdID0gW107XG4gIGNvbnN0IHNoaXBMZW5ndGhzID0ge1xuICAgIGNhcnJpZXI6IDUsXG4gICAgYmF0dGxlc2hpcDogNCxcbiAgICBjcnVpc2VyOiAzLFxuICAgIHN1Ym1hcmluZTogMyxcbiAgICBkZXN0cm95ZXI6IDIsXG4gIH07XG5cbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc2hpcExlbmd0aHNbbmFtZV07IGkgKz0gMSkge1xuICAgIHNoaXBBcnJheS5wdXNoKG5hbWUpO1xuICB9XG5cbiAgY29uc3QgZ2V0ID0gKG51bT86IG51bWJlciB8IG51bGwpID0+XG4gICAgbnVtICE9PSB1bmRlZmluZWQgJiYgbnVtICE9PSBudWxsICYmIG51bSA+PSAwICYmIG51bSA8IHNoaXBMZW5ndGhzW25hbWVdXG4gICAgICA/IHNoaXBBcnJheVtudW1dXG4gICAgICA6IHNoaXBBcnJheTtcblxuICBjb25zdCBoaXQgPSAobnVtOiBudW1iZXIpID0+IHtcbiAgICBpZiAobnVtID49IDAgJiYgbnVtIDwgc2hpcExlbmd0aHNbbmFtZV0pIHtcbiAgICAgIHNoaXBBcnJheVtudW1dID0gXCJoaXRcIjtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaXNTdW5rID0gKCkgPT4gc2hpcEFycmF5LmV2ZXJ5KCh2YWx1ZSkgPT4gdmFsdWUgPT09IFwiaGl0XCIpO1xuXG4gIHJldHVybiB7IG5hbWUsIGF4aXMsIGxlbmd0aDogc2hpcExlbmd0aHNbbmFtZV0sIGdldCwgaGl0LCBpc1N1bmsgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgU2hpcFZhbHVlcywgU2hpcE5hbWVzLCBTaGlwIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVTaGlwO1xuIl0sIm5hbWVzIjpbImNyZWF0ZVBsYXllciIsImNyZWF0ZUFJIiwiYm9hcmRGdW5jIiwicGxheWVyTnVtIiwibGFzdEhpdCIsImNsb3NlQ2VsbHMiLCJjb29yZHNBcnIiLCJpIiwiaiIsInB1c2giLCJuYW1lIiwiYm9hcmRPYmoiLCJhdHRhY2siLCJhdHRhY2tFbmVteSIsImluaXRpYWxQbGFjZSIsInNoaXBGdW5jIiwic2hpcHMiLCJmb3JFYWNoIiwic2hpcE5hbWUiLCJheGlzIiwiTWF0aCIsInJhbmRvbSIsImF2YWlsYWJsZUNvb3JkcyIsImdldEFJQXZhaWxhYmxlQ29vcmRzIiwicmFuZG9tQ29vcmQiLCJmbG9vciIsImxlbmd0aCIsInBsYWNlU2hpcCIsImVuZW15IiwidmFsdWUiLCJnZXQiLCJwb3NpdGlvbiIsImxlZnQiLCJzb21lIiwiY29vcmRzIiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJoaXRDZWxsIiwiYm9hcmQiLCJmaW5kIiwiY2VsbCIsImZpbHRlciIsInNoaWZ0Iiwic3BsaWNlIiwidHlwZSIsImNyZWF0ZUdhbWVib2FyZCIsImNyZWF0ZVNoaXAiLCJwdWJsaXNoIiwic3RhcnRHYW1lIiwicGxheWVyMU5hbWUiLCJwbGF5ZXIyTmFtZSIsInBsYXllcjEiLCJwbGF5ZXIyIiwiYXR0YWNrRXZlbnRzIiwicGxheWVyIiwibGFzdGhpdCIsInJlY2VpdmVBdHRhY2tDb29yZHMxQUkxUGxheWVyIiwicGxheWVyUG9zIiwibWFpbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFyZUFsbFN1bmsiLCJjaGVja0xhc3RIaXQiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiQUlzdGFydCIsInBsYXllck5hbWUiLCJyZWNlaXZlQXR0YWNrIiwicmVtb3ZlU2hpcCIsImdldEF2YWlsYWJsZUNvb3JkcyIsInNoaXBBcnJheSIsInNoaXBMZW5ndGhzIiwiY2FycmllciIsImJhdHRsZXNoaXAiLCJjcnVpc2VyIiwic3VibWFyaW5lIiwiZGVzdHJveWVyIiwibnVtIiwidW5kZWZpbmVkIiwiaGl0IiwiaXNTdW5rIiwiZXZlcnkiXSwic291cmNlUm9vdCI6IiJ9