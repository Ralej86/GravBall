import Particle from './particle.js';
import GravityBall from './gravity_ball.js';

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
      this.particles.push(new Particle(this.ctx, x, y, 3, dx, dy))
    }
  }

  populateGravityBall() {
    this.gravityBalls.push(new GravityBall(this.ctx));
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
          this.particles[i].update();
        }

      } else {
        this.particles[i].update();
      }
      // this.particles[i].attract();
      // this.particles[i].integrate();
    }
    //
    // for (var i = 0; i < this.gravityBalls.length; i++) {
    //   this.gravityBalls[i].update();
    // }

  }
}

export default Game;
