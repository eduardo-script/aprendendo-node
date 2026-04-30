	//1. Exercicio  imc.ts
 const readline = require('readline-sync' )

 const peso: string = readline.question("Informe o seu peso: ")
 const altura: string = readline.question("Informe sua altura: ")
 const imc: number = Number(peso) / ((Number(altura)/100) *( Number(altura)/100))

console.log(`Seu IMC é: ${imc.toFixed(2)}`)

if (imc < 18.5){
	console.log("Classificação: Abaixo do peso")
}	else if (imc < 25)
	{ console.log("Classificação: Peso normal")
}
else if (imc < 30){
       	console.log("Classificação: Sobrepeso")
}
else { console.log("Classificação: Obesidade")
	
}
