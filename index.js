const electron = require('electron')
	, app = electron.app
	, BrowserWindow = electron.BrowserWindow;

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 1000, height: 600,
		resizable: true
	});

	mainWindow.loadURL('file://' + __dirname + '/public/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null
	});
});