window.onload = function () {

	document.querySelector('#myIP').onclick = function() {
		//ajaxGet('../ip.php');
		ajaxGet('../phones.json');
	
	}
	
}

function ajaxGet(url) {

	let request = new XMLHttpRequest() ;

	request.onreadystatechange = function() {
		console.log(request.readyState);

		if(request.readyState == 4 && request.status == 200) {
			let phones = 	document.querySelector('#myIP').innerHTML =	request.responseText;
			console.log(phones);
		}

	}

	
	request.open('GET', url);
	request.send();

}