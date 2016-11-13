const ipcRenderer = require('electron').ipcRenderer
	, $ = require('jquery');

function submit() {
	var styleValue = $('#style option:selected').attr('value')
		, genderValue = $('#gender option:selected').attr('value')

	ipcRenderer.send('submit', styleValue, genderValue);
}

ipcRenderer.on('response', function(event, body) {
	body = JSON.parse(body);

	// photos
	$('#top-photo').attr('src', body.top.image);
	$('#bottom-photo').attr('src', body.bottom.image);

	// titles
	$('#top-title').text(body.top.title);
	$('#bottom-title').text(body.bottom.title);

	// descriptions
	$('#top-desc').text(body.top.note);
	$('#bottom-desc').text(body.bottom.note);

	// brands/companies
	$('#top-brand').text(body.top.brand);
	$('#bottom-brand').text(body.bottom.brand);

	// urls
	$('#top-icon').css('display', 'inline-block');
	$('#bottom-icon').css('display', 'inline-block');
	$('#top-link').attr('href', body.top.url);
	$('#bottom-link').attr('href', body.bottom.url);
});
