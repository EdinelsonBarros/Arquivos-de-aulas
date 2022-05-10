for (let letra of "Edinelson"){
    console.log(letra)
}

const assuntosEcma = ["Map", "Set", "Promise"]

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assuntos of assuntosEcma){
    console.log(assuntos)
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['Set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}

for (let chave of assuntosMap.keys()) { // imprimindo no console somente as chaves
    console.log(chave)
}

for (let valores of assuntosMap.values()) {
    console.log(valores)
}

for (let [ch, vl] of assuntosMap.entries()){
    console.log(ch, vl)
}