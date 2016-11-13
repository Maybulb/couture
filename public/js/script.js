const ipcRenderer = require('electron').ipcRenderer
	, $ = require('jquery');

function submit() {
	var styleValue = $('#style option:selected').attr('value')
		, genderValue = $('#gender option:selected').attr('value')

	ipcRenderer.send('submit', styleValue, genderValue);
}

ipcRenderer.on('response', function(event, body) {
	console.log(body);

	$('#top-photo').attr('src', body.top.image);
	$('#bottom-photo').attr('src', body.bottom.image);

	$('#top-title').attr('value', body.top.title);
	$('#bottom-title').attr('value', body.bottom.title);

	$('#top-title').attr('value', body.top.title);
	$('#bottom-title').attr('value', body.bottom.title);	
});
