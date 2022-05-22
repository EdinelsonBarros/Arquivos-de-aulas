function gerarNumerosEntre(min, max, numerosProibidos) {
    if(min > max) {[max, min]  = [min, max]}
    return new Promise((resolve, reject) => {
        const fator = max - min + 1 
        const aleatorio = parseInt(Math.random() * fator)
        if(numerosProibidos.includes(aleatorio)) {
            reject('Número repetido.')
        } else {
            resolve(aleatorio)
        }
        resolve(aleatorio)
    })
}

async function numerosMegaSena(qtNumeros){
    try {
        const numeros = []
    for(let _ of Array(qtNumeros).fill()){
        numeros.push(await gerarNumerosEntre(1, 60, numeros))
    }
    return numeros

    } catch (e){
        throw "Que chato!!!"
    }
    
}
gerarNumerosEntre(1, 7, [1, 2, 4])
    .then(console.log)
    .catch(console.log)

numerosMegaSena(8)
    .then(console.log)
    .catch(console.log)