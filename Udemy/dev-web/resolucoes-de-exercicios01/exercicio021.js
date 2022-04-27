function valorAnuidade(idade){
    let anuidade = 100
    if (idade < 10){
        anuidade += 80
    } else if (idade >= 10 && idade <= 30) {
        anuidade += 50
    } else if (idade > 30 && idade <= 60) {
        anuidade += 95
    } else if (idade > 60) {
        anuidade += 130
    }
    return anuidade
}

console.log(valorAnuidade(26))
console.log(valorAnuidade(42))
console.log(valorAnuidade(65))
console.log(valorAnuidade(17))
console.log(valorAnuidade(58))