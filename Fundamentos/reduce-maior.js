const vendas = [650,550,1020,1060,200,150,495,875];

const maiorValor = vendas.reduce((maiorValor, vendaAtual) => {
    return maiorValor > vendaAtual ? maiorValor : vendaAtual;
}, 0);

console.log(maiorValor); 