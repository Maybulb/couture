const ipcRenderer = require('electron').ipcRenderer
	, $ = require('jquery');

function submit() {
	var styleValue = $('#style option:selected').attr('value')
		, genderValue = $('#gender option:selected').attr('value')
		, budgetValue = $("#budget").val()

	ipcRenderer.send('submit', styleValue, genderValue, budgetValue);
}

ipcRenderer.on('response', function(event, body) {
	body = JSON.parse(body);

	// photos
	$('#top-photo').attr('src', body.top.image);
	$('#bottom-photo').attr('src', body.bottom.image);

	// titles
	$('#top-title').text(body.top.title);
	$('#bottom-title').text(body.bottom.title);

	$('#top-desc').html(makeUL(body.top.note));
	$('#bottom-desc').html(makeUL(body.bottom.note));

	// brands/companies
	$('#top-brand').text(body.top.brand);
	$('#bottom-brand').text(body.bottom.brand);

	// urls
	$('#top-icon').css('display', 'inline-block');
	$('#bottom-icon').css('display', 'inline-block');
	$('#top-link').attr('href', body.top.url);
	$('#bottom-link').attr('href', body.bottom.url);

	// price
	$('#top-price').text(body.top.cost.pretty);
	$('#bottom-price').text(body.bottom.cost.pretty);
	$('#total-price').text('$' + body.totalCost.raw / 100);

	// result header
	$('.hide').css('display', 'inline-block');

	// show results
	$('#resultBlock').css('display', 'block');
});

function makeUL(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for(var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');

        // Set its contents:
        item.appendChild(document.createTextNode(array[i]));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
}

window.setInterval(function () {
	$('#displayBudget').text($("#budget").val())
}, 50)