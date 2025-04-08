const prompt = require('prompt-sync')();
let nota1 = Number(prompt(`Digite a primeira nota nota: `))
let nota2 = Number(prompt(`Digite a segunda nota: `))
let media = (nota1 + nota2) / 2

switch(true){
     case media >= 7:
        console.log('Você foi aprovado')
        break
        case media = 5 && media < 7:
             console.log('Recuperação')
             break
         case media >= 4:
         console.log('Você foi reprovado')
         break   
}