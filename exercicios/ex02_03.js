const prompt = require('prompt-sync')()
let numero = Number(prompt('Qual o valor'))
if (numero % 2 ==0)
    console.log(`o ${numero} é par`)
else
   console.log(`o ${numero} é impar`)