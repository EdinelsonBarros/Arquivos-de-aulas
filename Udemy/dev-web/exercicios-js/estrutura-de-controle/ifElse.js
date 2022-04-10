const imprimirResultadado = function(nota) {
    if(nota >= 7) {
        console.log('Aprovado')
    } else {
        console.log('Reprovado')
    }
}

imprimirResultadado(10)
imprimirResultadado(4)
imprimirResultadado('') // cuidado pois js por ser fracamente tipada, ao colocar algo que não da para fazer comparação (string + numero) o valor retornará falso e o 'else' será executado.