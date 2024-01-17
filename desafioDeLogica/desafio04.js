// Atividade 1
console.log("Boas vindas!");

// Ativadade 2
let nome = "Kayllane";
console.log(`Boas vindas ${nome}`);

// Ativadade 3
alert(`Olá, ${nome}`)

// Ativadade 4
let pergunta = prompt("Qual a linguagem de programação que você mais gosta?");

console.log(pergunta)

// Ativadade 5
let valor1 = 10;
let valor2 = 20;

let resultado = valor1 + valor2;

console.log(`A soma entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Ativadade 6
valor1 = 50;
valor2 = 24;

resultado = valor1 - valor2;

console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

// Ativadade 7
let idade = prompt("Digite sua idade:");

if(idade >= 18) {
    console.log("VOCÊ É MAIOR DE IDADE");
} else {
    console.log("VOCÊ É MENOR DE IDADE");
}

// Ativadade 8
let numero = prompt("Digite um número:");

if(numero > 0) {
    console.log("Número positivo.");
} else {
    console.log("Número negativo.");
}

// Ativadade 9
let contador = 1;

while(contador <= 10) {
    console.log(contador);
    contador++;
}

// Ativadade 10
let nota = 8;

if(nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

// Ativadade 11
console.log(parseInt(Math.random()));

// Ativadade 12
console.log(parseInt(Math.random() * 10) + 1);

// Ativadade 13
console.log(parseInt(Math.random() * 1000) + 1);
