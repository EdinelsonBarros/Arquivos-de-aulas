// Map é uma estrutura chave e valor que aceita funções, arrays, objetos, valores booleanos, porém não aceita que a chave se repita. 
const tecnologias = new Map()
tecnologias.set('react', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))

const chavesVariadas = new Map([
    [function () {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chavesVariadas.has(123)) // o método 'has'verifica se o que está dentro de parênteses esta contido no Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)