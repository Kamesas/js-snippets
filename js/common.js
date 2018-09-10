window.onload = function() {
  const btns = document.querySelectorAll(".btns button");

  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.onclick = btnClick;
  }
};

function btnClick(e) {
  console.log(this);
  this.id === "save" ? console.log("Save") : console.log("Delete");
}
