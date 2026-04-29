import * as readline from 'readline-sync';

const SENHA_CORRETA: string = "1234";

console.log("--- Sistema de Login ---");

const senhaDigitada: string = readline.question("Digite a sua senha: ");


if (senhaDigitada === SENHA_CORRETA) {
    console.log("Acesso permitido! Bem-vindo ao sistema.");
} else {
    console.log("Acesso negado! Senha incorreta.");
}
