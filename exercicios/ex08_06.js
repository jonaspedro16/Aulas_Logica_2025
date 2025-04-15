const prompt = require('prompt-sync')();
let palavra = prompt("Digite uma palavra:");
let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
let qtdvogais = 1;

for (let letra of palavra.toLowerCase() ) {
    if (vogais.includes(letra)){
        qtdvogais++;
    }
}

console.log(`A ${palavra} tem ${qtdvogais} vogais`)