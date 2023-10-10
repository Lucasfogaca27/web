//Desafio

var valorVenda = prompt("Informe o valor de Venda");
valorVenda = parseFloat(valorVenda);

var pergunta = prompt ("Informe o pagamento: 1 Avista, 2 À Prazo 30, 3 À Prazo 60, 4 À Prazo 90, 5 Débito, 6 Crédito: ");
pergunta = parseInt(pergunta);

var valorF;
valorF = parseFloat(valorF);

switch(pergunta){

    case 1 :

        document.write("À vista ")
        break;
    
    case 2 :
        document.write("À vista " +valorVenda *0.95)
        break;

    case 3 :
        document.write("À vista " +valorVenda )
        break;

    case 4 :
        document.write("À vista " +valorVenda *1.05)
        break;

    case 5 :
        document.write("À vista " +valorVenda * 0.92)
        break;

    case 6 :
        document.write("À vista " +valorVenda *0.93)
        break;    
    default:
        document.write("Caso Inválido");
}
