var n1 = prompt("Digite um Número");
n1 = parseFloat(n1);
var n2 = prompt("Digite um Número");
n2 = parseFloat(n2);

if(n1 > n2){
    document.write(n1 + " É maior que " +n2)
} else if (n2 > n1) {
    document.write(n2 + " É maior que " +n1)
} else {
    document.write(n1 + " É igual a " +n2)
}