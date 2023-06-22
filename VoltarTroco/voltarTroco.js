const botaoCalcular = document.getElementById('botaoCalcular')
const trocoH1 = document.getElementById('trocoH1')

function calcularTroco() {
    const campoMontCliente = parseFloat(document.getElementById('montanteCliente').value)
    const campoValorTotal = parseFloat(document.getElementById('totalPagamento').value)
    
    if(isNaN(campoMontCliente) || isNaN(campoValorTotal)) {
        alert ('Preencha todos os campos para mostrar quanto você deve devolver de troco para o cliente')
        return;
    }

    const calculoTroco = campoMontCliente - campoValorTotal;
    trocoH1.textContent = `Troco: R$ ${calculoTroco.toFixed(2)}`
}


document.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        document.getElementById('botaoCalcular').click();
    }
})
botaoCalcular.addEventListener('click', calcularTroco)