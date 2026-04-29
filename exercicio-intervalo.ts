import tela  from "readline-sync";

let numero1: number = Number(tela.question("Informe o primeiro numero: "))
let numero2: number = Number(tela.question("Informe o ultimo numero: "))

let soma: number = 0;

if (numero1 > numero2) {
	console.log("Erro: O primeiro numero deve ser menor que o final.")
} else {
	for (let i = numero1; i <= numero2; i++) {
		soma += i;
	}
	console.log(`A soma do intervalo de ${numero1} ate ${numero2}`)
}

