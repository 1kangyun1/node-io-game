

class Player{
  constructor(id, username, x, y){
    this.id = id;
    this.username = username;
    this.pos = {x,y};
  }
}

module.exports = Player;