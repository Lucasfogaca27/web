//Atividade 7 slides aula 15

var numero = prompt("Diga um número, que eu te digo se é divisível por 8")
numero = parseFloat(numero)

    if(numero % 8 === 0){
        document.write(numero + " é divisível por 8.")
    }else{
        document.write(numero + " não é divisível por 8")
    }