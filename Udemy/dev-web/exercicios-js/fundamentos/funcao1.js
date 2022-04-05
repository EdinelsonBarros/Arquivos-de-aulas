// Função é um bloco de código nomeado. Para que toda vez que eu precisar a função eu chamar por ela

// Função sem retorno
function imprimirSoma(a, b, c) {
    console.log(a+b+c)
}
imprimirSoma(2, 3, 14)
imprimirSoma(2)
imprimirSoma(2, 7, 5,6)
imprimirSoma()

// Função com retorno
function soma (a, b=0) {
    return a+b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma()) 