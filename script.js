
let resultado = document.getElementById('divResultado')

function somarDigitos(digitos){ 
    digitos = digitos.toString()
    let numero = 0

    for(i=0; i<digitos.length; i++){
        if(digitos[i] != '-') numero += Number(digitos[i])
    }

    while(numero > 9){
        let temp = numero.toString()
        numero = 0
        for(i=0; i<temp.length; i++){
            numero += Number(temp[i])
        }
    }

    return numero

}

function calcularAnoMacro(diaPessoa, mesPessoa){
    let dataAtual = new Date()
    let dia = dataAtual.getDate()
    let mes = dataAtual.getMonth() + 1
    let ano = dataAtual.getFullYear()

    let anoMacro = somarDigitos(ano)

    console.log('anoMacro: ' + anoMacro);
    if(mesPessoa > mes || (mesPessoa==mes && diaPessoa>dia)){
        anoMacro--
    }
    console.log('anoMacro--: ' + anoMacro);
    
    return anoMacro
}

function calcularAnoPessoal(){


    let data = document.getElementById('inpDataNasc').value
    let diaPessoa = Number(data[8]+data[9])
    let mesPessoa = Number(data[5]+data[6])
    
    let anoPessoal = 0
    anoPessoal = somarDigitos(diaPessoa + mesPessoa + calcularAnoMacro(diaPessoa,mesPessoa))

    console.log(anoPessoal);

    resultado.innerHTML = `Seu ano pessoal é ${anoPessoal}`

}

function lerEnter(e){
    if(e.key == 'Enter'){
        calcularAnoPessoal()
    }
}

document.getElementById('inpDataNasc').onkeyup = lerEnter

