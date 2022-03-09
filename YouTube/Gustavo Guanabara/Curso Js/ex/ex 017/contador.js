
function contar() {
    // let substitui o var
    let ini = document.getElementById('txti')//coleta dados do html do seu respctivo id
    let fim = document.getElementById('txtf')//coleta dados do html do seu respctivo id
    let passo = document.getElementById('txtp')//coleta dados do html do seu respctivo id
    let res = document.getElementById('res')//coleta dados do html do seu respctivo id

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        /*se um dos dados for igual a zero ou ficar vazio executa-se
         a mensagem de erro*/
        res.innerHTML = 'Impossível contar'
        } else { // se não
        res.innerHTML = 'Contando: </br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            for(let c = i; c <= f;  c += p)  {
               res.innerHTML += `${c} \u{1F449}`} 
            } 
            
        else {
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`  
                }
            }
        
        
        res.innerHTML += `\u{1F3C1}`// Este é código do emoji da "bandeira". O emoji pra funcionar precisa estar entre crases.
    }
}