const valores = [7, 8 ,9.1, 5]
console.log(valores[0], valores[3])
console.log(valores[4])

// adicionando elementos no array

valores[4] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//excluindo valores do array

console.log(valores.pop()) // retira o último elemento
delete valores[0]
console.log(valores)

console.log(typeof valores)