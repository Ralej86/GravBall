import Particle from './particle.js';
import Game from './game.js'

document.addEventListener("DOMContentLoaded", () => {
  let canvas = document.getElementById("canvas")
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  let ctx = canvas.getContext("2d");
  let mouse = {
    x: undefined,
    y: undefined,
  }
  let timer = 0;
  let stop = false;
  let delay = 200;

  window.addEventListener('click', (event) => {
    if (event.target !== canvas) {

    } else {
      timer = setTimeout(() => {
        if (!stop) {
          game.populateGravityBall(event.x, event.y)
        }
        stop = false;
      }, delay);
    }
  })

  window.addEventListener('dblclick', (event) => {
    clearTimeout(timer);
    stop = true;
    game.removeGravityBall(event.x, event.y)
  })

  let game = new Game(ctx);
  let slider = document.getElementsByTagName('input')[0];
  slider.addEventListener('change', () => {
    game.setParticleAmount(slider.value)})
  game.populateParticles();
  game.animate();
})
