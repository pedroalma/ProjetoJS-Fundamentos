const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
const filteredWords = words.filter(word => word.length > 6);

console.log(filteredWords);

const vendas =[650, 550,1020, 800, 1200, 900, 300, 400, 500, 600];

const maiorValor =  vendas.reduce((maiorValor, elementoAtual) => {
    return maiorValor > elementoAtual ? maiorValor : elementoAtual;
},0);

console.log(maiorValor);

const faturamentoDiario = vendas.reduce((valorAcumulado, elementoAtual) => {
    return valorAcumulado + elementoAtual;
}, 0);

console.log(faturamentoDiario);