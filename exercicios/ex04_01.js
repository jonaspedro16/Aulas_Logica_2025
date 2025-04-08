const prompt = require('prompt-sync')();
let dia = Number(prompt('Dia da semana'))

switch(dia){
    case dia = '1':
        console.log('Domingo')
        break;
    case dia = 2:
        console.log("Segunda-feira")
        break;
    case dia = 3:
        console.log("Terça-feira")
        break;
    case dia = 4:
        console.log("Quarta-feira")
        break
    case dia = 5:
        console.log("Quinta-feira")
        break
    case dia = 6:
        console.log("Sexta-feira")
        break
    case dia = 7:
        console.log("Sabado")
}