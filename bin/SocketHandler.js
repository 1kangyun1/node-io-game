const GameManager = require('./gameManager');

function socketHandler(io, socket) {
  console.log('new user has connected');

  const Game = new GameManager(io);

  //receives json file containing username string
  socket.on('join', ( { username } ) => 
    {Game.addPlayer(socket.id, 'test')});

  /** receives dir json file containing x and y direction
   *  directions can be positive, 0, negative
   **/
  socket.on('input', ( dir={ dirX, dirY } ) => 
    {Game.handleInput(socket.id, dir)});

  socket.on('disconnect', () => 
    {Game.removePlayer(socket.id)});
}

module.exports = socketHandler;