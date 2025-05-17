const readlineSync = require('readline-sync');
const { realizarSoma } = require('./soma.js');
const { realizarSubtracao } = require('./subtracao.js');

let a = readlineSync.questionFloat('Informe o primeiro valor: ');
let b = readlineSync.questionFloat('Informe o segundo valor: ');

let resultado = realizarSoma(a, b);

let resultadoSubtracao = realizarSubtracao(a, b);

console.log(`Resultado da soma: ${resultado}`);