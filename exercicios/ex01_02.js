const prompt = require('prompt-sync')()

let numero = Number(prompt("digite um número?"))
let sucessor = numero + 1
let antecessor = numero - 1

console.log(`O sucessor do ${numero} é ${sucessor} e seu antecessor é ${antecessor}`)
