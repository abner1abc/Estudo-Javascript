var frutas = ['Laranja','Uva','Pera'];

/* Imprimindo na caixa de diálogo o conteúdo do array 'frutas utilizando o laço 'for' */
for(var i = 0; i < frutas.length; i++){
    alert('Nome da fruta contida no Array:' + frutas[i]);
}

/* Imprimindo na caixa de diálogo o conteúdo do array 'frutas' utilizando o laço 'for/in' */
for(var fruta in frutas) {
    alert('Nome da fruta contida no array:' + frutas[fruta]);
}

/*

// estrutura de repeticao simples
for(var contador = 0; contador < 10; contador ++){
    alert('contador');
}

*/