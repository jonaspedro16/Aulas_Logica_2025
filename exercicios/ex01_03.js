const prompt = require('prompt-sync')()
let numero = Number(prompt("digite um número:"))
let dobro = numero * 2
let triplo = numero * 3

console.log(`O dobro do ${numero} é ${dobro} e seu triplo é ${triplo}`)