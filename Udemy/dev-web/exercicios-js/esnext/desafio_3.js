const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

function lerArquivos(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(_, conteudo) {
            resolve(conteudo.toString())
        })
    })
}

lerArquivos(caminho)
    //.then(conteudo => console.log(conteudo))
    .then(conteudo => conteudo.split('\n'))
    //.then(linhas => console.log(linhas.length))
    .then(conteudo => console.log(conteudo[2]))