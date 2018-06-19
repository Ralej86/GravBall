
  // Drawing an Arc/Circle
  //ctx.arc(x, y, radius, start_angle, end_angle, drawClockwise)

  // ctx.beginPath();
  // ctx.arc(200, 200, 30, 0, Math.PI * 2, false);
  // ctx.strokeStyle = "blue";
  // ctx.stroke();


    // let animate() {
    //   requestAnimationFrame(animate);
    //   console.log("increment");
    // }
    //
    // animate();

class Particle {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 200;
    this.y = 200;
    this.dx = 1;
    this.dy = 1;

    this.animate = this.animate.bind(this);
    this.update = this.update.bind(this);
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    this.ctx.strokeStyle = "blue";
    this.ctx.stroke();
  }

  update() {
    this.draw()

    this.x += this.dx;
    this.y += this.dy;
  }

  animate() {
    requestAnimationFrame(this.animate)
    this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.update()

  }
}

export default Particle;
