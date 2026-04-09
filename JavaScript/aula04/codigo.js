window.alert('Minha primeira mensagem.');
window.confirm('Deseja realmente se livrar da maldição?');
window.prompt('Qual é o seu nome?');
//esses comandos são os mais simples e nao possuem retorno, ou seja, nao guardam o valor digitado pelo usuario. Para isso, precisamos criar uma variavel e atribuir o valor do prompt a ela. Exemplo:
var nome = window.prompt('Qual é o seu nome?');
window.alert('Ola, ' + nome + '! Seja bem-vindo ao curso de JavaScript!');