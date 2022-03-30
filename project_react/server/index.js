const express = require('express');
const socket = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = socket(server);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => console.log(`Listen on *:${PORT}`));

io.on('connection', socket => {
  const { id } = socket.client;
  socket.on('chat message', msg => {
    console.log(`${id}: ${msg}`);
    io.emit('chat message', msg);
  });
});

io.on('connection', socket => {
  const { id } = socket.client;
  socket.on('chat image', image => {
    console.log(`${id}: ${image}`);
    io.emit('chat image', image);
  });
});
