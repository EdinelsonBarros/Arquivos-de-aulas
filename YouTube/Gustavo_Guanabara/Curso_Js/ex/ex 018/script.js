function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab') // Colete o dado e coleque dentro da variavel "tab"
    if (num.value.length == 0) { // Se o valor de "num" for igual a "0" mostre a mensagem...
        alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) // É necessário converter "num" em number para fazer contas.
        let c = 1
        tab.innerHTML = '' // limpa a tabela quando uma nova tabuada é inserida.
        while (c <= 10) { // Enquanto "c" for menor ou igual a 10 execute o código abaixo.
            let item = document.createElement('option') // option criado dinâmicamente em JS
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`// value é importante para PHP
            tab.appendChild(item) // adicionar intem 
            c++
        }
    }
    
} 