//ATIVIDADE 3

var pergunta = prompt("DIGA A 1º LETRA DE CADA ESTADO CIVIL \n - S solteiro - C casado - V viúvo - D divociado");
var solteiro = "s";
var casado = "c";
var viuvo = "v";
var divorciado = "d";

if(pergunta == solteiro){
    document.write("Você é solteiro");
} else if(pergunta == casado){
    document.write("Você é casado");
}  else if(pergunta == viuvo){
    document.write("Você é viúvo");
}  else if(pergunta == divorciado){
    document.write("divorciado");
}  else{
    document.write("A Letra não corresponde");
}