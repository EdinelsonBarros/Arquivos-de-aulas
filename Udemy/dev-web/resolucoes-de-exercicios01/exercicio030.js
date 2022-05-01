function maiorMenor(vetor){
    let menor = vetor[0]
    let maior = vetor[0]
    for(let i = 0; i < vetor.length; i++){
        if(vetor[i] < menor){
            menor = vetor[i]
        } if (vetor[i] > maior){
            maior = vetor[i]
        }
    }
    console.log(`O menor número é ${menor} e o maior numero é ${maior}`)
}

vetor = [5, 8, 10, 34, 52, 43, ]
maiorMenor(vetor)