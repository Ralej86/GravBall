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

export default Particle;
