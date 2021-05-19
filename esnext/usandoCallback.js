//Sem promisse

const http = require('http');


const getTUrma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get(url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}
/// CALLBACK HEELLLLL
let nomes = []
getTUrma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))
    getTUrma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTUrma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C : ${a.nome}`))
            console.log(nomes)
        })
    })
})