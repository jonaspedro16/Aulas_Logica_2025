const prompt = require('prompt-sync')();
let nota1 = Number(prompt(`Digite a primeira nota nota: `))
let nota2 = Number(prompt(`Digite a segunda nota: `))
if (nota1 + nota2 /2 >7){
    console.log(`Aprovado`)
}else if (nota1 + nota2 /2 >= 5 && 7){
    console.log(`Recuperação`)
}else if (nota1 + nota2 /2 <5){
    console.log(`Reprovado`)
}

