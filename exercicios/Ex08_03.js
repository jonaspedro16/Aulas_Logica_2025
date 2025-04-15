const prompt = require('prompt-sync')()
 let meses = ["janeiro",  "fevereiro", "março", "abril", "maio", "junho", "julho", "Agosto", "Setembro", "Outubro", "Nomvembro", "Dezembro"]
 let letra = 'j'
 for (let mes of meses){
    if(mes.startsWith(letra)){
        console.log(mes)
    }
 }
