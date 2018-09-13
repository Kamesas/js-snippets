window.onload = function() {
  const items = document.querySelectorAll(".carousel1 .item");
  const items2 = document.querySelectorAll(".carousel2 .item");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");

  let slider1 = new Slider(items);
  let slider2 = new Slider(items2);

  setInterval(function() {
    slider2.nextSlide();
  }, 3000);

  next.onclick = function() {
    slider1.prevSlide();
  };
  prev.onclick = function() {
    slider1.nextSlide();
  };

  function Slider(carouselItems) {
    let i = 0;
    this.carouselItems = carouselItems;

    this.nextSlide = function() {
      this.carouselItems[i].classList.remove("item-active");
      i++;
      if (i >= this.carouselItems.length) {
        i = 0;
      }
      this.carouselItems[i].classList.add("item-active");
    };

    this.prevSlide = function() {
      this.carouselItems[i].classList.remove("item-active");
      i--;
      if (i < 0) {
        i = this.carouselItems.length - 1;
      }
      this.carouselItems[i].classList.add("item-active");
    };
  }
};
