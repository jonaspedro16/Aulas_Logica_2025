let valordolar = 5.00
let valoreuro = 6.00
function converterMoeda(valorReais) {
    let emdolar = valorReais / valordolar;
    let emEuro = valorReais / valoreuro;

    console.log(`Valor em reais: R$${valorReais.tofixed(2)}`);
    console.log(`Convertido para dolar: R$${emdolar.tofixed(2)}`);
    console.log(`Convertido para eurp: R$${emEuro.tofixed(2)}`);
}
