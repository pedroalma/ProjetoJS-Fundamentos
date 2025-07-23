function calculadora(operacao, num1, num2) {
    switch (operacao) {
        case 1:
            return num1 + num2 + (nome = ' soma');
        case 2:
            return num1 - num2 + (nome = ' subtração');
        case 3:
            return num1 * num2 + (nome = ' multiplicação');
        case 4:
            if (num2 !== 0) {
                return num1 / num2 + (nome = ' divisão');
            } else {
                return 'Erro: divisão por zero';
            }
        default:
            return 'Operação inválida';
    }
}
console.log(calculadora(1, 5, 3)); 
console.log(calculadora(4, 10, 2)); 