function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/garotinho.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/menino.webp')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/rapaz.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem.jpg') 
            } else {
                img.setAttribute('src', 'imagens/velho.webp')
            }
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/garotinha.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'imagens/menina.jpg')
            } else if (idade < 25) {
                img.setAttribute('src', 'imagens/moça.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher.webp')
            } else {
                img.setAttribute('src', 'imagens/senhora.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img)
    }
}