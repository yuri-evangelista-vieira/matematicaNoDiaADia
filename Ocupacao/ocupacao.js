const botaoCalcular = document.getElementById('calcularOcupacao')
const ocupacaoH1 = document.getElementById('valorOcupacao')
const aptDisponiveisH2 = document.getElementById('aptDisponiveis')

function calcularOcupacao() {

    const valorHospedados = parseFloat(document.getElementById('totalHospedados').value);
    const valorChegadasEsperadas = parseFloat(document.getElementById('chegadasEsperadas').value);
    const valorTotalApt = parseFloat(document.getElementById('totalDeApartamentos').value);

    if (isNaN(valorHospedados) || isNaN(valorTotalApt) || isNaN(valorChegadasEsperadas)) {
        alert('Preencha todos os campos para realizar o cálculo')
        return
    }

    const totalHosp = document.getElementById('totalHospedados').value
    const totalApt = document.getElementById('totalDeApartamentos').value
    const totalChegadas = document.getElementById('chegadasEsperadas').value

    const somaHospedadosEChegadas = totalHosp + totalChegadas

    const calculoOcupacao = (somaHospedadosEChegadas / totalApt) * 10
    const calculoAptDispo = totalApt - totalHosp

    ocupacaoH1.textContent = `Ocupação:${calculoOcupacao.toFixed(2)}%`


    aptDisponiveisH2.textContent = `Apartamentos Disponíveis: ${calculoAptDispo}`
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        botaoCalcular.click();
    }
})

botaoCalcular.addEventListener('click', calcularOcupacao)

