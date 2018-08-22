window.onload = function () {

	document.querySelector('#myIP').onclick = function() {
		ajaxGet();
	}
	
}

function ajaxGet() {

	let request = new XMLHttpRequest() ;
<<<<<<< HEAD

	request.onreadystatechange = function() {
		console.log(request.readyState);
	}

	
=======
>>>>>>> 2995f2cbb9eb425f2f86037c73c3e05bdc0f4ad5
	request.open('GET', '../ip.php');
	request.send();

}