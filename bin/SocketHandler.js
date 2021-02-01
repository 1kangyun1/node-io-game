const Constant = require('../data/Constant');
const Map = require('../data/Map');

function socketHandler(Game, socket) {
  console.log('new user has connected');

  //receives json file containing username string 
  //and sends gamedata consisting constants and map info
  socket.on(Constant.MSG_TYPES.JOIN_GAME, ({ username }) => {
    socket.emit(Constant.MSG_TYPES.GAME_INFO, {Constant, Map});
    Game.addPlayer(socket.id, 'test');
  });

  /** receives dir json file containing x and y direction
   *  directions can be positive, 0, negative
   **/
  socket.on(Constant.MSG_TYPES.INPUT, (dir = { dirX, dirY }) => {
    Game.handleMovement(socket.id, dir);
    //Game.checkPosition(socket.id, pos);
  });

  socket.on('disconnect', () => {
    console.log('user has disconnected');
    Game.removePlayer(socket.id);
  });
}

module.exports = socketHandler;
