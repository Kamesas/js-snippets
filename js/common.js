window.onload = function () {

	const textColor = document.querySelector('#textColor');
	textColor.onclick = function() {
		this.style.color = "red"; 
		this.innerHTML += ' from JS';
		this.className = 'test';
	}

	const btnPrev = document.querySelector('#controlsBTN .prev');
	const btnNext = document.querySelector('#controlsBTN .next');
	const images = document.querySelectorAll('#foto img');
	let i = 0;

	btnPrev.onclick = function () {
		images[i].style.display = 'none';
		i--;
		if (i < 0) {
			i = images.length - 1;
		}
		images[i].style.display = 'block';		
	}

	btnNext.onclick = function () {
		images[i].style.display = 'none';
		i++;
		if (i >= images.length) {
			i = 0
		}
		images[i].style.display = 'block';		
		
	}



} 