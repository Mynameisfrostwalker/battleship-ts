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
var createPlayer = function createPlayer(boardFunc) {
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
    board: board,
    attackEnemy: attackEnemy,
    placeShip: placeShip,
    initialPlace: initialPlace,
    removeShip: removeShip
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPlayer);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ2FBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLFNBQUQsRUFBa0M7RUFDckQsSUFBTUMsS0FBSyxHQUFHRCxTQUFTLEVBQXZCOztFQUVBLElBQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEtBQUQsRUFBbUJDLE1BQW5CLEVBQWdEO0lBQ2xFRCxLQUFLLENBQUNFLGFBQU4sQ0FBb0JELE1BQXBCO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUNoQkMsUUFEZ0IsRUFFaEJILE1BRmdCLEVBR2hCSSxJQUhnQixFQUloQkMsUUFKZ0IsRUFLYjtJQUNIUixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQTBCSCxNQUExQixFQUFrQ0ksSUFBbEMsRUFBd0NDLFFBQXhDO0VBQ0QsQ0FQRDs7RUFTQSxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxJQUFELEVBQXFCO0lBQ3RDVixLQUFLLENBQUNTLFVBQU4sQ0FBaUJDLElBQWpCO0VBQ0QsQ0FGRDs7RUFJQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDTCxRQUFELEVBQXlDO0lBQzVELElBQU1NLEtBQWtCLEdBQUcsQ0FDekIsU0FEeUIsRUFFekIsWUFGeUIsRUFHekIsU0FIeUIsRUFJekIsV0FKeUIsRUFLekIsV0FMeUIsQ0FBM0I7SUFRQUEsS0FBSyxDQUFDQyxPQUFOLENBQWMsVUFBQ0wsUUFBRCxFQUFjO01BQzFCLElBQU1ELElBQUksR0FBR08sSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWhCLEdBQXNCLFVBQXRCLEdBQW1DLFlBQWhEO01BQ0EsSUFBTUMsZUFBZSxHQUFHaEIsS0FBSyxDQUFDaUIsa0JBQU4sQ0FDdEJWLElBRHNCLEVBRXRCQyxRQUZzQixFQUd0QkYsUUFIc0IsQ0FBeEI7TUFLQSxJQUFNWSxXQUFXLEdBQ2ZGLGVBQWUsQ0FBQ0YsSUFBSSxDQUFDSyxLQUFMLENBQVdMLElBQUksQ0FBQ0MsTUFBTCxLQUFnQkMsZUFBZSxDQUFDSSxNQUEzQyxDQUFELENBRGpCO01BRUFwQixLQUFLLENBQUNLLFNBQU4sQ0FBZ0JDLFFBQWhCLEVBQTBCWSxXQUExQixFQUF1Q1gsSUFBdkMsRUFBNkNDLFFBQTdDO0lBQ0QsQ0FWRDtFQVdELENBcEJEOztFQXNCQSxPQUFPO0lBQUVSLEtBQUssRUFBTEEsS0FBRjtJQUFTQyxXQUFXLEVBQVhBLFdBQVQ7SUFBc0JJLFNBQVMsRUFBVEEsU0FBdEI7SUFBaUNNLFlBQVksRUFBWkEsWUFBakM7SUFBK0NGLFVBQVUsRUFBVkE7RUFBL0MsQ0FBUDtBQUNELENBM0NEOztBQThDQSxpRUFBZVgsWUFBZixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC10cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtdHMvLi9zcmMvc2NyaXB0cy9wbGF5ZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdHlwZSB7IEdhbWVib2FyZCwgQXhpcyB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuaW1wb3J0IHR5cGUgeyBDZWxsIH0gZnJvbSBcIi4vY2VsbFwiO1xuaW1wb3J0IHR5cGUgeyBTaGlwLCBTaGlwTmFtZXMgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmludGVyZmFjZSBQbGF5ZXIge1xuICBib2FyZDogR2FtZWJvYXJkO1xuICBhdHRhY2tFbmVteTogKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4gdm9pZDtcbiAgcGxhY2VTaGlwOiAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHZvaWQ7XG4gIGluaXRpYWxQbGFjZTogKHNoaXBGdW5jOiAobmFtZTogU2hpcE5hbWVzKSA9PiBTaGlwKSA9PiB2b2lkO1xuICByZW1vdmVTaGlwOiAobmFtZTogU2hpcE5hbWVzKSA9PiB2b2lkO1xufVxuXG50eXBlIEJvYXJkRnVuYyA9IChib2FyZD86IENlbGxbXSkgPT4gR2FtZWJvYXJkO1xuXG5jb25zdCBjcmVhdGVQbGF5ZXIgPSAoYm9hcmRGdW5jOiBCb2FyZEZ1bmMpOiBQbGF5ZXIgPT4ge1xuICBjb25zdCBib2FyZCA9IGJvYXJkRnVuYygpO1xuXG4gIGNvbnN0IGF0dGFja0VuZW15ID0gKGVuZW15OiBHYW1lYm9hcmQsIGNvb3JkczogW251bWJlciwgbnVtYmVyXSkgPT4ge1xuICAgIGVuZW15LnJlY2VpdmVBdHRhY2soY29vcmRzKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZVNoaXAgPSAoXG4gICAgc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXAsXG4gICAgY29vcmRzOiBbbnVtYmVyLCBudW1iZXJdLFxuICAgIGF4aXM6IEF4aXMsXG4gICAgc2hpcE5hbWU6IFNoaXBOYW1lc1xuICApID0+IHtcbiAgICBib2FyZC5wbGFjZVNoaXAoc2hpcEZ1bmMsIGNvb3JkcywgYXhpcywgc2hpcE5hbWUpO1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVNoaXAgPSAobmFtZTogU2hpcE5hbWVzKSA9PiB7XG4gICAgYm9hcmQucmVtb3ZlU2hpcChuYW1lKTtcbiAgfTtcblxuICBjb25zdCBpbml0aWFsUGxhY2UgPSAoc2hpcEZ1bmM6IChuYW1lOiBTaGlwTmFtZXMpID0+IFNoaXApID0+IHtcbiAgICBjb25zdCBzaGlwczogU2hpcE5hbWVzW10gPSBbXG4gICAgICBcImNydWlzZXJcIixcbiAgICAgIFwiYmF0dGxlc2hpcFwiLFxuICAgICAgXCJjYXJyaWVyXCIsXG4gICAgICBcInN1Ym1hcmluZVwiLFxuICAgICAgXCJkZXN0cm95ZXJcIixcbiAgICBdO1xuXG4gICAgc2hpcHMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IGF4aXMgPSBNYXRoLnJhbmRvbSgpID4gMC41ID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCI7XG4gICAgICBjb25zdCBhdmFpbGFibGVDb29yZHMgPSBib2FyZC5nZXRBdmFpbGFibGVDb29yZHMoXG4gICAgICAgIGF4aXMsXG4gICAgICAgIHNoaXBOYW1lLFxuICAgICAgICBzaGlwRnVuY1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHJhbmRvbUNvb3JkID1cbiAgICAgICAgYXZhaWxhYmxlQ29vcmRzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGF2YWlsYWJsZUNvb3Jkcy5sZW5ndGgpXTtcbiAgICAgIGJvYXJkLnBsYWNlU2hpcChzaGlwRnVuYywgcmFuZG9tQ29vcmQsIGF4aXMsIHNoaXBOYW1lKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4geyBib2FyZCwgYXR0YWNrRW5lbXksIHBsYWNlU2hpcCwgaW5pdGlhbFBsYWNlLCByZW1vdmVTaGlwIH07XG59O1xuXG5leHBvcnQgdHlwZSB7IFBsYXllciwgQm9hcmRGdW5jIH07XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQbGF5ZXI7XG4iXSwibmFtZXMiOlsiY3JlYXRlUGxheWVyIiwiYm9hcmRGdW5jIiwiYm9hcmQiLCJhdHRhY2tFbmVteSIsImVuZW15IiwiY29vcmRzIiwicmVjZWl2ZUF0dGFjayIsInBsYWNlU2hpcCIsInNoaXBGdW5jIiwiYXhpcyIsInNoaXBOYW1lIiwicmVtb3ZlU2hpcCIsIm5hbWUiLCJpbml0aWFsUGxhY2UiLCJzaGlwcyIsImZvckVhY2giLCJNYXRoIiwicmFuZG9tIiwiYXZhaWxhYmxlQ29vcmRzIiwiZ2V0QXZhaWxhYmxlQ29vcmRzIiwicmFuZG9tQ29vcmQiLCJmbG9vciIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=