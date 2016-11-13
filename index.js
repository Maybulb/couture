const electron = require('electron')
	, app = electron.app
	, BrowserWindow = electron.BrowserWindow
	, ipcMain = electron.ipcMain
	, request = require('request')
	, util = require('util');

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

	var url = util.format('http://localhost:8080/api/%s/%s/%s', gender, style, 'top');
	console.log(url);

	request.get(url, function(err, res, body) {
		console.log('testing');
		if (!err && res.statusCode == 200) {
			console.log(body);
		}
	});
});