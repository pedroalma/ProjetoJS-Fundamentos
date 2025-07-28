let op = 1; 
let num1 = 10;
let num2 = 5;
let nome = 'Operação';
function soma(num1, num2){
    return num1 + num2;
}
function subtracao(num1, num2){
    return num1 - num2;
}
function multiplicacao(num1, num2){
    return num1 * num2;
}
function divisao(num1, num2){
    return num1 / num2;
}

function operacao(op,num1,num2){
    switch(op){
        case 1:
            return soma(num1, num2) + (nome =' Soma'); 
        case 2:
            return subtracao(num1, num2) + (nome = ' Subtração');
        case 3:
            return multiplicacao(num1, num2) + (nome = ' Multiplicação'); 
        case 4:
            if (num2 !== 0) {
                return multiplicacao(num1, num2) + (nome = ' Divisão');
            } else {
                return 'Erro: divisão por zero';
            }     
    }
}
console.log(`a ${nome} de ${num1} e ${num2} e ${operacao(op,num1,num2)}`);