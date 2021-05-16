let comparaComThis = function(param) {
    console.log(this == param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //Nao e global dentro da arroFunction
comparaComThisArrow(module.exports) // Mas ele e um module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) // Arrow Fucntion e mais forte

comparaComThisArrow(module.exports)

// This da funcao arrow e associado ao contexto que foi aplicado 
 