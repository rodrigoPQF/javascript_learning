let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Hello'
}

ola = () => 'Hello'

ola = _ => 'Ola' // Possui um param

console.log(ola())

function isEu(vl1, vl2) {
    return vl1 === vl2
}

console.log(false == undefined)


const array = [3,5,5,7,9,9,1,9,2,5,7,9,2,42,12,56,87,34,23,34]
function removeDuplicates(array) {

    let newArray = []

    for (let i = 0; i < array.length; i++) {

            if (array.indexOf(array[i]) === i) {

                    newArray.push(array[i])

            }

    }

    return newArray

}

let num = ''
console.log(num)