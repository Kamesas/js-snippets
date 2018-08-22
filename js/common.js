window.onload = function () {

	document.querySelector('#myIP').onclick = function() {
		ajaxGet();
	}
	
}

function ajaxGet() {

	let request = new XMLHttpRequest() ;

	request.onreadystatechange = function() {
		console.log(request.readyState);
	}

	
	request.open('GET', '../ip.php');
	request.send();

}