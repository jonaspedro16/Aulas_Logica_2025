//Solicite os parametros de inicio, fim e passo
// para o laço de repeticao usando a função for()
// e exiba o valor atual da variavel de controle a cada iteração

const prompt = require('prompt-sync')();

let inicio = Number(prompt('Digite o valor do inicio:'))
let fim = Number(prompt('Digite o valor do fim:'))
let passo = Number(prompt('Digite o valor do passo:'))

for(inicio; inicio < fim; inicio += passo){
    console.log(`Valor inicial: ${inicio}`)
    console.log(`Valor final: ${fim}`)
    console.log(`Valor de passos: ${passo}`)
    console.log(`===============================`)
}