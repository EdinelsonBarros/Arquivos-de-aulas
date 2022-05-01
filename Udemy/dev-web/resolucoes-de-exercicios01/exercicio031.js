function negativos (numeros){
    let negativos = []
    let qdtnegat = 0
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0){
            negativos.push(numeros[i])
            qdtnegat++
        }
    }
    console.log(`Temos ${qdtnegat} números negativos, são eles ${negativos}`)
}

vetores = [-3, -5, 4, 10, -7, -13]
negativos(vetores)