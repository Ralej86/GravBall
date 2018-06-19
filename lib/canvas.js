import Particle from './particle.js';
import Game from './game.js'

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;

  let ctx = canvas.getContext("2d");


  // window.addEventListener('mousedown', (event) => {
  //
  // })

  let game = new Game(ctx);
  game.populateParticles();
  game.animate();
})
