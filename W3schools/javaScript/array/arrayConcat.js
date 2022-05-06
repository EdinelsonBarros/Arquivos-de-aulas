let cozinha = ['fogão', 'armario', 'mesa', 'micro-ondas']

let sala = ['sofá', 'televisão', 'mesa de centro', 'raque']

let quarto = ['guarda-roupa', 'cama', 'penteadeira', 'abajur']

let mobilia = cozinha.concat(sala, quarto) // 'concat()' é usado para gerar outro array a partir da concatenação de vários arrays
console.log(mobilia)

// exemplo de media de nota da turma e media de nota da escola

let primeiroAno = {
    Milla:
        [6, 8, 9, 7],
    Luan:
        [9, 6, 7, 8]    
    
    
}

let segundoAno = {
    Andressa:
        [10, 8, 9, 7],
    Rafael:
        [9, 6, 9, 8]    
    
    
}

let terceiroAno = {
    Edinelson:
    [10, 8, 10, 9],
    Lidia:
    [8, 9, 10, 10]

}


let notasPrimeiroAno = []
notasPrimeiroAno = notasPrimeiroAno.concat(primeiroAno.Luan, primeiroAno.Milla)
let notasSegundoAno = []
notasSegundoAno = notasSegundoAno.concat(segundoAno.Andressa, segundoAno.Rafael)
let notasTerceiroAno = []
notasTerceiroAno = notasTerceiroAno.concat(terceiroAno.Edinelson, terceiroAno.Lidia)
let notasDaEscola = []
notasDaEscola = notasDaEscola.concat(notasPrimeiroAno, notasSegundoAno, notasTerceiroAno)

function media(notas){
    let soma = 0
    for(let i= 0; i < notas.length; i++){
        soma += notas[i] 
    }
    return soma / notas.length
}

console.log(`Média do primeiro ano: ${media(notasPrimeiroAno).toFixed}`)

console.log(`Média do segundo ano: ${media(notasSegundoAno).toFixed}`)

console.log(`Média do terceiro ano: ${media(notasTerceiroAno).toFixed(2)}`)

console.log(`Média da escola: ${media(notasDaEscola).toFixed(2)}`)