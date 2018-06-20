import Particle from './particle.js';
import Game from './game.js'

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = 600;
  canvas.width = 900;

  let ctx = canvas.getContext("2d");
  let mouse = {
    x: undefined,
    y: undefined,
  }

  window.addEventListener('mousedown', (event) => {

    mouse.x = event.x;
    mouse.y = event.y;
    game.populateGravityBall(mouse.x, mouse.y)
    console.log("clicked");
    console.log(mouse)
  })

  let game = new Game(ctx);
  game.populateParticles();
  game.animate();
})
