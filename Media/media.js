const formulario = document.getElementById('formulario')
const botaoAdicionar = document.getElementById('botaoAdicionar')
const botaoCalcular = document.getElementById('botaoCalcular')
const removerUltimoCampo = document.getElementById('removerUltimoCampo')
const valorMedia = document.getElementById('valorMedia')

let totalN = 3;
let camposAdicionados = ['valor1', 'valor2', 'valor3'];



// Função para adicionar um novo campo

function adicionarNumero() {
    if (totalN > 500) {
        alert('Não é possível adicionar mais números');
        return;
    }



    let novoNumero = totalN + 1;

    //criar novos elementos
    let divN = document.createElement('div');
    let labelN = document.createElement('label');
    let inputN = document.createElement('input');


    //personalizando div criada
    divN.id = 'valor' + novoNumero
    //personalizando label criado
    labelN.htmlFor = 'valor' + novoNumero;
    labelN.textContent = 'n' + novoNumero + ': ';
    //personalizando input criado
    inputN.type = 'number';
    inputN.className = 'numero';


    //colocar label e input dentro da minha div.
    formulario.appendChild(divN)
    divN.appendChild(labelN)
    divN.appendChild(inputN)

    camposAdicionados.push('valor' + novoNumero)

    console.log(camposAdicionados)
    totalN++
}

botaoAdicionar.addEventListener('click', adicionarNumero)



// Adicionar o evento que vai remover o último campo adicionado
removerUltimoCampo.addEventListener('click', function () {
    if (totalN <= 2) {
        alert('Não há campos adicionados para remover.')
        return;
    }

    const ultimoCampoId = camposAdicionados.pop();

    const ultimoCampo = document.getElementById(ultimoCampoId)
    ultimoCampo.remove()

    totalN--
})



// Função para calcular a média.
function calcularMedia() {
    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)

    if(isNaN(valor1) || isNaN(valor2)) {
        alert('Preencha pelo menos o primeiro e o segundo campo para calcular a média')
        return
    }

    const campos = document.querySelectorAll('.numero')
    let soma = 0

    for (let i = 0; i < campos.length; i++) {
        soma += Number(campos[i].value)
    }

    let resultado = soma / campos.length;

    valorMedia.textContent = resultado.toFixed(2);
}

botaoCalcular.addEventListener('click', calcularMedia)