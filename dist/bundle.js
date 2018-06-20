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
/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game.js */ "./lib/game.js");



document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;

  let ctx = canvas.getContext("2d");
  let mouse = {
    x: undefined,
    y: undefined,
  }
  let timer = 0;
  let stop = false;
  let delay = 200;

  window.addEventListener('click', (event) => {
    // mouse.x = event.x;
    // mouse.y = event.y;

    timer = setTimeout(() => {
      if (!stop) {
        game.populateGravityBall(event.x, event.y)
      }
      stop = false;
    }, delay);

    // console.log("clicked");
    // console.log(mouse);
  })

  window.addEventListener('dblclick', (event) => {
    // mouse.x = event.x;
    // mouse.y = event.y;
    clearTimeout(timer);
    stop = true;
    game.removeGravityBall(event.x, event.y)

    // console.log("double-click");
    // console.log(mouse);
  })

  let game = new _game_js__WEBPACK_IMPORTED_MODULE_1__["default"](ctx);
  game.populateParticles();
  game.animate();
})


/***/ }),

/***/ "./lib/game.js":
/*!*********************!*\
  !*** ./lib/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _particle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./particle.js */ "./lib/particle.js");
/* harmony import */ var _gravity_ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gravity_ball.js */ "./lib/gravity_ball.js");



class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.particles = [];
    this.gravityBalls = [];

    this.animate = this.animate.bind(this);
  }

  populateParticles() {
    for (var i = 0; i < 100; i++) {
      let x = Math.random() * this.ctx.canvas.width;
      let y = Math.random() * this.ctx.canvas.height;
      let dx = (Math.random() - 0.5) * 4;
      let dy = (Math.random() - 0.5) * 4
      this.particles.push(new _particle_js__WEBPACK_IMPORTED_MODULE_0__["default"](this.ctx, x, y, 3, dx, dy))
    }
  }

  populateGravityBall(x, y) {
    this.gravityBalls.push(new _gravity_ball_js__WEBPACK_IMPORTED_MODULE_1__["default"](this.ctx, x, y));
  }

  removeGravityBall(x, y) {
    console.log(this.gravityBalls);
    for (var i = 0; i < this.gravityBalls.length; i++) {
      var gb = this.gravityBalls[i]
      if (x < (gb.x + gb.radius) && x > (gb.x - gb.radius)
          && y < (gb.y + gb.radius) && y > (gb.y - gb.radius))
          this.gravityBalls.splice(i,1);
          console.log("executed removal");
    }
    console.log(this.gravityBalls);
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);

    for (var j = 0; j < this.gravityBalls.length; j++) {
      this.gravityBalls[j].update()
    }


    for (var i = 0; i < this.particles.length; i++) {
      if (this.gravityBalls.length > 0) {
        for (var j = 0; j < this.gravityBalls.length; j++) {
          this.particles[i].attract(this.gravityBalls[j]);
          this.particles[i].integrate();
        }
      this.particles[i].update();

      } else {
        this.particles[i].update();
      }
    }


  }
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./lib/gravity_ball.js":
/*!*****************************!*\
  !*** ./lib/gravity_ball.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class GravityBall{
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.radius = 15;

    this.update = this.update.bind(this);
    this.animate = this.animate.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "black";
    this.ctx.fill();
    this.ctx.strokeStyle = "black";
    this.ctx.stroke();
  }

  update() {
    this.draw();
  }

  animate() {
    this.update();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GravityBall);


/***/ }),

/***/ "./lib/particle.js":
/*!*************************!*\
  !*** ./lib/particle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Particle {
  constructor(ctx, x, y, radius, dx, dy) {
    this.ctx = ctx;
    this.x = this.oldX = x;
    this.y = this.oldY = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;

    this.update = this.update.bind(this);
    this.animate = this.animate.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = "white";
    this.ctx.fill();
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  }

  attract(gball) {
    let dx = (gball.x - this.x);
    let dy = (gball.y - this.y);
    let dist = Math.sqrt((dx * dx) + (dy * dy));

    if (dist > 10 ){
      this.x += 3 * (dx / dist);
      this.y += 3 * (dy / dist);
    } else if (dist <= 10 ) {
      this.x = (Math.random() - 0.5) * (4 * this.ctx.canvas.width);
      this.y = (Math.random() - 0.5) * (4 * this.ctx.canvas.height);
    }
  }

  integrate() {
    let dx = this.x - this.oldX;
    let dy = this.y - this.oldY;
    this.oldX = this.x;
    this.oldY = this.y;
    this.x += dx/3;
    this.y += dy/3;
  }

  update() {
    this.draw();

    // if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
    //   this.dx = -this.dx;
    // }
    //
    // if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
    //   this.dy = -this.dy;
    // }

    this.x += this.dx;
    this.y += this.dy;
  }

  animate() {
    this.update();

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Particle);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map