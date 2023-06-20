const botaoCalcular = document.getElementById('botaoCalcular');
const h1Resultado = document.getElementById('valorx');
const tipoResultado = document.getElementById('tipoResultado')


function calcularRegraDeTres() {

    const valor1 = parseFloat(document.getElementById('valor1').value)
    const valor2 = parseFloat(document.getElementById('valor2').value)
    const valor3 = parseFloat(document.getElementById('valor3').value)

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }
    let resultado = (valor2 * valor3) / valor1;
    const formatoResultado = tipoResultado.value

    if (formatoResultado === 'apenasNumero') {
        resultado = `${resultado.toFixed(2)}`
    } else if (formatoResultado === 'dinheiro') {
        resultado = `R$${resultado.toFixed(2)}`
    } else if (formatoResultado === 'unidades') {
        resultado = `${resultado.toFixed(0)} unidades`
    }

    h1Resultado.textContent = `Resultado: ${resultado}`
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        botaoCalcular.click();
    }
})

botaoCalcular.addEventListener('click', calcularRegraDeTres)