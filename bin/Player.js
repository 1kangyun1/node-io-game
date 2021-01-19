

class Player{
  constructor(id, username, x, y){
    this.id = id;
    this.username = username;
    this.pos = {x,y};
    this.direction = { dirX:0, dirY:0 };
  }

  update(dt){
    this.pos.x += dt * this.direction.dirX * 5;
    this.pos.y += dt * this.direction.dirX * 5;
  }

  setDirection(dir){
    this.direction = dir;
  }
}

module.exports = Player;