window.onload = function() {
  const items = document.querySelectorAll(".items .item");
  const start = document.querySelector(".start");
  let blick = true;

  function adBd() {
    this.classList.toggle("item-active");
  }

  start.onclick = function() {
    blick = !blick;
    !blick ? (start.innerHTML = "Pause") : (start.innerHTML = "Start");
    blick
      ? clearInterval(setInterv)
      : (setInterv = setInterval(function() {
          let rand = mtRand(0, items.length - 1);
          adBd.call(items[rand]);
        }, 500));
  };

  function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }
};
