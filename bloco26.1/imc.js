const rdl = require('readline-sync');

function calculaImc(peso, altura) {
  peso = rdl.question(`Qual seu peso?  `);
  altura = rdl.question(`Qual sua altura?  `);

  let imc = peso / (altura * altura);

  console.log(imc);
}

calculaImc();
