window.onload = function() {
  document.body.addEventListener("click", firstClick);
  document.body.addEventListener("click", function() {
    console.log(2);
  });
};

function firstClick(e) {
  console.log(1);
}
