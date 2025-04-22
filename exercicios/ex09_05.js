function calcular(numero1, numero2, operador) {
    let resultado;

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                return console.log("Erro: divisão por zero.");
            }
            break;
        case "**":
            resultado = numero1 ** numero2;
            break;
        default:
            return console.log("Operador inválido.");
    }

    console.log(`${numero1} ${operador} ${numero2} = ${resultado}`);
}
calcular(2, 5, "*")
calcular(10, 3, "+")
calcular(4, 2, "**")