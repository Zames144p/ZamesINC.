function idade(){
    var ano = document.getElementById("idadedocaba").value
    var data = new Date()
    var anoatual = data.getFullYear()
    var idade = anoatual - ano
    var genero = document.querySelector('input[name="radsex"]:checked').value
    var resultado = document.getElementById("resultado")
    var Imagem = document.getElementById("Imagem")
    if(idade < 18 && genero == "masculino"){
        resultado.innerHTML = `Você é um menino de ${idade} anos.`
        Imagem.src = "menino.png"
    }else if(idade < 18 && genero == "feminino"){
        resultado.innerHTML = `Você é uma menina de ${idade} anos.`
        Imagem.src = "menina.png"
    }else if(idade >= 18 && idade < 60 && genero == "masculino"){
        resultado.innerHTML = `Você é um homem de ${idade} anos.`
        Imagem.src = "homem.png"
    }else if(idade >= 18 && idade < 60 && genero == "feminino"){
        resultado.innerHTML = `Você é uma mulher de ${idade} anos.`
        Imagem.src = "mulher.png"
    }else if (idade >= 60 && genero == "masculino"){
        resultado.innerHTML = `Você é um idoso de ${idade} anos.`
        Imagem.src = "idoso.png"
    }else if (idade >= 60 && genero == "feminino"){
        resultado.innerHTML = `Você é uma idosa de ${idade} anos.`
        Imagem.src = "idosa.png"
    }else{
        resultado.innerHTML = "Você é um alienígena de " + idade + " anos."
    }
}