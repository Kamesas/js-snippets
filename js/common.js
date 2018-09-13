window.onload = function() {
  const items = document.querySelectorAll(".carousel1 .item");
  const items2 = document.querySelectorAll(".carousel2 .item");
  // const prev = document.querySelector(".prev");
  // const next = document.querySelector(".next");

  let slider1 = new Slider({
    carouselItems: ".carousel1 .item",
    btnNext: ".carousel1 .next",
    btnPrev: ".carousel1 .prev",
    autoPlay: true
    //speed: 1000
  });

  let slider2 = new Slider({
    carouselItems: ".carousel2 .item",
    btnNext: ".carousel2 .next",
    btnPrev: ".carousel2 .prev",
    autoPlay: true,
    speed: 2000
  });

  function Slider(obj) {
    let i = 0;
    const slider = this;
    slider.carouselItems = document.querySelectorAll(obj.carouselItems);
    slider.btnNext = document.querySelector(obj.btnNext);
    slider.btnPrev = document.querySelector(obj.btnPrev);
    slider.autoPlay = obj.autoPlay;
    slider.speed = obj.speed || 3000;

    if (slider.autoPlay) {
      setInterval(function() {
        slider.nextSlide();
      }, slider.speed);
    }

    slider.btnNext.onclick = function() {
      slider.nextSlide();
    };

    slider.btnPrev.onclick = function() {
      slider.prevSlide();
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
