// 1 - Dia da semana
let diaDaSemana = prompt('Qual é o dia da semana?');

if(diaDaSemana == 'Sábado' || diaDaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

// 2 - Verificação de números
let numero = prompt('Digite um número:');

if(numero > 0) {
    alert(`O número ${numero} é positivo`);
} else {
    alert(`O número ${numero} é negativo`);
}

// 3 - Pontuação de jogos
let pontuacao = 20;

if(pontuacao >= 100) {
    alert('Parabéns, você venceu!');
} else {
    alert('Tente novamente para ganhar.');
}

// 4 - Saldo em conta
let saldo = 500;
alert(`O saldo da sua conta é de R$${saldo} reais`);

// 5 - Mensagem de boas vindas
let nomeDoUsuario = prompt('Qual seu nome?');
alert(`Boas vindas ${nomeDoUsuario}!`);
