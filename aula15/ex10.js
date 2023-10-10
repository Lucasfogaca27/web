//ATIVIDADE 06 SLIDE AULA 15

var n1 = prompt("Digite o primeiro número:");
n1 = parseFloat(n1);

var n2 = prompt("Digite o segundo número:");
n2 = parseFloat(n2)

var maior, menor;

if (numero1 > numero2) {
    maior = numero1;
    menor = numero2;
} else if (numero2 > numero1) {
    maior = numero2;
    menor = numero1;
} else {
    
    document.write("Os números são iguais, a diferença é 0.");
}

var diferenca = maior - menor;

document.write("A diferença entre o maior e o menor número é: " + diferenca);
