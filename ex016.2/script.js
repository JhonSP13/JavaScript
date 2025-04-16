function gerar() {
    var num = document.getElementById('num')
    var visor = document.getElementById('visor')
    var mult = 0
    var n = Number(num.value)
    var calc = n * mult
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else{
        visor.innerHTML = ''
        while(mult <= 10){
            let item = document.createElement('option')
            item.text = `${n} x ${mult} = ${n * mult}`
            item.value = `visor${mult}`
            visor.appendChild(item)
            mult++
        }
    }
    
}