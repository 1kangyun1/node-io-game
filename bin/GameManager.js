const Player = require('./player');

class GameManager {
  constructor(io){
    this.io = io;
    this.players = {};
    this.lastUpdateTime = Date.now();


    setInterval(this.update.bind(this), 1000/60);
  }

  addPlayer(id, username){
    this.players[id] = new Player(id, username, 50, 50);
  }

  removePlayer(id){
    delete this.players[id];
  }

  handleMovement(id, dir){
    if (this.players[id]) {
      this.players[id].setDirection(dir);
    }
  }

  update(){
    const now = Date.now();
    const dt = (now - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = now;

    for(var player of this.players){
      player.update(dt);
    }

    io.emit('gameUpdate', this.players);
  }
}

module.exports = GameManager;