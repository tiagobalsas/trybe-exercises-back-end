const rdl = require('readline-sync');

function calculaImc(peso, altura) {
  peso = rdl.questionFloat(`Qual seu peso?  `);
  altura = rdl.questionFloat(`Qual sua altura?  `);

  let imc = peso / (altura * altura);

  if (imc < 18.5) {
    console.log(`${imc} Abaixo do peso (magreza)`);
  } else if ((imc >= 18.6 && imc <= 24.9)) {
    console.log(`${imc} Peso normal`);
  } else if ((imc >= 25 && imc < 30)) {
    console.log(`${imc} Acima do peso (sobrepeso)`);
  } else if ((imc >= 30 && imc < 35)) {
    console.log(`${imc} Obesidade grau I`);
  } else if ((imc >= 35.0 && imc <40)) {
    console.log(`${imc} Obesidade grau II`);
  } else {
    console.log(`${imc} Obesidade graus III e IV `);
  }
}

calculaImc();

/* | IMC                                       | Situação                  |
| ----------------------------------------- | ------------------------- |
| Abaixo de 18,5                            | Abaixo do peso (magreza)  |
| Entre 18,5 e 24,9                         | Peso normal               |
| Entre 25,0 e 29,9                         | Acima do peso (sobrepeso) |
| Entre 30,0 e 34,9                         | Obesidade grau I          |
| Entre 35,0 e 39,9                         | Obesidade grau II         |
| 40,0 e acima                              | Obesidade graus III e IV  | 

*/
