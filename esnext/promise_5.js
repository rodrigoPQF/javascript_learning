function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if (Math.random() < chanceErro) {
            reject('Ocorreu um Erro!')
        }else {
            resolve(valor)
        }
    })
}

funcionarOuNao('Testando ...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro esp.: ${err}`)
        )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!!'))