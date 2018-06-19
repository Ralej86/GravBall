import Particle from './particle.js';

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;
  console.log("hello");

  let ctx = canvas.getContext("2d");
  const particle = new Particle(ctx);
  // particle.draw()
  particle.animate()
})
