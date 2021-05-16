const escola = "Cod3r"

console.log(escola.charAt(4)) //Dar letra do indice 4 da string
console.log(escola.charAt(5)) 
console.log(escola.charCodeAt(3)) // Codigo unicode 
console.log(escola.indexOf('3')) // Buscar o valor na string

console.log(escola.substring(1)) // Ir do indice 1 ao final
console.log(escola.substring(0, 3)) // ir do indice 0 ao 3

console.log('Escola '.concat(escola).concat("!")) // Concatenar
console.log(escola.replace(3, 'e')) // Trocar /\d/ (Expressao regex)

console.log('Ana,Maria,Pedro'.split(',')) //Separar , quebrar a string gerando array 