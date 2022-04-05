// null
// undefind

// variável não armazena o conteúdo do objeto, ela guarda o endereço do obejto na memória

const a = {nome: 'Teste'}
console.log(a)

b=a // neste caso não está sendo colocado dentro de "b" o conteudo(objeto) e sim o endereço na memória para o obejeto, portanto quando fizermos um alteração em "b" estaremos aterando a variál "a". Esta é a atribuição por referência.
console.log(b)
b.name = 'Opa'
console.log(a)

// quando eu trabalho tipos primitivos, números são um deles, a tribuição acontece de forma diferente. Neste caso a variável armazena o conteudo e não endereço.

c = 3
c++
d=c
d++
console.log(c)
console.log(d)

let valor // não inicializada
console.log(valor)
valor = null // ausência de valor
console.log(valor) // quando quiser zerar valor de variável use null

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.5
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(produto.preco)
console.log(!!produto.preco)
console.log(produto)

// deletando objetos da variável
delete produto.preco
console.log(produto)

produto.preco = null // preco preço
console.log(!!produto.preco)
console.log(produto)