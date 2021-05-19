const fs = require('fs');
const path = require('path');

function lerArquivo(caminho) {
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())

        })
        
    })
}


const caminho = path.join(__dirname, 'dados.txt')

lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final e: ${conteudo}`)
    .then(console.log)