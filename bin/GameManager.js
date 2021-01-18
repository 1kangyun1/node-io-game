const Player = require('./player');

class GameManager {
  constructor(io){
    this.io = io;
    this.players = {};

    setInterval(this.update.bind(this), 1000/60);
  }

  addPlayer(id, username){
    this.players[id] = new Player(id, username, 50, 50);
  }

  removePlayer(id){
    delete this.players[id];
  }

  handleInput(id, { dirX, dirY }){

  }

  update(){
    
  }
}

module.exports = GameManager;