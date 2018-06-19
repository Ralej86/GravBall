class Particle {
  constructor(ctx, x, y, radius, dx, dy) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
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

  update() {
    this.draw();

    if (this.x + this.radius > this.ctx.canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > this.ctx.canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  animate() {
    // requestAnimationFrame(this.animate)
    // this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.update();

  }
}

export default Particle;
