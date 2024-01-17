// O método alert() mostra uma caixa com uma mensagem na tela e um botão de OK
alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    // O método prompt exibe uma caixa com um espaço para que o usuário insira uma mensagem
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}!`);
        } else {
            alert(`O número secreto é maior que o ${chute}!`);
        }

        // Aqui vão ser calculadas as quantidades de vezes que o usuário precisou para acertar o número secreto.
        tentativas++;

    }

}

// If ternário -> condicao ? acao1 : acao2;
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);