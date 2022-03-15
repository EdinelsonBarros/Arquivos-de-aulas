let num = [5, 8, 2, 9, 3] // essa é a estrutura de vetor (array)
num[5] = 1 // esta é a forma de acrescentar numa posição específica um elemento ao vetor
num.sort()
num.push(10) // acresenta elemento na última posição do vetor
console.log(`Nosso vetor é ${num}`)
console.log(` O vetor tem ${num.length} posições.`)// mostre quantas posições tem o vetor
console.log(`A primeira posição do vetor é ${num[0]}`)
/*for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])
}*/

let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
}else {
    console.log(`O valor 5 está na posição ${pos}`)
}
