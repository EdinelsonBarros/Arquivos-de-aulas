const carrinho = [
    '{"nome": "Borracha", "preco": 3.45 }',
    '{"nome": "Caderno", "preco": 13.90 }',
    '{"nome": "Kit de Lapis", "preco": 41.22 }',
    '{"nome": "Caneta", "preco": 7.50 }'
]

// Retornar um array apenas com preços

const paraObjeto = json => JSON.parse(json) // Transformando Json em um objeto
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)






/*let precos = carrinho.map(function(preco){
    return preco.pop()
})
console.log(precos)*/
