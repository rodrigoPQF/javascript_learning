console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma funcao ...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)


    this.perigo = '....' // Perigo
}

logThis() // Dentro da funcao o this n aponta para export
