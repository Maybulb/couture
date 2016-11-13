// nothing yet

const {ipcRenderer} = require('electron')
const $ = require("jquery");

function submit() {
	ipcRenderer.send("submit", $("#style option:selected").text(), $("#gender option:selected").text())
}