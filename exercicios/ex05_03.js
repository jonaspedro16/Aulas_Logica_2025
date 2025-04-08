const prompt = require('prompt-sync')();
let entrada;
let qtdpar = 0;
let somapar = 0;
let qtdimpar = 0;
let somaimpar = 0;
console.log('Digite numeros (0 para encerrar)');
while(true){
    entrada = parseFloat(prompt('Numero: '))

    if(entrada === 0){
        break;// encerra o loop
    }

    if(entrada % 2 == 0){
        somapar = entrada + somapar;
        qtdpar++
    }
    else{
        somaimpar = entrada + somaimpar;
        qtdimpar++;
    }
}

console.log(`Soma dos pares digitados: ${somapar} quantidade de par: ${qtdpar}`)
console.log(`Soma dos impares digitados: ${somaimpar} quantidade de impar: ${qtdimpar}`)