// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

//Pessoa -> 456 -> {...}
//pessoa = { nome: 'Ana'}

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)

const pessoaConstante = Object.freeze({ nome: 'Joao' }) //OBJETO PARA NUNCA SER MUDADO
console.log(pessoaConstante)
