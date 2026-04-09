function medianotas() {
    var n1 = Number(document.getElementById("x").value);
    var n2 = Number(document.getElementById("y").value);
    var media = (n1 + n2) / 2;
    document.getElementById("resultado").innerHTML = media;
}