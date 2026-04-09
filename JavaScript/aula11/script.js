function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('resultado')
    
    
if(inicio.value == 0 || fim.value == 0){
        res.innerHTML = 'Impossível contar!'
        window.alert('ERRO! Faltam dados!')
        return
    } else if(Number(passo.value) <= 0){
        window.alert('ERRO! Passo inválido! Considerando PASSO 1')
        passo.value = 1
    }
if(Number(inicio.value) < Number(fim.value)){
    // Contagem crescente
    res.innerHTML = 'Contando: <br>'
        for (var i = Number(inicio.value); i <= Number(fim.value); i = i+Number(passo.value)){
        res.innerHTML += `${i} \u{1F449}` 
    }
    } else {
        // Contagem regressiva
    res.innerHTML = 'Contando: <br>' // se eu colocar isso antes de executar o if, ele vai limpar o resultado da contagem crescente ou a contagem anterior, caso o usuário queira contar novamente
        for (var i = Number(inicio.value); i >= Number(fim.value); i = i-Number(passo.value)){
        res.innerHTML += `${i} \u{1F449}` 
    }
}
    res.innerHTML += `\u{1F3C1}`
}
