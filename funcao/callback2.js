const notas = [8.4, 5.4, 2.3, 9.9 , 3.55, 4.3]

//Sem callback

const notasBaixas = []

for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//Com callback
const notasMenorQue7 = (nota => nota < 7)

const notasBaixas2 = notas.filter(notasMenorQue7)

console.log(notasBaixas2)