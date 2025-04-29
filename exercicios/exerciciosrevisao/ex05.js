const prompt = require('prompt-sync')()
let sexo = (prompt('Digite se é masculino ou feminino'))
if (sexo == 'M'){
    console.log('masculino')
}
else if (sexo == 'F'){
    console.log('Feminino')
}else{
    console.log('Sexo invalido')
}