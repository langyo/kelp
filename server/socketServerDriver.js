const SocketServer = require('wsbash-node-server');
const PortTest = require('portscanner');

module.exports = new Promise(resolve => {
  PortTest.findAPortNotInUse(9233, 10000, 'localhost', function(error, p) {
    if(error) console.error(error);
    console.log('Will use the port', p);
    server = new SocketServer(p);
    resolve(server);
  });
});