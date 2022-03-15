function parimp(n){ // 'n' é o parâmetro
    if (n%2==0) { //ação
        return `par`
    }else {
        return `impar`
    }
}
//let res = parimp(12)
//console.log(`${res}`)// chamada
// toda função em JavaScript só tem um retorno
console.log(parimp(224))