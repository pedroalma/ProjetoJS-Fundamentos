const vendas = [650, 550, 1020, 1060, 200, 150, 495, 875];

const somaVendas = vendas.reduce((valorAcumulado, vendaAtual) => {
    return valorAcumulado + vendaAtual;
},0);

console.log(somaVendas); 