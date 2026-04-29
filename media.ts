const teclado = require("readline-sync");

let nota1: number = Number(teclado.question("Informe a primeira nota: "));
let nota2: number = Number(teclado.question("Informe a segunda nota: "));
let nota3: number = Number(teclado.question("Informe a terceira nota: "));

let media: number = (nota1 + nota2 + nota3) /3;

console.log("A media final é: " +media.toFixed(2));
