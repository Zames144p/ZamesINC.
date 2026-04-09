/*let num = [5, 8, 2, 9, 3]
console.log(`Nosso vetor é o ${num}`)
num[5] = 6 // adiciona o valor 6 na posição 5 do vetor
console.log(`Nosso vetor é o ${num}`)
num.push(7) // adiciona o valor 7 na última posição do vetor
console.log(`Nosso vetor é o ${num}`)
num.length // mostra quantos elementos tem o vetor 
console.log(`Nosso vetor tem ${num.length} posições`)
num.sort() // ordena o vetor em ordem crescente
console.log(`Nosso vetor é o ${num}`)
*/
let num = [5, 8, 2, 9, 3]
console.log(num)
for(let pos = 0 ; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`) //esse num[pos] é para mostrar o valor do vetor na posição pos, ou seja, num[0] = 5, num[1] = 8, num[2] = 2, num[3] = 9 e num[4] = 3
}