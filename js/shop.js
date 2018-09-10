window.onload = function(e) {
  const products = document.querySelectorAll("#products .product");
  const sum = document.querySelector(".sum strong");

  for (let i = 0; i < products.length; i++) {
    const element = products[i];
    element.onclick = function() {
      this.classList.toggle("product-active");
      let active = document.querySelectorAll(".product-active");
      price(active);
    };
  }

  function price(active) {
    let sumPrice = 0;
    for (let i = 0; i < active.length; i++) {
      const elementActive = active[i].getAttribute("data-price");
      sumPrice += Number(elementActive);
      sum.innerHTML = sumPrice;
    }
  }
};

// window.onload = function(e){

//   var items = document.querySelectorAll('.items .item');
//   var divPrice = document.querySelector('.value');

//   for(var i = 0; i < items.length; i++){
//       items[i].onclick = function(){
//           this.classList.toggle('item-active');
//           calcPrice();
//       }
//   }

//   function calcPrice(){
//       var price = 0;

//       for(var i = 0; i < items.length; i++){
//           if(items[i].classList.contains('item-active')){
//               price += parseInt(items[i].getAttribute('data-price'));
//           }
//       }

//       divPrice.innerHTML = price;
//   }
// }
