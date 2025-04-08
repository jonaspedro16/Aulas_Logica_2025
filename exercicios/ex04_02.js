const prompt = require('prompt-sync')()
let AnoAtual = Number(prompt('Qual o ano atual'))
let Anodenascimento = Number(prompt('Qual o ano de nascimento'))
let idade = AnoAtual - Anodenascimento
switch(true){
    case idade < 10:
        console.log("Criança")
        break;
    case idade >= 11 && idade <= 17:
        console.log("Adolescente")
        break;
    case idade >= 18 && idade <= 59:
        console.log("Adulto")
        break;
    case idade > 60:
        console.log("Idoso")
        break
}
