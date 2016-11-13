const electron = require('electron')
	, app = electron.app
	, BrowserWindow = electron.BrowserWindow
	, ipcMain = electron.ipcMain;

app.on('ready', function() {
	var mainWindow = new BrowserWindow({
		width: 1000, height: 600,
		resizable: true
	});

	mainWindow.openDevTools();

	mainWindow.loadURL('file://' + __dirname + '/public/index.html');

	mainWindow.on('closed', function() {
		mainWindow = null
	});
});

ipcMain.on("submit", function (e, style, gender) {
	console.log(style + " " + gender);
})