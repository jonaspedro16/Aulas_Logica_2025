const prompt = require('prompt-sync')()
let Metros = Number(prompt("insira a medida dos metros:"))
let centimetro = Metros * 100
let quilometros = Metros / 1000
let milimetros = Metros * 1000
console.log(`${Metros} convertidos para centimetros ${centimetro}`)
console.log(`${Metros} convertidos para quilometros ${quilometros}`)
console.log(`${Metros} convertidos para milimetros ${milimetros}`)


