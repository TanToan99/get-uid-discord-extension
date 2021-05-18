function init() {
	document.getElementById("btnSave").addEventListener("click", save);
}

function save() {
    chrome.extension.sendRequest({}, function(response) {
        alert(response.data)
    });
}

window.onload = function () {
    init();
}