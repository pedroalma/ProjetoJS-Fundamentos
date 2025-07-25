const numero = [10, 20, 30, 40];

// Use .reduce para somar todos os números do array.

const somaNumeros = numero.reduce((numeroAcumulado, numeroAtual) => {
    return numeroAcumulado + numeroAtual;
},0);

console.log(somaNumeros); 