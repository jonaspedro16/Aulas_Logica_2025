const prompt = require('prompt-sync')();
let altura = Number(prompt(`Digite sua altura: `))
let peso = Number(prompt(`Digite sua peso: `))
let imc = peso / (altura ** 2)
console.log(imc)
if (imc < 18.5){
    console.log(`Abaixo do peso ideal`)
}else if (imc >= 18.8 && imc < 25){
    console.log(`Peso ideal`)
}else if (imc >= 25 && imc < 30){
    console.log(`Sobrepeso`)
}else{
    console.log(`Obesidade`)
}

// verificar se o triangulo é equilatero ou escaleno
let lado1 = Number(prompt(`Digite o valor do lado 1: `))
let lado2 = Number(prompt(`Digite o valor do lado 2: `))
let lado3 = Number(prompt(`Digite o valor do lado 3: `))
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)
console.log(`Triangulo Equilatero?${eq} Triangulo Escaleno?${es}`)



let lado4 = Number(prompt(`Digite o valor do lado 1: `))
let lado5 = Number(prompt(`Digite o valor do lado 2: `))
let lado6 = Number(prompt(`Digite o valor do lado 3: `))
if(lado4 == lado5 && lado5 == lado6){
    console.log(`Triangulo Equilatero`)
}else if(lado4 != lado5 && lado5 != lado6 && lado4 != lado6){
    console.log(`Triangulo Escaleno`)
}else{
    console.log(`Triangulo isosceles`)
}



let horas = Number(prompt('total de horas trabalhadas'))
let vendas = Number(prompt('Total de vendas'))
if(vendas > 5000 || horas > 40){
    console.log("Tem direito ao bonus")
}
else{
    console.log("Não tem direito ao bonus")
}
//crie um algoritmo que receba um caractere e verifique se ele é
//uma vocal ou uma consoante
let Letras = ('Digite uma letra')
if (Letras == 'A' ||letra == 'E'|| letra == 'I'||letra == 'O'||letra == 'U'){
    console.log(`A letra é ${Letras} uma vogal`)
}
else{
    console.log(`A letra é ${Letras} uma consoante`)
}
