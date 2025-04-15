let carros = "Gol;Corsa;Palio;Monza;Fusca,";
let Listacarros = carros.split(",")

Listacarros.pop()
for (let [posicao, carro] of Listacarros.entries()) {  
        console.log(`Posição ${posicao}: ${carro}`);
    }
