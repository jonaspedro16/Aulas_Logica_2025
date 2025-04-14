let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']

// a variavel x serve para iterar os valores ate o limite da lista
//o nome nao é obrigatório ser o nome i, x ou contador, pode swr qualquer nome da variavel
for(let x = 0; x < frutas.length; x++){
    //o lenght identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNome = ['Bill Gates', 'Rafinha', 'Vieira', 'Esteves', 'Raul']
//para cada nome da lista nomes, escreva nomes
for(let nome of listaNome){
    console.log(nome)
}

// verificando se é uma consoante
//lista de vogais
const prompt = require('prompt-sync')()
let vogais = ["a", "e", "i", "o", "U"]
let consoantes = ["b", 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
let letra = prompt('digite uma letra ')
//se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log("é uma vogal")
}else if(consoantes.includes(letra.toLowerCase())){
    console.log('consoante');}
else{console.log('não é uma letra')
}

//obtendo a posição do item
for(let [pos,fruta] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor
    //ou seja, a posição é a fruta
    console.log(`Posição ${pos} e fruta ${fruta}`)
}

//separando os itens da lista
let produtos = 'Celular, Notebook, TV, Tablet, Headset'
let listaProdutos = produtos.split(',')
//o split divide a string e forma uma lista a partir do limita, no caso abaixo uma vírgula
for(let produtos of listaProdutos){
    console.log(produtos)
}

//percorrendo uma string como uma lista (de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}
