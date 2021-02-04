const Constants = require('../../data/Constants');

let lastUpdateTime = Date.now();

/**
 * movement function for entities
 * @param {*} state current state of the entity
 * 0 if normal
 * -1 if entity is overlapped
 * 1 if entity is running
 */
function Movement (pos={x,y}, dir={dirX,dirY}, state){
  const now = Date.now();
  const dt = (now - this.lastUpdateTime) / 1000;
  lastUpdateTime = now;

  return {
    x: pos.x + dt * dir.dirX * Constants.PLAYER_SPEED,
    y: pos.y + dt * dir.dirY * Constants.PLAYER_SPEED
  };
}

module.exports = Movement;