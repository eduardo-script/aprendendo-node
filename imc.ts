	//1. Exercicio  imc.ts
	const peso: number = 80;
	const altura: number = 1.80;
	const imc: number = peso / (altura * altura);

	console.log(`Seu IMC é: ${imc.toFixed(2)}`);

	if (imc < 18.5) console.log("Classificação: Abaixo do peso");
	else if (imc < 25) console.log("Classificação: Peso normal");
	else if (imc < 30) console.log("Classificação: Sobrepeso");
	else console.log("Classificação: Obesidade");
