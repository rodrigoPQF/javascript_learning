Array.prototype.reduce2 = function(callback, valorInicial) {
    const indiceInicial = valorInicial ? 0 : 1
    let acumulador = valorInicial || this[0]
    for (let i = indiceInicial; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }

    return acumulador

}




const alunos = [
    { nome: 'Joao', nota: 8.4, bolsista: false},
    { nome: 'Maria', nota: 5.4, bolsista: true},
    { nome: 'Pedro', nota: 9.4, bolsista: false },
    { nome: 'Jeca', nota: 8.2, bolsista: true}

]

// Desafio 1: Todos os alunos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas))

// Desafio 2: Algum aluno e bolsista?

const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista))