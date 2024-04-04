const socket = io();

socket.on('message', (message) => {
  console.log('Message from server', message);
});

function sendMessage(message) {
  socket.emit('message', message);
}
