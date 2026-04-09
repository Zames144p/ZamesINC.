function contar() {
    let numero = document.getElementById('numero')
    let res = document.getElementById('tabuada')
    if (numero.value == 0) {
        window.alert('ERRO! Digite um número!')
    } else {
        let n = Number(numero.value)
        res.innerHTML = ""
        for(var i = 1; i <= 10; i++){
        let item = document.createElement('option') //cria o elemento option
        item.innerHTML += `${n} x ${i} = ${Number(n) * i} <br>` //modifica o elemento option
        res.appendChild(item) //seleciona o resultado e adiciona um elemento filho option(item)
        }
    }    
}