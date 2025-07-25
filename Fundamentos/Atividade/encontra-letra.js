const letras = ['a', 'b', 'a', 'c', 'b', 'a'];

// Use .reduce para retornar um objeto com a contagem de cada letra.
// Ex: { a: 3, b: 2, c: 1 }

// const frase = "javascript é uma linguagem poderosa";

const letraAlvo = ["a" ,"b", "c"];

const contador = letras.reduce(function(acumulador, caractere) {
if (caractere === letraAlvo[0]) {
    acumulador++;
}
return acumulador;
}, 0);
const contador1 = letras.reduce(function(acumulador, caractere) {
if (caractere === letraAlvo[1]) {
    acumulador++;
}
return acumulador;
}, 0);
const contador2 = letras.reduce(function(acumulador, caractere) {
if (caractere === letraAlvo[2]) {
    acumulador++;
}
return acumulador;
}, 0);
console.log(`${letraAlvo[0]} ${contador}`); 
console.log(`${letraAlvo[1]} ${contador1}`); 
console.log(`${letraAlvo[2]} ${contador2}`); 