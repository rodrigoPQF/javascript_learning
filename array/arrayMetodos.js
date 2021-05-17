const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Massa quebrou o carro! Remove ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona elemento no final do array
console.log(pilotos)

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton') // Adiciona no inicio do array
console.log(pilotos)

// Splice pode adicionar e remover elementos 

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // Antes do indice 2 vai adicionar Bottas e Massa
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Remover 1 elemento do 3
console.log(pilotos)

const algunsPilots1 = pilotos.slice(2) // Gera novo array a partir do indice (2)
console.log(algunsPilots1)

const algunsPilots2 = pilotos.slice(1, 4) // Primeiro elemento e o indice (indice [1 ao 3] o 4 nao entra)
console.log(algunsPilots2)