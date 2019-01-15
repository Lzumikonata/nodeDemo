import socket from 'socket.io'
import sessionCotroller from './admin'

export default class Socket{
  constructor(server) {
    this.io = socket(server)
    this._connectedUsers = []
    this.io.on('connection', (socket) => {
      socket.on('login', data => {
        this.connectedUser(socket, data);
      });
      socket.on('chat', (data) => {
        this.broadcastChat(socket, data);
      });
      socket.on('notification', (data) => {
        this.broadcastNotification(socket, data);
      });
      socket.on('disconnect', () => {
        this.disconnectUser(socket.id);
      });
    })
  }
  
  async connectedUser(socket, data) {
    console.log('userMessage', data)
    socket.username = data.username
    const admin = await sessionCotroller.adminLogin(data.username)
    if (!admin) return socket.emit('users', { message: '你名字不对啊'})
    if (admin.encryptPwd === data.password + admin.salt) {
      this._connectedUsers.push(data.username) // 统计连接数
      socket.emit('users', { message: '成了' })  // 发送给自己
      socket.broadcast.emit('users', { number: this._connectedUsers.length }) // 发送给其他人
      return
    }
    socket.emit('users', { message: '登你马呢，密码都不对' })  // 发送给自己
  }
  broadcastChat(socket, data) {
    console.log(socket, data)
  }
  broadcastNotification(data) {
    console.log(data)
  }
  disconnectUser() {
  
  }

}