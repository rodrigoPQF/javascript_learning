//Com promisses
const http = require('http');


const getTUrma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                }catch(e) {
                    reject(e)
                }
            })
        })
    })
}
/// CALLBACK HEELLLLL
// let nomes = []
// getTUrma('A').then(alunos => {
//     nomes = nomes.concat(alunos.map(a => `A : ${a.nome}`))
//     getTUrma('B').then(alunos => {
//         nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
//         getTUrma('C').then(alunos => {
//             nomes = nomes.concat(alunos.map(a => `C : ${a.nome}`))
//             console.log(nomes)
//         })
//     })
// })


Promise.all([getTUrma('A'), getTUrma('B'), getTUrma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    .catch(e=> console.log(e.message))
