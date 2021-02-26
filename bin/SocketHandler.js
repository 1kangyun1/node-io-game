const Constants = require('../data/Constants');
const Map = require('../data/Map');

function SocketHandler(Game, socket) {
  console.log('new user has connected');

  //receives json file containing username string 
  //and sends gamedata consisting constants and map info
  socket.on(Constants.MSG_TYPES.JOIN_GAME, ({ username }) => {
    socket.emit(Constants.MSG_TYPES.GAME_INFO, {Constants, Map});
    Game.addPlayer(socket.id, 'test');
  });

  // receives pos json file containing x and y position
  socket.on(Constants.MSG_TYPES.MOVEMENT, (pos = { x, y }) => {
    Game.updatePosition(socket.id, pos);
  });

  socket.on('disconnect', () => {
    console.log('user has disconnected');
    Game.removePlayer(socket.id);
  });
}

module.exports = SocketHandler;
