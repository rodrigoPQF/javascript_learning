function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
        }, segundos * 1000 )
    })
}

falarDepoisDe(3, 'Que legal')
    .then(frase => frase.concat('?!?')) // Then e o resposta do resolve
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) // Catch pega a resposta do reject
