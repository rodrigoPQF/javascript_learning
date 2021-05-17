const alunos = [
    { nome: 'Joao', nota: 8.4, bolsista: false},
    { nome: 'Maria', nota: 5.4, bolsista: true},
    { nome: 'Pedro', nota: 9.4, bolsista: false },
    { nome: 'Jeca', nota: 8.2, bolsista: true}

]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
},10)


console.log(resultado)


// REDUCE FUNCIONA COM ACUMULADOR E VALOR ATUAL 