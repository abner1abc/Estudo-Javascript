var numero1 = prompt("Insira o primeiro número:");
var numero2 = prompt("Insira o segundo número:");

var resultadoDivisao = divida(numero1, numero2);

alert('O resultado da divisão é igual a:' + resultadoDivisao);

function divida(numero1, numero2){
    var resultado = 0;
    resultado = numero1 / numero2;
    return resultado;
}