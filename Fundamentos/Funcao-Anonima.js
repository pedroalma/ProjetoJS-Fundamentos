setTimeout(function(){
    console.log("Funcao anonima executada após 1 segundos");
}, 1000);

const minhaFuncao = function(parametro){
    return parametro * 2;
}
console.log(minhaFuncao(5));

const dobrar = (numero) => numero * 2;
console.log(dobrar(7)); 

setTimeout(() => console.log("Função anônima executada após 1 segundo"), 1000);