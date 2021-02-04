const Constant = require('../data/Constants');
const Player = require('./Player');

class GameManager {
  constructor(io){
    this.io = io;
    //convert plays to json for faster search for update
    this.players = {};
    this.lastUpdateTime = Date.now();


    setInterval(this.update.bind(this), 1000/60);
  }

  addPlayer(id, username){
    /**
    const index = this.players.findIndex(player => player.id === id);

    if(index === -1){
      const player = new Player(id, username, 50, 50);

      this.players.push(player);
    }
    */

    this.players[id] = new Player(id, username, 50, 50);
  }

  removePlayer(id){
    /**
    const index = this.players.findIndex(player => player.id === id);

    if(index !== -1){
      this.players.splice(index, 1);
    }
    */

    delete this.players[id];
  }
/**
  handleMovement(id, dir){
    const index = this.players.findIndex(player => player.id === id);

    if (this.players[index]) {
      this.players[index].direction = dir;
    }
  }
  */

  updateposition(id, {x,y}){
    /**
    const index = this.players.findIndex(player => player.id === id);

    if (this.players[index]) {
      //placeholder for position validate js file
      this.players[index].pos.x = Math.max(0, Math.min(Constants.MAP_SIZE, x));
      this.players[index].pos.y = Math.max(0, Math.min(Constants.MAP_SIZE, y));
    }
    */

    this.players[id].pos.x = Math.max(0, Math.min(Constants.MAP_SIZE, x));
    this.players[id].pos.y = Math.max(0, Math.min(Constants.MAP_SIZE, y));
  }

  /**
  movePlayer(player, dt){
    player.pos.x += dt * player.direction.dirX * player.speed;
    player.pos.y += dt * player.direction.dirY * player.speed;
  }
  */

  update(){
    /**
    const now = Date.now();
    const dt = (now - this.lastUpdateTime) / 1000;
    this.lastUpdateTime = now;

    this.players.forEach(player => this.movePlayer(player, dt));
    */
   
    this.io.emit(Constant.MSG_TYPES.GAME_UPDATE, this.createUpdate());
  }

  createUpdate = () => {
    const playerList =  Object.values(this.players);
    
    return playerList.map(player => player.serialize());
  }
}

module.exports = GameManager;