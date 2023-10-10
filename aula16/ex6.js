// ATIVIDADE 3 SLIDES AULA 16

var i = 0;
var resultado = 1;

for(i; i <=4; i++){
    
    var num = prompt("Diga um número");
    num = parseFloat(num);
    resultado *= num;
}   

    document.write(resultado);
