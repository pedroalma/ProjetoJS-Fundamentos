//cria uma função que recebe dois números e retorna a soma deles
function somaValor(){
    let num1 = 10, num2=10;
    resp = num1 + num2;

    console.log(`A soma de ${num1} + ${num2} é igual a ${resp}`);
}
somaValor(); // Chama a função para executar a soma

// Cria uma função que recebe dois números como parâmetros e retorna a soma deles
let num3 = 20, num4 = 30;
function somaValorN(num3, num4){

    resp = num3 + num4;

    console.log(`A soma de ${num3} + ${num4} é igual a ${resp}`);
}

somaValorN(num3, num4); // Chama a função passando os parâmetros

function somaValorR(num5, num6){
    return num5 + num6; // Retorna o resultado da soma
}
console.log(somaValorR(50, 50)); // Chama a função passando os parâmetros e imprime o resultado