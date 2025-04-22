function gerarSenha(tamanho) {
    let caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?";
    let senha = "";

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indice];
    }

    console.log(`Senha gerada: ${senha}`);
    return senha;
}

gerarSenha(95)
gerarSenha(24)
