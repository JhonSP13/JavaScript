function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto} !`
    if (hora >= 6 && hora < 12) {
        msg.innerHTML = `Agora são ${hora}:${minuto} ! Bom Dia.`
        img.src = 'imagens/manha.webp'
        document.body.style.background = '#FCC35D'
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Agora são ${hora}:${minuto} ! Boa Tarde.`
        img.src = 'imagens/tarde.jpeg'
        document.body.style.background = '#5F9B89'
    } else  if (hora >= 18 && hora < 23) {
        msg.innerHTML = `Agora são ${hora}:${minuto} ! Boa Noite.`
        img.src = 'imagens/crepusculo.jpg'
        document.body.style.background = '#063978'
    } else {
        msg.innerHTML = `Agora são ${hora}:${minuto} ! Boa Madrugada.`
        img.src = 'imagens/noite.jpeg'
        document.body.style.background = '#243231'
    }

}