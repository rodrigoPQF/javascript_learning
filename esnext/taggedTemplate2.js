
function rea(partes, ...valores) {
    const resultado = []
    valores.forEach((valores, indice) => {
        valor = isNaN(valores) ? valor : `R$${valores.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}

const preco = 29.99
const precoParcela = 11
console.log(rea `1x de ${preco} ou 3x de ${precoParcela}. `)