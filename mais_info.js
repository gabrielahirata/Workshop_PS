
//função para exbir mais informações, ao clicar em 'saiba mais'
var moreText = document.getElementById("more");
var btnText = document.getElementById("myBtn");
function exibirMais() {
    if (moreText.style.display == "none") {
        btnText.innerHTML = "Ocultar"; 
        moreText.style.display = "block";
    }
    else {
        btnText.innerHTML = "Saiba mais"; 
        moreText.style.display = "none";
    }
}