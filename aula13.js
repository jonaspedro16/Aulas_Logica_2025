//declarando um novo vetor
//reconheço o que é um vetor pelo uso dos colchetes

let listaVazia =[];

//declarar uma lista de numeros
let numeros =[1, 2, 3, 4, 5, 6];
console.log(numeros);
console.log(numeros[2]);

//declaração de uma lista de strings
let nomes = ["Ana" , "João" , "Maria"];
console.log(nomes);

//declaraçãocde uma lista mista
let listamista = [1, "dois" , true, 2.5]
console.log(listamista)

let listacomlista = [
    ["Coca-cola" , "Cachorro-Quente"],
    [5.0, 10.0]
]
console.log(listacomlista)

//alterando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas);
//a funcao push adiciona um novo elemento no vetor
frutas.push('laranja')
console.log(frutas);
//o spread adiciona um novo elemento no vetor
frutas = [...frutas, 'banana']
console.log(frutas);

//A funcao splice adiciona um novo item em uma posição
//especifica a partir de um valor no indice
frutas.splice(2, 0, 'Morango')
console.log(frutas);

//Excluindo item na lista
frutas.splice(3,1) // Excluindo item pelo indice
console.log(frutas)
frutas.shift() //excluindo primeiro item da lista
frutas.pop() //excluir ultimo item da lista
console.log(frutas)

//Acessar os itens da lista
console.log(frutas[3]);//acesso a partir uma posição especifica
console.log(frutas.slice(0,4))//posição de 0 a 4
console.log(frutas.slice(1))//a partir da posi 1
console.log(frutas.slice(-1))//mostra os itens do fim para o inicio
console.log(frutas.length);//total de itens na lista

//ordenar itens da lista
console.log(frutas);
frutas.sort()//ordenar a lista de forma crescente
console.log(frutas);
frutas.reverse()//ordenando de forma decrescente
console.log(frutas);

