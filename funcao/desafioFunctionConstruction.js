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


function CPessoa(nome) {

    this.nome = nome

    this.falar = function() {
        console.log(`My name is: ${this.nome}`)
        
    }

}

const p2 = new CPessoa('Rod')
p2.falar()