function gerarNumerosEntre(min, max) {
    if(min > max) [max, min] = [min, max]


    return new Promise(function (resolve, reject) {
        const fator = (max - min + 1)
        const aleatorio = parseInt(Math.random() * fator) + min
        resolve(aleatorio)
    })
}

gerarNumerosEntre(10, 100)
    .then(num => num * 10)
    .then(numX10 => `O numero multiplicado foi ${numX10}`)
    .then(console.log)