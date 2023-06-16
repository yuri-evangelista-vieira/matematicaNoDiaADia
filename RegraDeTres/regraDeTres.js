const botaoCalcular = document.getElementById('botaoCalcular');
const h1Resultado = document.getElementById('valorx');
const menuResultadoFinal = document.getElementById('menuSelecionarResultado')
const opcaoApenasNumero = document.getElementById('apenasNumero')
const opcaoDinheiro = document.getElementById('dinheiro')


function calcularRegraDeTres() {

    const valor1 = document.getElementById('valor1').value;
    const valor2 = document.getElementById('valor2').value;
    const valor3 = document.getElementById('valor3').value;
    
    if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3)) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }
    
    const resultado = (valor2 * valor3) / valor1;
    h1Resultado.textContent = `Resultado: ${resultado.toFixed(2)}`

    /**
     * Preciso criar agora as estruturas de controle que vão:
     * Mostrar na interface do usuário qual é o resultado que
     * ele deseja que seja exibido. Se é dinheiro (vai aparecer
     * em R$), Horário (que vai calcular em minutos, ou horas
     * na regra de três) e, até o atual momento, os dias (que
     * vai calcular quantos dias faltam ou quantos dias serão
     * necessário)
     * 
     * Esse é o próximo passo para o aprimoramento do projeto.
     */
}

document.addEventListener('keydown', function (e) {
    if (e.key === "Enter") {
        document.getElementById('botaoCalcular').click();
    }
})

botaoCalcular.addEventListener('click', calcularRegraDeTres)