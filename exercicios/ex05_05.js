//faça um programa que receba um numero
// e mostre seu fatorial. ex. :

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um numero'));

let fatorial = 1
let contador = numero;
let sequencia = numero + "! ="//concatenando valores

while(contador >= 1){
    fatorial = fatorial * contador;
    sequencia = sequencia + contador;
    if(contador > 1){
         sequencia = sequencia + ' * '
    }
    contador--; //decrementando contador
}

sequencia = sequencia + " = " + fatorial
console.log(sequencia)