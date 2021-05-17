const carrinho = [
    '{ "nome" : "borracha", "preco": 3.45}',
    '{ "nome" : "caderno", "preco": 12.45}',
    '{ "nome" : "kit de Lapis", "preco": 41.45}',
    '{ "nome" : "Caneta", "preco": 1.00}',
    
]

//retornar um array com precos

const deJson = e => JSON.parse(e)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(deJson).map(apenasPreco)
console.log(resultado)