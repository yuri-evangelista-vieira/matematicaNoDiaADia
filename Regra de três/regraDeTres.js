const botaoCalcular = document.getElementById('botaoCalcular');
const h1Resultado = document.getElementById('valorx');



function calcularRegraDeTres() {

    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const valor3 = document.getElementById('valor3').value;

    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }
    const resultado = (valor2 * valor3) / valor1;
    h1Resultado.textContent = `Resultado: ${resultado.toFixed(2)}`;
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        document.getElementById('botaoCalcular').click();
    }
})

botaoCalcular.addEventListener('click', calcularRegraDeTres)