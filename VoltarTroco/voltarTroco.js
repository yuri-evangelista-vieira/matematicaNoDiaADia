const botaoCalcular = document.getElementById('botaoCalcular')
const trocoH1 = document.getElementById('trocoH1')

function calcularTroco() {
    const campoMontCliente = document.getElementById('montanteCliente').value;
    const campoValorTotal = document.getElementById('totalPagamento').value;
    
    if(campoMontCliente == "" || campoValorTotal == "") {
        alert ('Preencha todos os campos para mostrar quanto você deve devolver de troco para o cliente')
        return;
    }

    const calculoTroco = campoMontCliente - campoValorTotal;
    trocoH1.textContent = `Troco: ${calculoTroco}`
}


document.addEventListener('keydown', function(e) {
    if(e.key === "Enter") {
        document.getElementById('botaoCalcular').click();
    }
})
botaoCalcular.addEventListener('click', calcularTroco)