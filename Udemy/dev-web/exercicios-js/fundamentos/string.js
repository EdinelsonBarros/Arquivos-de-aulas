const escola = "cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1)) // mostra a string a partir da posição indicada (1)
console.log(escola.substring(0, 3)) // mostre a string escola do indice 0 até o indice 3 (não inclui o indice 3)
console.log('Escola '.concat(escola).concat("!")) // a string pode ser chamada diretamente(literal-dado), os números não aceitão a chamda literal e por isso tem que ser armazenados em uma variável

console.log(escola.replace(3, 'e'))

console.log('Ana,Maria, Pedro'.split(','))