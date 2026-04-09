//Arrays

//São objetos que tem, nativamente, diversos métodos embutidos para realizar diversas operações.

// - São heterogêneos, ou seja, podem conter diversos tipos de dados, como string, number, boolean e ate mesmo outros arrays.

//Não tem tamanho fixo (pode ser alterado a qualquer momento).

//Indices são acessados a partir de numeros como: arry[0], arry[1], etc. O primeiro indice é o 0, ou seja, o indice do ultimo elemento é sempre o tamanho do array - 1.

//acessamos o tamanho do array com a propriedade length: arry.length

//criando um array usando a notação literal

let frutas = ["banana", "maça", "laranja"]

console.log(frutas.length)
//3

//outra maneira seria usando o operador new, constroi um novo objeto por meio da função construtora Array()

let frutasUsandoNew = new Array("banana", "maça", "laranja") //declarando os elementos como argumentos da função construtora

let arrTamanho = new Array(10) //criando um array com 10 posições vazias, dando numeros de posições como argumento da função construtora

console.log(frutasUsandoNew.length)
//3
console.log(arrTamanho.length)
//10