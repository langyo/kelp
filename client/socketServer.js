module.exports = (server, client) => new Promise(resolve => {
  let events = [
    'account.verify',
    'account.login',
    'account.register'
  ];
  
  client.onOpen(() => {
    // Electron 渲染进程 -> Electron 主进程 -> 服务器
    events.forEach(n => server.register(n, obj => client.send({ ...obj, type: 'execute' })));
    // 服务器 -> Electron 主进程 -> Electron 渲染进程
    events.forEach(n => client.receive(n, obj => server.clients.forEach(client => client.send({ ...obj, type: 'data'}))));
  })

  resolve();
});