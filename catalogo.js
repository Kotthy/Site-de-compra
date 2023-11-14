const botaocatalogo = document.getElementById("colection");
botaocatalogo.addEventListener("click", function(){
    const escondido = document.getElementById("escondido");
    const mais = document.getElementById ("mais");
    if (escondido.style.display === "none") {
        escondido.style.display = "flex";
        mais.style.transform = "rotate(45deg)";
    
    } else {
        escondido.style.display = "none";
        mais.style.transform = "rotate(0deg)";
    }
})
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var menu = document.querySelector(".menu");
  if (document.documentElement.scrollTop > 50) {
    menu.classList.add("scrolled");
  } else {
    menu.classList.remove("scrolled");
  }
}

