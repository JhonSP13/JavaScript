let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
// A função acima será utilizado a seguir como paramêtro para adicinar junto a 'funtion' logo abaixo, para validar se o número é valido e se o número já esta na lista.

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// A função abaixo adiciona na lista de valores(arrays) e na lista(visual) -> criando um option que será insirido dentro de 'select'; os algoritimos fora da function será executado sempre que adicionar() for executado, limpando o input e o selecionando novamente para uma nova entrada.

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

// Abaixo em fim finalizamos, tratando valores recebidos apresentando informções recebidas acimas.

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p> Sendo eles : [${valores}]. </p>`
        res.innerHTML += `<p> Em ordem crescente : ${valores.sort()} </p>`
        res.innerHTML += `<p> O maior é : ${maior} </p>`
        res.innerHTML += `<p> O menor é : ${menor} </p>`
        res.innerHTML += `<p> A soma de todos o valores é : ${soma} </p>`
        res.innerHTML += `<p> A médias dos valores é : ${media} </p>`

    }
}