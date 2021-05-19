


function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max]
    return new Promise(function (resolve, reject) {
        setTimeout(function() {
            const fator = (max - min + 1)
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)

    })
}


function gerarVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 59, 1000),
        gerarNumerosEntre(1, 59, 4000),
        gerarNumerosEntre(1, 59, 5000),
        gerarNumerosEntre(1, 59, 1000)

    ])
}
console.time('promisee')

gerarVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeLog('promisee')
        console.timeEnd('promisee')
        
    })
