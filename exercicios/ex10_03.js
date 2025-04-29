let listaDenomes = [];
function adicinarnomes(nome) {
    listaDenomes.push(nome);
    console.log(`Nome "${nome}" adicionado a lista`);

}
function removernomes(nome) {
    let index = listaDenomes.indexOf(nome);
    if (index !== -1){
        listaDenomes.splice(index, 1);
        console.log(`Nome "${nome}" removido da lista`)
    } else {
        console.log(`Nome "${nome}" nao encontrado na lista`)
    }
}
adicinarnomes(oi)
adicinarnomes(tchau)
console.log(listaDenomes)
removernomes(kms)
console.log(listaDenomes)
