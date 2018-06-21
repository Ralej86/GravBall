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
    let colorArr = ['#ffaa33', '#99ffaaa', '#00ff00', '#4411aa', '#ff1100'];
    for (var i = 0; i < 100; i++) {
      let x = Math.random() * this.ctx.canvas.width;
      let y = Math.random() * this.ctx.canvas.height;
      let dx = (Math.random() - 0.5) * 4;
      let dy = (Math.random() - 0.5) * 4
      let color = colorArr[Math.floor(Math.random() * colorArr.length)]
      this.particles.push(new Particle(this.ctx, x, y, 3, dx, dy, color))
    }
  }

  populateGravityBall(x, y) {
    this.gravityBalls.push(new GravityBall(this.ctx, x, y));
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

export default Game;
