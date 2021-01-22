class Player {
  constructor(id, username, x, y) {
    this.id = id;
    this.username = username;
    this.pos = { x, y };
    this.speed = 200;
    this.direction = { dirX: 0, dirY: 0 };
  }
}

module.exports = Player;
