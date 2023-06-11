
// Dar vida ao botão média, eu poderia criar uma função construtora
// Do que eu precisaria para criar uma função que navega entre páginas.




const botaoMedia = document.getElementById('botaoMedia')
const botaoRegraDeTres = document.getElementById('botaoRegraDeTres')


function irParaMedia() {
    setTimeout(function(){
        window.location.href = "../Media/media.html";
    }, 400);
}

botaoMedia.addEventListener('click', irParaMedia);