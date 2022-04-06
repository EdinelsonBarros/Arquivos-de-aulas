for (let i = 0; i < 10; i++) {
    console.log(i)
}
console.log('i=', i) // a variável i não será impressa nesta linha linha, pois let tem escopo global, função e bloco. Neste caso ela está dentro de uma função estando assim so disponível para a função. O mesmo não acontece para var.