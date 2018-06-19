/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/canvas.js":
/*!***********************!*\
  !*** ./lib/canvas.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ "./lib/particle.js");


document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;
  console.log("hello");

  let ctx = canvas.getContext("2d");
  const particle = new _particle_js__WEBPACK_IMPORTED_MODULE_0__["default"](ctx);
  // particle.draw()
  particle.animate()
})


/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

  // Drawing an Arc/Circle
  //ctx.arc(x, y, radius, start_angle, end_angle, drawClockwise)

  // ctx.beginPath();
  // ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
  // ctx.strokeStyle = "blue";
  // ctx.stroke();


    // let animate() {
    //   requestAnimationFrame(animate);
    //   console.log("increment");
    // }
    //
    // animate();

class Particle {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y = 200;
    this.dx = 1;
    this.dy = 1;

    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  }

  update() {
    this.draw()

    this.x += this.dx;
    this.y += this.dy;
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.update()

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Particle);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map