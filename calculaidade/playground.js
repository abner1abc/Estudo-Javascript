function calculaidade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
}

const pessoa1 = {
    nome: "marta",
    idade: 30,
}

const pessoa2 = {
    nome: "benjamin",
    idade: 23,
}

const animal = {
    nome: "bartolomeu",
    idade: 7,
    etnia: "golden",
}

console.log(calculaidade.apply(animal, [16]));