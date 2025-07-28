let salario = 1100; // escopo do script
let bonus = 0.0; // escopo do script

salario > 1000 ? bonus = salario * 0.1 : bonus = salario * 0.15; 

// console.log("seu bonus é de: " + bonus + " reais"); 
console.log(`seu bonus foi de : ${bonus} reais`);
// salario > 1000 ? console.log("seu bonus é de: " + (bonus = salario * 0.1) + " reais") : console.log("seu bonus é de: " +( bonus = salario * 0.15) + " reais" ); 