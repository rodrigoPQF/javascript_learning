const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.59, fragil: true},
    { nome: 'Copo de plastico', preco: 1.00, fragil: false},
]

console.log(produtos.filter(function(p){ 
    // Array geralmente e menor do q o array original
    return p.preco > 2400
}))

const precoAlto = e => e.preco > 2000
const isFragil = e => e.fragil == true

console.log(produtos.filter(precoAlto).filter(isFragil))