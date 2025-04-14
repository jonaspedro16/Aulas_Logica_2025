const prompt = require('prompt-sync')()
let mesescomj = ["Janeiro", "junho", "julho" ]
let mesessemj = ["fevereiro", "março", "abril", "maio", "Agosto", "Setembro", "Outubro", "Nomvembro", "Dezembro"]
if(mesescomj.includes(mesescomj.toLowerCase())){
    console.log("é um mes com J")
}else if(mesessemj.includes(mesessemj.toLowerCase())){
    console.log('mes sem J');}