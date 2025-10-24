//Gerer número aleatório de 1 a 100
const numeroMaquina = Math.floor(Math.random() * 100) + 1;

//Número de tentativas
let tentativasRestantes = 10;

function ativarJogo(){
    //Pegar número escolhido pelo usuário
    const numeroEscolhido = parseInt(document.getElementById('numeroEscolhido').value);

    //Elemento para mostrar resultado e tentativas
    const resultadoElement = document.getElementById('resultado');
    const tentativasElement = document.getElementById('tentativas');

    //Verificar se é um número válido
    if(isNaN(numeroEscolhido) || numeroEscolhido > 100 || numeroEscolhido < 1){
        resultadoElement.textContent = 'Por favor, digite um número entre 1 e 100';
        return;
    }

    // Diminui uma tentativa
    tentativasRestantes--;

    //Verifica se acertou
    if(numeroEscolhido === numeroMaquina){
        resultadoElement.textContent = 'Parabéns! Você acertou!';
        tentativasElement.textContent = '';
        document.getElementById('chutar').disabled = true;
    }else{
        //Dar dica se o número é maior ou menor
        const dica = numeroEscolhido > numeroMaquina ? 'menor' : 'maior';
        resultadoElement.textContent = `Errou! O número é ${dica} que ${numeroEscolhido}`;

        //Verifica se ainda tem tentativa
        if(tentativasRestantes === 0){
            resultadoElement.textContent = `Game Over! O número era ${numeroMaquina}`;
            tentativasElement.textContent ='Acabou suas tentativas';
            document.getElementById('chutar').disabled = true;
        }else{
            tentativasElement.textContent = `Você ainda tem ${tentativasRestantes} mais tentativas`;
            }
    }
    document.getElementById('numeroEscolhido').value = '';
}