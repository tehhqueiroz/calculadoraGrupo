const readline = require('readline-sync');

const divisao =(a, b) => {
     if (a === 0 || b === 0) {
    return 'Erro: divisão por zero!';
  };
    return (a/b)};

let resultado = divisao(a,b);

module.exports = divisao;