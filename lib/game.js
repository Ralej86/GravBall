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
    for (var i = 0; i < 20; i++) {
      let x = Math.random() * this.ctx.canvas.width;
      let y = Math.random() * this.ctx.canvas.height;
      let dx = (Math.random() - 0.5) * 4;
      let dy = (Math.random() - 0.5) * 4
      this.particles.push(new Particle(this.ctx, x, y, 5, dx, dy))
    }
  }

  populateGravityBall() {
    debugger
    this.gravityBalls.push(new GravityBall(this.ctx));
  }

  animate() {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }

    for (var i = 0; i < this.gravityBalls.length; i++) {
      this.gravityBalls[i].update();
    }
  }
}

export default Game;
