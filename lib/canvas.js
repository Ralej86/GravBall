import Particle from './particle.js';
import Game from './game.js'

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;

  let ctx = canvas.getContext("2d");

  let circleArray = [];
  let x = Math.random() * ctx.canvas.width;
  let y = Math.random() * ctx.canvas.height;
  let dx = (Math.random() - 0.5) * 4;
  let dy = (Math.random() - 0.5) * 4


  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].animate()
  }
})
