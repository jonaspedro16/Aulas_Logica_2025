const prompt = require('prompt-sync')();
let sexo = (prompt('Digite se é masculino ou feminino: '))
let altura = Number(prompt(`Digite sua altura: `))
let M = (72.7 * altura) - 58
let F = (62.1 * altura) - 44.7
if (sexo == "M"){
    console.log(`o peso ideal é ${M}`)
}else if (sexo = "F"){
    console.log(`Peso ideal é ${F}`)
}