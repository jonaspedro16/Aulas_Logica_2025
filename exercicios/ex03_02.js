const prompt = require('prompt-sync')()

let AnoAtual = Number(prompt('Digite o ano'))
let AnoNascimento = Number(prompt('Digite o ano de nascimento'))
let idade = AnoAtual - AnoNascimento

console.log(`A diferença entre ${AnoAtual} e ${AnoNascimento} é igual a ${idade}`)


if(idade <= 10)
{
    console.log('criança')
}
else if( idade >=11 && idade<= 17)
{
console.log('adolescente')
}
else if (idade >= 18 && idade <= 59)
{
    console.log('adulto')
}
else{ (idade >=58 && 58)
    console.log('idoso')
}