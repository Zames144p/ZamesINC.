let amigo ={nome: 'José', sexo: 'M', peso: 85.4, engordar: function(p){
    console.log('Engordou')
    this.peso += p
    }
}
console.log(amigo.peso)