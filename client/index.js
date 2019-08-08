const electron = require('electron');
const { app, BrowserWindow, Menu } = electron;
let mainWnd = null;

const SocketServer = require('wsbash-node-server');
const portTest = require('portscanner');

let server, port;

app.on('ready', ()=>{
  portTest.findAPortNotInUse(9233, 10000, 'localhost', function(error, p) {
    if(error) console.error(error);
    port = p;
    server = new SocketServer(port);
    registerSocketServer();
    createMainWnd();
  });
});

app.on('window-all-closed', () => {
  app.quit();
});

function registerSocketServer() {
  server.register('test', () => console.log('test'));
}

function createMainWnd() {
  mainWnd = new BrowserWindow({
    width:800,
    height:600,
    minWidth:800,
    maxWidth: 800,
    minHeight: 600,
    maxHeight: 600,
    useContentSize: true,
    show: false,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWnd.loadURL('http://127.0.0.1:16000/public/index.html?port=' + port);

  mainWnd.on('ready-to-show', ()=>{
    Menu.setApplicationMenu(null);
    mainWnd.show();
    mainWnd.webContents.openDevTools({ detach:true });
  });

  mainWnd.on('closed', () => {
    mainWnd = null;
    process.exit();
  });
}
