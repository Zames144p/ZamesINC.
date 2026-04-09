
function situaçao(entrada1, entrada2, saida) {
    var m = ler_entrada_calcular_media(entrada1, entrada2);
    document.getElementById(saida).innerHTML = resultado(m);
}

function calcular(entrada1, entrada2, saida) {
    var m = ler_entrada_calcular_media(entrada1, entrada2);
    document.getElementById(saida).innerHTML = m;
}

function ler_entrada_calcular_media(entrada1, entrada2) {
    var x = Number(document.getElementById(entrada1).value);
    var y = Number(document.getElementById(entrada2).value);
    
    return media(x, y);
}

function media(a, b) {
    return (a + b) / 2;
}

function resultado(m) {
    return m >= 7
}
