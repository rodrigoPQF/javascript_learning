// ES8 : Object.values/ Object.entries
const obj = { a: 1, b: 2, c: 3}
console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))


// Melhorias na notacao literal
const nome = 'Carla'
const pessoa = {
    nome, // Nome : nome
    ola() { // ola : function()
        return 'Hi Guys'
    }
}

console.log(pessoa.nome, pessoa.ola())

// Class

class Animal {}
class Cachorro extends Animal { // Mesma coisa que function cachorro 
    falar() {
        return 'Au au!'
    }
}

console.log(new Cachorro().falar())
