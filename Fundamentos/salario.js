let salario = 1100; // escopo do script
let bonus = 0.0; // escopo do script
if (salario > 1000) { 
    bonus = salario * 0.1;
}else {
    bonus = salario * 0.15;
}
console.log("seu bonus é de: " + bonus + " reais"); 