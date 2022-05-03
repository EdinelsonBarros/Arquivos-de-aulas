function media(numeros){
    soma = 0
    for(let i = 0; i<numeros.length; i++){
        soma += numeros[i]
    }
    return soma / numeros.length 
} 
let numeros = [1, 2, 3, 50, 23, 12, 1, 3, 0, 1]
console.log(media(numeros))