//função para limitar os comentários em até 80 caracteres
var divTexto = document.querySelector("#caixa_comentario");
var botaoComentario = document.querySelector("#botao_comentario");

divTexto.addEventListener("input", function(){
    var texto = divTexto.value
    if(texto.length>80){
        divTexto.classList.add("error-text");
        botaoComentario.disabled = true
        botaoComentario.style.opacity = 0.5
    }else{
        divTexto.classList.remove("error-text")
        botaoComentario.disabled = false
        botaoComentario.style.opacity = 1
    }
})