const prompt = require('prompt-sync')();

let contador = 1
while(contador <= 40){
    if(contador % 2 == 1){
        console.log(`O ${contador} é impar`)
    }
    contador++;
} 
