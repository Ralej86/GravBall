class Particle {
  constructor(ctx, x, y, radius, dx, dy, color) {
    this.ctx = ctx;
    this.x = this.oldX = x;
    this.y = this.oldY = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.color = color;
    this.history = [];

    this.update = this.update.bind(this);
    this.animate = this.animate.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
    this.ctx.strokeStyle = this.ctx.fillStyle;
    this.ctx.stroke();
  }

  attract(gball) {
    let dx = (gball.x - this.x);
    let dy = (gball.y - this.y);
    let dist = Math.sqrt((dx * dx) + (dy * dy));

    if (dist > gball.radius ){
      this.x += ((gball.radius / 5) * (dx / dist));
      this.y += ((gball.radius / 5) * (dy / dist));
    } else if (dist <= gball.radius ) {
      this.x = (Math.random() - 0.5) * (2 * this.ctx.canvas.width);
      this.y = (Math.random() - 0.5) * (2 * this.ctx.canvas.height);
    }
  }

  integrate() {
    let dx = this.x - this.oldX;
    let dy = this.y - this.oldY;
    this.oldX = this.x;
    this.oldY = this.y;
    this.x += dx/2;
    this.y += dy/2;
  }

  update() {
    this.draw();

    this.history.splice(3, this.history.length);
    this.history.unshift(new Particle(this.ctx, this.x, this.y, this.radius - (this.radius/2),
    this.dx,this.dy, this.color));

    for (var i = 0; i < this.history.length; i++) {
      this.history[i].draw()
    }

    this.x += this.dx;
    this.y += this.dy;
  }

  animate() {
    this.update();
  }
}

export default Particle;
