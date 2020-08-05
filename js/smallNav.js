//função para mostrar e esconder o menu para telas menores do que 100px
var botaoMenu = document.getElementById("menuNav");
botaoMenu.addEventListener("click", function() {
    var x = document.getElementById("navbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
})