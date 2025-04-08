//faça um programa que leia 10 valores inteiros e:
//encontre e mostre o maior valor
// encontre e mostre o menor valor
// calcule e mostre a media dos numeros lidos

const prompt = require('prompt-sync')();

let contador = 0;
let entrada;
let maior = 0
let menor = Infinity;
let soma = 0;
while(contador <= 10){
    entrada = Number(prompt('Digite um numero:'));
    if(entrada > maior){
        maior = entrada;
    }
    if(entrada < menor){
        menor = entrada;
    }

    soma += entrada;
    //soma = entrada + soma
    contador++;
}

let media = soma / 10;
console.log(`Maior valor: ${maior}`)
console.log(`Menor valor: ${menor}`)
console.log(`Media: ${media.toFixed(2)}`);
    soma += entrada;
    //soma = entrada + soma
    contador++;


