const mongoose = require('mongoose');
const SocketServer = require('wsbash-node-server');

let db = mongoose.createConnection('mongodb://localhost/test');

db.on('error', e => console.error(e));

db.on('open', () => {
  
})