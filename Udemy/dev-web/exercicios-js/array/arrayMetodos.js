const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // remove o último elemento de um array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()// remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('HAmilton')
console.log(pilotos)

// splice pode adicionar e remover elementos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // massa quebrou :(
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // através do métodos 'slice' um novo array é gerado a partir do índice indicado entre os parênteses.
 
const algunsPilotos2 = pilotos.slice(1, 4) // gera um novo array entre os índices indicados
console.log(algunsPilotos2)