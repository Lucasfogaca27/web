//ESTRUTURA FOR

var i = 0; 
var resultado = 0;

 for(i; i <=2; i++){

    var notas = prompt("Digite a Nota");
    notas = parseFloat(notas);

    resultado += notas;

    //document.write(i);
 }

     document.write(resultado/3);