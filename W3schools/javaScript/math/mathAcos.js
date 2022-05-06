// o método Math.acos() retorna o arco-seno de um número com um valor entre 0 e PI. Se o parêmetro estiver fora do intervalo -1 a  1, o método retornará NaN
let x = Math.acos(-1)
console.log(x)

function calcularAreaDoCirculo(r){
    let PI = x
    let area = PI * r ** 2
    return area
}

console.log(calcularAreaDoCirculo(15))
