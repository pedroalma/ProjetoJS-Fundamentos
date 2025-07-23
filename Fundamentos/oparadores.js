let a = typeof (10); // escopo do script
let b =  typeof ("10"); // escopo do script

if (a == b){
    console.log("Sao iguais");
}else{
    console.log("Sao diferentes");
}
console.log(a); // Saída: number
console.log(b); // Saída: string