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
    this.ctx.fillStyle = "#0d0d0d";
    this.ctx.fill();
    this.ctx.strokeStyle = "#262626";
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
