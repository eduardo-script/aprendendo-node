import * as readline from 'readline-sync';

// 1. Definimos a senha correta (pré-definida)
const SENHA_CORRETA: string = "1234abc";

console.log("--- Sistema de Login ---");

// 2. Pedimos para o usuário digitar a senha
const senhaDigitada: string = readline.question("Digite a sua senha: ");

// 3. Validação
if (senhaDigitada === SENHA_CORRETA) {
    console.log("Acesso permitido! Bem-vindo ao sistema.");
} else {
    console.log("Acesso negado! Senha incorreta.");
}
