	//1. Entrada de dados  Função para verificar paridade
	function verificarParidade(numero: number): string {
    	if (numero % 2 === 0) {
        return `O número ${numero} é PAR.`;
    	} else {
        return `O número ${numero} é ÍMPAR.`;
    }
}

	// Exemplo de uso
	const entrada: number = 7;
	console.log(verificarParidade(entrada));
