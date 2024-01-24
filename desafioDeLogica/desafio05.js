// Desafio 1
function olaMundo() {
    console.log('Olá mundo');
}

olaMundo();

// Desafio 2
function mensagemDeBoasVinda(nome) {
    console.log(`Olá ${nome}!`);
}

mensagemDeBoasVinda('Kayllane');

// Desafio 3
function dobroDeUmNumero(numero) {
    console.log(numero * 2);
}

dobroDeUmNumero(2);

// Desafio 4
function mediaDeNumeros(numero1, numero2, numero3) { 
    let media = (numero1 + numero2 + numero3) / 3;

    console.log(media);
}

mediaDeNumeros(7, 9, 6);

// Desafio 5
function maiorNumero(primeroNumero, segundoNumero) {
    if (primeroNumero > segundoNumero) {
        console.log(`O ${primeroNumero} é maior que o ${segundoNumero}`);
    } else{ 
        console.log(`O ${segundoNumero} é maior que o ${primeroNumero}`);
    }
}

maiorNumero(1, 9)

// Desafio 6
function multiplicacaoDeNumeros(num) {
    console.log(num * num);
}

multiplicacaoDeNumeros(3);