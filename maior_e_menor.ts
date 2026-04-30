const readline = require('readline-sync')

const numeros: number[] = []

console.log("Digite os números (digite 0 para parar):")

while (true) {
  const input: number = Number(readline.question("Número: "))
  
  if (input === 0) break;
  
  numeros.push(input)
}

let maior: number = numeros[0];
let menor: number = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) {
    maior = numeros[i];
  }
  if (numeros[i] < menor) {
    menor = numeros[i];
  }
}

console.log(`Maior: ${maior}`)
console.log(`Menor: ${menor}`)
