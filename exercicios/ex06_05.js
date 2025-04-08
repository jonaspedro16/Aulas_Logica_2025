// Ler do teclado a idade e o sexo de 10 pessoas,
//calcule e imprima
//idade media das mulheres
//idade media dos homens
//idade media do grupo

const prompt = require('prompt-sync')();
let idade = 0
let sexo;
let mediah = 0;
let qtdh = 0;
let mediaf = 0;
let qtdf = 0;
for(let i = 0; i < 10; i++){
    idade = Number(prompt('Digite a idade:'))
    sexo = prompt('Digite o sexo: (M ou F)').toUpperCase()

    if(sexo == 'M'){
         mediah += idade;
         qtdh++;
    }else{
        mediaf += idade;
        qtdf++;
    }
    }console.log(`A media da idade dos homens: ${mediah / qtdh}`) 
    console.log(`A media da idade das mulheres: ${mediaf / qtdf}`)
    