function add() {
    var num = document.getElementById('num')
    var valor = Number(num.value)
    var list = document.getElementById('list')
    if (num.value.length == 0) {
        window.alert('Digite um valor válido entra 0 e 100!')
    }   else if(valor < 0 || valor > 100) {
        window.alert('Digite um número entre 0 e 100!')
    }   else {
        let n = document.createElement('option')
        n.text = `Valor ${valor} adicionado`
        n.value = `${valor}`
        list.appendChild(n)
    }
}