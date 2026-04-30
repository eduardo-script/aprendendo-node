const readline = require('readline-sync')
const numero: number = Number(readline.question("Digite um número: "))

if (numero % 2 === 0) {
    	console.log(`O número ${numero} é PAR.`);
	}
       
	else {
    	console.log(`O número ${numero} é ÍMPAR.`);
}
