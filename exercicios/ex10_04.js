const prompt = require("prompt-sync")();
let saldo = 10000;
function depositar(valor) {
    if (valor > 0) {
        saldo += valor;
        console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso!`);
    } else {
        console.log("Valor inválido para depósito.");
    }
}
function sacar(valor) {
    if (valor > 0 && valor <= saldo) {
        saldo -= valor;
        console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso!`);
    } else {
        console.log("Saque não autorizado. Verifique o valor ou o saldo.");
    }
}
function consultarSaldo() {
    console.log(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
}
let opcao;
while (opcao !== "4") {
    opcao = prompt(
        "=== CAIXA ELETRÔNICO ===\n" +
        "[1] Depositar\n" +
        "[2] Sacar\n" +
        "[3] Consultar saldo\n" +
        "[4] Parar programa\n" +
        "Escolha uma opção:"
    );

    switch (opcao) {
        case "1":
            let valorDeposito = parseFloat(prompt("Digite o valor para depósito:"));
            depositar(valorDeposito);
            break;
        case "2":
            let valorSaque = parseFloat(prompt("Digite o valor para saque:"));
            sacar(valorSaque);
            break;
        case "3":
            consultarSaldo();
            break;
        case "4":
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida. Tente novamente.");
    }
}