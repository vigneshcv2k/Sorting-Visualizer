const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow(
        {
            'icon': './Assets/Logo.png',
            'height': 925,
            'width': 700
        }
    );
    
    win.loadFile('./index.html');
}

app.whenReady().then(() => {
    createWindow();
});

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin')
        app.quit();
});