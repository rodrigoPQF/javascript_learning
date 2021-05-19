// operador ... rest(juntas)/spead(espalhar)
// usar rest com parametros de funcao

// usar spread com objeto
const funcionario = {nome: 'Maria', salario: 12323.89}
const clone = { ativo: true, ...funcionario}
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Maria', 'Gloria']
const grupoFinal = ['Maria', 'Fael', ...grupoA]
console.log(grupoFinal)