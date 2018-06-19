import Particle from './particle.js';

class Game {
  constructor(ctx) {
    this.particles = [];
    this.ctx = ctx;
  }

  populateParticles() {
    for (var i = 0; i < 20; i++) {
      this.particle.push(new Particle())
    }
  }
}

export default Game;
