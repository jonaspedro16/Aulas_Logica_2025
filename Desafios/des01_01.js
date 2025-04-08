const prompt = require('prompt-sync')()
let temperatura =Number(prompt('Qual a temperatura de hoje'))
if (temperatura < 15){
    console.log('Esta frio')
}
if (temperatura > 15 && temperatura < 25){
    console.log('Esta agradavel')
}
if (temperatura > 26 && temperatura < 35){
    console.log('Esta quente')
}
if (temperatura > 35){
    console.log('Esta um inferno')
}