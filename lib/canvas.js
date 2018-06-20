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
  let timer = 0;
  let stop = false;
  let delay = 300;

  window.addEventListener('click', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;

    timer = setTimeout(() => {
      if (!stop) {
        game.populateGravityBall(mouse.x, mouse.y)
      }
      stop = false;
    }, delay);

    console.log("clicked");
    console.log(mouse);
  })

  window.addEventListener('dblclick', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
    clearTimeout(timer);
    stop = true;
    game.removeGravityBall(mouse.x, mouse.y)

    console.log("double-click");
    console.log(mouse);
  })

  let game = new Game(ctx);
  game.populateParticles();
  game.animate();
})
