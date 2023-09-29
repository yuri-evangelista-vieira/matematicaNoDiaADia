// Botão para navegar até a aba média
const botaoMedia = document.getElementById('botaoMedia')

function irParaMedia() {
    setTimeout(function(){
        window.location.href = "../Media/media.html";
    }, 400);
}

botaoMedia.addEventListener('click', irParaMedia);



// Botão para navegar até a aba regra de três
const botaoRegraDeTres = document.getElementById('botaoRegraDeTres')

function irParaRegraDeTres() {
    setTimeout(function() {
        window.location.href = "../RegraDeTres/regraDeTres.html";
    }, 400);
}

botaoRegraDeTres.addEventListener('click', irParaRegraDeTres)



// Botão para navegar até a aba Voltar Troco
const botaoVoltarTroco = document.getElementById('botaoVoltarTroco')

function irParaVoltarTroco() {
    setTimeout(function() {
        window.location.href = "../VoltarTroco/voltarTroco.html";
    }, 400); 
}

botaoVoltarTroco.addEventListener('click', irParaVoltarTroco)



// Botão para navegar até a aba Ocupação do Hotel
const botaoCalcularOcupacao = document.getElementById('botaoCalcularOcupacao')

function irParaOcupacao() {
    setTimeout(function() {
        window.location.href = "../Ocupacao/ocupacao.html"
    }, 400)
}

botaoCalcularOcupacao.addEventListener('click', irParaOcupacao)


// Botão para navegar até a aba Gerar Escala
const botaoGerarEscala = document.getElementById('botaoGerarEscala')

function irParaGerarEscala() {
    setTimeout(function() {
        window.location.href = '../GerarEscala/gerarEscala.html'
    }, 400)
}

botaoGerarEscala.addEventListener('click', irParaGerarEscala)