var numeros = []

numeros [0] = solicitaPrimeiroNumero ();
numeros [1] = solicitaSegundoNumero ();

var resultadoDivisao = divida(numeros);

alert('O resultado da divisão é igual a: ' + resultadoDivisao);

/*
Função javascript
Esta função não recebe parâmetros
*/

function solicitaPrimeiroNumero(){
    var numero1 = prompt("Insira o primeiro número:");

    if(numero1 <= 0){
        alert("O número precisa ser inteiro, positivo e maior que 0");
        //Este tipo de retorno, onde a própria função é chamada novamente.
        return solicitaPrimeiroNumero();
    }else{
        return numero1
    }
}

function solicitaSegundoNumero(){
    var numero2 = prompt("Insira o segundo número:");

    if(numero2 <= 0){
        alert("O número precisa ser inteiro, positivo e maior que 0");
        return solicitaSegundoNumero();
    }else{
        return numero2;
    }
}

/*
Esta função recebe como parâmetro um array - que contem os 2 números que desejamos dividir
*/

function divida(numeros){
    var resultado = 0;
    //Os números a serem divididos são acessados através dos indices do array               
    resultado = numeros[0] / numeros[1];
    return resultado;
}