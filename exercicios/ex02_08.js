const prompt = require('prompt-sync')()
let vendas = Number(prompt('digite o total de vendas no mes'))
if (vendas > 5000){
   let comissao = vendas * 0.05
   console.log(`a comissao para o mes de: ${comissao}`)
}
else{
    let comissao = vendas * 0.05
    console.log(`A comissao para o mes é de: ${comissao}`)
}

