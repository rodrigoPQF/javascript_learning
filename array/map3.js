Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

//this = array.prototype
// return newArray = (const newArray = ad.map())

const carrinho = [
    '{ "nome" : "borracha", "preco": 3.45}',
    '{ "nome" : "caderno", "preco": 12.45}',
    '{ "nome" : "kit de Lapis", "preco": 41.45}',
    '{ "nome" : "Caneta", "preco": 1.00}',
    
]

//retornar um array com precos

const deJson = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(deJson).map2(apenasPreco)
console.log(resultado)