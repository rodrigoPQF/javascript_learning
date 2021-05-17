Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}


const produtos = [
    { nome: 'Notbook', preco: 2499, fragil: true},
    { nome: 'iPad Pro', preco: 4199, fragil: true},
    { nome: 'Copo de vidro', preco: 12.59, fragil: true},
    { nome: 'Copo de plastico', preco: 1.00, fragil: false},
]



const precoAlto = e => e.preco > 2000
const isFragil = e => e.fragil == true

console.log(produtos.filter2(precoAlto).filter2(isFragil))