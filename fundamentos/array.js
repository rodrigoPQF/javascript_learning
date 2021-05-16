const valores = [7.7, 8.9, 9.8, 2.3]
console.log(valores[0], valores[3])
console.log(valores[4])


valores[4] = 10
console.log(valores[4])
console.log(valores) //Mostrar array
console.log(valores.length) //Elementos do array

valores.push({id: 3}, false, null, 'teste') //Adicionar valor no array
console.log(valores)

console.log(valores.pop()) //retirar ultimo valor
delete valores[0] //Deletar valor
console.log(valores)

console.log(typeof valores)