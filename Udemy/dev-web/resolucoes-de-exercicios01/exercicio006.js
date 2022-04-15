function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log(`
    Juros simpes
        Capital: ${capitalInicial}
        Juros: ${capitalInicial * taxaDeJuros * tempoDeAplicacao}
        Montante: ${capitalInicial + (capitalInicial * taxaDeJuros * tempoDeAplicacao)}
    `)
    
}

jurosSimples(100, 0.05, 24)

function jurosCompostos (capitalInicial, taxaDeJuros, tempoDeAplicacao) {
    console.log(`
    Juros compostos
        Capital: ${capitalInicial}
        Montante: ${capitalInicial * (taxaDeJuros + 1) ** tempoDeAplicacao }
        Juros: ${capitalInicial * (taxaDeJuros + 1) ** tempoDeAplicacao - capitalInicial} 
    
    `)
}
jurosCompostos(100, 0.05, 12)