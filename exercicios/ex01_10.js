const prompt = require('prompt-sync')()
let dias =parseInt(prompt('Digite a quantidade de dias que o carro foi alugado'))
let kmPercorrido = parseFloat(prompt('Digite quantos km foram percorridos'))
let custoPorDia = 60
let custoPorkm = 0.15
let custoTotal =(dias * custoPorDia) + (kmPercorrido * custoPorkm)
console.log(`Custo da viagem ${custoTotal.toFixed(2)}`)