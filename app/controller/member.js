import app from '../../application'
const server = require('http').createServer(app)
const io = require('socket.io').listen(server)

