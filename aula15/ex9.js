//Atividade 5 slides aula 15

var pergunta = prompt("INFORME UM NÚMERO");
pergunta = parseFloat(pergunta);

if(pergunta >= 350 && pergunta < 500 ){
    document.write("O valor está dentro de 350 e 500");
} else {
    document.write("O valor não está no intervalo");
}