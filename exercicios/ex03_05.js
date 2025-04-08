const prompt = require('prompt-sync')();
let salario = Number(prompt(`Qual seu salario: `))
if (salario <= 2000 ){
    console.log(`você vai ganhar R$${salario +(salario * 12/100)},00 `)
}else if (salario > 2000 && 4000){
    console.log(`você vai ganhar R$${salario + (salario * 0.10)},00 `)
}else if (salario > 4000){
    console.log(`você vai ganhar R$${salario + (salario * 0.80)},00 `)
}