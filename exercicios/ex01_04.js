const prompt = require('prompt-sync')()
let nota = Number(prompt("Insira a sua nota:"))
let nota2 = Number(prompt("insira a proxima nota"))
let media = (nota + nota2) / 2
console.log(`A media é ${media}`)
