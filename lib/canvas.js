import Particle from './particle.js';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;
  console.log("hello");

  let ctx = canvas.getContext("2d");

  let circleArray = [];
  let x = Math.random() * ctx.canvas.width;
  let y = Math.random() * ctx.canvas.height;
  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 4

  for (var i = 0; i < 20; i++) {
    circleArray.push(new Particle(ctx, x, y, 5, dx, dy))
  }

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].animate()
  }
})
