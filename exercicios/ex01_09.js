const prompt = require('prompt-sync')()
let preco = Number(prompt('Digite o preço do produto'))
let precocomdesconto = preco - preco * 0.05
console.log(`preço sem desconto${preco.toFixed(2)}`)
console.log(`preço com desconto${desconto.toFixed(2)}`)

