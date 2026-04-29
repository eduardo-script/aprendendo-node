	// Passo 1: Importar a biblioteca para ler dados do terminal
	import * as  readline from 'readline-sync';

	// Passo 2: Receber o número digitado pelo usuário e converter para inteiro
	const numero: number = readline.questionInt("Digite um numero para ver a tabuada: ");

	// Passo 3: Exibir o cabeçalho da tabuada
	console.log(`\n--- Tabuada do ${numero} ---`);

	// Passo 4: Criar um laço de repetição (loop) que vai de 1 até 10
	for (let i = 1; i <= 10; i++) {
    	// Passo 5: Calcular o resultado da multiplicação atual
    	const resultado = numero * i;
    
    	// Passo 6: Exibir a linha da tabuada formatada
    	console.log(`${numero} x ${i} = ${resultado}`);
}	

	// Passo 7: Exibir linha de fechamento
	console.log('--------------------------\n');
