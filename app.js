window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};
setTimeout(function () {
  $(".loader_bg").fadeToggle();
}, 3000);
