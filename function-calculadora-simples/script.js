var numero1 = prompt ("Insira o primeiro número:");
var numero2 = prompt ("Insira o segundo número:");
var operacao = prompt ("Qual a operação deseja realizar ? (Digite + ou - ou * ou /)");

var resultadoOperacao = 0;

if(operacao == '+')
    resultadoOperacao = soma(numero1, numero2);

if(operacao == '-')
    resultadoOperacao = diminui(numero1, numero2);
    
if(operacao == '*')
    resultadoOperacao = multiplica(numero1, numero2);
    
if(operacao == '/')
    resultadoOperacao = divide(numero1, numero2);
    
alert('O resultado da operação é igual a:' + resultadoOperacao);

function soma(numero1, numero2){
    return parseInt(numero1) + parseInt(numero2);
}

function diminui(numero1, numero2){
    return parseInt(numero1) - parseInt(numero2);
}

function multiplica(numero1, numero2){
    return parseInt(numero1) * parseInt(numero2);
}

function divide(numero1, numero2){
    return parseInt(numero1) / parseInt(numero2);
}