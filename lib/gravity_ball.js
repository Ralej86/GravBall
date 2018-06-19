class GravityBall{
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y = 200;
    this.radius = 15;
    this.dx = 0;
    this.dy = 0;

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

export default GravityBall;
