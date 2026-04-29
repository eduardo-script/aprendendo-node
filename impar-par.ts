// Exercício 01: Par ou Ímpar
	function verificarParOuImpar(numero: number): string {
    if (numero % 2 === 0) {
        return `O número ${numero} é PAR.`;
    } else {
        return `O número ${numero} é ÍMPAR.`;
    }
}

	// Testando o código
	const meuNumero: number = 10; // Altere este número para testar
	console.log(verificarParOuImpar(meuNumero));

