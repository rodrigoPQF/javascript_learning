class Pessoa {
    constructor(nome) {
        this.nome = nome

     }

     falar() {
         console.log(`My name is: ${this.nome}`)
     }
}

const p1 = new Pessoa('Rodrigo')
p1.falar()


const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome e ${nome}`)
    }
}

const p2 = criarPessoa('Rodrigao')
p2.falar()