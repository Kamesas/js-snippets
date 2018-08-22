window.onload = function () {

	document.querySelector('#myIP').onclick = function() {
		ajaxGet();
	}
	
}

function ajaxGet() {

	let request = new XMLHttpRequest() ;
	request.open('GET', '../ip.php');
	request.send();

}