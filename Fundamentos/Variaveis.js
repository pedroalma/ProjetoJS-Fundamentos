let num1 = 10 ; //escopo do script

const num2 = 20;//escopo do script

function testaVariaveis() {
    let num1 = 30; // escopo da função, esta variável é diferente da num1 do escopo do script
    const num2 = 40; // escopo da função, esta variável é diferente da num2 do escopo do script
    console.log(num1); // Saída: 30
    console.log(num2); // Saída: 40
};
console.log(num1); // Saída: 10
console.log(num2); // Saída: 20
testaVariaveis(); // Chama a função para testar a variável