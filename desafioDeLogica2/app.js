let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function verificarChute() {
    console.log('O botão foi clicado');
}

function botaoDeAlerta() {
    alert('Eu amo JS');
}

function cidadeDoBrasil() {
    let cidade = prompt('Diga uma cidade do Brasil:');
    alert(`estive em ${cidade} e lembrei de você!`);
}

cidadeDoBrasil();

function soma() {
    let numero1 = parseInt(prompt('Escreva um número:'));
    let numero2 =  parseInt(prompt('Escreva outro número:'));

    let somar = numero1 + numero2;

    alert(`A soma do ${numero1} + ${numero2} é igual a ${somar}`)
}

soma();