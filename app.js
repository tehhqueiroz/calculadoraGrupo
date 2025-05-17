const readlineSync = require('readline-sync');
const { realizarSoma } = require('./soma.js');
const { divisao } = require('./divisao.js');
const { realizarSubtracao } = require('./subtracao.js');
const { realizarMultiplicacao } = require('./multiplicacao.js');

console.log("Escolha a operação que você deseja:");
console.log("1 - Para Somar");
console.log("2 - Para Subtrair");
console.log("3 - Para Multiplicar");
console.log("4 - Para Dividir");

let opcao = readlineSync.questionInt("Digite o número da operação: ");

let a = readlineSync.questionFloat("Informe o primeiro valor: ");
let b = readlineSync.questionFloat("Informe o segundo valor: ");

let resultado;

switch (opcao) {
    case 1:
        resultado = realizarSoma(a, b);
        break;
    case 2:
        resultado = realizarSubtracao(a, b);
        break;
    case 3:
        resultado = multiplicar(a, b);
        break;
    case 4:
        resultado = divisao(a, b);
        if (resultado !== null) {
        }
        break;
    default:
        console.log("Opção inválida. Por favor, escolha uma operação válida.");
}



// let a = readlineSync.questionFloat('Informe o primeiro valor: ');
// let b = readlineSync.questionFloat('Informe o segundo valor: ');
// let resultado = realizarSoma(a, b);
