const prompt = require('prompt-sync')()
let ganhoporhora = Number(prompt("Insira os ganhos por hora:"))
let horasnomes = Number(prompt("insira quantas horas no mes"))
let salario = (ganhoporhora * horasnomes) 
console.log(`O total do salario no mes é ${salario}`)
