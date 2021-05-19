

const primeiroElemento = array => array[0]
const primeiraLetra = string => string[0]

const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolve, reject) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
.then(primeiroElemento)
.then(primeiraLetra)
.then(letraMinuscula)
.then(console.log)