//tipos de triangulos
//equilatero: tres lados iguales
//isósceles: dos lados iguales
//escaleno: tres lados distintos

function pedirNumero() {//método para pedir un valor y verificar si el valor introducido es un numero
    let numero=prompt("Introduce el valor para un lado del triangúlo");
    while (isNaN(numero)) {//volver a pedir el valor si el usuario no ha introducido un número
        numero=prompt("Recuerda que el valor introducido solo puede ser numero");
    }
    return Number(numero);//Convertimos el valor a numero para que este devuelva un numero
}
function contarTriangulos(){
    let contadorIsosceles=0;//varibale para controlar cuantos iscosles hay
    let contadorEquilatero=0;//variable para controlar cuantos equilatero hay
    let contadorEscaleno=0;//variable para controlar cuantos escalenos hay
    let mostrarTipos="";//variable para mostrar la clasificacion
    let triangulo1=[3];//declaramos triangulo1
    alert("Vamos a pedir los valores de lado para el triangulo1");//avisamos de que triangulo se van a pedir datos
    for (let i = 0; i< 3; i++) {//inicializamos el primer triangulo
        triangulo1[i]=pedirNumero();//llamamos al metodo pedirNumero 
    }
    if (triangulo1[0]===triangulo1[1]) {//Comparamos el lado 1 con el 2
        if (triangulo1[0]===triangulo1[2]) {//si estos dos con iguales lo comparamos con el 3
            contadorEquilatero++;//añadimos al contador como que hay un equilatero
            mostrarTipos=mostrarTipos+"El triangulo1 es equilatero - ";
        }else{//si el tercero es diferente lo contamos como isosceles
            contadorIsosceles++;//añadimos un triangulos isosceles
            mostrarTipos=mostrarTipos+"El triangulo1 es isosceles - ";
        }
    }else if(triangulo1[0]===triangulo1[2]){//si el 1 y el 2 son distintos comparamos el 1 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo1 es isosceles - ";
    }else if(triangulo1[1]===triangulo1[2]){//si ademas el 1 y el 3 son distintos comparamos el 2 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo1 es isosceles - ";
    }else{
        contadorEscaleno++;//añadimos un triangulo escaleno
        mostrarTipos=mostrarTipos+"El triangulo1 es escaleno - ";
    }
    alert("Vamos a pedir los valores d elado para el triangulo2");//avisamos de que triangulo se van a pedir datos
    let triangulo2=[3];//declaramos triangulo2
    for (let i = 0; i< 3; i++) {//inicializamos el primer triangulo
        triangulo2[i]=pedirNumero();//llamamos al metodo pedirNumero 
    }
    if (triangulo2[0]===triangulo2[1]) {//Comparamos el lado 1 con el 2
        if (triangulo2[0]===triangulo2[2]) {//si estos dos con iguales lo comparamos con el 3
            contadorEquilatero++;//añadimos al contador como que hay un equilatero
            mostrarTipos=mostrarTipos+"El triangulo2 es equilatero - ";
        }else{//si el tercero es diferente lo contamos como isosceles
            contadorIsosceles++;//añadimos un triangulos isosceles
            mostrarTipos=mostrarTipos+"El triangulo2 es isosceles - ";
        }
    }else if(triangulo2[0]===triangulo2[2]){//si el 1 y el 2 son distintos comparamos el 1 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo2 es isosceles - ";
    }else if(triangulo2[1]===triangulo2[2]){//si ademas el 1 y el 3 son distintos comparamos el 2 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo2 es isosceles - ";
    }else{
        contadorEscaleno++;//añadimos un triangulo escaleno
        mostrarTipos=mostrarTipos+"El triangulo2 es escaleno - ";
    }
        alert("Vamos a pedir los valores de lado para el triangulo3");//avisamos de que triangulo se van a pedir datos
    let triangulo3=[3];//declaramos triangulo3
    for (let i = 0; i< 3; i++) {//inicializamos el primer triangulo
        triangulo3[i]=pedirNumero();//llamamos al metodo pedirNumero 
    }
    if (triangulo3[0]===triangulo3[1]) {//Comparamos el lado 1 con el 2
        if (triangulo3[0]===triangulo3[2]) {//si estos dos con iguales lo comparamos con el 3
            contadorEquilatero++;//añadimos al contador como que hay un equilatero
            mostrarTipos=mostrarTipos+"El triangulo3 es equilatero - ";
        }else{//si el tercero es diferente lo contamos como isosceles
            contadorIsosceles++;//añadimos un triangulos isosceles
            mostrarTipos=mostrarTipos+"El triangulo3 es isosceles - ";
        }
    }else if(triangulo3[0]===triangulo3[2]){//si el 1 y el 2 son distintos comparamos el 1 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo3 es isosceles - ";
    }else if(triangulo3[1]===triangulo3[2]){//si ademas el 1 y el 3 son distintos comparamos el 2 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo3 es isosceles - ";
    }else{
        contadorEscaleno++;//añadimos un triangulo escaleno
        mostrarTipos=mostrarTipos+"El triangulo3 es escaleno - ";
    }
    alert("Vamos a pedir los valores de lado para el triangulo4");//avisamos de que triangulo se van a pedir datos
    let triangulo4=[3];//declaramos triangulo4
    for (let i = 0; i< 3; i++) {//inicializamos el primer triangulo
        triangulo4[i]=pedirNumero();//llamamos al metodo pedirNumero 
    }
    if (triangulo4[0]===triangulo4[1]) {//Comparamos el lado 1 con el 2
        if (triangulo4[0]===triangulo4[2]) {//si estos dos con iguales lo comparamos con el 3
            contadorEquilatero++;//añadimos al contador como que hay un equilatero
            mostrarTipos=mostrarTipos+"El triangulo4 es equilatero - ";
        }else{//si el tercero es diferente lo contamos como isosceles
            contadorIsosceles++;//añadimos un triangulos isosceles
            mostrarTipos=mostrarTipos+"El triangulo4 es isosceles - ";
        }
    }else if(triangulo4[0]===triangulo4[2]){//si el 1 y el 2 son distintos comparamos el 1 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo4 es isosceles - ";
    }else if(triangulo4[1]===triangulo4[2]){//si ademas el 1 y el 3 son distintos comparamos el 2 y el 3
        contadorIsosceles++;//añadimos un triangulos isosceles
        mostrarTipos=mostrarTipos+"El triangulo4 es isosceles - ";
    }else{
        contadorEscaleno++;//añadimos un triangulo escaleno
        mostrarTipos=mostrarTipos+"El triangulo4 es escaleno - ";
    }

    alert(mostrarTipos);//mostramos de que tipo es cada triangulo
    alert("Hay "+contadorEquilatero+" equilateros, "+contadorIsosceles+" isosceles y "+contadorEscaleno+" escalenos" );//cantidad de triangulos de cada tipo
    menor(contadorEquilatero,contadorIsosceles,contadorEscaleno);//llamada a metodo de comparacion
}
function menor(contadorEquilatero,contadorIsosceles,contadorEscaleno) {
        if (contadorEquilatero<contadorIsosceles) {
            if (contadorEscaleno<contadorIsosceles) {
                alert("Los triangulos con menos cantidad son los escalenos")
            }else{
                alert("Los triangulos con menos cantidad con los isosceles")
            }
        }else if(contadorEscaleno>contadorEquilatero){
            if (contadorEscaleno>contadorIsosceles) {
                alert("Los triangulos con menos cantidad son los equilateros")
            }
        }
}