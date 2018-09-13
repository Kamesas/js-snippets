window.onload = function() {
  const items = document.querySelectorAll(".carousel1 .item");
  const items2 = document.querySelectorAll(".carousel2 .item");
  // const prev = document.querySelector(".prev");
  // const next = document.querySelector(".next");

  let slider1 = new Slider(items);
  let slider2 = new Slider(items2);

  setInterval(function() {
    slider2.nextSlide();
  }, 3000);

  function Slider(carouselItems) {
    let i = 0;
    const slider = this;
    slider.carouselItems = carouselItems;

    document.querySelector(".next").onclick = function() {
      slider1.nextSlide();
    };

    document.querySelector(".prev").onclick = function() {
      slider1.prevSlide();
    };

    slider.nextSlide = function() {
      slider.carouselItems[i].classList.remove("item-active");
      i++;
      if (i >= slider.carouselItems.length) {
        i = 0;
      }
      slider.carouselItems[i].classList.add("item-active");
    };

    slider.prevSlide = function() {
      slider.carouselItems[i].classList.remove("item-active");
      i--;
      if (i < 0) {
        i = slider.carouselItems.length - 1;
      }
      slider.carouselItems[i].classList.add("item-active");
    };
  }
};
