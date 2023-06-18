const botaoCalcular = document.getElementById('calcularOcupacao')
const ocupacaoH1 = document.getElementById('valorOcupacao')

function calcularOcupacao() {
    const totalHosp = document.getElementById('totalHospedados').value
    const totalApt = document.getElementById('totalDeApartamentos').value

    const calculo = (totalHosp / totalApt) * 100
    
    ocupacaoH1.textContent = `Ocupação:${calculo.toFixed(2)}%`
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        botaoCalcular.click();
    }
})

botaoCalcular.addEventListener('click', calcularOcupacao)