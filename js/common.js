window.onload = function() {
  const carouselItems = document.querySelectorAll(".carousel .item");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let i = 0;

  next.onclick = function() {
    carouselItems[i].classList.remove("item-active");
    i++;
    if (i >= carouselItems.length) {
      i = 0;
    }
    carouselItems[i].classList.add("item-active");
  };

  prev.onclick = function() {
    carouselItems[i].classList.remove("item-active");
    i--;
    if (i < 0) {
      i = carouselItems.length - 1;
    }
    carouselItems[i].classList.add("item-active");
  };
};
