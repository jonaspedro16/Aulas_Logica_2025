const prompt = require('prompt-sync')()

//operacao com variaveis
let nr1 = Number(prompt('digite um numero?'));
let nr2 = Number(prompt('digite um numero?'));
let soma = nr1 + nr2;
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)
let subtracao = nr1 - nr2
console.log(`A subtracao entre${nr1} - ${nr2} é igual a ${subtracao}`)
let divisao = nr1 / nr2
console.log(`a divisao entre ${nr1} / ${nr2} é igual a ${divisao}`)
let multiplicaçao = nr1 * nr2
console.log(`a multiplicacao entre ${nr1} * ${nr2} é igual a ${multiplicaçao}`)
let exponenciação = nr1 ** nr2
console.log(`a exponenciacao entre ${nr1} ** ${nr2} é igual a ${exponenciação}`)

// Calculando valor do celular com desconto
let valor = Number(prompt('digite o preco do celular'));
let desconto = Number(prompt('digite o preco do desconto'));

valor = valor - desconto;
console.log(`O valor do celular com desconto é R$${valor}`)

//Atividade
let numero = Number(prompt('Digite um numero'))
let dobro = numero * 2
let metade = numero / 2
console.log(`O dobro de ${numero} é ${dobro} e a metade é ${metade}`)

//atividade 2
//descobrir o total de dias que trabalharei no projeto
var[horas_por_dia] = 8
var dias_totais = 15
var horas_trabalho = horas_por_dia * dias_totais
let custo_hora = 100
let custo_total = horas_trabalho * custo_hora
//exibir resultados
console.log(custo_total)
