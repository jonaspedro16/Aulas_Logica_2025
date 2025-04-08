const prompt = require('prompt-sync')()
let altura = Number(prompt('digite a altura'))
let largura = Number(prompt('digite a largura'))
let area = largura * altura
let tintaNecessaria = area / 2
console.log(`Area ${area}`)
console.log(`tinta necessaria ${tintaNecessaria.toFixed(2)} litros de tinta`)