window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.querySelector(".menu");
  if (document.documentElement.scrollTop > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}