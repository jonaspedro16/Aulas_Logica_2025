//Trabalhando com laços de repetição(while)

//Executar o laço x vezes

let contador = 1;

//Ira repetir enquanto a condição for verdadeira
//Ou seja sera verdade enquanto o contador for menor ou igual a 5
while(contador <=5){
console.log(`o contador é ${contador}`)
  //incrementando a variavel ou seja adicionando valor a ela
  //para que continuar o processo ate que a condução seja atingida
  // contador = contador++;
  //contador = contador + 1;
}

console.log("Fim")
const prompt = require('prompt-sync')()
let senha_senai = '12345'

while(true){
    let senha = prompt("Digite a senha:")
    if(senha_senai ==senha){
        console.log('Você hackeou a senha');
        break
    }else if(senha == 'Desisto'){
        break;
    }
}



//Escreva um programa que fique recebendo o valor de varios produto
//ate que eu digite 0,
//e exiba no final a soma da minha compra e a quantidade de produtos lidos

let soma = 0;
let qtd = 0;
let encerrar = "Sub-Total"
while(encerrar != "Sub-Total"){
    let valor = Number(prompt('Digite o valor do produto(0 para encerrar)'))
    if(valor == 0){
        break;
    }
    else{
        soma = soma + valor;
        qtd++;
    }
    encerrar = prompt("Deseja continuar: (Digite o sub-total)")
}


console.log(`Foram informados ${qtd}`);
//ToFixed para colocar somente dois digitos apos a virgula
console.log(`Valor total dos produtos ${soma.toFixed(2)}`);

let soma2 = 0;
let qtd2 = 0;
let encerrar2 = "Sub-Total"
while(encerrar2 != "Sub-Total"){
    let valor = Number(prompt('Digite o valor do produto(0 para encerrar)'))
    soma2 = soma2 + valor
     
    
    encerrar2 = prompt("Deseja continuar: (Digite o sub-total)")
}
onsole.log(`Foram informados ${qtd2}`);
console.log(`Valor total dos produtos ${soma2.toFixed(2)}`);

//Crie um jogo de adivinhação de numeros
// o computador precisa sortear um numerozs
//Enquanto ele nao acertar continua pedindo um novo numero



console.log("#######################################")
console.log("          jogo da adivinhação          ")
console.log("#######################################")

let nrSorteado = Math.floor(Math.random() * 100 + 1); //gera um numero aleatorio
console.log(nrSorteado);
let acertou = false;

while(!acertou){
    const chute = parseInt(prompt('Digite um numero entre 1 a 100'))
    
    if(chute > nrSorteado){
        console.log(`Você chutou ${chute} tente um numero menor`) 
}
else if (chute < nrSorteado){
    console.log(`Você chutou ${chute} tente um numero maior`)
}
else if (chute == nrSorteado){
    console.log(`Você chutou ${chute}, Parabens voce acertou`)
        acertou = true;
}

}
console.log('FIM')