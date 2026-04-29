	//1. Entrada de dados  Definimos um array de números para testar
	const numeros: number[] = [15, 3, 42, 8, 11, 2];

	// Começamos assumindo que o primeiro número (índice 0) é tanto o maior quanto o menor
	let maior: number = numeros[0];
	let menor: number = numeros[0];

	// Usamos um loop 'for' para percorrer cada número do array
	for (let i = 0; i < numeros.length; i++) {
    	const numeroAtual = numeros[i];

    	// Se o número atual for maior do que o que temos guardado, ele vira o novo 'maior'
    	if (numeroAtual > maior) {
        maior = numeroAtual;
    }

    	// Se o número atual for menor do que o que temos guardado, ele vira o novo 'menor'
    	if (numeroAtual < menor) {
        menor = numeroAtual;
    }
}

	// Mostramos o resultado no console
	console.log("A lista é:", numeros);
	console.log("O maior valor encontrado foi:", maior);
	console.log("O menor valor encontrado foi:", menor);
