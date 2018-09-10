window.onload = function () {

	const textColor = document.querySelector('#textColor');

	textColor.onclick = function() {
		this.style.color = "red"; 
		this.innerHTML += ' from JS';
		this.className = 'test';
	}



} 