
const primeiroElemento =  valor => valor[0]
const posicao3 = valor => valor[3]


let p = new Promise(function(resolve){
    resolve(['Edinelson', 'Lidia', 'Jordana', 'Mateus'])
})
    .then(primeiroElemento)
    .then(posicao3)
    .then(letra => letra.toUpperCase())
    .then(console.log)