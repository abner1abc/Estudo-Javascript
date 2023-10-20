/* para testar o codigo a var operacao deve ser : var operacao = prompt ("Qual a operação deseja realizar ? (Digite + ou - ou * ou /)"); */

var operacao = '+';

if(operacao == '+'){
    alert('adicao');
} else if(operacao =='-'){
    alert('subtracao');
} else if(operacao =='*'){
    alert('multiplicacao');
} else if(operacao == '/'){
    alert('divisao');
} else{
    alert('Operacao não definida');
}

/*

switch(operacao){
    case '+':
        alert('adicao');
        break;
    case '-':
        alert('subtracao');
        break;
    case '*':
        alert('multiplicacao');
        break;
    case '/':
        alert('divisao');
        break;
    default:
        alert('Operacao nao definida');
        break
}

*/