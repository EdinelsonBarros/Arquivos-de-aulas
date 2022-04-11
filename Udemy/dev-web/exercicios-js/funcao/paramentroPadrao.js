// estrategeia 1 para gerar valor padrão
function soma1(a, b, c) {
    a=a || 1
    b=b || 1
    c=c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0)) // for setado um valor padrão e você tentar colar '0' os paramentros não receberão '0'.

// estrategia 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1 // se 'a' for diferente de undefined 'a' recebe 'a' se 'a' for undefined 'a' recebe '1'
    b = 1 in arguments ? b : 1 // em 'arguments' existe um valor de indice '1' se exite asuma o valor de 'b' se não asuma o valor de '1'
    c = isNaN(c) ? 1:c // está e a melhor para números
    return a + b + c
}

console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))

// valor padrão do es2015
function soma3( a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))