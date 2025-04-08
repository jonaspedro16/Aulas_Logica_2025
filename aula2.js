//importano a biblioteca para entrada de dados
const prompt = require('prompt-sync')()

//variaveis e constantes
// #Passo 1 receber o nome da pessoa
let nome = 'ayrton';
// #passo 2 receber a ideade da pessoa
let idade = 36;
// #passo 3 receber o peso da pessoa
let peso = 76.5
console.log(nome, idade, peso);

//REcer e armazena o texto
    let   curso   =      "Desenvolvimento de Sistemas"
// #tipo  nome    recebe   valor        na variavel

//Exibir o valor armazenado
console.log('curso') //imprimo uma string (texto)
console.log(curso) //imprimo o valor que esta dentro da variavel
console.log('curso' , curso)

//criando e atribuindo valor a outras variaveis
let idade2 = 35 // valor do tipo int
let temperatura = 23.5; //valor do tipo float
let nome2 = 'rei mago'
console.log('Ola', nome2, 'voce tem:', idade2, 'e hoje esta fazendo:' , temperatura, '°C')


//Usando temperatura   
console.log(`olá ${nome2},você tem: ${idade2}, e hoje está fazendo:${temperatura},9°C`) 

let chovendo = false;
let dia = true;
// as constantes nao podem ser reatribuidos novos valores
const PI = 3.1415
console.log(PI);

  // Utilizando ´prompt para receber dados
//entrade de dados

//no prompt sempre recebemos uma string
nome = prompt('qual é o seu nome')
idade = parseInt(prompt('qual a sua idade'))

peso = parseFloat(prompt('Qual seu peso?'))
let altura = 1.75
console.log(`Seu nome é ${nome}, voce tem ${idade} e pesa ${peso}`);
console.log(typeof(idade));
console.log(typeof(peso));

console.log(idade + peso);

