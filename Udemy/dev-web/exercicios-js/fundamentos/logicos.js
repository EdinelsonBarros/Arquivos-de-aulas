function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 
    const compraTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) 
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, compraTv50, comprarTv32, manterSaudavel}
}

console.log('1º', compras(true, true))
console.log('2º', compras(true, false))
console.log('3º', compras(false, true))
console.log('4º', compras(false, false))