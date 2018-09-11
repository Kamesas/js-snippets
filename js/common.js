window.onload = function() {
  const items = document.querySelectorAll(".items .item");

  // for (let i = 0; i < items.length; i++) {
  //   items[i].onclick = adBd;
  // }

  function adBd() {
    this.classList.toggle("item-active");
  }

  setInterval(function() {
    let rand = mtRand(0, items.length - 1);
    adBd.call(items[rand]);
  }, 500);

  function mtRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
  }
};
