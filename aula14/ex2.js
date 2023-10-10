var n1 = prompt("Digite a Nota 1");
n1 = parseFloat(n1);
var n2 = prompt("Digite a nota 2");
n2 = parseFloat(n2);
var n3 = prompt("Digite a nota 3");
n3 = parseFloat(n3);

var resultado = (n1+n2+n3)/3;

try{

    if(resultado <=7){
        document.write(resultado + "Aprovado");
    }else{
        document.write(resultado + "Reprovado");
    }
} catch(e){
    try{
        document.write();
    } catch(f) {
        document.write(f);
    }
    document.write(e);
} finally{
    document.write("Resultado");
}
console.log(resultado);