//DESAFIO 1 AULA 16

var i = parseInt(i);

var resultado = 0.0;

for(var i = 0; i<=7; i++){

    var numero = prompt("Digite um numero");
    numero = parseFloat(numero);

    if(numero > resultado){
        resultado = numero;
    }
}

    document.write("O maior número é: " +resultado); 