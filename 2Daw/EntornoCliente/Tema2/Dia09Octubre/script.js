function ejercicio4() {
    var numero = 6;
    var cadena = "Hola";
    var booleano = true;
    var persona = {
        nombre: "Paco",
        edad: 8,
        altura: 150
        };

    window.alert(typeof numero);
    window.alert(typeof cadena);
    window.alert(typeof booleano);
    window.alert(typeof persona);

    //También se puede utilizar para saber el tipo de una expresión
    window.alert(typeof 11660);
    window.alert(typeof "String");
    window.alert(typeof false);
}
function ejercicio5() {
    var numero=20;
    alert(numero)
    numero=40;
    alert(numero);
}
function primerEjemplo6() {
    alert("Has pasado por encima del elemento");
}
function segundoEjemplo6() {
    alert("Has alejado el ratón del elemento");
}
function terceroEjemplo6() {
    alert("Has perdido el foco del elemento");
}
function ejercicio7() {
    alert("Conversion a numero "+Number("2"));
    alert("Conversion a numero "+Number("9 9"))
}
function ejercicio8() {
    var fecha = new Date('2023-1-1');
    var mes = fecha.getMonth()+1;
    var anio = fecha.getFullYear();
    window.alert("Mes " +mes +" Año " +anio);
}
function ejercicio9() {
    var militista=["panadero",456,[0,1,2]];
    alert("militista[2][2] se vería así: "+militista[2][2]);
    for (let i=0; i<2; i++) {
        for(let j=0; j<2; j++) {
            alert(militista[i][j]);
        }
    }
}