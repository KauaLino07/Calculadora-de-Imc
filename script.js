function calcularIMC(){
    let peso = Number(document.getElementById ("peso").value)

    let altura = Number(document.getElementById ("altura").value)

    let imc = peso / (altura * altura)

    document.getElementById("retimc").innerHTML = "O IMC É DE: " + imc 
    classificarIMC(imc)
}

function classificarIMC(imc){
    
    let Classificacao
    if(imc < 18.5){
        Classificacao = "ABAIXO DO PESO"
    }
    else if(imc < 24.9){
        Classificacao = "PESO NORMAL"
    }
    else if(imc < 29.9){
        Classificacao = "SOBREPESO"
    }
    else if(imc < 34.9){
        Classificacao = "Obesidade I"
    }
    else if(imc < 39.9){
        Classificacao = "Obesidade II"
    }
    else{
      Classificacao = "Obesidade III"
    }
    document.getElementById("retClassificar").innerHTML = "SUA CLASSIFICAÇÃO É DE: " + Classificacao
}