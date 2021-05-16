const notas = [5.2, 5.2, 9.1, 2.2, 7.7]

for (let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 62
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
