module.exports = {
  sendMessage: (io, message) => {
    io.emit('message', message);
  },
  postForum: (io, payload) => {
    io.emit('postForum', payload);
  }
};

