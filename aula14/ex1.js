var nome = "Senac";
var cpf = '82.32.222';
var n1 = 10.4;
var telefone = prompt("Digite seu Nome");
var n2 = prompt("Digite seu Número");
n2 = parseInt(n2);
var n3 = prompt("Digite um Número");
n3 = parseInt(n3);

var resultado = (n2+n3);
//comando de saída JS
//alert(nome + cpf);

//comando de saída do JS para HTML
document.write(nome + "<br>" +cpf + "<br>" +n1 + "<br>" + telefone + "<br>" + n2+ "<br>" + n3 + "<br>" );

document.write(resultado);


