const prompt = require('prompt-sync')()
let reais = parseFloat(prompt('digite o valor em reais'))
let cotacao = parseFloat(prompt('digite a cotação em dolar'))
let dolares = reais / cotacao
console.log(`Tenho R$${reais} na minha carteira que equivale a $${dolares.toFixed(2)}`)
