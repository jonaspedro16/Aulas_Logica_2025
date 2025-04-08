//Receba 5 numeros e verifique a soma e a 
// Quantidade de todos os pares e impares digitados
const prompt = require('prompt-sync')();

somapar = 0;
somaimpar = 0;
qtdpar = 0;
qtdimpar = 0;
let entrada = 0;
for(let contador = 0; contador <= 5; contador++){
    console.log(Number(prompt('Digite um numero:')))
    if(entrada % 2 == 0){
        somapar += entrada
        qtdpar++
    }
    else{
        somaimpar += entrada
        qtdimpar++
    }
}
console.log(`A soma de ${qtdpar} é ${somapar}`)
console.log(`A soma de ${qtdimpar} é ${somaimpar}`)
