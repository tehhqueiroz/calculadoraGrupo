const readline = require('readline-sync');

const divisao =(a, b) => {
     if (a === 0 || b === 0) {
    return 'Erro: divisão por zero!';
  };
    const resultado = (a/b);

    console.log('Resultado:', resultado)};
module.exports = divisao;
