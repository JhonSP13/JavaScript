function add() {
    var num = document.getElementById('num')
    var valor = Number(num.value)
    var list = document.getElementById('list')
    if (num.value.length == 0) {
        window.alert('Digite um valor válido entra 0 e 100!')
    }   else if(valor < 0 || valor > 100) {
        window.alert('Digite um número entre 0 e 100!')
    }   else {
        const vals = []
        let i = 0
        vals[i] = valor
        if(vals.indexOf(vals[i]) == -1) {
            window.alert('Esse número ja esta na lista.')
        } else {
            vals[i] = document.createElement('option')
            vals[i].text = `Valor ${valor} adicionado`
            vals[i].value = `${valor}`
            list.appendChild(vals[i])
        }
    }
}