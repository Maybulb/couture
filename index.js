const electron = require('electron')
	, app = electron.app
	, BrowserWindow = electron.BrowserWindow
	, ipcMain = electron.ipcMain
	, request = require('request')
	, util = require('util');

app.on('ready', function() {
	global.mainWindow = new BrowserWindow({
		width: 1000, height: 600,
		resizable: true
	});

	// global.mainWindow.openDevTools();

	global.mainWindow.loadURL('file://' + __dirname + '/public/index.html');

	global.mainWindow.on('closed', function() {
		global.mainWindow = null
	});

	ipcMain.on("submit", (e, style, gender) => {
		var url = util.format('http://localhost:8080/api/%s/%s', gender, style);
		console.log(url);

		request.get(url, (err, res, body) => {
			if (!err && res.statusCode == 200) {
				global.mainWindow.webContents.send('response', body);
			}
		});
	});
});