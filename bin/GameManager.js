const Player = require('./player');

class GameManager {
  constructor(io){
    this.io = io;
    this.players = [];
    this.lastUpdateTime = Date.now();


    setInterval(this.update.bind(this), 1000/60);
  }

  addPlayer(id, username){
    const index = this.players.findIndex(player => player.id === id);

    if(index === -1){
      const player = new Player(id, username, 50, 50);

      this.players.push(player);
    }
  }

  removePlayer(id){
    const index = this.players.findIndex(player => player.id === id);

    if(index !== -1){
      this.players.splice(index, 1);
    }
  }

  handleMovement(id, dir){
    const index = this.players.findIndex(player => player.id === id);

    if (this.players[index]) {
      this.players[index].setDirection(dir);
    }
  }

  update(){
    const now = Date.now();
    const dt = (now - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = now;

    this.players.map(player => player.move(dt));

    this.io.emit('gameUpdate', this.players);
  }
}

module.exports = GameManager;