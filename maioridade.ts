import tela = require('readline-sync');

const idade: number = Number(tela.question('Informe a sua idade: '));

	if (idade >= 18) {
		console.log(`Voce tem ${idade} anos e é maior de idade:`);
	} else {
		console.log(`Voce tem ${idade} anos e é menos de idade; `);
	}
