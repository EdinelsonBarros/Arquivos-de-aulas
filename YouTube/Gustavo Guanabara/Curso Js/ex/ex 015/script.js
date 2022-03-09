function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number (fano.value) > ano)
   { window.alert('[ERRO] Verifique os dados e tente novamente!')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement ('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked){
      gênero = "homem"
        if (idade >= 0 && idade <10) {
          // menino
          img.setAttribute('src', 'garotinho.jpg')
        } else if (idade < 21) {
          // rapaz
          img.setAttribute('src', 'jovenhomem.jpg')
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'homemadulto.jpg')
        } else {
          // idoso
          img.setAttribute('src', 'idoso.jpg')
        }
    }else if (fsex[1].checked) {
      gênero = "mulher"
        if (idade >= 0 && idade <10) {
          // menina
          img.setAttribute('src', 'garotinha.jpg')
        } else if (idade <21) {
          //moça
          img.setAttribute('src', 'jovenmulher.jpg')
        } else if (idade < 50) {
          // adulto
          img.setAttribute('src', 'mulheradulta.jpg')
        } else {
          // idosa
          img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign= 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)
  }


}