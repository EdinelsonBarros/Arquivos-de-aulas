function verificarNumeros(numeros){
    let entre10e20 = []
    let forade1020 = []
    let qdtNoIntervalo = 0
    let qdtForaIntervalo = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] >= 10 && numeros[i] <=20){
            entre10e20.push(numeros[i])
            qdtNoIntervalo++
        } else {
            forade1020.push(numeros[i])
            qdtForaIntervalo++
        }
    }
    console.log(`Temos ${qdtNoIntervalo} números entre 10 e 20, são eles ${entre10e20} e temos ${qdtForaIntervalo} fora do intervalo, são eles ${forade1020}.`)
}

vetores = [1, 3, 4, 6, 9, 10, 13, 15, 16, 18, 20, 25, 28, 31]
verificarNumeros(vetores)