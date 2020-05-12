module.exports = {
  testMessage:  socket => {
    const response = new Date();
    // Emitting a new message. Will be consumed by the client
    socket.emit('FromAPI', response);
    socket.broadcast.emit();
  }
};

