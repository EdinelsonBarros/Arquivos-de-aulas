// array é um objeto com estruturas especiais
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)
console.log(typeof aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])

// adicinonando elementos em um array

aprovados[3] = 'Paulo' // este é o método mais usado para substituir um elemento no array
aprovados.push('Abia') // este é o método(push) mais usado para adicionar elementos um array
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.lenght)
console.log(aprovados[8] === undefined)


console.log(aprovados)
aprovados.sort() // o 'sort()' organiza o array de forma ordenada
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 1) // o método splice é ultilizado para excluir, substituir e incluir elementos em um array
console.log(aprovados)
aprovados.splice(0, 0, 'Edinelson', 'Lidia')
console.log(aprovados)
console.log(aprovados[0])