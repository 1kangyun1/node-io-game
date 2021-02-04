class Player {
  constructor(id, username, x, y) {
    this.id = id;
    this.username = username;
    this.pos = { x, y };
    //this.speed = 200;
    //this.direction = { dirX: 0, dirY: 0 };
  }

  serialize() {
    return {
      id: this.id,
      username: this.username,
      pos: this.pos
    }
  }
}

module.exports = Player;
