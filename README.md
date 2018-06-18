# GravBall
## Background and Overview
A HTML canvas element that allows users to play around with the effects of gravity of black holes and particles.


## Functionality and MVP
In GravBall, users have the ability to:

- [ ] Place and remove a gravity ball on the map
- [ ]

In addition,
- [ ] A header with information about the app
- [ ] A sidebar that serves as an icon legend

## Wireframe
null

## Architecture and Technologies
This project will be implemented with the following technologies:
* Vanilla Javascript for overall structure
* Google Maps API for map implementation
* Mountain Project Routes API for locations of popular climbing areas
* OpenWeatherMap API for weather information
* Webpack to bundle and serve scripts

In addition to the webpack entry file, there will be other scripts:

`particle.js` to establish the occurrence of particles on the map which will be solely attracted to the black holes

`grav_ball.js` to handle the logic of

`board.js` to handle the creation of Maps markers and how a user can interact with them

## Implementation Timeline
**Over the weekend**:
- [x] Look for various API's to support this project (weather, maps, routes location)
- [x] Read the docs

**Day 1**: Create canvas and set up initial particles
- [ ] Setup `Webpack` and appropriate entry file
- [ ] Set up canvas and initial particle movement

**Day 2**: Implement black holes (gravity ball)
- [ ] Create black hole with gravitational attraction

**Day 3**: Add in UI
 - [ ] Implement option to add more particles
 - [ ] adjust default gravity ball settings such as (initial size, initial velocity)

**Day 4**: Style and polish the page
- [ ] Add in styling
- [ ] Fix any bugs

## Bonus Features
Future additions could include

- [ ] alter particle size
- [ ] change particle colors
