const escola = [{
    nome: 'Tuma M1',
    alunos: [{
        nome: 'Gustava',
        nota: 9.1
    }, {
        nome: 'Ana',
        nota: 4.5
    }],
    },{ 
    nome: 'Turma M2',
    alunos: [{
        nome: 'Luis',
        nota: 4.6
    },{
        nome: 'Jacira',
        nota: 5
    }]
}]

const getNotadoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotadoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([ 9.1, 4.5 ], [ 4.6, 5 ] ))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}


const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)