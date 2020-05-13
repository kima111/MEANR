module.exports = {
  sendMessage: (io, message) => {
    io.emit('message', message);
  }
};

