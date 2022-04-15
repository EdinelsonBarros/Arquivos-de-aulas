function categoriasDosTriangulos (lado1, lado2, lado3) {
    if (lado1 == lado2 && lado1 == lado3) {
        console.log('Este é um triângulo Equilátero')
    } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
        console.log('Este é um triângulo Isóceles')
    } else {
        console.log('Este é um triângulo Escaleno')
    }
}

categoriasDosTriangulos(1, 1, 1)
categoriasDosTriangulos(1, 2, 1)
categoriasDosTriangulos(1, 2, 3)