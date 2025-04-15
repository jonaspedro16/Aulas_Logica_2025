const prompt = require('prompt-sync')()
cabecalho("SESI/SENAI")
function cabecalho(texto){
    console.log('----------------------------')
    console.log(             texto            )
    console.log('----------------------------')
}
//criando outra função, função de saudação

function saudação(){
    let nome = prompt('Digite seu nome:')
    console.log(`${nome} tenha um bom dia.`)
}
//chamando a função
//Passando 
cabecalho('SESI/SENAI')
let escola = "Sesi 025"
cabecalho(escola)
saudação()

//criei a função soma que ira receber doi valores como parametro
//a partir desses valores, realizara o calculo e o mostrara o
//resultado
function soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}

soma(5,6)
soma(8,9)
soma(8,18)


function ParImpar (nume){
    if(nume % 2 === 0){
        console.log(`o numero é ${nume} é par`)
        }else{
            console.log(`o numero é ${nume} é impar`)
    
    }
}

ParImpar(2)
ParImpar(5)

function Media(n1, n2){
    let resultado = (n1 + n2) / 2;
    return(resultado)
}
console.log(Media(6, 8));
//Armazenei o retorno da função em uma variavel
let valor = Media(9, 7)
//Utilizei o retorno da função para escrever na tela
console.log(valor);
//Utilizei a variavel que recebeu o retorno da função para chamar a função par ou impar passando o valor como parametro
ParImpar(valor)