

class GameManager {
  constructor(){
    const entities = [];

    setInterval(this.update.bind(this), 1000/60);
  }

  addPlayer(){

  }

  removePlayer(){

  }

  handleInput(){

  }
  
  getState(){
    return entities;
  }

  update(){
    
  }
}

module.exports = GameManager;