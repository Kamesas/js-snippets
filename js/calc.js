window.onload = function(e) {
  let display = document.querySelector(".display");
  const keyNumber = document.querySelectorAll(".keyNumber div");
  const btnC = document.querySelector(".btn-c");
  const btnPlus = document.querySelector(".btn-plus");
  const btnMinus = document.querySelector(".btn-minus");
  const btnRes = document.querySelector(".btn-res");
  let num1 = document.querySelector("#num1");
  let num2 = document.querySelector("#num2");
  let operator = document.querySelector("#operator");
  let res;

  for (let i = 0; i < keyNumber.length; i++) {
    keyNumber[i].onclick = function() {
      display.innerHTML += this.innerHTML;
    };
  }

  btnRes.onclick = function() {
    if (num1 && operator.innerHTML === "+") {
      res = Number(num1.innerHTML) + Number(display.innerHTML);
    }
    if (num1 && operator.innerHTML === "-") {
      res = Number(num1.innerHTML) - Number(display.innerHTML);
    }
    display.innerHTML = res;
    num1.innerHTML = null;
    operator.innerHTML = null;
  };

  btnPlus.onclick = function() {
    num1.innerHTML = display.innerHTML;
    display.innerHTML = null;
    operator.innerHTML = this.innerHTML;
  };

  btnMinus.onclick = function() {
    num1.innerHTML = display.innerHTML;
    display.innerHTML = null;
    operator.innerHTML = this.innerHTML;
  };

  btnC.onclick = function() {
    display.innerHTML = null;
    num1.innerHTML = null;
    operator.innerHTML = null;
  };
};
