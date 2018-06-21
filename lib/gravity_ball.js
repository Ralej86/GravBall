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

  attract(gball) {
    let dx = (gball.x - this.x);
    let dy = (gball.y - this.y);
    let dist = Math.sqrt((dx * dx) + (dy * dy));
    if (dist < gball.radius) {
      let combine = true;
      return combine;
    } else {
      this.x += (dx / dist);
      this.y += (dy / dist);
      return false;
    }
  }

  update() {
    this.draw();
  }

  animate() {
    this.update();
  }

}

export default GravityBall;
