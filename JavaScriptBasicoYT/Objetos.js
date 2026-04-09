//Objetos

//Um objeto é uma coleção de dados relacionados e/ou funcionalizantes (que geralmente consistem em diversas variáveis e funções - que são chamadas propriedades e métodos quando estão dentro de um objeto;metodo para funções e propriedades para variáveis).

//Objetos podem ser inicializandos usando new Objetct(), object.create() ou usando a forma notação literal.

//inicializando um objeto usando a notação literal.

//Objetos = dados organizados por "chave: valor"
//arrays = coleção de itens em sequência
//Obs : numa api de filmes seria basicamente um Array de objetos, onde cada objeto representa um filme, e dentro de cada objeto tem as propriedade do filme, como titulo, diretor, ano.

let objetosVazio = {
    propri1: [],
    metodo1: function(){} //Ficou amarelo pq é um metodo
}


//Como acessar as propriedades e métodos de um objeto?

//Dot notation (notação de ponto)
//Serve para acessar ou declarar uma nova propeidade ou metodo

// Declarando um objeto de forma literal

let dotNotation = {
    propri1: "sou uma propridedade que sera acessada usando o dot notation",
    metodo1: function(){
        return "sou um metodo que sera acessado usando o dot notation"
    }
}
console.log(dotNotation.propri1)
console.log(dotNotation.metodo1())//se não colcoar os () da função, ele vai retornar a referencia da função, e não o valor que ela retorna.

//Como declarar novos elementos 

dotNotation.propri2 = "sou uma nova propriedade declarada usando o dot notation"
dotNotation.metodo2 = () => "sou um novo metodo declarado usando o dot notation"

console.log(dotNotation.propri2)
console.log(dotNotation.metodo2())

// Bracket notation (notação de colchetes)
//Serve para acessar ou declarar uma nova propeidade ou metodo, mas usando colchetes e aspas, o que é útil quando a chave tem caracteres especiais ou espaços.

let bracketNotation = {
    propri1: "sou uma propridedade que sera acessada usando o bracket notation",
    metodo1: function(){  
        return "sou um metodo que sera acessado usando o bracket notation"      
    }
}
console.log(bracketNotation["propri1"])
console.log(bracketNotation["metodo1"]())

bracketNotation["propri1"] = "slaaaaaa n"
console.log(bracketNotation["propri1"])