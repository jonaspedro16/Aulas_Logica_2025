const prompt = require('prompt-sync')()
let preco1 = Number(prompt(`Qual o valor do álcool: `))
let preco2 = Number(prompt(`Qual o valor da gasolina: `))
if (preco1 < preco2 * 0,70){
    console.log(`Abastecer com álcool`)
}else {
    console.log(`Abastecer com gasolina`)
}
