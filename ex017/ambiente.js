let num = [5, 8, 2, 9, 3]

console.log(`Nossos vetores são ${num}`)
console.log(`O primeiro número é ${num[0]}`)
console.log(`temos ${num.length} vetores`)
console.log(`Ordenando fica: ${num.sort()}`)
num.push(1)
console.log(`Depois de ordena acrescente '1' ${num}`)
console.log(`Então o último número é ${num[5]}`)
console.log(`E temos agora ${num.length} vetores`)

/*for(let i = 0; i < num.length; i++) {
    console.log(`${num[i]}`)
} VVVV simplificando.*/

for(let i in num) {
    console.log(`O array - ${i} -, tem o valor: ${num[i]}`)
}

/* se colocarmos por exemplo
'num[6] = 10' -> será criado um vetor mas tambem pode ser feito declaradamente, criando um vetor usando
'num.push(10)' então o numero '10' será adicionado no próximo vetor.
'num.length' quantidade de arrays
'num.sort()' ordem crescente. */

console.log(`Em que vetor está o numero 8 : ${num.indexOf(8)}`)
console.log(`Em que vetor está o numero 10 : ${num.indexOf(10)}`)

/*'indexOf' server para buscar valores dentro de vetores e o valor não existir dentro do vetor ele  irá apresentar o valor '-1', oque pode ser usador para em 'if' para definir se foi identificado o valor ou não.*/
