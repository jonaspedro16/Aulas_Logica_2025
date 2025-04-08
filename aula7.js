const prompt = require('prompt-sync')()
//estruturas condicionais e operadores relacionais
let a = 2
let b = 3

console.log(a == b) // relaçaõ de igualdade
console.log(a != b) // relação de diferença
console.log(a > b) // maior
console.log(a >= b) //maior ou igual
console.log(a < b) // menor
console.log(a <= b) // menor ou igual

//estruturas condicionais
tenhoIngresso = false
if(tenhoIngresso == true){console.log('Posso entrar')}else{console.log('Estou barrado no baile')}
//receber valor da idade
let idade = Number(prompt('Qual a sua idade'))

//verificar se é maior ou igual a 18
if(idade >= 18){
    console.log('maior idade')
}else{
     console.log('voce é menor de idade')
}
