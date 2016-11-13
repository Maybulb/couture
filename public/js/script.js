const ipcRenderer = require('electron').ipcRenderer
	, $ = require('jquery');

function submit() {
	var styleValue = $('#style option:selected').attr('value')
		, genderValue = $('#gender option:selected').attr('value')

	ipcRenderer.send('submit', styleValue, genderValue);
}

ipcRenderer.on('response', function(event, body) {
	body = JSON.parse(body);

	$('#top-photo').attr('src', body.top.image);
	$('#bottom-photo').attr('src', body.bottom.image);

	$('#top-title').text(body.top.title);
	$('#bottom-title').text(body.bottom.title);

	$('#top-desc').text(body.top.note);
	$('#bottom-desc').text(body.bottom.note);

	$('#top-brand').text(body.top.brand);
	$('#bottom-brand').text(body.bottom.brand);
});
