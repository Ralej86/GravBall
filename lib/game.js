import Particle from './particle.js';

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.particles = [];

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

  animate() {
    requestAnimationFrame(this.animate);
    this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].update();
    }
  }
}

export default Game;
