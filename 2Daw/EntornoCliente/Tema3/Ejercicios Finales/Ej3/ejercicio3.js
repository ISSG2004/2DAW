var cadena="Hola mundo";
var palabra="juan";
function ultimaPosicion() {
    if (cadena.lastIndexOf(palabra)===-1) {
        alert("La palabra "+palabra +" no aparece en la cadena")
    } else {
        alert("La palabra "+palabra+" se encuentra en la posicion "+cadena.lastIndexOf(palabra))
    }
    
}