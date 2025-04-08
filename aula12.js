//criando nosso primeiro FOR
const prompt = require('prompt-sync')()
for (let contador = 0; contador < 100; contador++){
    console.log(contador)
}

// Entregar os notebooks por ordem
console.log('Entregando Notebooks')

for(let nr = 1; nr <= 32; nr++ ){
    let nome = prompt(`Quem é o numero ${nr}`)
    let presente = prompt(`O (A) ${nome} veio para escola? (S ou N )`)

    if(presente == "S"){
        console.log(`Pegar notebook ${nr}`);
        console.log(`Pegar mouse ${nr}`);
        console.log(`Pegar fonte ${nr}`);
        console.log(`Levar notebook até ${nr}`);
    }
    else{
        console.log(`Não pegar notebook ${nr}`);
    }
}