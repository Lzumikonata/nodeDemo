const express = require('express')
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

const users = [];


app.use('/', express.static(__dirname+'/'));
server.listen(2333);

io.sockets.on('connection', (socket) => {
  socket.on('disconnect', () => {
    if(users.indexOf(socket.username) > -1) {
      users.splice(users.indexOf(socket.username), 1)
      console.log(socket.username+'===>disconnected')
    }
    socket.broadcast.emit('users', {number: users.length})
  })
  
  socket.on('message', data => {
    let newData = {
      text: data.text,
      user: socket.username
    }
    console.log(newData)
    const reply = {
      user: 'system',
      text: 'word'
    }
    socket.emit('receive_message',newData);
    socket.broadcast.emit('receive_message',newData);
  
  })
  
  socket.on('login', data => {
    if(users.indexOf(data.username)>-1){
       console.log('over')
    }else{
      socket.username = data.username;
      console.log(data.username)
      users.push(data.username);
      // 统计连接数
      socket.emit('users',{number:users.length});  // 发送给自己
      socket.broadcast.emit('users',{number:users.length}); // 发送给其他人
    }
  })
})