function idade(){
    var data = new Date()
    var anoatual = data.getFullYear()
    var ano = document.getElementById('idadedocaba').value //usa o .value se for um input, se for um select usa o .options[select.selectedIndex].value
    var res = document.getElementById('resultado')
    if(ano == 0){
        window.alert('ERRO! Verifique os dados novamente')
    }else if( Number(ano) > anoatual){
        window.alert('ERRO! Coloque uma data valida')
    } else{
    var fsex = document.getElementsByName('radsex')
    var idade = anoatual - Number(ano)
    var genero = ''
    var foto = document.getElementById('Imagem')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade <= 10){
            //criança
            foto.src = 'menino.png'
            res.innerHTML = 'Detectamos um menino de ' + idade + ' anos.'
        }
        else if(idade > 10 && idade <= 21){
            //jovem
            foto.src = 'jovemhomem.png'
            res.innerHTML = 'Detectamos um jovem de ' + idade + ' anos.'
        }
        else if(idade > 21 && idade <= 60){
            //adulto
            foto.src = 'homemadulto.png'
            res.innerHTML = 'Detectamos um homem adulto de ' + idade + ' anos.'
        }else if(idade > 60){
            //idoso
            foto.src = 'idoso.png'
            res.innerHTML = 'Detectamos um homem idoso de ' + idade + ' anos.'
        }
    }else if(fsex[1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
            //criança
            foto.src = 'menina.png'
            res.innerHTML = 'Detectamos uma menina de ' + idade + ' anos.'
        }
        else if(idade > 10 && idade <= 21){
            //jovem
            foto.src = 'jovemmulher.png'
            res.innerHTML = 'Detectamos uma jovem de ' + idade + ' anos.'
        }
        else if(idade > 21 && idade <= 60){
            //adulto
            foto.src = 'mulheradulta.png'
            res.innerHTML = 'Detectamos uma mulher adulta de ' + idade + ' anos.'
        }else if(idade > 60){
            //idoso
            foto.src = 'idosa.png'
            res.innerHTML = 'Detectamos uma mulher idosa de ' + idade + ' anos.'
        }
        }else if(fsex[0].checked == false && fsex[1].checked == false){
            res.innerHTML = 'Detectamos um ser de ' + idade + ' anos.'
            foto.src = 'alien1.png'}
    }
    res.style.textAlign = 'center'
}

    