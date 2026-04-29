import tela from "readline-sync"

let inicio: number = Number(tela.question("Informe o primeiro numero: "))
let fim: number = Number(tela.question("Informe o ultimo numero: "))

let soma: number = 0;

if (inicio > fim) {
	console.log("Erro: O primeiro numero deve ser menor que o final. ")
} else {
	for (let i = inicio; i <= fim; i++) {
		soma += 1;
	}
	console.log(`A soma do intervalo de ${inicio} ate ${fim} e: ${soma}`)
}

