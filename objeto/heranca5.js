console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Coder'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

// String.prototype.toString = function () {
//    return 'Lascou tudo'
// }
// ATENCAOOOOOOOOOOO NAO FACA ISSO 

console.log('Escola Cod3r'.reverse())