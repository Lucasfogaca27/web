// ATIVIDADE 4 SLIDES AULA 15

alert("INFORME SUAS NOTAS");
var nota1 = prompt("Informe sua 1º NOTA ");
nota1 = parseFloat(nota1);

var nota2 = prompt("Informe sua 2º NOTA ")
nota2 = parseFloat(nota2);

var nota3 = prompt("Informe sua 3º NOTA ")
nota3 = parseFloat(nota3);

var media = 0;


var media = ((nota1+nota2+nota3)/3);

if(media>=5){
    alert("Você foi APROVADO!! Sua nota foi " + media)
}else{
    alert("Você foi REPROVADO!! Sua nota foi " + media)
}