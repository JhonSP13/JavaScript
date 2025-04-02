function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 6 && hora < 12) {
        //BOM DIA
        img.src = 'imagens/manha.webp'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'imagens/tarde.jpeg'
    } else  if (hora >= 18 && hora < 23) {
        //BOA NOITE
        img.src = 'imagens/crepusculo.jpg'
    } else {
        //BOA MADRUGADA
        img.src = 'imagens/noite.jpeg'
    }

}