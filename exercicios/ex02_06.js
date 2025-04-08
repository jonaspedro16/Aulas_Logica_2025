const prompt = require('prompt-sync')()
let numero = Number(prompt('digite um numero'))
let numero2 = Number(prompt('digite outro numero'))

if(numero == numero2){
    console.log("os numeros sao iguais")
}
else{
    console.log("os numeros sao diferentes")
}