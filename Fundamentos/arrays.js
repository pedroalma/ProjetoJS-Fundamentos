let frutas = [
    { nome: "maçã", preco: 20 },
    { nome: "banana", preco: null },
    { nome: "laranja", preco: null }
];
console.log(frutas[0.0]);
let fruta = ["maçã", "banana", "laranja"];
const numero = [1, 2, 3, 4, 5];

let primeiroItem = fruta[0];
let segundoItem = numero[3];

console.log(fruta[0]); 
console.log(numero[3]);

let numeros = [10, 20, 30, 40, 50];
let i=0;

while (i < numeros.length) {
    console.log(numeros[i]);
    i++;
}
let cores = ["vermelho", "verde", "azul"];

cores.forEach(function(cor) {
    console.log(cor);
});