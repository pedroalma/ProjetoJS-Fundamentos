let carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    ligado: false,
    ligar: function () {
        this.ligado = true;
        console.log("O carro foi ligado.")
    }
}

/*
Este é o método tradicional para iterar sobre as propriedades de um objeto.
Ele percorre cada chave (propriedade) do objeto e permite acessar o valor correspondente.
*/

for (const ncarro in carro) {
    if (carro.hasOwnProperty(ncarro)) {
        console.log(`${ncarro}: ${carro[ncarro]}`)
    }
}

/*
Este método retorna um array com todas as chaves do objeto.
Em seguida, você pode usar forEach() para iterar sobre esse array e acessar os valores.
*/
Object.keys(carro).forEach(ncarro => {
    console.log(`${ncarro}: ${carro[ncarro]}`);
})
/*
Este método retorna um array com todos os valores do objeto.
*/
Object.values(carro).forEach(ncarro => {
    console.log(ncarro);
});

/*
Este método retorna um array de arrays, onde cada array interno contém a chave e o valor correspondente.
*/

Object.entries(carro).forEach(([ncarro, valor]) => {
    console.log(`${ncarro}: ${valor}`);
});