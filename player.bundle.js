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
/*!*******************************!*\
  !*** ./src/scripts/player.ts ***!
  \*******************************/
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
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ2dCQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUNuQkMsU0FEbUIsRUFFbkJDLFVBRm1CLEVBR25CQyxTQUhtQixFQUlSO0VBQ1gsSUFBTUMsS0FBSyxHQUFHSCxTQUFTLEVBQXZCOztFQUVBLElBQU1JLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBbUJDLE1BQW5CLEVBQWdEO0lBQ2xFRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JELE1BQXBCO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUNoQkMsUUFEZ0IsRUFFaEJILE1BRmdCLEVBR2hCSSxJQUhnQixFQUloQkMsUUFKZ0IsRUFLYjtJQUNIUixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQTBCSCxNQUExQixFQUFrQ0ksSUFBbEMsRUFBd0NDLFFBQXhDO0VBQ0QsQ0FQRDs7RUFTQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQXFCO0lBQ3RDVixLQUFLLENBQUNTLFVBQU4sQ0FBaUJDLElBQWpCO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxRQUFELEVBQXFEO0lBQ3hFLElBQU1NLEtBQWtCLEdBQUcsQ0FDekIsU0FEeUIsRUFFekIsWUFGeUIsRUFHekIsU0FIeUIsRUFJekIsV0FKeUIsRUFLekIsV0FMeUIsQ0FBM0I7SUFRQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0wsUUFBRCxFQUFjO01BQzFCLElBQU1ELElBQUksR0FBR08sSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLFVBQXRCLEdBQW1DLFlBQWhEO01BQ0EsSUFBTUMsZUFBZSxHQUFHaEIsS0FBSyxDQUFDaUIsa0JBQU4sQ0FDdEJWLElBRHNCLEVBRXRCQyxRQUZzQixFQUd0QkYsUUFIc0IsQ0FBeEI7TUFLQSxJQUFNWSxXQUFXLEdBQ2ZGLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDSyxLQUFMLENBQVdMLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkMsZUFBZSxDQUFDSSxNQUEzQyxDQUFELENBRGpCO01BRUFwQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQTBCWSxXQUExQixFQUF1Q1gsSUFBdkMsRUFBNkNDLFFBQTdDO0lBQ0QsQ0FWRDtFQVdELENBcEJEOztFQXNCQSxPQUFPO0lBQ0xFLElBQUksRUFBRVosVUFERDtJQUVMdUIsSUFBSSxFQUFFLE9BRkQ7SUFHTHRCLFNBQVMsRUFBVEEsU0FISztJQUlMdUIsUUFBUSxFQUFFdEIsS0FKTDtJQUtMQyxXQUFXLEVBQVhBLFdBTEs7SUFNTEksU0FBUyxFQUFUQSxTQU5LO0lBT0xNLFlBQVksRUFBWkEsWUFQSztJQVFMRixVQUFVLEVBQVZBO0VBUkssQ0FBUDtBQVVELENBeEREOztBQTJEQSxpRUFBZWIsWUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wbGF5ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIHR5cGU6IFwiSHVtYW5cIjtcbiAgcGxheWVyTnVtOiBcInBsYXllcjFcIiB8IFwicGxheWVyMlwiO1xuICBib2FyZE9iajogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMsIGF4aXM6IEF4aXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoXG4gIGJvYXJkRnVuYzogQm9hcmRGdW5jLFxuICBwbGF5ZXJOYW1lOiBzdHJpbmcsXG4gIHBsYXllck51bTogXCJwbGF5ZXIxXCIgfCBcInBsYXllcjJcIlxuKTogUGxheWVyID0+IHtcbiAgY29uc3QgYm9hcmQgPSBib2FyZEZ1bmMoKTtcblxuICBjb25zdCBhdHRhY2tFbmVteSA9IChlbmVteTogR2FtZWJvYXJkLCBjb29yZHM6IFtudW1iZXIsIG51bWJlcl0pID0+IHtcbiAgICBlbmVteS5yZWNlaXZlQXR0YWNrKGNvb3Jkcyk7XG4gIH07XG5cbiAgY29uc3QgcGxhY2VTaGlwID0gKFxuICAgIHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwLFxuICAgIGNvb3JkczogW251bWJlciwgbnVtYmVyXSxcbiAgICBheGlzOiBBeGlzLFxuICAgIHNoaXBOYW1lOiBTaGlwTmFtZXNcbiAgKSA9PiB7XG4gICAgYm9hcmQucGxhY2VTaGlwKHNoaXBGdW5jLCBjb29yZHMsIGF4aXMsIHNoaXBOYW1lKTtcbiAgfTtcblxuICBjb25zdCByZW1vdmVTaGlwID0gKG5hbWU6IFNoaXBOYW1lcykgPT4ge1xuICAgIGJvYXJkLnJlbW92ZVNoaXAobmFtZSk7XG4gIH07XG5cbiAgY29uc3QgaW5pdGlhbFBsYWNlID0gKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzLCBheGlzOiBBeGlzKSA9PiBTaGlwKSA9PiB7XG4gICAgY29uc3Qgc2hpcHM6IFNoaXBOYW1lc1tdID0gW1xuICAgICAgXCJjcnVpc2VyXCIsXG4gICAgICBcImJhdHRsZXNoaXBcIixcbiAgICAgIFwiY2FycmllclwiLFxuICAgICAgXCJzdWJtYXJpbmVcIixcbiAgICAgIFwiZGVzdHJveWVyXCIsXG4gICAgXTtcblxuICAgIHNoaXBzLmZvckVhY2goKHNoaXBOYW1lKSA9PiB7XG4gICAgICBjb25zdCBheGlzID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IFwidmVydGljYWxcIiA6IFwiaG9yaXpvbnRhbFwiO1xuICAgICAgY29uc3QgYXZhaWxhYmxlQ29vcmRzID0gYm9hcmQuZ2V0QXZhaWxhYmxlQ29vcmRzKFxuICAgICAgICBheGlzLFxuICAgICAgICBzaGlwTmFtZSxcbiAgICAgICAgc2hpcEZ1bmNcbiAgICAgICk7XG4gICAgICBjb25zdCByYW5kb21Db29yZCA9XG4gICAgICAgIGF2YWlsYWJsZUNvb3Jkc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhdmFpbGFibGVDb29yZHMubGVuZ3RoKV07XG4gICAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIHJhbmRvbUNvb3JkLCBheGlzLCBzaGlwTmFtZSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBwbGF5ZXJOYW1lLFxuICAgIHR5cGU6IFwiSHVtYW5cIixcbiAgICBwbGF5ZXJOdW0sXG4gICAgYm9hcmRPYmo6IGJvYXJkLFxuICAgIGF0dGFja0VuZW15LFxuICAgIHBsYWNlU2hpcCxcbiAgICBpbml0aWFsUGxhY2UsXG4gICAgcmVtb3ZlU2hpcCxcbiAgfTtcbn07XG5cbmV4cG9ydCB0eXBlIHsgUGxheWVyLCBCb2FyZEZ1bmMgfTtcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVBsYXllcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVQbGF5ZXIiLCJib2FyZEZ1bmMiLCJwbGF5ZXJOYW1lIiwicGxheWVyTnVtIiwiYm9hcmQiLCJhdHRhY2tFbmVteSIsImVuZW15IiwiY29vcmRzIiwicmVjZWl2ZUF0dGFjayIsInBsYWNlU2hpcCIsInNoaXBGdW5jIiwiYXhpcyIsInNoaXBOYW1lIiwicmVtb3ZlU2hpcCIsIm5hbWUiLCJpbml0aWFsUGxhY2UiLCJzaGlwcyIsImZvckVhY2giLCJNYXRoIiwicmFuZG9tIiwiYXZhaWxhYmxlQ29vcmRzIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwicmFuZG9tQ29vcmQiLCJmbG9vciIsImxlbmd0aCIsInR5cGUiLCJib2FyZE9iaiJdLCJzb3VyY2VSb290IjoiIn0=