window.onload = function() {
  let popup1 = new Popup({
    btnShow: ".openPopup",
    popupWindow: "#popup1",
    close: "#popup1 .closePopup",
    overlay: "#popup1 .overlay"
  });

  let popup2 = new Popup({
    btnShow: ".openPopup2",
    popupWindow: "#popup2",
    close: "#popup2 .closePopup",
    overlay: "#popup2 .overlay"
  });

  function Popup(obj) {
    let popup = this;
    popup.btnShow = document.querySelector(obj.btnShow);
    popup.popupWindow = document.querySelector(obj.popupWindow);
    popup.close = document.querySelector(obj.close);
    popup.overlay = document.querySelector(obj.overlay);

    popup.btnShow.onclick = function(e) {
      e.preventDefault();
      popup.popupWindow.classList.add("showPopup");
    };

    popup.close.onclick = function closePopap(e) {
      e.preventDefault();
      popup.popupWindow.classList.remove("showPopup");
    };

    popup.overlay.onclick = function(e) {
      e.preventDefault();
      popup.popupWindow.classList.remove("showPopup");
    };
  }
};
