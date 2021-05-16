const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao) // Tirar o this da erro

    }
}

pessoa.falar()

const falar = pessoa.falar
falar() // conflito entre paradigmas: funcional e Objeto

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

const falar2 = pessoa.falar
falar2()
