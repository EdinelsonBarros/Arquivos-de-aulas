let stringPontuacoes = "0, 1, 2, 24, 32"

function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qdtQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontucao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qdtQuebraDeRecords++
        } else if (pontuacoes[i] < menorPontucao) {
            menorPontucao = pontuacoes[i]
            piorJogo = i+1
        }
    }
    return [qdtQuebraDeRecords, piorJogo]
}

console.log(avaliaPontuacoes(stringPontuacoes))

let consumo2021 = "99, 230, 208, 183, 354, 167, 140, 175, 195, 189, 245, 15"

function consumoAnual (consumo2021) {
    //let valoresConsumo = consumo2021.split(",")
    let valoresConsumo = [99, 230, 208, 183, 354, 167, 140, 175, 195, 189, 245, 15]
    let menorValor = valoresConsumo[0]
    let maiorValor = valoresConsumo[0]
    for (let i = 1; i < valoresConsumo.length; i++) {
        if(maiorValor < valoresConsumo[i]) {
            maiorValor = valoresConsumo[i]
        } else if (menorValor > valoresConsumo[i]) {
            menorValor = valoresConsumo[i]
        }
    }
    return [maiorValor, menorValor]
}
console.log(consumoAnual(consumo2021))


