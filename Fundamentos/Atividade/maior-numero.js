const numeros = [10, 50, 30, 90, 20];

// Use .reduce para encontrar o maior número.
const maiorNumero = numeros.reduce((maiorNumero, numeroAtual) => {
    return maiorNumero > numeroAtual ? maiorNumero : numeroAtual;
},0);

console.log(maiorNumero); 