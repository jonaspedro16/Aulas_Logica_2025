const prompt = require('prompt-sync')();

let mes = prompt('Qual é o mes')


switch(true){
    case mes == ('janeiro'):
        console.log("31 dias")
        break;
    case mes == ('fevereiro'):
        console.log("28 dias")
        break;
    case mes == ('marco'):
        console.log("31 dias")
        break;
    case mes == ('abril'):
        console.log("30 dias")
        break
        case mes == ('maio'):
        console.log("31 dias")
        break;
    case mes == ('junho'):
        console.log("30 dias")
        break;
    case mes == ('julho'):
        console.log("31 dias")
        break;
    case mes == ('agosto'):
        console.log("31 dias")
        break
        case mes == ('setembro'):
        console.log("30 dias")
        break;
    case mes == ('outubro'):
        console.log("31 dias")
        break;
    case mes == ('novembro'):
        console.log("30 dias")
        break;
    case mes == ('dezembro'):
        console.log("31 dias")
        break   
}