const alunos = [
    {
        nome: "Daniel",
        nota: 5,
        turma: "1A",
    },
    {
        nome: "Maria",
        nota: 9,
        turma: "1B",
    },
    {
        nome: "Igor",
        nota: 6,
        turma: "1C",
    },
    {
        nome: "Julia",
        nota: 3,
        turma: "2A",
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {
        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5 ));