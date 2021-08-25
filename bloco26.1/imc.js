const rdl = require('readline-sync');

function calculaImc(peso, altura) {
  peso = rdl.questionFloat(`Qual seu peso?  `);
  altura = rdl.questionFloat(`Qual sua altura?  `);

  let imc = peso / (altura * altura);

  console.log(imc);
}

calculaImc();
