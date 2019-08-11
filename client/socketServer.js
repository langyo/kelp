module.exports = (server, client) => new Promise(resolve => {
  server.register('test', () => console.log('test'));
  resolve();
});