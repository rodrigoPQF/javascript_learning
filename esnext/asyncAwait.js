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

// Recurso do ES8
// Objetivo de simplifcar o uso de promisses...
let obterAlunos = async () => {
    const turmaA = await getTUrma('A')
    const turmaB = await getTUrma('B')
    const turmaC = await getTUrma('C')
    return [].concat(turmaA, turmaB, turmaC)
} // retorna o AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))