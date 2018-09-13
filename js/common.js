window.onload = function() {
  const carouselItems = document.querySelectorAll(".carousel .item");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let i = 0;
  next.onclick = nextSlide;
  prev.onclick = prevSlide;
  setInterval(nextSlide, 3000);

  function nextSlide() {
    carouselItems[i].classList.remove("item-active");
    i++;
    if (i >= carouselItems.length) {
      i = 0;
    }
    carouselItems[i].classList.add("item-active");
  }

  function prevSlide() {
    carouselItems[i].classList.remove("item-active");
    i--;
    if (i < 0) {
      i = carouselItems.length - 1;
    }
    carouselItems[i].classList.add("item-active");
  }
};
