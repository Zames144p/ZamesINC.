let num = document.getElementById('num')
let res = document.getElementById('res')
let resultadofinal = document.getElementById('resultadofinal')
let todo = []

function contar() {
    resultadofinal.innerHTML = ''
    todo.sort((a, b) => a - b) // se não colocar um parametro no sort ele ordena os números a partir da quantidade de letras na string.
        let resultado1 = document.createElement('p')
        resultado1.innerHTML = `Ao todo, temos ${todo.length} números cadastrados.`
        resultadofinal.appendChild(resultado1)
        let resultado2 = document.createElement('p')
        resultado2.innerHTML = 'O maior número informado foi ' + todo.at(-1) + '.'
        resultadofinal.appendChild(resultado2)
        let resultado3 = document.createElement('p')
        resultado3.innerHTML = 'O menor numero informado foi ' + todo[0] + '.'
        resultadofinal.appendChild(resultado3)
        let resultado4 = document.createElement('p')
        resultado4.innerHTML = 'Somando todos os valores, temos ' + todo.reduce((a, b) => a + b) + '.'
        resultadofinal.appendChild(resultado4)
        let resultado5 = document.createElement('p')
        resultado5.innerHTML = 'A média dos valores digitados é ' + (todo.reduce((a, b) => a + b) / todo.length) + '.'
        resultadofinal.appendChild(resultado5)
}
function adcionar() {
    if (enumero(num.value) && !tanalist(num.value, todo)) { //se o numero estiver na lista, a função vai retornar true, e ao negar o true, vai execuar o else. Ou seja, se estiver na lista, ele nao executa o if.
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        res.appendChild(item)
        todo.push(Number(num.value))
    }else{
        alert('Valor inválido! Digite um número entre 1 e 100.')
    }
    num.value = '' //depois de adicionar o numero, ele limpa o campo de input.
    num.focus()
}
function enumero(num) {
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}
function tanalist(num, todo){
    if(todo.indexOf(Number(num)) != -1){ //esse indexOf retorna o primeiro elemento do array, então se o numero for 0, ele nao vai ser encontrado.
        //esse if vai verificar se ele não retorna -1, ou seja, se ele encontrar o numero no array, ele vai retornar a posição do numero, e se ele não encontrar, ele vai retornar -1.
        return true
    }else{
        return false
    }
}