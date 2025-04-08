const prompt = require('prompt-sync')()

let ano = Number(prompt('Qual é o ano que voce nasceu'))

if(ano < 2007){
     console.log('maior idade')
}else{
    console.log('voce é menor de idade')
     
}