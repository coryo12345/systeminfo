const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');
const electron = require('electron');
var os = require('os');

let win;

function createWindow(){
    var x = electron.screen.getPrimaryDisplay().workAreaSize;
    console.log(x);
    win = new BrowserWindow({width:600, height:800});

    /*
    win = new BrowserWindow({width:1920, height:1080});
    win.setFullScreen(true);
    */

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'usage.html'),
        protocol: 'file:',
        slashes: true
    }))

    //win.webContents.openDevTools();

    win.on('closed', () => {
        win = null;
    })

    win.setResizable(true);
    win.setMenu(null);
    
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if(os.platform() != 'darwin'){
        app.quit();
    }
})