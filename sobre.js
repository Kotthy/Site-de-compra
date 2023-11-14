window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.querySelector(".menu");
  if (document.documentElement.scrollTop > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}
const botaocatalogo = document.getElementById("processo");
botaocatalogo.addEventListener("click", function(){
    const escondido = document.getElementById("escondido");
    if (escondido.style.display === "none") {
        escondido.style.display = "flex";
    
    } else {
        escondido.style.display = "none";
    }
})