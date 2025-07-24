let carro ={
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2021,
    ligado: false,
    ligar: function() {
        this.ligado = true;
        console.log("Carro ligado.");
    }
} 
for (const ncarro in carro) {
    if(carro.hasOwnProperty(ncarro)) {
        console.log(`${ncarro}: ${carro[ncarro]}`);
    }
}

// carro.ligar();
// console.log(`Ligado: ${carro.ligado}`);